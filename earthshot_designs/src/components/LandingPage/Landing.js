import React from "react";
// Sections
import TopNavbar from "./Nav/TopNavbar";
import Header from "./Sections/Header";
import About from "./Sections/About";
import Studies from "./Sections/Studies";
import Categories from "./Sections/Categories";
import Metrics from "./Sections/Metrics";
import Testiomonials from "./Sections/Testimonials";
import FAQ from "./Sections/Faq";
import Footer from "./Sections/Footer"

export default function Landing() {  
  return (
    <>
      <TopNavbar />
      <Header />
      <About />
      <Studies />
      <Categories />
      <Metrics />
      <Testiomonials />
      <FAQ />
      <Footer />
    </>
  );
}