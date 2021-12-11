import React, {useState} from 'react'
import './works.scss'



export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0)


    const data = [
        {
            id: "1",
            icon: "./assets/react.svg",
            title: "React",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/react.svg"
        },
        {
            id: "2",
            icon: "./assets/js.svg",
            title: "javaScript",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/js.svg"
        },
        {
            id: "3",
            icon: "./assets/nodejs.svg",
            title: "NodeJs",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/nodejs.svg"
        },
        {
            id: "4",
            icon: "./assets/css.svg",
            title: "CSS-3",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/css.svg"
        },
        {
            id: "5",
            icon: "./assets/html.svg",
            title: "HTML5",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/html.svg"
        },
        {
            id: "5",
            icon: "./assets/mongodb.svg",
            title: "MongoDB",
            desc: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
            img: "./assets/mongodb.svg"
        }
       
    ]

    const checkNumber = (number) => {
        if (number > data.length-1){
          return 0;
        }
        if (number < 0){
          return data.length-1;
        }
        return number;
      } 
    const left = ()=> {
        setCurrentSlide((currentSlide)=>{
            let nextSlide = currentSlide+1;
            return checkNumber(nextSlide);
        })
    }
    const right = ()=> {
        setCurrentSlide((currentSlide)=>{
            let nextSlide = currentSlide-1;
            return checkNumber(nextSlide);
        })
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
                                <span>Projects{d.id} </span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <img src="assets/arrowLeft.svg" className="arrow left" alt="" onClick={left} />
            <img src="assets/arrowLeft.svg" className="arrow right" alt="" onClick={right}/>
        </div>
    )
}
