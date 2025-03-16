"use client";

import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, MessageCircle, ThumbsUp, ThumbsDown, Minus, MapPin, Search } from "lucide-react";
import { Navigate } from "react-router-dom";
import Link from "next/link";

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

  // const { data: interviews = [] } = useQuery({
  //   queryKey: ['interviews', companyId],
  //   queryFn: async () => {
  //     console.log("Fetching company data for ID:", companyId);
  //     console.log("connecting to the supabase" , supabase);
  //     try {
  //     const { data, error } = await supabase
  //       .from('interviews')
  //       .select(`
  //         *,
  //         interview_questions (
  //           id,
  //           question,
  //           answer
  //         )
  //       `)
  //       .eq('company_id', companyId)
  //       .order('created_at', { ascending: false });

  //       console.log("This is second time the company id",companyId)
  //       console.log("This is the data", data)
  //       console.log("This is the error", error)

  //       if (error) throw error;

  //       console.log("Interview question and answer", data);

  //       console.log("connected to supabase", supabase);
  //       return data || [];
  //     } catch (err) {
  //               console.error("CORS issue or network error:", err);
  //               throw err;
  //     }
  //   },
  //   enabled: !!companyId,
  // });

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

  // const { data: interviews = [] } = useQuery({
  //   queryKey: ['interviews', 'AAPL'],
  //   queryFn: async () => {
  //     const { data, error } = await supabase
  //       .from('interviews')
  //       .select(`
  //         *,
  //         interview_questions (
  //           id,
  //           question,
  //           answer
  //         )
  //       `)
  //       .eq('company_id', 'AAPL')
  //       .order('created_at', { ascending: false });

  //     if (error) throw error;
  //     console.log("Interview question and answer", data);
  //     return data || [];
  //   },
  // });

//   export async function getServerSideProps(context) {
//   const { companyId } = context.params; // or extract from query params

//   try {
//     const { data, error } = await supabase
//       .from('interviews')
//       .select(`
//         *,
//         interview_questions (
//           id,
//           question,
//           answer
//         )
//       `)
//       .eq('company_id', companyId)
//       .order('created_at', { ascending: false });

//     if (error) {
//       console.error("Supabase error", error);
//       return { props: { interviews: [] } }; // Return empty array on error
//     }

//     return {
//       props: { interviews: data || [] },
//     };
//   } catch (err) {
//     console.error("CORS issue or network error:", err);
//     return { props: { interviews: [] } };
//   }
// }

  // const { data: company, isLoading } = useQuery({
  //   queryKey: ["company", companyId],
  //   queryFn: async () => {
  //     if (!companyId) return null;
  
  //     try {
  //       const { data, error } = await supabase
  //         .from("companies")
  //         .select("name, description, logo")
  //         .eq("id", companyId)
  //         .single();
  
  //       if (error) {
  //         console.error("Supabase error:", error);
  //         throw error;
  //       }
  
  //       console.log("Fetched company data:", data);
  //       return data;
  //     } catch (err) {
  //       console.error("CORS issue or network error:", err);
  //       throw err;
  //     }
  //   },
  //   enabled: !!companyId,
  // });

  // const staticInterviewQuestions = [
  //   {
  //     id: 1,
  //     question: "What is React?",
  //     answer: "React is a JavaScript library for building user interfaces.",
  //   },
  //   {
  //     id: 2,
  //     question: "Explain the useState hook.",
  //     answer: "The useState hook allows functional components to manage state.",
  //   },
  //   {
  //     id: 3,
  //     question: "What is the difference between props and state?",
  //     answer: "Props are immutable and passed from parent to child, while state is mutable and managed within a component.",
  //   },
  //   {
  //     id: 4,
  //     question: "What is a closure in JavaScript?",
  //     answer: "A closure is a function that remembers the scope in which it was created, even after the scope has exited.",
  //   },
  //   {
  //     id: 5,
  //     question: "Explain event delegation in JavaScript.",
  //     answer: "Event delegation is a pattern where a parent element handles events from its child elements using event bubbling.",
  //   },
  // ];
  

  // const { 
  //   data: interviews = [], 
  //   isLoading: isInterviewsLoading, 
  //   error: interviewsError,
  //   refetch: refetchInterviews
  // } = useQuery({
  //   queryKey: ['interviews', companyId],
  //   queryFn: async () => {
  //     if (!companyId) return [];
      
  //     console.log("Making Supabase request with companyId:", companyId);
      
  //     const { data, error } = await supabase
  //       .from('interviews')
  //       .select(`
  //         *,
  //         interview_questions (
  //           id,
  //           question,
  //           answer
  //         )
  //       `)
  //       .eq('company_id', companyId)
  //       .order('created_at', { ascending: false });
      
  //     console.log("Raw interview data:", data);
      
  //     if (error) {
  //       console.error("Supabase error:", error);
  //       throw error;
  //     }
      
  //     return data || [];
  //   },
  //   enabled: !!companyId
  // });
  
  // // Uncomment these loading states
  // if (isLoading) return <div>Loading company data...</div>;
  // if (isInterviewsLoading) return <div>Loading interview data...</div>;
  // if (interviewsError) return <div>Error loading interviews: {interviewsError.message}</div>;
  // if (!company) return <div>Company not found</div>;
  
  

  // const { 
  //   data: interviews = [], 
  //   isLoading: isInterviewsLoading, 
  //   error: interviewsError,
  //   refetch: refetchInterviews
  // } = useQuery({
  //   queryKey: ['interviews', companyId],
  //   queryFn: async () => {
  //     if (!companyId) return [];
      
  //     console.log("Making Supabase request with companyId:", companyId);
  //     console.log("companyId type:", typeof companyId);
      
  //     const { data, error } = await supabase
  //       .from('interviews')
  //       .select(`
  //         *,
  //         interview_questions (
  //           id,
  //           question,
  //           answer
  //         )
  //       `)
  //       .eq('company_id', companyId)
  //       .order('created_at', { ascending: false });
      
  //     console.log("Raw interview data:", data);
      
  //     if (error) {
  //       console.error("Supabase error:", error);
  //       throw error;
  //     }
      
  //     return data || [];
  //   },
  //   enabled: !!companyId
  // });

  // // Better error and loading handling
  // if (isLoading) return <div>Loading company data...</div>;
  // if (isInterviewsLoading) return <div>Loading interview data...</div>;
  // if (interviewsError) return <div>Error loading interviews: {interviewsError.message}</div>;
  // if (!company) return <div>Company not found</div>;

  // if (!companyId || !company) {
  //   return <Navigate to="/" replace />;
  // }

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
    <div className="min-h-screen bg-gray-50 mt-40">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
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
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
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
              <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
              <p className="text-gray-600">{company?.description}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6 text-black">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                type="text" 
                placeholder="Search job titles"
                className="w-full pl-10 h-12 text-base bg-white border-gray-200"
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
            className="px-6 h-12 bg-sky-500 hover:bg-sky-600 text-base"
            onClick={handleSearch}
          >
            Find interviews
          </Button>
        </div>

        <div className="space-y-6">
          {filteredInterviews.map((interview) => (
            <div key={interview.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {interview.position}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
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
                    <div className="flex items-center gap-2 text-gray-600">
                      <span>{interview.offer === 'Accepted' ? 'Accepted offer' : interview.offer === 'Rejected' ? 'Rejected' : 'No offer'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      {getExperienceIcon(interview.experience)}
                      <span>{interview.experience} experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      {getDifficultyIcon(interview.difficulty)}
                      <span>{interview.difficulty} interview</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">
                  {new Date(interview.date).toLocaleDateString('en-US', { 
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Application</h3>
                  <p className="text-gray-600">{interview.application_source}</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Interview</h3>
                  <p className="text-gray-600">{interview.interview_process}</p>
                </div>

                <div>
                  <h3 className="font-medium text-gray-900 mb-2">AI Usage</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-600 font-medium">Does this interview allow AI?</p>
                      <ul className="list-disc pl-6 mt-1">
                      <li className="text-gray-600">{(interview as any).interview_ai_allow || "Not specified"}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Does this company like candidates to use AI in their job?</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li className="text-gray-600">{(interview as any).job_ai_allow || "Not specified"}</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Which AI tool did you use?</p>
                      <ul className="list-disc pl-6 mt-1">
                        <li className="text-gray-600">{(interview as any).ai_interview_assisted_tool_used || "None"}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {interview.interview_questions && interview.interview_questions.length > 0 && (
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">
                      Interview questions [{interview.interview_questions.length}]
                    </h3>
                    <div className="space-y-4">
                      {interview.interview_questions.map((q, index) => (
                        <div key={q.id}>
                          <p className="text-gray-600">
                            {index + 1}. {q.question}
                          </p>
                          {q.answer && (
                            <ul className="mt-2 ml-8 list-disc text-gray-600">
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


