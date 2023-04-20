import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIconBar from "../socialMediaIconBar/socialMediaIconBar";
import "./homeScreen.scss";

export default function HomeScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Angus Longmore</h1>

        <h4>Software developer at REPL Group, Part of Accenture</h4>
        <SocialMediaIconBar />
      </header>
    </div>
  );
}
