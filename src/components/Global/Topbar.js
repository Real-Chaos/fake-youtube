import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'

const Topbar = () => {
    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
            ? JSON.parse(localStorage.getItem('loginData'))
            : null
    )

    const handleFailure = (result) => {
        console.log(result)
    }
    const handleLogin = async (googleData) => {
        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await res.json()
        setLoginData(data)
        localStorage.setItem('loginData', JSON.stringify(data))
    }

    const showProfile = () => {
        const userProfile = document.querySelector('.user-profile')
        userProfile.classList.toggle('show')
    }
    const handleLogout = () => {
        localStorage.removeItem('loginData')
        setLoginData(null)
    }
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
                    <input
                        className="search"
                        type="text"
                        placeholder="Search"
                    />
                    <div className="search-icon">
                        <i className="fas fa-search"></i>
                    </div>
                </div>
                <div className="extraicons">
                    <i className="fas fa-video"></i>
                    <i className="fas fa-th"></i>
                    <i
                        style={
                            loginData ? { marginRight: 0 } : { marginRight: 10 }
                        }
                        className="fas fa-bell bell-icon"
                    ></i>
                    {loginData ? (
                        <>
                            <img
                                onClick={showProfile}
                                className="loggedin-img"
                                src={loginData.picture}
                                alt=""
                            />
                            <div className="user-profile">
                                <div className="profile-section1">
                                    <img
                                        src={loginData.picture}
                                        alt=""
                                        className="profile-img"
                                    />
                                    <h6 className="profile-name">
                                        {loginData.name}
                                    </h6>
                                </div>
                                <div className="profile-section2">
                                    <div className="signout">
                                        <p onClick={handleLogout}>
                                            <i className="fas fa-sign-out-alt"></i>
                                        </p>
                                        <p onClick={handleLogout}>Sign out</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                style={{ position: 'absolute' }}
                                className="signin-btn"
                            >
                                <i className="far fa-user-circle signin-icon"></i>
                                <p>Sign in</p>
                            </div>
                            <div
                                style={{ opacity: '0' }}
                                className="google-login"
                            >
                                <GoogleLogin
                                    clientId="281220370018-43u77pb9blk2gondvb3461sl8priob8e.apps.googleusercontent.com"
                                    buttonText="Sign In"
                                    onSuccess={handleLogin}
                                    onFailure={handleFailure}
                                    cookiePolicy={'single_host_origin'}
                                ></GoogleLogin>
                            </div>
                        </>
                    )}
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
