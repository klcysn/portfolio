import React from 'react'
import "./SkillCard.scss"


const SkillCard: React.FC<any> = ({item, width}) => {
    return (  
        <div className="col-4">
                <div className="card">
                <a href={item.link} target="_blank" rel="noreferrer">
                    <img src={item.src} className="card-img-top" style={{width: width}} alt={item.alt} />
                    <h5 className="card-title">{item.alt}</h5>
                </a>
                </div>
            </div>
    )
}

export default SkillCard;
