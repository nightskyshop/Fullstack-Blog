import React from "react";
import "./Article.css"

function Article({ post }) {
    return (
        <article className="posts__article">
            <h1>{post.title}</h1>
            <div className="posts__box">
                <p>{post.content.substr(0, 180)}...</p>
                <img src="https://source.unsplash.com/random" alt={post.title}/>
            </div>
        </article>
    )
}

export default Article;