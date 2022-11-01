import React from 'react';
import logo from './logo.svg';
import './App.scss';
// import IconBar from './components/iconBar/iconBar';
import SocialMediaIconBar from './components/socialMediaIconBar/socialMediaIconBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>Angus Longmore</h2>
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Get in contact</h2>
                <SocialMediaIconBar />
            </header>
        </div>
    );
}

export default App;
