import Head from "next/head";
import Script from "next/script";

import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Head>
        <title>LockedIn AI</title>
        <meta
          name="google-site-verification"
          content="DpzzOR3gDrX4lS6q3bCwfj6wR858zBfIUGz_BD_TLJ4"
        />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-83V88ZBV84"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-83V88ZBV84');
          `,
        }}
      />
      <Script
        src="//cdn.cookie-script.com/s/191ec4338d736a4db81803f114cc5b99.js"
        strategy="afterInteractive"
      />

      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MG773LD8');
          `,
        }}
      />

      {/* Freshworks Widget */}
      <Script
        id="freshworks-widget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.fwSettings = { 'widget_id': 157000000325 };
            !function() {
              if (typeof window.FreshworksWidget !== "function") {
                var n = function() { n.q.push(arguments) };
                n.q = [], window.FreshworksWidget = n;
              }
            }();
          `,
        }}
      />
      <Script
        src="https://widget.freshworks.com/widgets/157000000325.js"
        strategy="afterInteractive"
        async
        defer
      />

      {/* Add Rewardful Script */}
      <Script
        id="rewardful-script1"
        dangerouslySetInnerHTML={{
          __html: `
              (function(w,r){
                w._rwq=r;
                w[r]=w[r]||function(){
                  (w[r].q=w[r].q||[]).push(arguments)
                }
              })(window,'rewardful');
            `,
        }}
      ></Script>
      <Script
        id="rewardful-script2"
        async
        src="https://r.wdfl.co/rw.js"
        data-rewardful="750bb3"
      ></Script>

      {children}
    </main>
  );
}
