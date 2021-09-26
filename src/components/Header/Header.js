import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div className="container-fluid p-4 bg-dark text-white">
            <h1>Make an Unstopable <span className="text-danger">Private Team</span> </h1>
            <p>Need some special person, Who are special on action, spy and intelligent.</p>
            <h2>Total Budget: <span className="text-danger"> 10M</span></h2>
        </div>
    );
};

export default Header;