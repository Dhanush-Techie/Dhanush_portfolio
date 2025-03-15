import React, { useEffect } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PageHeaderContent from "../../components/pageHeaderContent";
import "./style.scss";

const Resume = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/resume") {
      handleDownload();
    }
  }, [location.pathname]); // Triggers whenever route changes

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Path to the resume file in the public folder
    link.download = "My_Resume.pdf"; // Custom filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
      />
      <button onClick={handleDownload} className="download-btn">
        Download Again
      </button>
    </section>
  );
};

export default Resume;
