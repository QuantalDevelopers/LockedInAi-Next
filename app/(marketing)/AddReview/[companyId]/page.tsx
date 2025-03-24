import AddReviewWrapper from "@/components/pages/AddReview";

export default function AddReviewPage({ params }: { params: { companyId: string } }) {
  return <AddReviewWrapper companyId={params.companyId} />;
}