import React from 'react'
import { Container, Row } from 'react-bootstrap'
import RecommendedCard from './RecommendCard'

const Recommendations = () => {
    const rowStyles = {
        padding: '2% 1%'
    }
    return (
        <div className="recommendations">
            <Container fluid>
                <Row style={rowStyles}>
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/f-h32vxEgw8/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBbBfMIPCCb4DlOXgbU1weo0OjC7Q"
                        title="My man ended up in Hell"
                        channelProfile="https://yt3.ggpht.com/ytc/AKedOLQTnvJJEOBW9GygltPYC0YRPCdViFhqKWatUmGkxA=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Hell"
                        videoViews="100K"
                        videoDuration="5:23"
                        videoPostTime="5 hours ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/0oV1ZZ_ci20/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCB7a6hNXepXNsPPdI1xYWLqd1SsA"
                        title="How ugly they look without Hijab"
                        channelProfile="https://yt3.ggpht.com/bbR1pdJiX8IlhgxJAGbhVURrlnkiD4C6pjuvHnQvB_EHW3e3WCY9QWMbPVZyxxNi0x2e0zYy=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Reality Show"
                        videoViews="600K"
                        videoDuration="9:45"
                        videoPostTime="1 hours ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/fnwbhKVfT_o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAUUx9TShvywEUOPuik-91OnWHgKg"
                        title="Chad Muslim educates Ignorant fool"
                        channelProfile="https://yt3.ggpht.com/ytc/AKedOLRoLjwckV1y_O2Cl2em8qhmf1AryYOKYjn6OEWmqA=s68-c-k-c0x00ffffff-no-rj"
                        channelName="The deen talk"
                        videoViews="100M"
                        videoDuration="4:45"
                        videoPostTime="1 min ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/0fwT9wShDcw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXdNUkusMXNUi_jTixh8rlR_SBSg"
                        title="Pastor had to use the toilet during debate"
                        channelProfile="https://yt3.ggpht.com/osXhJERrzmTRW0dRBwhJAXzNUhCfqL641Nt1-ZvKm1Bogwm8a7Mg1xzqFUcI_LamacOkTHXeCw=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Pastor Fails"
                        videoViews="1.5B"
                        videoDuration="5:23"
                        videoPostTime="20 hours ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/R_C86E8_inQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAksqzWyc3L8hnSjv5ZWKKmEmkeiw"
                        title="Fake Rainbow vs Sun"
                        channelProfile="https://yt3.ggpht.com/bbR1pdJiX8IlhgxJAGbhVURrlnkiD4C6pjuvHnQvB_EHW3e3WCY9QWMbPVZyxxNi0x2e0zYy=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Smoking LGBT all day"
                        videoViews="600K"
                        videoDuration="20:45"
                        videoPostTime="3 hours ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/6USP0-lJN2A/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_KqThjxXxqFeZCe-rJiEZJDzHyA"
                        title="MasahaAllah my man is praying"
                        channelProfile="https://yt3.ggpht.com/ytc/AKedOLTivVAMG0zvdIKiGp5SQeqdLkzsr4mlTPt7JliyAQ=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Muslim Players"
                        videoViews="100M"
                        videoDuration="2:45"
                        videoPostTime="10 min ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/VF0IuCGO6Yc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmNg3Z9A_jg-aCg2LMKhayBayP5A"
                        title="Putin puts puts puny in his place"
                        channelProfile="https://yt3.ggpht.com/ytc/AKedOLS2SZUR3w8r974zTHsQ9c-b8ob7n6X9cutfzr_wVmw=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Putin Pudding"
                        videoViews="100M"
                        videoDuration="12:45"
                        videoPostTime="40 min ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/dfBwjl6eQyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAOon5M3Q79B2xgM_M6P5ReL0J5UA"
                        title="Lions of Ummah"
                        channelProfile="https://yt3.ggpht.com/ytc/AKedOLRRnXEodZeuV7P3bLljHYTxIUWSIf5_Xw0pPPy7=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Sleeping Lions"
                        videoViews="1B"
                        videoDuration="1:45"
                        videoPostTime="50 min ago"
                    />
                    <RecommendedCard
                        img="https://i.ytimg.com/vi/pcr685vTIfA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDw0aAvHFiLARnvWL5vkdmkNDT7Zw"
                        title="Taliban build army"
                        channelProfile="https://yt3.ggpht.com/ytc/AKedOLRbe3tFAkwfT3AvENWwLXtrYgcuFUoXyOmoW4s=s68-c-k-c0x00ffffff-no-rj"
                        channelName="Dead Pool"
                        videoViews="1K"
                        videoDuration="6:45"
                        videoPostTime="10 min ago"
                    />
                </Row>
            </Container>
        </div>
    )
}

export default Recommendations
