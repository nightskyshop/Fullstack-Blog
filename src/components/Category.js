import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Article.css";
import Posts from "./Posts";

function Category() {
    const [category, setCategory] = useState();
    const { id } = useParams();

    useEffect(() => {
        const categoryApiUrl = `http://127.0.0.1:8000/api/category/${id}/`;

        fetch(categoryApiUrl)
            .then((response) => response.json())
            .then((data) => setCategory(data.name))
    }, [id])

    return (
        <Posts title={category} apiUrl={`http://127.0.0.1:8000/api/category/post/${id}/`} />
    )
}

export default Category;