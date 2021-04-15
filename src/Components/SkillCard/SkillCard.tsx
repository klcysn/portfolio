import React from 'react'
import "./SkillCard.scss"
import Tilt from "react-parallax-tilt";


const SkillCard: React.FC<any> = ({item, width}) => {
    return ( 
        <Tilt
        className="parallax-effect-img tilt"
        tiltMaxAngleX={-45}
        tiltMaxAngleY={-45}
        perspective={900}
        scale={1}
        transitionSpeed={1500}
        gyroscope={true}
        glareColor={"rgba(0,0,0,0)"}
        > 
        <div className="col-4">
                <div className="card">
                <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.src} className="card-img-top" style={{width: width}} alt={item.alt} />
                    <h5 className="card-title">{item.alt}</h5>
                </a>
                </div>
            </div>
        </Tilt>
    )
}

export default SkillCard;
