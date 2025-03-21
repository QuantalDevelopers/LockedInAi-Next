import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Define public routes that don't require authentication
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/ai-copilot(.*)",
  "/coding-copilot(.*)",
  "/CompanyIndex(.*)",
  "/resume-guru(.*)",
  "/online-assessment(.*)",
  "/blog(.*)",
  "/tutorials(.*)",
  "/affiliate-partner(.*)",
  "/companyDetails(.*)",
  "/privacy-policy(.*)",
  "/terms-of-service(.*)",
  "/refund-policy(.*)",
  "/contact(.*)",
  "/ethics(.*)",
  "/is-it-safe(.*)",
  "/api/webhooks/clerk(.*)"
]);

// Use the simpler approach recommended by Clerk
export default clerkMiddleware((auth, req) => {
  if (!isPublicRoute(req)) {
    // Let Clerk handle the protection of non-public routes
    auth.protect();
  }
});

// Configuration for which routes the middleware should run on
export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};