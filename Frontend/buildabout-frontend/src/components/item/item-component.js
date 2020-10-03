import React from "react";
import "./item-component.css";
import "wired-elements";

const item = (props) => {
  return (
    <div className="item">
      <wired-card>
        <wired-button>Add</wired-button>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </wired-card>
    </div>
  );
};

export default item;
