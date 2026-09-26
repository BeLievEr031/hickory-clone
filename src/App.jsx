import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatementSection from "./components/StatementSection";
import FeaturesSection from "./components/Feature";
import AudienceSection from "./components/Audience";
import ComplianceSection from "./components/ComplianceSection";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <StatementSection />
      <FeaturesSection />
      <AudienceSection />
      <ComplianceSection />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
