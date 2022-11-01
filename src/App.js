import React from 'react';
import logo from './logo.svg';
import './App.css';
// import IconBar from './components/iconBar/iconBar';
import SocialMediaIconBar from './components/socialMediaIconBar/socialMediaIconBar';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <SocialMediaIconBar />
            </header>
        </div>
    );
}

export default App;
