import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIconBar from "../socialMediaIconBar/socialMediaIconBar";
import "./homeScreen.scss";

export default function HomeScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <Link className="link-text" to={`splash`}>
          Angus Longmore
        </Link>
        <h4>Software developer at REPL Group, Part of Accenture</h4>
        <SocialMediaIconBar />
      </header>
    </div>
  );
}
