import React from 'react'

const Home = () => {
    return (
        <div className="homepage-div">
            <div className="homepage-content">
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
            </div>
        </div>
    )
}

export default Home
