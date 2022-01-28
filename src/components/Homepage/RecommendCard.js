import React from 'react'
import { Col } from 'react-bootstrap'

const RecommendedCard = (props) => {
    const colStyles = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <Col style={colStyles} xl={3} lg={4} md={4} sm={6}>
            <div className="recommend-card">
                <div className="video-img">
                    <img
                        src={props.img}
                        alt=""
                    />
                    <div className="video-duration">
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
                                <h6 className="channel-name">{props.channelName}</h6>
                                <div className="video-views-div">
                                    <h6 className="video-views">{props.videoViews} views</h6>
                                    <h6 className="video-time">{props.videoPostTime}</h6>
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
