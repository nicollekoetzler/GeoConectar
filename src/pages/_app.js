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
      <Script
        id="Adsense-id"
        async
        strategy="afterInteractive"
        onError={ (e) => { console.error('Script failed to load', e) }}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1565712275254066"
        crossorigin="anonymous"
      />
      <Head>
        <title>GEOCONECTAR</title>
      </Head>
      <AppWrapper>
          <NotLoggedMessage />
          <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}
