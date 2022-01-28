import React from 'react'

const Topbar = () => {
    return (
        <div className="topnav">
            <div className="topbar">
                <div className="logo">
                    <img
                        src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png"
                        alt="fakeyoutube-logo"
                    />
                    <p className="logo-title">FakeTube</p>
                </div>
                <div className="searchbar">
                    <input className="search" type="text" placeholder="Search" />
                    <div className="search-icon">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="extraicons">
                    <i className="fas fa-video"></i>
                    <i className="fas fa-th"></i>
                    <i className="fas fa-bell"></i>
                    <div className="signin-btn">
                        <i className="far fa-user-circle signin-icon"></i>
                        <p>Sign in</p>
                    </div>
                </div>
            </div>
            <div className="search-tracker">
                <div className="tracker-search-text">
                    <button className="tracker-button">All</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Russia</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Turkey</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Islam</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">World Policy</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Muslims</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Israel</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Quran</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Arabic</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Sheikh</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Learn Arabic</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Sheikh</button>
                </div>
                <div className="tracker-search-text">
                    <button className="tracker-button">Learn Arabic</button>
                </div>
            </div>
        </div>
    )
}


export default Topbar
