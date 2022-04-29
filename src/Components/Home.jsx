import React from "react";
import Aboutme from "./Aboutme";
import Contactme from "./Contactme";
import Footer from "./Footer";
import { Header } from "./Header";
import Hero from "./Hero";
import Project from "./Project";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Aboutme />
      <Project />
      <Contactme />
      <Footer />
    </>
  );
};

export default Home;
