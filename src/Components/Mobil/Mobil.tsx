import React from 'react'
import SkillCard from "../SkillCard/SkillCard"
import "./Mobil.scss"

const imageList = [
    {src: "https://user-images.githubusercontent.com/67810399/96121702-b6fe6f80-0ef0-11eb-8790-dad02412271b.gif", alt: "Amazon", link: "https://github.com/klcysn/android/tree/main/amazon"},
    {src: "https://user-images.githubusercontent.com/67810399/98593662-c3999c00-22d3-11eb-9698-5a5e27922b2a.gif", alt: "Chat App", link: "https://github.com/klcysn/android/tree/main/chatApp"},
    {src: "https://user-images.githubusercontent.com/67810399/98227289-6ca06980-1f57-11eb-8a6d-ff99adbb5972.gif", alt: "Find Job", link: "https://github.com/klcysn/android/tree/main/findJob"},
    {src: "https://user-images.githubusercontent.com/67810399/96517550-6c228600-1269-11eb-8577-0290b1141af0.gif", alt: "Hang Man", link: "https://github.com/klcysn/android/tree/main/hangMan"},
    {src: "https://user-images.githubusercontent.com/67810399/97031090-07647580-1560-11eb-96f8-98404b6cf339.gif", alt: "Famous", link: "https://github.com/klcysn/android/tree/main/navigationWork"},
    {src: "https://user-images.githubusercontent.com/67810399/98424201-4d0d5c00-2091-11eb-82f8-4b436a464478.gif", alt: "Restaurant-2", link: "https://github.com/klcysn/android/tree/main/restaurant2"},
    {src: "https://user-images.githubusercontent.com/67810399/96093744-cf5c9300-0ecc-11eb-9203-a7371c4198a0.gif", alt: "Reverse Word", link: "https://github.com/klcysn/android/tree/main/reverseWord"},
    {src: "https://user-images.githubusercontent.com/67810399/96355902-c98ec980-10e7-11eb-91e9-ea291fbea682.gif", alt: "Rock Paper Scissors", link: "https://github.com/klcysn/android/tree/main/rockPaperScissors"},
    {src: "https://user-images.githubusercontent.com/67810399/97308509-3b41e280-1861-11eb-9991-c0f2cb379252.gif", alt: "Secret of Numbers", link: "https://github.com/klcysn/android/tree/main/secretOfNumbers"},
    {src: "https://user-images.githubusercontent.com/67810399/99454788-31267780-2927-11eb-9724-fe2cf6e57449.gif", alt: "Trivia", link: "https://github.com/klcysn/android/tree/main/trivia"}
]

const Mobil = () => {
    return (
        <div className="row row-cols-2 row-cols-md-2 g-4 w-100 skills-container mobil-skills-container">
            <h1 className="page-header" id="Mobil">Some Mobil Projects of My Projects</h1>
            {imageList.map((item, i)=><SkillCard key={i} item={item} width={"45%"} />)}
        </div>
    )
}

export default Mobil
