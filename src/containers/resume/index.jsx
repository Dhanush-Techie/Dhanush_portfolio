import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";

const Resume = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/resume") {
      handleDownload();
    }
  }, [location.pathname]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/myresume.pdf"; // Ensure the file is in the 'public' folder
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume">
      <PageHeaderContent headerText="My Resume" />
      <button onClick={handleDownload} className="download-btn">
        Download Resume
      </button>
    </section>
  );
};

export default Resume;
