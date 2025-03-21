"use client";

import { useEffect, useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, MessageCircle, ThumbsUp, ThumbsDown, Minus, MapPin, Search } from "lucide-react";
import { Navigate } from "react-router-dom";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useViaParam } from "@/components/affiliate-link";

const queryClient = new QueryClient();

export default function CompanyDetails({ companyId }: { companyId: string }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CompanyDetailsContent companyId={companyId} />
    </QueryClientProvider>
  );
}

const CompanyDetailsContent = ({ companyId }: { companyId: string }) => {
  console.log("Company ID received in CompanyDetails:", companyId);

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  
  // Update authentication approach later
  // Removing the useEffect with redirects to Clerk sign-in

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
      const { data, error } = await supabase
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

  return (
    <div className="md:py-40 flex h-full items-center justify-center px-2 py-20 ">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div  className="p-6 rounded-lg border border-sky-200 transition-all duration-200 hover:shadow-md hover:border-sky-300"
  style={{ backgroundColor: "rgb(30, 30, 30)"}}>
          <div className="flex items-start justify-between mb-6 ">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center ">
                {company?.logo ? (
                  <img
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
                <h1 className="text-2xl font-bold text-gray-100 mb-1">
                  {company?.name}
                </h1>
              </div>
            </div>
            <Button 
              asChild
              variant="default"
              className="px-6 h-12 bg-sky-500 hover:bg-sky-600 text-base"
            >
              <Link href={`/AddReview/${companyId}`}>
                Add a review
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-100 mb-3">Overview</h2>
              <p className="text-gray-100">{company?.description}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6 mt-3 text-black">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-100 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search job titles"
                className="w-full pl-10 h-12 text-base bg-[rgb(30,30,30)] border-gray-200 text-white"
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
            className="px-6 h-12 bg-sky-500 hover:bg-sky-600 text-white"
            onClick={handleSearch}
          >
            Find interviews
          </Button>
        </div>

        <div className="space-y-6">
          {filteredInterviews.map((interview) => (
            <div key={interview.id} className="p-6 rounded-lg border border-sky-100 transition-all duration-200 hover:shadow-md hover:border-sky-300"
            style={{ backgroundColor: "rgb(30, 30, 30)" }}>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-100 mb-2">
                    {interview.position}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-100 mb-3">
                    {(interview.job_location || interview.job_country) && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {interview.job_location}
                          {interview.job_location && interview.job_country && ", "}
                          {interview.job_country}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-gray-100">
                      <span>{interview.offer === 'Accepted' ? 'Accepted offer' : interview.offer === 'Rejected' ? 'Rejected' : 'No offer'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-100">
                      {getExperienceIcon(interview.experience)}
                      <span>{interview.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-100">
                      {getDifficultyIcon(interview.difficulty)}
                      <span>{interview.difficulty} interview</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-100 text-sm">
                  {new Date(interview.date).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-medium text-gray-100 mb-2">Application</h3>
                  <p className="text-gray-100">{interview.application_source}</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-100 mb-2">Interview</h3>
                  <p className="text-gray-100">{interview.interview_process}</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-100 mb-2">AI Usage</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-100 font-medium">Does this interview allow AI?</p>
                      <ul className="list-disc pl-6 mt-1">
                      <li className="text-gray-100">{(interview as any).interview_ai_allow || "Not specified"}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-100 font-medium">Does this company like candidates to use AI in their job?</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li className="text-gray-100">{(interview as any).job_ai_allow || "Not specified"}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-100 font-medium">Which AI tool did you use?</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li className="text-gray-100">{(interview as any).ai_interview_assisted_tool_used || "None"}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {interview.interview_questions && interview.interview_questions.length > 0 && (
                  <div>
                    <h3 className="font-medium text-gray-100 mb-2">
                      Interview questions [{interview.interview_questions.length}]
                    </h3>
                    <div className="space-y-4">
                      {interview.interview_questions.map((q, index) => (
                        <div key={q.id}>
                          <p className="text-gray-100">
                            {index + 1}. {q.question}
                          </p>
                          {q.answer && (
                            <ul className="mt-2 ml-8 list-disc text-gray-100">
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
  );
};




