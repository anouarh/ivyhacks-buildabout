import React from "react";
import "./project-component.css";
import "wired-elements";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InfoIcon from "@material-ui/icons/Info";

const projectComponent = (props) => {
  return (
    <div className="item-project">
      <wired-card>
        <div className="image">
          <img src={props.image} />
        </div>
        <h1>{props.name}</h1>
        <h3>Safety level: {props.rating}</h3>
        <p>{props.description}</p>
        <div className="actions">
          <wired-icon-button>
            <InfoIcon></InfoIcon>
          </wired-icon-button>
          <wired-icon-button>
            <YouTubeIcon></YouTubeIcon>
          </wired-icon-button>
        </div>
      </wired-card>
    </div>
  );
};

export default projectComponent;
