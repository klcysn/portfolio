import React from 'react'
import "./Home.scss"
import Carousel from "../../Components/Caraousel/Carousel"

const Home = () => {
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
        </div>
    )
}

export default Home
