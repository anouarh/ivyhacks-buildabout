import React from "react";
import "./playdate-page.css";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CallIcon from "@material-ui/icons/Call";
import AutorenewIcon from "@material-ui/icons/Autorenew";

function PlayDate() {
  return (
    <div className="playdate-main">
      <wired-card>
        <wired-icon-button elevation="3">
          <CallIcon></CallIcon>
        </wired-icon-button>
        <wired-icon-button elevation="3">
          <VideoCallIcon></VideoCallIcon>
        </wired-icon-button>
        <wired-icon-button elevation="3">
          <AutorenewIcon></AutorenewIcon>
        </wired-icon-button>
      </wired-card>
    </div>
  );
}

export default PlayDate;
