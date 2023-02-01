import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function Post() {
    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingText, setLoadingText] = useState("Loading...");
    const { slug } = useParams();

    useEffect(() => {
        const apiUrl = `http://127.0.0.1:8000/api/post/${slug}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .then(() => setLoading(false))
            .catch(() => setLoadingText("잠시 후 다시 시도해주세요 :<"))
    }, [slug]);

    return (
        <div>
            {loading ? (
                    <h1>{loadingText}</h1>
                ) : (
                    <>
                        <h1>{post.title} - {post.author}</h1>
                        <p>{post.content}</p>
                    </>
                )
            }
        </div>
    )
}

export default Post;