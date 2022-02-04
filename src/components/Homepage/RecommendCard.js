import React, { useRef, useEffect, useState } from 'react'
import { Col } from 'react-bootstrap'
import { Player } from 'video-react'

const RecommendedCard = (props) => {
    const colStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    const videoRef = useRef()
    const [hideDuration, setHideDuration] = useState(false)

    useEffect(() => {
        // if (hideDuration === false) {
        var durationInterval = setInterval(() => {
            const video = videoRef.current.getState().player
            if (video.currentTime > 0) {
                console.log('VIDEO IS STILL PAUSED')
                setHideDuration(true)
                clearInterval(durationInterval)
                return
            }
        }, 1)
        // }
    }, [])

    return (
        <Col style={colStyles} xl={3} lg={4} md={4} sm={6}>
            <div className="recommend-card" style={{ width: '100%' }}>
                <div className="video-img">
                    {/* <video
                        ref={videoRef}
                        controls
                        src="http://media.w3.org/2010/05/bunny/movie.mp4"
                        onClick={() => console.log(Math.floor(videoRef.current.currentTime))}
                    /> */}
                    <Player
                        ref={videoRef}
                        playsInline
                        poster={props.img}
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        width="100%"
                    ></Player>
                    <div
                        style={
                            hideDuration
                                ? { display: 'none' }
                                : { display: 'block' }
                        }
                        className="video-duration"
                    >
                        <p>{props.videoDuration}</p>
                    </div>
                </div>
                <div className="video-info">
                    <div className="video-title">
                        <img
                            className="video-profile-img"
                            src={props.channelProfile}
                            alt=""
                        />
                        <div className="video-title-text-div">
                            <h6 className="video-title-text">{props.title}</h6>
                            <div className="video-extra-info">
                                <h6 className="channel-name">
                                    {props.channelName}
                                </h6>
                                <div className="video-views-div">
                                    <h6 className="video-views">
                                        {props.videoViews} views
                                    </h6>
                                    <h6 className="video-time">
                                        {props.videoPostTime}
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default RecommendedCard
