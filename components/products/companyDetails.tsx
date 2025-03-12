"use client";

import { useState } from "react";
import { useQuery, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Share2, MessageCircle, ThumbsUp, ThumbsDown, Minus, MapPin, Search } from "lucide-react";

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

  // ✅ Ensure `useQuery` only runs when `companyId` is available
  const { data: company, isLoading } = useQuery({
    queryKey: ["company", companyId],
    queryFn: async () => {
      if (!companyId) return null;

      const { data, error } = await supabase
        .from("companies")
        .select("name, description, logo")
        .eq("id", companyId)
        .single();

      if (error) throw error;
      console.log("Fetched interview data:", data);
      return data;
    },
    enabled: !!companyId, // ✅ Only fetch data when `companyId` exists
  });

  const { data: interviews = [] } = useQuery({
    queryKey: ["interviews", companyId],
    queryFn: async () => {
      if (!companyId) return [];

      const { data, error } = await supabase
        .from("interviews")
        .select(
          `
          *,
          interview_questions (
            id,
            question,
            answer
          )
        `
        )
        .eq("company_id", companyId)
        .order("created_at", { ascending: false });

      if (error) throw error;
      console.log("fetched the interview question and answer" , data)
      return data || [];
    },
    enabled: !!companyId,
  });

  if (!companyId) {
    return <p>Loading...</p>;
  }

  if (isLoading) {
    return <p>Loading company data...</p>;
  }

  if (!company) {
    return <p>Company not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-52">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold text-xl">
                    {company.name?.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">{company.name}</h1>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-600">{company.description}</p>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
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
            onClick={() => setIsSearching(true)}
          >
            Find interviews
          </Button>
        </div>

        <div className="space-y-6">
          {interviews.map((interview) => (
            <div key={interview.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {interview.position}
                  </h2>
                  <div className="flex items-center gap-4 text-gray-600 mb-3">
                    {interview.job_location && (
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{interview.job_location}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      {interview.offer === "yes" ? (
                        <ThumbsUp className="w-4 h-4" />
                      ) : (
                        <ThumbsDown className="w-4 h-4" />
                      )}
                      <span>{interview.offer === "yes" ? "Accepted offer" : "Rejected"}</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">
                  {new Date(interview.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="space-y-4 mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Interview Questions</h3>
                <div className="space-y-4">
                  {interview.interview_questions?.map((q, index) => (
                    <div key={q.id}>
                      <p className="text-gray-600">{index + 1}. {q.question}</p>
                      {q.answer && <ul className="mt-2 ml-8 list-disc text-gray-600"><li>{q.answer}</li></ul>}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful</span>
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-600 hover:text-sky-700 transition-colors">
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
