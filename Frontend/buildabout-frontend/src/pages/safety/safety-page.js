import React from "react";
import "./safety-page.css";

function Safety() {
  return (
    <div className="safety-main">
      <wired-card>
        <wired-button elevation="3">
          Random Audio Call
        </wired-button>
        <wired-button elevation="3">
          Random Video Call
        </wired-button>
        <wired-button elevation="3">
          Random Project Call
        </wired-button>
      </wired-card>
    </div>
  );
}

export default Safety;
