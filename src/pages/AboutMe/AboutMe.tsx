import React, { useEffect, useState } from 'react'
import "./AboutMe.scss"

const AboutMe = () => {
    const [move, setMove] = useState(-0.2)

    useEffect(()=>{
        if(move < -48.2){
            setMove(-0.2)
        }else{
            setTimeout(()=> setMove(move - 3), 4500)
        }
    },[move])
    return (
        <div className="me-container">
            <div className="text-container">
                <p className="text" style={{transform:`translateY(${move}rem)`}}>Dynamic full stack developer skilled at developing complex solutions, possessing strong creative thinking skills, high energy and integrity. Reliable and resourceful, having 7 years of experience in engineering, managerial and assistant work in public institutions, mid-level computer savvy individual who has the desire to learn various technologies, constantly learn more about full stack development and grow into a senior technical position, fully understand Programming concept and variety of platform, databases environments, and coding languages. Ability to interact positively and communicate appropriately with team members, customers, and management, learn new technology, have worked with HTML/CSS/Scss, Bootstrap, Javascript, React, React Native, Redux, NodeJS, MongoDB, Django and some scripting languages a little bit of Python and SQL.<br/>My Strengths;<br/> I am Passionate about the product and the creative process, Self-motivated and driven by my results, Willing to contribute and take the initiative to execute innovative new ideas, Persistent to problem solving, I like to participate in planning, code review, retrospectives and improvement, I am natural team-player, I am adaptable, I am responsible.
                </p>
            </div>
        </div>
    )
}

export default AboutMe
