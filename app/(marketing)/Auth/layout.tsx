
export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    // No NavBar or Footer here, just return children
    return <>{children}</>;
  }