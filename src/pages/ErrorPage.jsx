// src/pages/ErrorPage.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

const imgURL =
  "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: "500px",
        marginTop: "24px",
      }}
    >
      <h1>404</h1>
      <img src={imgURL} alt="404 error gif" className="page-img" />
    </div>
  );
}

export default ErrorPage;
