import React from "react";
import Footer from "components/Footer/Footer.js";
import SectionDownload from "views/Components/Sections/SectionDownload.js";
import "assets/css/components/bottomStyle.css";
import bottom from "assets/img/stocks/background-animals-bottom.jpg";

export default function Bottom() {
  return (
    <div
      className={"bottom-container"}
      style={{
        backgroundImage: `url(${bottom})`,
      }}
    >
      <SectionDownload />
      <Footer />
    </div>
  );
}
