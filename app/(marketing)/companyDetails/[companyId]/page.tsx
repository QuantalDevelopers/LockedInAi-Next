"use client";

import CompanyDetails from "@/pages/companyDetails";
import { ClerkProvider } from "@clerk/nextjs";

export default function CompanyPage({ params }: { params: { companyId: string } }) {

  return (

  <CompanyDetails companyId={params.companyId} />
  )
  ;
}

