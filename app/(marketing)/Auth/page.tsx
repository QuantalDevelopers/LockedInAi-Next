import Auth from "@/pages/Authentication";
import AuthLayout from "./layout";
import RootLayout from "../layout";

export default function AuthPage() {
  return (
        <div className="relative overflow-hidden">
          <AuthLayout>
          <Auth />
          </AuthLayout>
        </div>
  );
}
