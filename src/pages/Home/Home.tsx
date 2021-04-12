import React, { useState } from 'react'
import "./Home.scss"
import Carousel from "../../Components/Caraousel/Carousel"

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    document.addEventListener('scroll', function(e) {
        setScrollPosition(window.scrollY)
    })
    return (
        <div className="home-container">
            <div id="list-example" className="list-group">
                <a className="list-group-item list-group-item-action" href="#list-item-1"><i className="fas fa-circle"></i> First</a>
                {/* <a className="list-group-item list-group-item-action" href="#list-item-2"><i className="fas fa-circle"></i> Second</a> */}
            </div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset={0} className="scrollspy-example" tabIndex={0}>
                <h1  id="list-item-1"></h1>
                <Carousel />
                {/* <h1  id="list-item-2"></h1>
                <Carousel /> */}
            </div>
            <div className="moving-type-container">
                <h1 className="moving-type" style={{left: `${-250 + scrollPosition * 2}px`, top:"10vh"}}>Communication Creativity Critical thinking Desire to learn Flexibility Innovation Problem solving Research</h1>
                <h1 className="moving-type" style={{left: `${-250 - scrollPosition * 2}px`, top:"30vh"}}>Flexibility Innovation Problem solving Research Tolerance of change and uncertainty Willingness to learn Decision making Giving clear feedback Leadership Management Mentoring Motivating Project management Confidence Enthusiasm</h1>
                <h1 className="moving-type" style={{left: `${-250 + scrollPosition * 2}px`, top:"50vh"}}>Uncertainty Willingness to learn Decision making Giving clear feedback Leadership Management Mentoring Motivating Project management Confidence Enthusiasm Friendliness Patience Humorous Respectability Teamwork Collaboration Dealing with difficult situations Emotional intelligence </h1>
                <h1 className="moving-type" style={{left: `${-250 - scrollPosition * 2}px`, top:"70vh"}}>Leadership Management Mentoring Motivating Project management Confidence Enthusiasm Friendliness Patience Humorous Respectability Teamwork Collaboration Dealing with difficult situations Emotional intelligence Empathy Interpersonal skills Influence Networking Persuasion Self-awareness Team building Business ethics Attentiveness Competitiveness Motivation Multitasking Organization Persistence Planning Punctuality Reliability Scheduling Self-directed Time management</h1>
            </div>
        </div>
    )
}

export default Home
