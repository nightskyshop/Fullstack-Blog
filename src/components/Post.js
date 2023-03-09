import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Post.css";

function Post() {
    const [post, setPost] = useState({category: 1, author: 1});
    const [category, setCategory] = useState();
    const [author, setAuthor] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingText, setLoadingText] = useState("Loading...");
    const { slug } = useParams();

    useEffect(() => {
        const postApiUrl = `http://127.0.0.1:8000/api/post/${slug}`;

        fetch(postApiUrl)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .then(() => setLoading(false))
            .catch(() => setLoadingText("잠시 후 다시 시도해주세요 :<"))
        
        
        const categoryApiUrl = `http://127.0.0.1:8000/api/category/${post.category}`;
        const userApiUrl = `http://127.0.0.1:8000/api/user/${post.author}`;
        
        fetch(categoryApiUrl)
            .then((response) => response.json())
            .then((data) => setCategory(data.name))
        
        fetch(userApiUrl)
            .then((response) => response.json())
            .then((data) => setAuthor(data.username))
    }, [slug, post.category, post.author])

    return (
        <main className="post">
            {loading ? (
                    <h1>{loadingText}</h1>
                ) : (
                    <>
                        <p className="post__category">{category}</p>
                        <h1 className="post__title">{post.title} - {post.author}</h1>
                            <p className="post__author-dt_created">{author} - {post.dt_created.substring(0, 4)}.{post.dt_created.substring(5, 7)}.{post.dt_created.substring(8, 10)}</p>
                        <p>{post.content}</p>
                    </>
                )
            }
        </main>
    )
}

export default Post;