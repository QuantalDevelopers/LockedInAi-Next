"use client"; // Ensures this component is treated as a Client Component in Next.js 13

import { BuildingIcon } from "lucide-react";
import { useRouter } from "next/navigation"; // Use Next.js navigation instead of react-router-dom
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Define your data shape
type Company = {
  id: string;
  name: string;
  logo: string | null;
  country: string | null;
  description: string;
  industries: string;
};

const Index = () => {
  // Replace React Router's `useNavigate` with Next.js's `useRouter`
  const router = useRouter();

  const [companySearch, setCompanySearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");

  // Fetch from Supabase via React Query.
  // We also JSON-serialize the response to avoid "Only plain objects..." errors.
  const { data: companies = [], isLoading, error } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      console.log("Fetching companies...");
      const { data, error } = await supabase.from("companies").select("*");

      if (error) {
        console.error("Error fetching companies:", error);
        throw error;
      }

      console.log("Companies fetched:", data);
      return JSON.parse(JSON.stringify(data)) as Company[];
    },
  });

  // We'll push a route using the Next.js router instead of react-router-dom's navigate.
  const handleCompanyClick = (companyId: string) => {
    router.push(`/company/${companyId}`);
  };

  // Filter logic as before
  const filteredCompanies = companies.filter((company) => {
    const matchesCompany = company.name
      .toLowerCase()
      .includes(companySearch.toLowerCase());
    const matchesLocation =
      !locationSearch ||
      (company.country &&
        company.country.toLowerCase().includes(locationSearch.toLowerCase()));
    const matchesIndustry =
      !industrySearch ||
      company.industries.toLowerCase().includes(industrySearch.toLowerCase());

    return matchesCompany && matchesLocation && matchesIndustry;
  });

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Error loading companies
          </h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-[1200px] mx-auto py-8 px-4">
        <div className="flex gap-8">
          {/* Sidebar / Filters */}
          <div className="w-80 flex-shrink-0">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              Explore companies
            </h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Filter companies
                </h2>
                <p className="text-gray-600 mb-4">
                  {isLoading
                    ? "Loading..."
                    : `1-${filteredCompanies.length} of ${companies.length} results`}
                </p>

                <div className="space-y-6">
                  <div>
                    <Label>Company</Label>
                    <Input
                      type="text"
                      placeholder="Select a company"
                      value={companySearch}
                      onChange={(e) => setCompanySearch(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Location</Label>
                    <Input
                      type="text"
                      placeholder="Select a location"
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label>Industries</Label>
                    <Input
                      type="text"
                      placeholder="E.g. healthcare, internet, education"
                      value={industrySearch}
                      onChange={(e) => setIndustrySearch(e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <button
                    onClick={() => {
                      setCompanySearch("");
                      setLocationSearch("");
                      setIndustrySearch("");
                    }}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow">
            <div className="space-y-6">
              {isLoading ? (
                <div className="text-center py-8">Loading companies...</div>
              ) : filteredCompanies.length === 0 ? (
                <div className="text-center py-8">
                  No companies found matching your filters.
                </div>
              ) : (
                filteredCompanies.map((company: Company) => (
                  <div
                    key={company.id}
                    onClick={() => handleCompanyClick(company.id)}
                    className="cursor-pointer"
                  >
                    <div className="p-6 bg-white rounded-lg border border-sky-200 transition-all duration-200 hover:shadow-md hover:border-sky-300">
                      <div className="flex gap-4">
                        {/* Company Logo or Icon */}
                        <div className="w-16 h-16 bg-sky-50 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                          {company.logo ? (
                            <img
                              src={company.logo}
                              alt={`${company.name} logo`}
                              className="w-12 h-12 object-contain"
                            />
                          ) : (
                            <BuildingIcon className="w-8 h-8 text-sky-400" />
                          )}
                        </div>

                        {/* Company Details */}
                        <div className="flex-grow">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {company.name}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-500 mb-2">
                            <span>
                              {company.country || "Location not specified"}
                            </span>
                          </div>
                          {company.industries && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              <span className="px-2 py-1 bg-sky-50 text-sky-600 text-sm rounded-full">
                                {company.industries}
                              </span>
                            </div>
                          )}
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {company.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
