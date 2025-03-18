"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export const useAffiliateTracker = () => {
  const [affiliate, setAffiliate] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure we're in the browser
      const via = new URLSearchParams(window.location.search).get("via");
      try {
        if (via) {
          const expirationDays = 7; // Set expiration time in days
          const expirationDate = new Date();
          expirationDate.setTime(
            expirationDate.getTime() + expirationDays * 24 * 60 * 60 * 1000,
          );
          const expires = `; expires=${expirationDate.toUTCString()}`;

          localStorage.setItem("affiliateVia", `?via=${via}`); // Store in local storage with '?via=' prefix
          setAffiliate(`?via=${via}`); // Update state for client-side rendering
          // Store 'via' in a cookie with expiration date
          document.cookie = `affiliateVia=${via}${expires}; path=/`;
        } else {
          const storedAffiliate = localStorage.getItem("affiliateVia");
          const affiliateValue = storedAffiliate
            ? `?via=${storedAffiliate.replace("?via=", "")}`
            : ""; // Fallback to stored value
          setAffiliate(affiliateValue);
        }
      } catch (e) {
        console.log("Error setting affiliate cookie", e);
      }
    }
  }, []);

  const getAffiliate = () => affiliate; // Return the stored or fallback value from state

  return { getAffiliate };
};

// Custom hook to retrieve the `via` parameter
function ViaParamComponent() {
  const searchParams = useSearchParams();
  return searchParams.get("via"); // returns string | null
}

export function useViaParam() {
  return (
    <Suspense fallback={null}>+
      <ViaParamComponent />
    </Suspense>
  );
}
