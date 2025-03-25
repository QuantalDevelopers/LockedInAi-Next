"use client";

import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { BuildingIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Head from "next/head";
import Image from "next/image";


type Company = {
  id: string;
  name: string;
  logo: string | null;
  country: string | null;
  description: string;
  industries: string;
};


export default function CompanyDetailWrapper({ companyId }: { companyId: string }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Lockedin Ai - Company Detail</title>
        <meta
          name="description"
          content="Discover comprehensive details about this company on Lockedin Ai. Explore the company’s background, industry, location, and more."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.lockedinai.com/companyDetails/${companyId}`} />

        <meta property="og:title" content="Lockedin Ai - Company Detail" />
        <meta
          property="og:description"
          content="Discover comprehensive details about this company on Lockedin Ai. Explore the company’s background, industry, location, and more."
        />
        <meta property="og:url" content={`https://www.lockedinai.com/companyDetails/${companyId}`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lockedin Ai - Company Detail" />
        <meta
          name="twitter:description"
          content="Discover comprehensive details about this company on Lockedin Ai. Explore the company’s background, industry, location, and more."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Lockedin Ai",
              "url": `https://www.lockedinai.com/companyDetails/${companyId}`,
              "description":
                "Discover comprehensive details about this company on Lockedin Ai. Explore the company’s background, industry, location, and more.",
            }),
          }}
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <CompanyIndex />
      </QueryClientProvider>
    </>
  );
}

function CompanyIndex() {
  const router = useRouter();
  const [companySearch, setCompanySearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [industrySearch, setIndustrySearch] = useState("");
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const { data: companies = [], isLoading, error } = useQuery({
    queryKey: ["companies"],
    queryFn: async () => {
      const { data, error } = await supabase.from("companies").select("*");
      if (error) throw error;
      return JSON.parse(JSON.stringify(data)) as Company[];
    },
  });

  const handleCompanyClick = (companyId: string) => {
    router.push(`/companyDetails/${companyId}`);
  };

  const filteredCompanies = companies.filter((company) => {
    return (
      company.name.toLowerCase().includes(companySearch.toLowerCase()) &&
      (!locationSearch ||
        (company.country && company.country.toLowerCase().includes(locationSearch.toLowerCase()))) &&
      (!industrySearch || company.industries.toLowerCase().includes(industrySearch.toLowerCase()))
    );
  });

  const paginatedCompanies =
    companySearch || locationSearch || industrySearch
      ? filteredCompanies
      : filteredCompanies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const handleNextPage = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const handlePrevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-100 mb-2">Error loading companies</h2>
          <p className="text-gray-600">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="md:py-30 flex h-full items-center justify-center px-2 py-20">
      <div className="max-w-[1200px] mx-auto mt-20 py-8 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-80 md:flex-shrink-0">
            <h1 className="text-3xl font-bold text-gray-300 mb-6">Explore companies</h1>
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-300 mb-2">Filter companies</h2>
                <p className="text-gray-300 mb-4">
                  {isLoading
                    ? "Loading..."
                    : `Showing ${filteredCompanies.length === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1}- 
                      ${Math.min(currentPage * itemsPerPage, filteredCompanies.length)} of ${filteredCompanies.length} results`}
                </p>
                <div className="space-y-6">
                  <div>
                    <Label>Company</Label>
                    <Input
                      type="text"
                      placeholder="Search company"
                      value={companySearch}
                      onChange={(e) => {
                        setCompanySearch(e.target.value);
                        setCurrentPage(1); 
                      }}
                      className="mt-1 text-black"
                    />
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      type="text"
                      placeholder="Search location"
                      value={locationSearch}
                      onChange={(e) => {
                        setLocationSearch(e.target.value);
                        setCurrentPage(1); 
                      }}
                      className="mt-1 text-black"
                    />
                  </div>
                  <div>
                    <Label>Industries</Label>
                    <Input
                      type="text"
                      placeholder="E.g. healthcare, internet, education"
                      value={industrySearch}
                      onChange={(e) => {
                        setIndustrySearch(e.target.value);
                        setCurrentPage(1); 
                      }}
                      className="mt-1 text-black"
                    />
                  </div>
                  <button
                    onClick={() => {
                      setCompanySearch("");
                      setLocationSearch("");
                      setIndustrySearch("");
                      setCurrentPage(1); 
                    }}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    Clear filters
                  </button>
                </div>
              </div>
            </div>
          </div>
  
          <div className="flex-grow">
            <div className="space-y-6">
              {isLoading ? (
                <div className="text-center py-8">Loading companies...</div>
              ) : paginatedCompanies.length === 0 ? (
                <div className="text-center py-8">No companies found matching your filters.</div>
              ) : (
                paginatedCompanies.map((company: Company) => (
                  <div key={company.id} onClick={() => handleCompanyClick(company.id)} className="cursor-pointer">
                    <div
                      className="group relative rounded-xl bg-cyan-950/30 p-5 transition-all duration-300 hover:bg-cyan-900/40"
                    >
                      <div className="flex flex-col md:flex-row gap-6 text-white">
                        <div className="w-20 h-20 bg-sky-50 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden self-center md:self-start">
                          {company.logo ? (
                            <Image src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 object-contain" />
                          ) : (
                            <BuildingIcon className="w-10 h-10 text-sky-400" />
                          )}
                        </div>
  
                        <div className="flex-grow text-center md:text-left">
                          <h3 className="text-2xl font-semibold text-[#67E8F9] mb-2">{company.name}</h3>
  
                          <div className="flex items-center gap-4 text-white mb-2 justify-center md:justify-start">
                            <span>{company.country || 'Location not specified'}</span>
                          </div>
  
                          {company.industries && (
                            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
                              <span className="px-2 py-1 bg-sky-900 text-sky-200 text-sm rounded-full">
                                {company.industries}
                              </span>
                            </div>
                          )}
  
                          <p className="text-[#A3A3A3] mb-4 text-lg line-clamp-3 text-center md:text-left">{company.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {!companySearch && !locationSearch && !industrySearch && (
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 px-4 space-y-4 md:space-y-0">
                  <button 
                    onClick={handlePrevPage} 
                    disabled={currentPage === 1} 
                    className="w-full md:w-auto px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 disabled:opacity-50"
                  >
                    ← Previous
                  </button>
                  <button 
                    onClick={handleNextPage} 
                    disabled={currentPage === totalPages} 
                    className="w-full md:w-auto px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500 disabled:opacity-50"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
