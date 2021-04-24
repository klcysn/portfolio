import { useState } from 'react'
import "./Home.scss"
import Carousel from "../../Components/Caraousel/Carousel"
import Mobil from "../../Components/Mobil/Mobil"
import Frontend from "../../Components/Frontend/Frontend"
import Backends from "../../Components/Backends/Backends"

const Home = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [spy, setSpy] = useState("")

    document.addEventListener('scroll', function(e) {
        setScrollPosition(window.scrollY)
    })

    const defineSpy = (event:React.PointerEvent<HTMLDivElement>) => setSpy(event.currentTarget.id)

    return (
        <div className="home-container">
            <div id="list-example" className="list-group">
                <a className="list-group-item list-group-item-action"
                style={{color: spy==="Main" ? "#B2D732" : ""}}
                href="#Main"><i className="fas fa-circle"></i> Main</a>
                <a className="list-group-item list-group-item-action"
                style={{color: spy==="Mobil" ? "#092834" : ""}}
                href="#Mobil"><i className="fas fa-circle"></i> Mobil</a>
                <a className="list-group-item list-group-item-action"
                style={{color: spy==="Frontend" ? "#092834" : ""}}
                href="#Frontend"><i className="fas fa-circle"></i> Frontend</a>
                <a className="list-group-item list-group-item-action"
                style={{color: spy==="end" ? "#092834" : ""}}
                href="#end"><i className="fas fa-circle"></i> Backend</a>
            </div>
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" className="scrollspy-example" tabIndex={0}>
                <div>
                    <Carousel/>
                </div>
                <div id="Mobil" onPointerEnter={defineSpy}>
                    <Mobil />
                </div>
                <div id="Frontend" onPointerEnter={defineSpy}>
                    <Frontend />
                </div>
                <div id="end" onPointerEnter={defineSpy}>
                    <Backends />
                </div>
            </div>
            <div className="moving-type-container" id="Main" onPointerEnter={defineSpy}>
                <h1 className="moving-type" style={{left: `${-450 + scrollPosition * 1.5}px`, top:"10vh"}}>Communication Creativity Critical thinking Desire to learn Flexibility Innovation Problem solving Research</h1>
                <h1 className="moving-type" style={{left: `${-450 - scrollPosition * 1.5}px`, top:"25vh"}}>Flexibility Innovation Problem solving Research Tolerance of change and uncertainty Willingness to learn Decision making Giving clear feedback Leadership Management Mentoring Motivating Project management Confidence Enthusiasm</h1>
                <h1 className="moving-type" style={{left: `${-1000 + scrollPosition * 1.5}px`, top:"40vh"}}>Uncertainty Willingness to learn Decision making Giving clear feedback Leadership Management Mentoring Motivating Project management Confidence Enthusiasm Friendliness Patience Humorous Respectability Teamwork Collaboration Dealing with difficult situations Emotional intelligence </h1>
                <h1 className="moving-type small-hide" style={{left: `${-450 - scrollPosition * 1.5}px`, top:"55vh"}}>Leadership Management Mentoring Motivating Project management Confidence Enthusiasm Friendliness Patience Humorous Respectability Teamwork Collaboration Dealing with difficult situations Emotional intelligence Empathy Interpersonal skills Influence Networking Persuasion Self-awareness Team building Business ethics Attentiveness Competitiveness Motivation Multitasking Organization Persistence Planning Punctuality Reliability Scheduling Self-directed Time management</h1>
            </div>
        </div>
    )
}

export default Home
