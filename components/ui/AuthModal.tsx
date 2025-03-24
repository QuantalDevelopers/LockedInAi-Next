// "use client";

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { useToast } from '@/components/ui/use-toast';
// import { supabase } from '@/integrations/supabase/client';
// import { useRouter } from 'next/router';

// // Define prop types
// interface AuthModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   redirectUrl: string;
// }

// export default function AuthModal({ isOpen, onClose, redirectUrl }: AuthModalProps) {
//     const [authType, setAuthType] = useState<"signin" | "signup">("signin");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");
//     const [loading, setLoading] = useState(false);
  
  
//     const { toast } = useToast();
  
//     // -- Sign In with Email/Password --
//     const handleSignIn = async (e: React.FormEvent) => {
//         const router = useRouter();
//       e.preventDefault();
//       try {
//         setLoading(true);
//         const { error } = await supabase.auth.signInWithPassword({
//           email,
//           password,
//         });
//         if (error) throw error;
//         router.push(redirectUrl);
//       } catch (error: any) {
//         toast({
//           variant: "destructive",
//           title: "Error",
//           description: error.message,
//         });
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     // -- Sign Up with Email/Password --
//     const handleSignUp = async (e: React.FormEvent) => {
//       e.preventDefault();
//       try {
//         setLoading(true);
//         const { error } = await supabase.auth.signUp({
//           email,
//           password,
//           options: {
//             data: { username },
//           },
//         });
//         if (error) throw error;
//         toast({
//           title: "Success!",
//           description: "Please check your email for the confirmation link.",
//         });
//       } catch (error: any) {
//         toast({
//           variant: "destructive",
//           title: "Error",
//           description: error.message,
//         });
//       } finally {
//         setLoading(false);
//       }
//     };
  
//     // -- Sign In with Google --
//     const handleGoogleSignIn = async () => {
//       try {
//         setLoading(true);
//         const { error } = await supabase.auth.signInWithOAuth({
//           provider: "google",
//         });
//         if (error) throw error;
//         // On success, Supabase handles the redirect/session
//       } catch (error: any) {
//         toast({
//           variant: "destructive",
//           title: "Error",
//           description: error.message,
//         });
//       } finally {
//         setLoading(false);
//       }
//     };

//   return (
//     <div className="fixed inset-0 bg-[rgb(30,30,30)] flex flex-col justify-center items-center z-50 w-full h-[70%] mt-[14%] rounded-tl-[20px] rounded-tr-[20px]">
//         <div className="w-full flex items-center justify-center p-8">
//             <div className="rounded-lg p-6 w-full max-w-sm">
//             {/* Header */}
//             <div className="mb-4">
//                 <h1 className="text-xl font-bold">
//                 {authType === "signin" ? "Sign in" : "Sign up"}
//                 </h1>
//                 <p className="text-gray-100">to continue to LockedIn AI</p>
//             </div>

//             {/* Google Sign In */}
//             <button
//                 onClick={handleGoogleSignIn}
//                 disabled={loading}
//                 className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-50 mb-4"
//             >
//                 {/* Google Icon */}
//                 <svg
//                 className="mr-2"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 533.5 544.3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 >
//                 <path
//                     fill="#4285F4"
//                     d="M533.5 278.4c0-15.7-1.3-31-3.8-45.9H272v86.9h147.4c-6.4 34.7-25.1 64.1-53.4 83.8v69.3h86.4c50.4-46.4 81.1-114.9 81.1-194.1z"
//                 />
//                 <path
//                     fill="#34A853"
//                     d="M272 544.3c71.9 0 132.1-23.8 176.2-64.6l-86.4-69.3c-23.3 15.7-53.1 25-89.8 25-68.9 0-127.2-46.5-148.1-109.2H34.5v68.4c43.1 85.6 131.3 149.7 237.5 149.7z"
//                 />
//                 <path
//                     fill="#FBBC05"
//                     d="M123.9 326.6c-10.5-31.4-10.5-65.2 0-96.6v-68.4H34.5c-36.7 72.9-36.7 160.5 0 233.4l89.4-68.4z"
//                 />
//                 <path
//                     fill="#EA4335"
//                     d="M272 107.1c37.7 0 71.6 13 98.4 38l73.8-71.6C398.2 28.2 343.9 0 272 0 166.8 0 78.6 64.1 34.5 149.7l89.4 68.4C144.8 155.6 203.1 107.1 272 107.1z"
//                 />
//                 </svg>
//                 Continue with Google
//             </button>

//             {/* Divider */}
//             <div className="flex items-center mb-6">
//                 <hr className="flex-grow border-gray-300" />
//                 <span className="mx-2 text-sm text-gray-400">or</span>
//                 <hr className="flex-grow border-gray-300" />
//             </div>

//             {/* FORM */}
//             <form
//                 onSubmit={authType === "signin" ? handleSignIn : handleSignUp}
//                 className="space-y-4"
//             >
//                 {/* Email */}
//                 <div>
//                 <Label htmlFor="email" className="mb-1">
//                     Email
//                 </Label>
//                 <Input
//                     id="email"
//                     type="email"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="text-white bg-[rgb(30,30,30)] mt-1"
//                 />
//                 </div>

//                 {/* Username (Only for Sign Up) */}
//                 {authType === "signup" && (
//                 <div>
//                     <Label htmlFor="username" className="mb-1">
//                     Username
//                     </Label>
//                     <Input
//                     id="username"
//                     type="text"
//                     placeholder="Choose a username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                     className="text-white bg-[rgb(30,30,30)] mt-1"
//                     />
//                 </div>
//                 )}

//                 {/* Password */}
//                 <div>
//                 <Label htmlFor="password" className="mb-1">
//                     Password
//                 </Label>
//                 <Input
//                     id="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="text-white bg-[rgb(30,30,30)] mt-1"
//                 />
//                 </div>

//                 {/* Submit Button */}
//                 <Button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
//                 >
//                 {loading
//                     ? authType === "signin"
//                     ? "Signing in..."
//                     : "Signing up..."
//                     : "Continue"}
//                 </Button>
//             </form>

//             {/* Toggle Sign In / Sign Up */}
//             {authType === "signin" ? (
//                 <p className="text-sm text-gray-600 mt-4">
//                 If you’re trying to level up,{" "}
//                 <button
//                     type="button"
//                     onClick={() => setAuthType("signup")}
//                     className="text-blue-600 hover:underline"
//                 >
//                     sign up
//                 </button>
//                 </p>
//             ) : (
//                 <p className="text-sm text-gray-600 mt-4">
//                 Already have an account?{" "}
//                 <button
//                     type="button"
//                     onClick={() => setAuthType("signin")}
//                     className="text-blue-600 hover:underline"
//                 >
//                     sign in
//                 </button>
//                 </p>
//             )}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useRouter } from "next/navigation";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectUrl?: string;
}

export default function AuthModal({ isOpen, onClose, redirectUrl }: AuthModalProps) {
  const [authType, setAuthType] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  // ---------------------
  //  SIGN IN
  // ---------------------
  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Trigger fade-out animation
      setFadeOut(true);

      // Wait for the animation to complete before reloading
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // ---------------------
  //  SIGN UP
  // ---------------------
  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { username },
        },
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Please check your email for the confirmation link.",
      });

      // Stay on the same screen but switch to "Sign In" mode
      setAuthType("signin");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // ---------------------
  //  GOOGLE OAUTH
  // ---------------------
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });

      if (error) {
        throw error;
      }

      // Close the modal; Supabase will handle redirection
      onClose();
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  // If modal isn't open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 bg-opacity-50">

      <div
        className={`fixed inset-0 bg-[rgb(30,30,30)] flex flex-col justify-center items-center z-50 w-full h-[70%] mt-[14%] rounded-tl-[20px] rounded-tr-[20px] transition-opacity duration-300`}
      >
        <div className="w-full flex items-center justify-center p-8">
          <div className="rounded-lg p-6 w-full max-w-sm">
            {/* Header */}
            <div className="mb-4">
              <h1 className="text-xl font-bold">
                {authType === "signin" ? "Sign in" : "Sign up"}
              </h1>
              <p className="text-gray-100">to continue to LockedIn AI</p>
            </div>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-50 mb-4"
            >
              {/* Google Icon */}
              <svg
                className="mr-2"
                width="20"
                height="20"
                viewBox="0 0 533.5 544.3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-15.7-1.3-31-3.8-45.9H272v86.9h147.4c-6.4 34.7-25.1 64.1-53.4 83.8v69.3h86.4c50.4-46.4 81.1-114.9 81.1-194.1z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c71.9 0 132.1-23.8 176.2-64.6l-86.4-69.3c-23.3 15.7-53.1 25-89.8 25-68.9 0-127.2-46.5-148.1-109.2H34.5v68.4c43.1 85.6 131.3 149.7 237.5 149.7z"
                />
                <path
                  fill="#FBBC05"
                  d="M123.9 326.6c-10.5-31.4-10.5-65.2 0-96.6v-68.4H34.5c-36.7 72.9-36.7 160.5 0 233.4l89.4-68.4z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.1c37.7 0 71.6 13 98.4 38l73.8-71.6C398.2 28.2 343.9 0 272 0 166.8 0 78.6 64.1 34.5 149.7l89.4 68.4C144.8 155.6 203.1 107.1 272 107.1z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center mb-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-sm text-gray-400">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* FORM */}
            <form
              onSubmit={authType === "signin" ? handleSignIn : handleSignUp}
              className="space-y-4"
            >
              {/* Email */}
              <div>
                <Label htmlFor="email" className="mb-1">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-white bg-[rgb(30,30,30)] mt-1"
                />
              </div>

              {/* Username (Only for Sign Up) */}
              {authType === "signup" && (
                <div>
                  <Label htmlFor="username" className="mb-1">
                    Username
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Choose a username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="text-white bg-[rgb(30,30,30)] mt-1"
                  />
                </div>
              )}

              {/* Password */}
              <div>
                <Label htmlFor="password" className="mb-1">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="text-white bg-[rgb(30,30,30)] mt-1"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
              >
                {loading
                  ? authType === "signin"
                    ? "Signing in..."
                    : "Signing up..."
                  : "Continue"}
              </Button>
            </form>

            {/* Toggle Sign In / Sign Up */}
            {authType === "signin" ? (
              <p className="text-sm text-gray-600 mt-4">
                If you’re trying to level up,{" "}
                <button
                  type="button"
                  onClick={() => setAuthType("signup")}
                  className="text-blue-600 hover:underline"
                >
                  sign up
                </button>
              </p>
            ) : (
              <p className="text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => setAuthType("signin")}
                  className="text-blue-600 hover:underline"
                >
                  sign in
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

