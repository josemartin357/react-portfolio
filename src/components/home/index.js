import React, { useState } from "react";
import Header from "../header";
// import Body from "../body";
import Footer from "../footer";
import "./home.css";
import About from "../body/about";
import Projects from "../body/projects";
import Skills from "../body/skills";
import Work from "../body/work";
import Email from "../body/contact/email";
import Summary from "../body/summary";

function Home() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Summary") {
      return <Summary />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Skills") {
      return <Skills />;
    }
    if (currentPage === "Work") {
      return <Work />;
    }
    if (currentPage === "Email") {
      return <Email />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="home">
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div>{renderPage()}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
