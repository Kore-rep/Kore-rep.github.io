import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIconBar from "../socialMediaIconBar/socialMediaIconBar";
import "./homeScreen.scss";

export default function HomeScreen() {
  return (
    <div className="App">
      <div className="fade-in">
        <header className="App-header">
          <h1>Angus Longmore</h1>

          <h4 className="">Software developer at MRI Software</h4>
          <SocialMediaIconBar />
        </header>
      </div>
    </div>
  );
}
