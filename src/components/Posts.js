import React, { useEffect, useState } from "react";
import Article from "./Article";
import "./Posts.css";

function Posts({title, apiUrl}) {
    const [postData, setPostData] = useState([0]);
    const [loading, setLoading] = useState(true);
    const [loadingText, setLoadingText] = useState("Loading...");
    
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setPostData(data))
            .then(() => setLoading(false))
            .catch(() => setLoadingText("잠시 후 다시 시도해주세요 :<"))
    }, [apiUrl]);

    return (
        <>
            <h1 className="howmany">{title} ({postData[0]})</h1>
            <main className="posts">
                { loading ? (
                    <h1 className="posts__loading">{loadingText}</h1>
                ) : (
                    postData.slice(1).map(post => {
                        return (
                            <Article key={post.id} post={post} />
                        )
                    })
                ) }
            </main>
        </>
    )
}

export default Posts;