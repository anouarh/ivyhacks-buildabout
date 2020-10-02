import React from "react";
import "wired-elements";
import "./home-page.css";

function Home() {
  return (
    <div className="home">
      <wired-card elevation="2">
        <h1>BuildAbout</h1>
      </wired-card>
      <section>
        <div className="vp-buttons">
          <wired-button>Virtual</wired-button>
          <wired-button>Physical</wired-button>
        </div>
        <div className="mt-inputs">
          <wired-input placeholder="Enter material"></wired-input>
          <wired-input placeholder="Enter tool"></wired-input>
        </div>
      </section>
    </div>
  );
}

export default Home;
