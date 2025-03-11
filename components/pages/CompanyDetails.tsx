"use client"
import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  MapPin,
  MessageCircle,
  Minus,
  Search,
  Share2,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import { Navigate, useParams } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";

const CompanyDetails = () => {
  const { companyId } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const { data: company, isLoading } = useQuery({
    queryKey: ["company", companyId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("companies")
        .select("name, description, logo")
        .eq("id", companyId!)
        .single();

      if (error) throw error;
      return data;
    },
  });

  const { data: interviews = [] } = useQuery({
    queryKey: ["interviews", companyId],
    queryFn: async () => {
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
        `,
        )
        .eq("company_id", companyId!)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data || [];
    },
  });

  if (!companyId || !company) {
    return <Navigate to="/" replace />;
  }

  const getExperienceIcon = (experience: string) => {
    switch (experience.toLowerCase()) {
      case "positive":
        return <ThumbsUp className="h-4 w-4" />;
      case "negative":
        return <ThumbsDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return <ThumbsUp className="h-4 w-4" />;
      case "difficult":
        return <ThumbsDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const filteredInterviews =
    isSearching && searchTerm
      ? interviews.filter((interview) =>
          interview.position.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : interviews;

  const handleSearch = () => {
    setIsSearching(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8 rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-6 flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100">
                {company?.logo ? (
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-12 w-12 object-contain"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-xl font-bold text-sky-600">
                    {company?.name?.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <h1 className="mb-1 text-2xl font-bold text-gray-900">
                  {company?.name}
                </h1>
              </div>
            </div>
            <Button
              asChild
              variant="default"
              className="h-12 bg-sky-500 px-6 text-base hover:bg-sky-600"
            >
              <Link href={`/company/${companyId}/add-review`}>
                Add a review
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-3 text-xl font-semibold text-gray-900">
                Overview
              </h2>
              <p className="text-gray-600">{company?.description}</p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <Input
                type="text"
                placeholder="Search job titles"
                className="h-12 w-full border-gray-200 bg-white pl-10 text-base"
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
            className="h-12 bg-sky-500 px-6 text-base hover:bg-sky-600"
            onClick={handleSearch}
          >
            Find interviews
          </Button>
        </div>

        <div className="space-y-6">
          {filteredInterviews.map((interview) => (
            <div
              key={interview.id}
              className="rounded-lg border border-gray-200 bg-white p-6"
            >
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h2 className="mb-2 text-xl font-semibold text-gray-900">
                    {interview.position}
                  </h2>
                  <div className="mb-3 flex items-center gap-4 text-gray-600">
                    {(interview.job_location || interview.job_country) && (
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>
                          {interview.job_location}
                          {interview.job_location &&
                            interview.job_country &&
                            ", "}
                          {interview.job_country}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="mb-3 flex items-center gap-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      {interview.offer === "yes" ? (
                        <ThumbsUp className="h-4 w-4" />
                      ) : (
                        <ThumbsDown className="h-4 w-4" />
                      )}
                      <span>
                        {interview.offer === "yes"
                          ? "Accepted offer"
                          : "Rejected"}
                      </span>
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
                <span className="text-sm text-gray-500">
                  {new Date(interview.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>

              <div className="mb-6 space-y-4">
                <div>
                  <h3 className="mb-2 font-medium text-gray-900">
                    Application
                  </h3>
                  <p className="text-gray-600">
                    {interview.application_source}
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-gray-900">Interview</h3>
                  <p className="text-gray-600">{interview.interview_process}</p>
                </div>
                {interview.interview_questions &&
                  interview.interview_questions.length > 0 && (
                    <div>
                      <h3 className="mb-2 font-medium text-gray-900">
                        Interview questions [
                        {interview.interview_questions.length}]
                      </h3>
                      <div className="space-y-4">
                        {interview.interview_questions.map((q, index) => (
                          <div key={q.id}>
                            <p className="text-gray-600">
                              {index + 1}. {q.question}
                            </p>
                            {q.answer && (
                              <ul className="ml-8 mt-2 list-disc text-gray-600">
                                <li>{q.answer}</li>
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>

              <div className="flex items-center gap-4 border-t pt-4">
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-600 transition-colors hover:text-sky-700">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Helpful</span>
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-600 transition-colors hover:text-sky-700">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
                <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-600 transition-colors hover:text-sky-700">
                  <MessageCircle className="h-4 w-4" />
                  <span>Answer question</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
