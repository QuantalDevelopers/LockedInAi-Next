'use client';

import { usePathname } from 'next/navigation';
import { NavBar } from '@/components/navbar';

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isAuthPage = pathname && pathname.includes('/auth');
  
  if (isAuthPage) {
    return null;
  }
  
  return <NavBar />;
}