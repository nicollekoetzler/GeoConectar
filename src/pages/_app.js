import React from "react";
import Head from "next/head";
import Script from "next/script";
import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import { AppWrapper } from "../../contexts/chatContext";
import NotLoggedMessage from "@/components/NotLoggedMessage";

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GEOCONECTAR</title>
      </Head>
      <Script
        id="Adsense-id"
        async
        strategy="afterInteractive"
        onError={(e) => {
          console.error("Script failed to load", e);
        }}
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}`}
        crossorigin="anonymous"
      />
      <AppWrapper>
        <NotLoggedMessage />
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}
