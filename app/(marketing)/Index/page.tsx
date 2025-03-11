import CompaniesPage from '@/components/pages/Index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function CompaniesIndexPage() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <CompaniesPage />
        </QueryClientProvider>
    )
}