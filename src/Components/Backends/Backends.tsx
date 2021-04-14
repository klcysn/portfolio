import React, { useState } from 'react'
import "./Backend.scss"

const Backends = () => {
    const [size, setSize] = useState(window.innerWidth)

    const reportWindowSize = () => setSize(window.innerWidth)

    window.onresize = reportWindowSize;

    return (
        <div className="backend-container">
            <h1 className="header-backend">Some Backend Projects of My Projects</h1>
            <h1 className="middle-header">Backend</h1>
            <a rel="noreferrer" href="https://github.com/klcysn/blog_fullstack_backend" style={{transform:"rotate(51.4deg) translate(19vw) rotate(-51.4deg)"}} className="backend-list" target="_blank" aria-current="true">
            blog_fullstack_backend
            </a>
            <a rel="noreferrer" href="https://github.com/klcysn/django_quiz_application" style={{transform:"rotate(102.8deg) translate(19vw) rotate(-102.8deg)"}} className="backend-list" target="_blank">Django Quiz</a>
            <a rel="noreferrer" href="https://github.com/klcysn/django_blog_2" style={{transform:"rotate(154.2deg) translate(19vw) rotate(-154.2deg)"}} className="backend-list" target="_blank">Django Blog 2</a>
            <a rel="noreferrer" href="https://github.com/klcysn/django_blog" style={{transform:"rotate(205.6deg) translate(19vw) rotate(-205.6deg)"}} className="backend-list" target="_blank">Django Blog</a>
            <a rel="noreferrer" href="https://github.com/klcysn/nodejs_blog" style={{transform:"rotate(257deg) translate(19vw) rotate(-257deg)"}} className="backend-list" target="_blank" aria-disabled="true">NodeJs Blog</a>
            <a rel="noreferrer" href="https://github.com/klcysn/mern" style={{transform:"rotate(308.4deg) translate(19vw) rotate(-308.4deg)"}} className="backend-list" target="_blank" aria-disabled="true">Mern</a>
            <a rel="noreferrer" href="https://github.com/klcysn/fullstack_project" style={{transform:"rotate(359.8deg) translate(19vw) rotate(-359.8deg)"}} className="backend-list" target="_blank" aria-disabled="true">Mern-2</a>
        </div>
    )
}

export default Backends
