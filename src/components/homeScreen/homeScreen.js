import React from "react";
import { Link } from "react-router-dom";
import SocialMediaIconBar from "../socialMediaIconBar/socialMediaIconBar";
import "./homeScreen.scss";

export default function HomeScreen() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={`splash`}>Angus Longmore</Link>
        <h2>Get in contact</h2>
        <SocialMediaIconBar />
      </header>
    </div>
  );
}
