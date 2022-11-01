import React from 'react';
import SocialMediaIconBar from '../socialMediaIconBar/socialMediaIconBar';
import './homeScreen.scss';

export default function HomeScreen() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Angus Longmore</h2>
                <h2>Get in contact</h2>
                <SocialMediaIconBar />
            </header>
        </div>
    );
}
