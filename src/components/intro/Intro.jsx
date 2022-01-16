
import "./intro.scss"

export default function Intro() {

    return (
        <div>
            <div className="intro" id="intro">
                <div className="left">
                    <div className="imgContainer">
                        <img src="assets/profilePic.svg" alt="man-avatar" />
                    </div>
                </div>
                <div className="right">
                    <div className="wrapper">
                        <h2 style={{fontWeight:400}}>Hi There, I'm</h2>
                        <h1>John Doe</h1>
                        <h3 style={{fontWeight:300}}>Web <span>Developer !</span></h3>
                    </div>
                    <a href="#portfolio">
                        <img src="assets/downArrow.png" alt="" />
                    </a>
                </div>
                
            </div>
        </div>
    )
}
