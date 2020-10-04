import React from "react";
import "./project-component.css";
import "wired-elements";

const projectComponent = (props) => {
  return (
    <div className="item">
      <wired-card>
        <div className="image">
            <img src={props.image}></img>
        </div>
        <h1>{props.name}</h1>
        <h3>Safety level: {props.rating}</h3>
        <p>{props.description}</p>
      </wired-card>
    </div>
  );
};

export default projectComponent;
