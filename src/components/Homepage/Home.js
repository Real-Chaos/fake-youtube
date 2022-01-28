import React from 'react'
import Topbar from '../Global/Topbar'
import Recommendations from './Recommendations'

const Home = () => {
    return (
        <div className="main-homepage">
            <div>
                <div className="sidenav">
                    <div className="sidenav-toggle">
                        <i className="fas fa-bars"></i>
                    </div>
                    <div className="sidenav-icons">
                        <div className="icon">
                            <div>
                                <i className="fas fa-home"></i>
                                <p>Home</p>
                            </div>
                        </div>
                        <div className="icon">
                            <div>
                                <i className="far fa-compass"></i>
                                <p>Explore</p>
                            </div>
                        </div>
                        <div className="icon">
                            <div>
                                <yt-icon
                                    id="icon"
                                    className="guide-icon style-scope ytd-mini-guide-entry-renderer"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                        className="style-scope yt-icon"
                                        fill="white"
                                        style={{
                                            pointerEvents: 'none',
                                            display: 'block',
                                            margin: 'auto',
                                            width: '30px',
                                            height: 'auto',
                                            fontSize: 20
                                        }}
                                    >
                                        <g className="style-scope yt-icon">
                                            <path
                                                d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                                                className="style-scope yt-icon"
                                            />
                                        </g>
                                    </svg>
                                </yt-icon>
                                <p style={{ marginTop: 3 }}>Subscriptions</p>
                            </div>
                        </div>
                        <div className="icon">
                            <div>
                                <yt-icon
                                    id="icon"
                                    className="guide-icon style-scope ytd-mini-guide-entry-renderer"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        preserveAspectRatio="xMidYMid meet"
                                        focusable="false"
                                        className="style-scope yt-icon"
                                        fill='white'
                                        style={{
                                            pointerEvents: 'none',
                                            display: 'block',
                                            margin: 'auto',
                                            width: '30px',
                                            height: 'auto',
                                            fontSize: 20
                                        }}
                                    >
                                        <g className="style-scope yt-icon">
                                            <path
                                                d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                                                className="style-scope yt-icon"
                                            />
                                        </g>
                                    </svg>
                                </yt-icon>
                                <p style={{ marginTop: 3 }}>Library</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-div">
                <div className="homepage-content">
                    <div className="topbar-div">
                        <Topbar />
                    </div>
                    <div className="recommendations-div">
                        <Recommendations />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
