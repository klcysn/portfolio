import React from 'react'
import "./Carousel.scss"

const imageList = [
    {src: "https://areknawo.com/content/images/2019/02/68747470733a2f2f64323169693931693379366f36682e636c6f756466726f6e742e6e65742f67616c6c6572795f696d616765732f66726f6d5f70726f6f662f31303037342f6c617267652f313435353731343038312f747970657363726970742e706e67.png", alt: "Typescript"},
    {src: "https://softwarehut.b-cdn.net/wp-content/uploads/2020/03/what-is-react-native.png", alt: "React Native"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png", alt: "React"},
    {src: "https://avatars.githubusercontent.com/u/13142323?s=400&v=4", alt: "Redux"},
    {src: "https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png", alt: "Javascript"},
    {src: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67", alt: "Python"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/SQLite370.svg/1200px-SQLite370.svg.png", alt: "Sqlite"},
    {src: "https://www.solarwinds.com/-/media/solarwinds/swdcv2/licensed-products/service-desk/integrations/sd-integrations-logo-jira.ashx?rev=701fbaa7f8ac4ae08e0406c8984c43e7&hash=75D4F04DE99B88DE7B2C4193F0616F1F", alt: "Jira"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png", alt: "HTML"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png", alt: "CSS"},
    {src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png", alt: "SCSS"},
    {src: "https://camo.githubusercontent.com/a664defdd5c2ec93a3fbfb51e0f2aaafa5dc57bf1e13aa47456ced037b3cebe8/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67", alt: "Bootstrap"},
    {src: "https://styled-components.com/logo.png", alt: "Styled Components"},
    {src: "https://cdn.filestackcontent.com/deELKydSd2peczaOPAAa", alt: "NodeJs"},
    {src: "https://nextsoftware.io/files/images/logos/main/django-logo.png", alt: "Django"},
    {src: "https://i0.wp.com/www.disk91.com/wp-content/uploads/2018/02/mongodb-1.png?fit=413%2C484&ssl=1", alt: "MongoDB"},
    {src: "https://camo.githubusercontent.com/ce9c7a173f38722e129d5ae832a11c928ff72683fae74cbcb9fff41fd9957e63/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f332f33662f4769745f69636f6e2e7376672f3130323470782d4769745f69636f6e2e7376672e706e67", alt: "Git"},
    {src: "https://2sxc.org/Portals/0/adam/Content/4IqBjx3pXEC7a7-fVX2GBQ/Image/github-logo.png?w=1080&scale=both&quality=50", alt: "Github"},
]

const Carousel = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                    <p className="carousel-start">My Skills</p>
                </div>
               {imageList.map((item, i)=>{
                   return(
                    <div key={i} className="carousel-item" data-bs-interval="1000">
                        <img src={item.src} className="d-block" alt={item.alt} />
                    </div>
                   )
               }) 
                }
            </div>
            {imageList.map((item, i)=> <img key={i} style={{transform: `rotate(${i*20}deg) translate(19vw) rotate(${-i*20}deg)`}} className="circle-item" src={item.src} alt={item.alt} />
            )}
        </div>
    )
}

export default Carousel
