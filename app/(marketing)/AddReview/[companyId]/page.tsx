import AddReviewWrapper from "@/components/products/AddReview";

export default function AddReviewPage({ params }: { params: { companyId: string } }) {
  return <AddReviewWrapper companyId={params.companyId} />;
}