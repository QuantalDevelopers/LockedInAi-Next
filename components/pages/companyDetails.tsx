"use client";

import { useEffect, useMemo, useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, MessageCircle, ThumbsUp, ThumbsDown, Minus, MapPin, Search } from "lucide-react";
import { Navigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useViaParam } from "@/components/affiliate-link";
import AuthModal from "@/components/ui/AuthModal";
import Head from "next/head";
import Image from "next/image";


const queryClient = new QueryClient();

export default function CompanyDetails({ companyId }: { companyId: string }) {
  return (
    <>
      <Head>
        <title>Lockedin Ai - Company Interview Details</title>
        <meta
          name="description"
          content="Explore in-depth interview experiences, company details, and reviews on Lockedin Ai."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.lockedinai.com/companyDetails/${companyId}`} />

        <meta property="og:title" content="Lockedin Ai - Company Interview Details" />
        <meta
          property="og:description"
          content="Explore in-depth interview experiences, company details, and reviews on Lockedin Ai."
        />
        <meta property="og:url" content={`https://www.lockedinai.com/companyDetails/${companyId}`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lockedin Ai - Company Interview Details" />
        <meta
          name="twitter:description"
          content="Explore in-depth interview experiences, company details, and reviews on Lockedin Ai."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Lockedin Ai - Company Interview Details",
              "description":
                "Explore in-depth interview experiences, company details, and reviews on Lockedin Ai.",
              "url": `https://www.lockedinai.com/companyDetails/${companyId}`,
            }),
          }}
        />
      </Head>

      <QueryClientProvider client={queryClient}>
        <CompanyDetailsContent companyId={companyId} />
      </QueryClientProvider>
    </>
  );
}


const CompanyDetailsContent = ({ companyId }: { companyId: string }) => {
  console.log("Company ID received in CompanyDetails:", companyId);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();
      const User = data?.user;
      setUser(User);

      if (!User) {
        const timer = setTimeout(() => {
          setModalOpen(true);
        }, 5000);
        return () => clearTimeout(timer);
      }
    };
    fetchUser();
  }, []);



  const { data: company, isLoading } = useQuery({
    queryKey: ['company', companyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('companies')
        .select('name, description, logo')
        .eq('id', companyId)
        .single();

      if (error) throw error;
      return data;
    },
  });



  const { data: interviews = [] } = useQuery({
    queryKey: ['interviews', companyId],
    queryFn: async () => {
      let query = supabase
        .from('interviews')
        .select(`
          *,
          interview_questions (
            id,
            question,
            answer
          )
        `)
        .eq('company_id', companyId)
        .order('created_at', { ascending: false });

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        query = query.limit(2);
      }

      const { data, error } = await query;
      if (error) throw error;
      console.log("Interview question and answer", data);
      return data || [];
    },
  });



  const getExperienceIcon = (experience: string) => {
    switch (experience.toLowerCase()) {
      case 'positive':
        return <ThumbsUp className="w-4 h-4" />;
      case 'negative':
        return <ThumbsDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return <ThumbsUp className="w-4 h-4" />;
      case 'difficult':
        return <ThumbsDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const filteredInterviews = isSearching && searchTerm
    ? interviews.filter(interview =>
      interview.position.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : interviews;

  const handleSearch = () => {
    setIsSearching(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="md:py-30 flex h-full items-center justify-center px-2 py-20 ">
        <div className="w-full mt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="group relative rounded-xl bg-cyan-950/30 p-5 transition-all duration-300 hover:bg-cyan-900/40">
            <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-6 space-y-4 sm:space-y-0">
              <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-2 sm:mb-0">
                  {company?.logo ? (
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      className="w-12 h-12 object-contain"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold text-xl">
                      {company?.name?.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-[#67E8F9] mb-1">
                    {company?.name}
                  </h1>
                </div>
              </div>
              <Button
                asChild
                variant="default"
                className="w-full sm:w-auto px-4 sm:px-6 h-10 sm:h-12 text-sm sm:text-base transition-colors duration-300 text-white"
                style={{ backgroundColor: "#39C3EF" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2AA3CB"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#39C3EF"}
              >
                <Link href={`/AddReview/${companyId}`}>
                  Add a review
                </Link>
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-100 mb-3">Overview</h2>
                <p className="text-[#A3A3A3] text-sm sm:text-base">{company?.description}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6 mt-3 text-black rounded-xl bg-cyan-950/30 p-5 transition-all duration-300 hover:bg-cyan-900/40">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search job titles"
                  className="w-full pl-10 h-12 text-base bg-transparent border-gray-200 text-white"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setIsSearching(false);
                  }}
                />
              </div>
            </div>
            <Button
              variant="default"
              className="w-full sm:w-auto px-4 sm:px-6 h-12 bg-sky-500 hover:bg-sky-600 text-white"
              onClick={handleSearch}
              style={{ backgroundColor: "#39C3EF" }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2AA3CB"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#39C3EF"}
            >
              Find interviews
            </Button>
          </div>


          <div className="space-y-6">
            {filteredInterviews.map((interview) => (
              <div
                key={interview.id}
                className="group relative rounded-xl bg-cyan-950/30 p-5 transition-all duration-300 hover:bg-cyan-900/40"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                  <div className="w-full mb-4 sm:mb-0">
                    <h2 className="text-xl font-semibold text-[#67E8F9] mb-2">
                      {interview.position}
                    </h2>

                    <div className="flex flex-wrap items-center gap-4 text-gray-100 mb-3">
                      {(interview.job_location || interview.job_country) && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm sm:text-base">
                            {interview.job_location}
                            {interview.job_location && interview.job_country && ", "}
                            {interview.job_country}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <div className="flex items-center gap-2 text-gray-100">
                        <span className="text-sm sm:text-base">
                          {interview.offer === 'Accepted' ? 'Accepted offer' : interview.offer === 'Rejected' ? 'Rejected' : 'No offer'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-100">
                        {getExperienceIcon(interview.experience)}
                        <span className="text-sm sm:text-base">{interview.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-100">
                        {getDifficultyIcon(interview.difficulty)}
                        <span className="text-sm sm:text-base">{interview.difficulty} interview</span>
                      </div>
                    </div>

                    <span className="text-gray-100 text-xs sm:text-sm block sm:inline">
                      {new Date(interview.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-medium text-white mb-2 text-base sm:text-lg">Application</h3>
                    <p className="text-[#A3A3A3] text-sm sm:text-base">{interview.application_source}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-white mb-2 text-base sm:text-lg">Interview</h3>
                    <p className="text-[#A3A3A3] text-sm sm:text-base">{interview.interview_process}</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-white mb-2 text-base sm:text-lg">AI Usage</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">Does this interview allow AI?</p>
                        <ul className="list-disc pl-6 mt-1">
                          <li className="text-[#A3A3A3] text-sm sm:text-base">
                            {(interview as any).interview_ai_allow || "Not specified"}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">
                          Does this company like candidates to use AI in their job?
                        </p>
                        <ul className="list-disc pl-6 mt-1">
                          <li className="text-[#A3A3A3] text-sm sm:text-base">
                            {(interview as any).job_ai_allow || "Not specified"}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">
                          Which AI tool did you use?
                        </p>
                        <ul className="list-disc pl-6 mt-1">
                          <li className="text-[#A3A3A3] text-sm sm:text-base">
                            {(interview as any).ai_interview_assisted_tool_used || "None"}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {interview.interview_questions && interview.interview_questions.length > 0 && (
                    <div>
                      <h3 className="font-medium text-white mb-2 text-base sm:text-lg">
                        Interview questions [{interview.interview_questions.length}]
                      </h3>
                      <div className="space-y-4">
                        {interview.interview_questions.map((q, index) => (
                          <div key={q.id}>
                            <p className="text-[#A3A3A3] text-sm sm:text-base">
                              {index + 1}. {q.question}
                            </p>
                            {q.answer && (
                              <ul className="mt-2 ml-8 list-disc text-[#A3A3A3] text-sm sm:text-base">
                                <li>{q.answer}</li>
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        redirectUrl={`/companyDetails/${companyId}`}
      />
    </>
  );
};


