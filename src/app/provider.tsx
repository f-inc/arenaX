// app/providers.js
"use client";
import Script from "next/script";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { FC, PropsWithChildren } from "react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

const PHProvider: FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-03YEWGLQJE" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-03YEWGLQJE');
        `}
      </Script>

      <PostHogProvider client={posthog}>{children}</PostHogProvider>
    </>
  );
};

export default PHProvider;
