import React from "react";
import { Helmet } from "react-helmet";
import Router from "./routes.js";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router />
    </>
  );
}
