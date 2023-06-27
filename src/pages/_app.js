import React from "react";
import Head from 'next/head'
import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import { AppWrapper } from "../../contexts/chatContext";
import NotLoggedMessage from "@/components/NotLoggedMessage";

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>GeoConectar</title>
      </Head>
      <AppWrapper>
          <NotLoggedMessage />
          <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}
