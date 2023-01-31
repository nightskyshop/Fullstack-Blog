import React, { useState, useLayoutEffect } from "react";
import "./Article.css"

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }

        window.addEventListener('resize', updateSize);
        updateSize();

        return () => (window.removeEventListener('resize', updateSize));
    }, []);
    return size;
}

function Article({ post }) {
    const [width, height] = useWindowSize();
    return (
        <article className="posts__article">
            <h1>{post.title}</h1>
            <div className="posts__box">
                <p>{post.content.substr(0, width > 585 ? 180 : 100)}...</p>
                <img src="https://source.unsplash.com/random" alt={post.title}/>
            </div>
        </article>
    )
}

export default Article;