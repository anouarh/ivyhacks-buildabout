import React from "react";
import "./playdate-page.css";

function PlayDate() {
  return (
    <div className="playdate-main">
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

export default PlayDate;
