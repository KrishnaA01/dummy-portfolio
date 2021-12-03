import React, {useState} from 'react'
import './works.scss'



export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)


    const data = [
        {
            id: "1",
            icon: "./assets/mobile.svg",
            title: "Web Design-1",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./design.png"
        },
        {
            id: "2",
            icon: "./assets/mobile.svg",
            title: "Web Design-2",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./design.png"
        },
        {
            id: "3",
            icon: "./assets/mobile.svg",
            title: "Web Design-3",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./design.png"
        },
       
    ]

    const handleClick = (way)=> {
        way === "left" 
        ? setCurrentSlide (currentSlide > 0 ? currentSlide-1 : 2)
        : setCurrentSlide (currentSlide < data.lenth-1 ? setCurrentSlide+1 :0);
    }
    return (
        <div className="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide *100}vw )`}} >
               { data.map((d)=> (
               <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc} </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="assets/design.png" alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrowLeft.svg" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/arrowLeft.svg" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    )
}
