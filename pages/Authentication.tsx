// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { supabase } from "@/integrations/supabase/client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/components/ui/use-toast";

// export default function Auth() {
//   const [authType, setAuthType] = useState<"signin" | "signup">("signin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const redirectUrl = searchParams.get("redirect_url") || "/";

//   const { toast } = useToast();

//   // -- Sign In with Email/Password --
//   const handleSignIn = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       });
//       if (error) throw error;
//       router.push(redirectUrl);
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: error.message,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // -- Sign Up with Email/Password --
//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signUp({
//         email,
//         password,
//         options: {
//           data: { username },
//         },
//       });
//       if (error) throw error;
//       toast({
//         title: "Success!",
//         description: "Please check your email for the confirmation link.",
//       });
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: error.message,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // -- Sign In with Google --
//   const handleGoogleSignIn = async () => {
//     try {
//       setLoading(true);
//       const { error } = await supabase.auth.signInWithOAuth({
//         provider: "google",
//       });
//       if (error) throw error;
//       // On success, Supabase handles the redirect/session
//     } catch (error: any) {
//       toast({
//         variant: "destructive",
//         title: "Error",
//         description: error.message,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex h-screen ">
//       {/* LEFT COLUMN (50% width) */}
//       <div className="w-1/2 flex items-center justify-center p-8 bg-[rgba(30, 30, 30, 1)]">
//         <div className="bg-[rgb(30,30,30)] shadow-md rounded-lg p-6 w-full max-w-sm">
//           {/* Header */}
//           <div className="mb-4">
//             <h1 className="text-xl font-bold">
//               {authType === "signin" ? "Sign in" : "Sign up"}
//             </h1>
//             <p className="text-gray-100">to continue to LockedIn AI</p>
//           </div>

//           {/* Google Sign In */}
//           <button
//             onClick={handleGoogleSignIn}
//             disabled={loading}
//             className="flex items-center justify-center w-full border border-gray-300 rounded-md py-2 text-gray-700 hover:bg-gray-50 mb-4"
//           >
//             {/* Google Icon */}
//             <svg
//               className="mr-2"
//               width="20"
//               height="20"
//               viewBox="0 0 533.5 544.3"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill="#4285F4"
//                 d="M533.5 278.4c0-15.7-1.3-31-3.8-45.9H272v86.9h147.4c-6.4 34.7-25.1 64.1-53.4 83.8v69.3h86.4c50.4-46.4 81.1-114.9 81.1-194.1z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M272 544.3c71.9 0 132.1-23.8 176.2-64.6l-86.4-69.3c-23.3 15.7-53.1 25-89.8 25-68.9 0-127.2-46.5-148.1-109.2H34.5v68.4c43.1 85.6 131.3 149.7 237.5 149.7z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M123.9 326.6c-10.5-31.4-10.5-65.2 0-96.6v-68.4H34.5c-36.7 72.9-36.7 160.5 0 233.4l89.4-68.4z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M272 107.1c37.7 0 71.6 13 98.4 38l73.8-71.6C398.2 28.2 343.9 0 272 0 166.8 0 78.6 64.1 34.5 149.7l89.4 68.4C144.8 155.6 203.1 107.1 272 107.1z"
//               />
//             </svg>
//             Continue with Google
//           </button>

//           {/* Divider */}
//           <div className="flex items-center mb-6">
//             <hr className="flex-grow border-gray-300" />
//             <span className="mx-2 text-sm text-gray-400">or</span>
//             <hr className="flex-grow border-gray-300" />
//           </div>

//           {/* FORM */}
//           <form
//             onSubmit={authType === "signin" ? handleSignIn : handleSignUp}
//             className="space-y-4"
//           >
//             {/* Email */}
//             <div>
//               <Label htmlFor="email" className="mb-1">
//                 Email
//               </Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="text-white bg-[rgb(30,30,30)] mt-1"
//               />
//             </div>

//             {/* Username (Only for Sign Up) */}
//             {authType === "signup" && (
//               <div>
//                 <Label htmlFor="username" className="mb-1">
//                   Username
//                 </Label>
//                 <Input
//                   id="username"
//                   type="text"
//                   placeholder="Choose a username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                   className="text-white bg-[rgb(30,30,30)] mt-1"
//                 />
//               </div>
//             )}

//             {/* Password */}
//             <div>
//               <Label htmlFor="password" className="mb-1">
//                 Password
//               </Label>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="text-white bg-[rgb(30,30,30)] mt-1"
//               />
//             </div>

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
//             >
//               {loading
//                 ? authType === "signin"
//                   ? "Signing in..."
//                   : "Signing up..."
//                 : "Continue"}
//             </Button>
//           </form>

//           {/* Toggle Sign In / Sign Up */}
//           {authType === "signin" ? (
//             <p className="text-sm text-gray-600 mt-4">
//               If you’re trying to level up,{" "}
//               <button
//                 type="button"
//                 onClick={() => setAuthType("signup")}
//                 className="text-blue-600 hover:underline"
//               >
//                 sign up
//               </button>
//             </p>
//           ) : (
//             <p className="text-sm text-gray-600 mt-4">
//               Already have an account?{" "}
//               <button
//                 type="button"
//                 onClick={() => setAuthType("signin")}
//                 className="text-blue-600 hover:underline"
//               >
//                 sign in
//               </button>
//             </p>
//           )}
//         </div>
//       </div>

//       {/* RIGHT COLUMN (50% width) */}
//       <div className="w-1/2 bg-gray-300 flex items-center justify-center p-8">
//         <div className="max-w-md text-center">
//           {/* Example placeholder or your actual Jake image */}
//           <img
//             // Use your real image path or a generated link:
//             // e.g. src="/images/jake.png" or a placeholder
//             src="/images/James.png"
//             alt="James"
//             className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
//           />

//           <h2 className="text-xl font-bold text-black">James, 50</h2>
//           <p className="text-gray-600 mb-4">Sales Executive @ IBM</p>
//           <p className="text-gray-700 mb-6 leading-relaxed">
//             “I was skeptical about using AI for career coaching, but LockedIn AI blew me away. It helped me navigate through all the sales strategy and negotiation questions during my IBM interviews, and I landed a $330k sales exec job. Thanks to this tool, now I can actually enjoy my life and buy everything I want."
//           </p>

//           {/* Logos Row */}
//           <div className="mt-[50px] grid grid-cols-2 gap-16 items-center">
//             <div className="flex justify-center">
//               <img
//                 src="/images/aws_startups.svg"
//                 alt="AWS Startups"
//                 className="h-8 object-contain"
//               />
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src="/images/MS_Startups.png"
//                 alt="Microsoft for Startups Founders Hub"
//                 className="h-8 object-contain"
//               />
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src="/images/nvidia_inception_program.png"
//                 alt="NVIDIA Inception"
//                 className="h-8 object-contain"
//               />
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src="/images/Google_for_Startups_logo.svg"
//                 alt="Google for Startups"
//                 className="h-8 object-contain"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




// import {
// BrowserRouter,
// Route,
// Routes,
// To,
// useNavigate,
// useSearchParams,
// } from 'react-router-dom';
// import {
// ClerkProvider,
// SignedIn,
// SignedOut,
// RedirectToSignIn,
// SignIn,
// SignUp,
// } from '@clerk/clerk-react';
// import './introDefault.css';
// import NotFound from '@/app/not-found';
// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
// throw new Error('Clerk Missing Publishable Key');
// }

// const clerkPubKey =
// process.env.REACT_APP_ENDPOINT_SWITCH === 'prod'
// ? process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
// : process.env.REACT_APP_CLERK_PUBLISHABLE_KEY_DEV;

// function App() {
// const navigate = useNavigate();
// const [searchParams, setSearchParams] = useSearchParams();
// const version = searchParams.get('version');
// const redirectUrl =
// version === 'v2' ? 'https://v2.lockedinai.com/signin' : undefined;
// return (
// <div className="bg-white h-screen">
// <ClerkProvider
// publishableKey={clerkPubKey}
// navigate={(to: To) => navigate(to)}
// signOutRedirectUrl="/sign-in"
// appearance={{
// elements: {
// formButtonPrimary: {
// fontSize: 14,
// textTransform: 'none',
// backgroundColor: '#06B6D4',
// },
// },
// }}
// > 
// <Routes>
// <Route
// path="/app/\*"
// element={
// <>
// <SignedIn>
// </SignedIn>
// <SignedOut>
// <RedirectToSignIn path={`/companyDetails/${companyId!}`} />
// </SignedOut>
// </>
// }
// />
// <Route
// path="/sign-in/\*"
// element={
// <>
// <div className="flex w-full h-full">
// <div className="w-full md:w-1/2 flex items-center justify-center">
// <SignIn routing="path" path="/sign-in" />
// </div>
// <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
// </div>
// </div>
// </>
// }
// />
// <Route
// path="/sign-up/\*"
// element={
// <div className="flex w-full h-full">
// <div className="w-full md:w-1/2 flex items-center justify-center">
// <SignUp
// routing="path"
// path="/sign-up"
// redirectUrl={redirectUrl}
// />
// </div>
// <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
// </div>
// </div>
// }
// />
// <Route path="\*" element={<NotFound />} />
// </Routes>
// </ClerkProvider>
// </div>
// );
// }

// export default function Example() {
// return (
// <BrowserRouter>
// <App />
// </BrowserRouter>
// );
// }

// import {
//     BrowserRouter,
//     Route,
//     Routes,
//     To,
//     useNavigate,
//     useSearchParams,
//     useParams,
//   } from 'react-router-dom';
//   import {
//     ClerkProvider,
//     SignedIn,
//     SignedOut,
//     RedirectToSignIn,
//     SignIn,
//     SignUp,
//   } from '@clerk/clerk-react';
//   import './introDefault.css';
//   import NotFound from '@/app/not-found';
  
//   if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//     throw new Error('Clerk Missing Publishable Key');
//   }
  
//   const clerkPubKey =
//   process.env.REACT_APP_ENDPOINT_SWITCH === 'prod'
//     ? process.env.REACT_APP_CLERK_PUBLISHABLE_KEY!
//     : process.env.REACT_APP_CLERK_PUBLISHABLE_KEY_DEV!;

    

//   function App() {
//     const navigate = useNavigate();
//     const [searchParams] = useSearchParams();
//     const version = searchParams.get('version');
//     const redirectUrl =
//       version === 'v2' ? 'https://v2.lockedinai.com/signin' : undefined;
  
//     const companyId = searchParams.get('companyId');


  
//     // Alternatively, if you expect it from the URL (e.g., /app/:companyId/...)
//     // const { companyId } = useParams();
//     return (
//       <div className="bg-white h-screen">
//         <ClerkProvider
//           publishableKey={clerkPubKey}
//           navigate={(to) => navigate(to)}
//           signOutRedirectUrl="/sign-in"
//           appearance={{
//             elements: {
//               formButtonPrimary: {
//                 fontSize: 14,
//                 textTransform: 'none',
//                 backgroundColor: '#06B6D4',
//               },
//             },
//           }}
//         >
//           <Routes>
//             <Route
//               path="/app/*"
//               element={
//                 <>
//                   <SignedIn>
//                     {/* Authenticated routes go here */}
//                   </SignedIn>
//                   <SignedOut>
//                     {/* Redirect signed-out users to the appropriate sign-in URL */}
//                     <RedirectToSignIn signInForceRedirectUrl={companyId ? `/companyDetails/${companyId}` : "/sign-in"} />
//                   </SignedOut>
//                 </>
//               }
//             />
//             <Route
//               path="/sign-in/*"
//               element={
//                 <div className="flex w-full h-full">
//                   <div className="w-full md:w-1/2 flex items-center justify-center">
//                     <SignIn routing="path" path="/sign-in" />
//                   </div>
//                   <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                     {/* Additional content */}
//                   </div>
//                 </div>
//               }
//             />
//             <Route
//               path="/sign-up/*"
//               element={
//                 <div className="flex w-full h-full">
//                   <div className="w-full md:w-1/2 flex items-center justify-center">
//                     <SignUp
//                       routing="path"
//                       path="/sign-up"
//                       redirectUrl={redirectUrl}
//                     />
//                   </div>
//                   <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                     {/* Additional content */}
//                   </div>
//                 </div>
//               }
//             />
//             <Route path="*" element={<NotFound />} />
//           </Routes>
//         </ClerkProvider>
//       </div>
//     );
//   }
  
//   export default function Example() {
//     return (
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );
//   }
  
// "use client";
// import useSWR from "swr";
// import { useNavigate } from 'react-router-dom';
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp } from '@clerk/clerk-react';
// import { BrowserRouter, Route, Routes, To, useSearchParams, useParams } from 'react-router-dom';

// import NotFound from '@/app/not-found';

// if (
//   !process.env.REACT_APP_CLERK_PUBLISHABLE_KEY ||
//   !process.env.REACT_APP_CLERK_PUBLISHABLE_KEY_DEV
// ) {
//   throw new Error('Clerk Missing Publishable Key(s)');
// }



// const clerkPubKey =
//   process.env.REACT_APP_ENDPOINT_SWITCH === 'prod'
//     ? process.env.REACT_APP_CLERK_PUBLISHABLE_KEY
//     : process.env.REACT_APP_CLERK_PUBLISHABLE_KEY_DEV;

// function App() {
 
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const version = searchParams.get('version');
//   const redirectUrl = version === 'v2' ? 'https://v2.lockedinai.com/signin' : undefined;
//   const companyId = searchParams.get('companyId');
  
//   console.log('Clerk Publishable Key:', clerkPubKey);

//   return (
//     <div className="bg-white h-screen">
//       <ClerkProvider
//         publishableKey={clerkPubKey}
//         appearance={{
//           elements: {
//             formButtonPrimary: {
//               fontSize: 14,
//               textTransform: 'none',
//               backgroundColor: '#06B6D4',
//             },
//           },
//         }}
//       >
//         <Routes>
//           <Route
//             path="/app/*"
//             element={
//               <>
//                 <SignedIn>
//                   {/* Authenticated routes go here */}
//                 </SignedIn>
//                 <SignedOut>
//                   <RedirectToSignIn signInForceRedirectUrl={companyId ? `/companyDetails/${companyId}` : "/sign-in"} />
//                 </SignedOut>
//               </>
//             }
//           />
//           <Route
//             path="/sign-in/*"
//             element={
//               <div className="flex w-full h-full">
//                 <div className="w-full md:w-1/2 flex items-center justify-center">
//                   <SignIn
//                     routing="path"
//                     path="/sign-in"
//                   />
//                 </div>
//                 <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                   {/* Additional content */}
//                 </div>
//               </div>
//             }
//           />
//           <Route
//             path="/sign-up/*"
//             element={
//               <div className="flex w-full h-full">
//                 <div className="w-full md:w-1/2 flex items-center justify-center">
//                   <SignUp
//                     routing="path"
//                     path="/sign-up"
//                     redirectUrl={redirectUrl}
//                   />
//                 </div>
//                 <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                   {/* Additional content */}
//                 </div>
//               </div>
//             }
//           />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </ClerkProvider>
//     </div>
//   );
// }

// export default function Example() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }


//3rd attempt
// "use client";
// import useSWR from "swr";
// import { useNavigate } from 'react-router-dom';
// import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp } from '@clerk/clerk-react';
// import { BrowserRouter, Route, Routes, To, useSearchParams, useParams } from 'react-router-dom';

// import NotFound from '@/app/not-found';
// import CompanyDetails from "./companyDetails";

// if (
//   !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
//   !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY_DEV
// ) {
//   throw new Error('Clerk Missing Publishable Key(s)');
// }

// const clerkPubKey =
// //   process.env.NEXT_PUBLIC_ENDPOINT_SWITCH === 'dev'
//     // process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
//      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY_DEV;

// function App() {
 
// //   const navigate = useNavigate();
// //   const [searchParams] = useSearchParams();
// //   const version = searchParams.get('version');
// //   const redirectUrl = version === 'v2' ? 'https://v2.lockedinai.com/signin' : undefined;
// //   const companyId = searchParams.get('companyId');
  
// //   console.log('Clerk Publishable Key:', clerkPubKey);
// const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const version = searchParams.get('version');
//   const companyId = searchParams.get('companyId');
//   const redirect_url = searchParams.get('redirect_url');
  
//   // Determine the redirect URL based on provided parameters
//   let redirectUrl = 'localhost:3000'; //it will take me to the value where it is coming
  
//   if (companyId) {
//     // redirectUrl = `/companyDetails/${companyId}`;
//     redirectUrl = `localhost:3000`;
//   } else if (redirect_url) {
//     redirectUrl = redirect_url;
//   }
// //   } else if (version === 'v2') {
// //     redirectUrl = 'https://v2.lockedinai.com/signin';
// //   }
//   //localhost:3000/companyDetails/${companyId}
//   //localhost:3000
  
//   console.log('Clerk Publishable Key:', clerkPubKey);
//   console.log('Redirect URL:', redirectUrl);

//   return (
//     <div className="bg-white h-screen">
//       <ClerkProvider
//         publishableKey={clerkPubKey}
//         appearance={{
//           elements: {
//             formButtonPrimary: {
//               fontSize: 14,
//               textTransform: 'none',
//               backgroundColor: '#06B6D4',
//             },
//           },
//         }}
//       >
//         <Routes>
//           <Route
//             path="/app/*"
//             element={
//               <>
//                 <SignedIn >
//                   {/* Authenticated routes go here */}
               
//                 </SignedIn>
//                 <SignedOut>
//                   {/* <RedirectToSignIn signInForceRedirectUrl={companyId ? `/companyDetails/${companyId}` : "/sign-in"} /> */}
//                   <RedirectToSignIn signInForceRedirectUrl="http://localhost:3000" />
//                 </SignedOut>
//               </>
//             }
//           />
//           <Route
//             path="/sign-in/*"
//             element={
//               <div className="flex w-full h-full">
//                 <div className="w-full md:w-1/2 flex items-center justify-center">
//                   <SignIn
//                     routing="path"
//                     path="/sign-in"
//                     fallbackRedirectUrl = {redirectUrl}
//                   />
//                 </div>
//                 <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                   {/* Additional content */}
//                 </div>
//               </div>
//             }
//           />
//           <Route
//             path="/sign-up/*"
//             element={
//               <div className="flex w-full h-full">
//                 <div className="w-full md:w-1/2 flex items-center justify-center">
//                   <SignUp
//                     routing="path"
//                     path="/sign-up"
//                     fallbackRedirectUrl = {redirectUrl}
//                   />
//                 </div>
//                 <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                   {/* Additional content */}
//                 </div>
//               </div>
//             }
//           />
//           <Route path="/companyDetails/:companyId" element={
//             <SignedIn>
//               <CompanyDetails companyId={companyId!} />
//             </SignedIn>
//           } />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </ClerkProvider>
//     </div>
//   );
// }

// export default function Example() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }

// "use client";
// import useSWR from "swr";
// import { useNavigate } from 'react-router-dom';
// import {
//   ClerkProvider,
//   SignedIn,
//   SignedOut,
//   RedirectToSignIn,
//   SignIn,
//   SignUp
// } from '@clerk/clerk-react';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
//   useSearchParams,
// } from 'react-router-dom';

// import NotFound from '@/app/not-found';
// import CompanyDetails from "./companyDetails";

// if (
//   !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
//   !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY_DEV
// ) {
//   throw new Error('Clerk Missing Publishable Key(s)');
// }

// const clerkPubKey =
//   process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY_DEV;

// function App() {
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
  
//   const version = searchParams.get('version');
//   const companyId = searchParams.get('companyId');
//   const redirect_url = searchParams.get('redirect_url');
  
//   // Default redirect
//   let redirectUrl = 'http://localhost:3000';

//   // If we have a companyId, send user to that company’s details page
//   if (companyId) {
//     redirectUrl = `http://localhost:3000`;
//   }
//   // Or if a custom redirect URL was provided, use that
//   else if (redirect_url) {
//     // Make sure redirect_url starts with http:// or https:// if you pass it in
//     redirectUrl = redirect_url;
//   }

//   console.log('Clerk Publishable Key:', clerkPubKey);
//   console.log('Redirect URL:', redirectUrl);

//   return (
//     <div className="bg-white h-screen">
//       <ClerkProvider
//         publishableKey={clerkPubKey}
//         appearance={{
//           elements: {
//             formButtonPrimary: {
//               fontSize: 14,
//               textTransform: 'none',
//               backgroundColor: '#06B6D4',
//             },
//           },
//         }}
//       >
//         <Routes>
//           {/* Example of a protected route under /app */}
//           <Route
//             path="/app/*"
//             element={
//               <>
//                 <SignedIn>
//                   {/* Your authenticated /app routes/components go here */}
//                   {/* e.g., <AppDashboard /> */}
//                 </SignedIn>
//                 <SignedOut>
//                   {/* If user is signed out, send them to our Clerk sign-in page */}
//                   <RedirectToSignIn redirectUrl="/sign-in" />
//                 </SignedOut>
//               </>
//             }
//           />

//           {/* Clerk Sign-In Page */}
//           <Route
//             path="/sign-in/*"
//             element={
//               <div className="flex w-full h-full">
//                 <div className="w-full md:w-1/2 flex items-center justify-center">
//                   <SignIn
//                     routing="path"
//                     path="/sign-in"
//                     // Explicitly set where to go after sign-in
//                     forceRedirectUrl={redirectUrl}
//                     // If you also want afterSignUp to land at the same place:
//                     signUpForceRedirectUrl={redirectUrl}
//                   />
//                 </div>
//                 <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                   {/* Additional content */}
//                 </div>
//               </div>
//             }
//           />

//           {/* Clerk Sign-Up Page */}
//           <Route
//             path="/sign-up/*"
//             element={
//               <div className="flex w-full h-full">
//                 <div className="w-full md:w-1/2 flex items-center justify-center">
//                   <SignUp
//                     routing="path"
//                     path="/sign-up"
//                     afterSignInUrl={redirectUrl}
//                     afterSignUpUrl={redirectUrl}
//                   />
//                 </div>
//                 <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
//                   {/* Additional content */}
//                 </div>
//               </div>
//             }
//           />

//           {/* Example of a page that requires sign-in to view company details */}
//           <Route
//             path="/companyDetails/:companyId"
//             element={
//               <SignedIn>
//                 <CompanyDetails  companyId={companyId!}/>
//               </SignedIn>
//             }
//           />

//           {/* Catch-all for unmatched routes */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </ClerkProvider>
//     </div>
//   );
// }

// export default function Example() {
//   return (
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// }

"use client";
import useSWR from "swr";
import { useNavigate } from 'react-router-dom';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp
} from '@clerk/clerk-react';
import {
  BrowserRouter,
  Route,
  Routes,
  useSearchParams,
} from 'react-router-dom';

import NotFound from '@/app/not-found';
import CompanyDetails from "./companyDetails";

if (
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY_DEV
) {
  throw new Error('Clerk Missing Publishable Key(s)');
}

const clerkPubKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY_DEV;

function App() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  const version = searchParams.get('version');
  const companyId = searchParams.get('companyId');
  const redirect_url = searchParams.get('redirect_url');
  
  // Default redirect
  let redirectUrl = 'http://localhost:3000';

  // If we have a companyId, send user to that company's details page
  if (companyId) {
    redirectUrl = `http://localhost:3000/companyDetails/${companyId}`;
  }
  // Or if a custom redirect URL was provided, use that
  else if (redirect_url) {
    // Make sure redirect_url starts with http:// or https://
    if (!redirect_url.startsWith('http://') && !redirect_url.startsWith('https://')) {
      redirectUrl = `http://${redirect_url}`;
    } else {
      redirectUrl = redirect_url;
    }
  }

  console.log('Clerk Publishable Key:', clerkPubKey);
  console.log('Redirect URL:', redirectUrl);

  return (
    <div className="bg-white h-screen">
      <ClerkProvider
        publishableKey={clerkPubKey}
        appearance={{
          elements: {
            formButtonPrimary: {
              fontSize: 14,
              textTransform: 'none',
              backgroundColor: '#06B6D4',
            },
          },
        }}
      >
        <Routes>
          {/* Example of a protected route under /app */}
          <Route
            path="/app/*"
            element={
              <>
                <SignedIn>
                  {/* Your authenticated /app routes/components go here */}
                  {/* e.g., <AppDashboard /> */}
                </SignedIn>
                <SignedOut>
                  {/* If user is signed out, send them to our Clerk sign-in page */}
                  <RedirectToSignIn redirectUrl="/sign-in" />
                </SignedOut>
              </>
            }
          />

          {/* Clerk Sign-In Page */}
          <Route
            path="/sign-in/*"
            element={
              <div className="flex w-full h-full">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <SignIn
                    routing="path"
                    path="/sign-in"
                    // Explicitly set where to go after sign-in
                    // afterSignInUrl={redirectUrl}
                    forceRedirectUrl={redirectUrl}
                    // If you also want afterSignUp to land at the same place:
                    afterSignUpUrl={redirectUrl}
                  />
                </div>
                <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
                  {/* Additional content */}
                </div>
              </div>
            }
          />

          {/* Clerk Sign-Up Page */}
          <Route
            path="/sign-up/*"
            element={
              <div className="flex w-full h-full">
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <SignUp
                    routing="path"
                    path="/sign-up"
                    afterSignInUrl={redirectUrl}
                    afterSignUpUrl={redirectUrl}
                  />
                </div>
                <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-300 p-10">
                  {/* Additional content */}
                </div>
              </div>
            }
          />

          {/* Example of a page that requires sign-in to view company details */}
          <Route
            path="/companyDetails/:companyId"
            element={
              <SignedIn>
                <CompanyDetails companyId={companyId ?? ''} />
              </SignedIn>
            }
          />

          {/* Catch-all for unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClerkProvider>
    </div>
  );
}

export default function Example() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}