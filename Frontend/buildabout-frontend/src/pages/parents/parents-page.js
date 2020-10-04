import React from "react";
import "./parents-page.css";

function ValueButtons() {
  return (
    <div className="ValueButtons">
      <div className="ValueButton-Resourcefulness">
        <p className="Resourcefulness">Resourcefulness</p>
      </div>

      <div className="ValueButton-Responsibility">
        <p className="Responsibility">Responsibility</p>
      </div>

      <div className="ValueButton-Independance">
        <p className="Independance">Independance</p>
      </div>
    </div>
  );
}

function ParentsHeaderMessage() {
  return (
    <div>
      <h3 className="ParentsHeaderMessage">
        Use this site as a tool to let children explore, while keeping them out
        of harm's way. children and young teens today will spend more time
        inside than ever before. They will spend more time on screens than ever
        before, and maybe that won't ever change. But maybe we can use this
        screen to help encourage the curiosity, determination, and brilliance of
        these kids by giving them "parent-approved" projects that they can
        complete on their own.
      </h3>
    </div>
  );
}

function HowitWorks() {
  return (
    <div className="HowitWorks">
      {" "}
      <h4 className="HowitWorksTitle">How it Works</h4>
      <p className="HowitWorksMsg">
        Set the account persmisions in the Account tab. You can decide what
        types of tools you are comfortable your child using. Once this
        permission is set, only a parent can change it.
      </p>
      <p className="HowitWorksMsg">
        Once the account is set up, let your child explore the projects! Unlike
        most craft sites, where you have to search endlessly to find an
        appropriate project, Buildabout uses the materials you have and the
        child’s level of expertise to suggest projects
      </p>
      <p className="HowitWorksMsg">
        Once the account is set up, let your child explore the projects! Unlike
        most craft sites, where you have to search endlessly to find an
        appropriate project, Buildabout uses the materials you have and the
        child’s level of expertise to suggest projects
      </p>
      <p className="HowitWorksMsg">
        Once the account is set up, let your child explore the projects! Unlike
        most craft sites, where you have to search endlessly to find an
        appropriate project, Buildabout uses the materials you have and the
        child’s level of expertise to suggest projects
      </p>
    </div>
  );
}

function Ecotips() {
  return (
    <div className="EcotipsBox">
      {" "}
      <h4 className="Ecotips">Ecotips</h4>
      <p className="EcotipsMsg">
        Scattered throughout the project are eco-tips designed to foster
        knowledge about eco-friendly project practices.
      </p>
	  <p className="EcotipsMsg">
        Scattered throughout the project are eco-tips designed to foster
        knowledge about eco-friendly project practices.
      </p>
	  <p className="EcotipsMsg">
        Scattered throughout the project are eco-tips designed to foster
        knowledge about eco-friendly project practices.
      </p>
    </div>
  );
}

function Parents() {
  return (
    <div className="ParentsInner">
      <ParentsHeaderMessage></ParentsHeaderMessage>
      <ValueButtons> </ValueButtons>
      <div className="row">
        <HowitWorks></HowitWorks>
        <Ecotips></Ecotips>
      </div>
    </div>
  );
}

export default Parents;
