import React from "react";

function WidePageTemplate(props) {
  return (
    <div className="WidePageTemplate">
      <div className="TopLine"></div>
      <div className="SideBar">
        {props.left}
        {props.children}
        {props.right}
      </div>
    </div>
  );
}

export default WidePageTemplate;
