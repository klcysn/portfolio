import SkillCard from "../SkillCard/SkillCard"
import "./Frontend.scss"

const imageList = [
    {src: "https://user-images.githubusercontent.com/67810399/108105481-f69abb00-708c-11eb-9c2c-6940174b8743.gif", alt: "Blog", link: "https://github.com/klcysn/blog_fullstack_frontend"},
    {src: "https://user-images.githubusercontent.com/67810399/114663854-3aabe400-9cfb-11eb-80d7-eea05d76b2f5.png", alt: "Marvel", link: "https://github.com/klcysn/project-marvel"},
    {src: "https://user-images.githubusercontent.com/67810399/114664358-ddfcf900-9cfb-11eb-932e-380b3dbb9439.png", alt: "Typescript-Todo", link: "https://github.com/klcysn/typescript-todo-app"},
    {src: "https://user-images.githubusercontent.com/67810399/114664677-5499f680-9cfc-11eb-83c1-02d9c96607ba.png", alt: "Typescript-Joke", link: "https://github.com/klcysn/joke-app-typescript"},
    {src: "https://user-images.githubusercontent.com/67810399/114664978-bf4b3200-9cfc-11eb-9403-129dbbd427dd.png", alt: "Movie", link: "https://github.com/klcysn/react_movies/blob/master/README.md"},
    {src: "https://user-images.githubusercontent.com/67810399/114665321-2ff24e80-9cfd-11eb-8dcc-e6e83dadcd6e.png", alt: "Amazon", link: "https://github.com/klcysn/amazon_clone"},
    {src: "https://user-images.githubusercontent.com/67810399/114665610-8b244100-9cfd-11eb-81db-5a26a8c718af.png", alt: "Adventure", link: "https://github.com/klcysn/adventure"},
]

const Frontend = () => {
    return (
        <div className="row row-cols-2 row-cols-md-2 g-4 w-100 skills-container react-skills-container">
            <h1 className="page-header" id="Frontend">Some Frontend Projects of My Projects</h1>
            {imageList.map((item, i)=><SkillCard key={i} item={item} width={"100%"} />)}
        </div>
    )
}

export default Frontend
