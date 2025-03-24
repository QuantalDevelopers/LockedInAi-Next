"use client";

import CompanyDetails from "@/components/pages/companyDetails";

export default function CompanyPage({ params }: { params: { companyId: string } }) {
  return <CompanyDetails companyId={params.companyId} />;
}

