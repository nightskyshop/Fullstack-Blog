import React from "react";
import { useParams } from "react-router-dom";
import Posts from "./Posts";

function Search() {
    const { search } = useParams();

    return (
        <>
            <Posts title={`"${search}"에 대한 제목 검색 결과`} apiUrl={`http://127.0.0.1:8000/api/post/search/title/${search}`} />
            <Posts title={`"${search}"에 대한 내용 검색 결과`} apiUrl={`http://127.0.0.1:8000/api/post/search/content/${search}`} />
        </>
    )
}

export default Search;