"use client";

import CompanyDetails from "@/components/products/companyDetails";
import { ClerkProvider } from "@clerk/nextjs";

export default function CompanyPage({ params }: { params: { companyId: string } }) {

  return (

  <CompanyDetails companyId={params.companyId} />
  )
  ;
}

