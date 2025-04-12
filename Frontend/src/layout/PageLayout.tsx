import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-[#f3eee7] min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default PageLayout;
