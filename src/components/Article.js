import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../useWindowSize";
import "./Article.css"

function Article({ post }) {
    const [width, height] = useWindowSize();
    return (
        <article className="posts__article">
            <Link to={`/post/${post.id}`} style={{textDecoration: "none"}}>
                <h1>{post.title}</h1>
                <div className="posts__box">
                    <p>{post.content.substr(0, width > 585 ? 180 : 100)}...</p>
                    <img src="https://source.unsplash.com/random" alt={post.title}/>
                </div>
            </Link>
        </article>
    )
}

export default Article;