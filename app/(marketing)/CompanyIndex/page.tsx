import CompanyIndex from '@/components/pages/CompanyIndex';
// import CompaniesPage from '@/components/pages/CompanyIndex';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function CompaniesIndexPage() {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {/* <CompaniesPage /> */}
            <CompanyIndex />
        </QueryClientProvider>
    )
}