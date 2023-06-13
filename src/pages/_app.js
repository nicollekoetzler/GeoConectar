import React from "react";
import "../assets/styles/reset.css";
import "../assets/styles/style.css";
import { AppWrapper } from "../../contexts/chatContext";
import NotLoggedMessage from "@/components/NotLoggedMessage";

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
        <NotLoggedMessage />
        <Component {...pageProps} />
    </AppWrapper>
  );
}
