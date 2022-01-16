import PortfolioList from "../portfolioList/PortfolioList"
import React, { useState, useEffect } from "react"
import "./portfolio.scss"
import { featuredPortfolio,webPortfolio } from "../../data"
import { v4 as uuidv4 } from 'uuid';



export default function Portfolio() {

    const [selected, setSelected]= useState("featured")
    const [data,setData] = useState([]);

    const list=[
        {
        id:"featured",
        title:"Featured",
        },
        {
        id:"web",
        title:"Web App",
        },
        {
        id:"mobile",
        title:"Mobile App",
        },
        {
        id:"design",
        title:"Design",
        },
        {
        id:"content",
        title:"Content",
        }
    ];

    useEffect(() => {
       switch(selected){
           case "featured":
               setData(featuredPortfolio);
               break;
               case "web":
                   setData(webPortfolio);
                   break;
                   default:
       }
    }, [selected])



    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
               {list.map((item)=>(
                   <PortfolioList
                key={uuidv4()}
                title = {item.title} 
                active={selected === item.id}
                id={item.id}
                setSelected={setSelected}
                />

               ))}
               
            </ul>
            <div className="container">
                {data.map((d)=>(
                <div  key={uuidv4()} className="item">
                    <img 
                    src={d.img}
                    alt="digital marketing"
                    />
                    <h3>{d.title}</h3>
                </div>
                ))}

            </div>
        </div>
    )
}

