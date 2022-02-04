import React from 'react'
import FormModal from './videoFormModal'

const VideoForm = () => {
    return (
        <>
            <div className="video-form-section">
                <FormModal />
                <div className="video-upload-section">
                    <img
                        src="https://www.gstatic.com/youtube/img/creator/no_content_illustration_upload_video_v3_darkmode.svg"
                        alt=""
                    />
                    <p className="video-form-section-text">
                        No content available
                    </p>
                    <button className="video-upload-btn">Upload Video</button>
                </div>
            </div>
        </>
    )
}

export default VideoForm
