import React, { useEffect, useState } from "react";
import useWindowSize from "../useWindowSize";
import { Link } from 'react-router-dom';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css";

function Header() {
    const [categoryData, setCategoryData] = useState();
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [categoryDisplay, setCategoryDisplay] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [width, height] = useWindowSize();

    useEffect(() => {
        const apiUrl = "http://127.0.0.1:8000/api/category";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setCategoryData(data))
            .then(() => setLoading(false))
    }, []);

    useEffect(() => {
        if (width <= 700 && !sidebarOpen) {
            setCategoryDisplay(true);
        } else {
            setCategoryDisplay(false);
        }
    }, [width, sidebarOpen])

    const OpenSidebar = () => {
        setSidebarOpen((prev) => !prev);
    }

    const onChange = ({ target: {value} }) => {
        setSearchText(value);
    }

    return (
        <>
            <section className={`${sidebarOpen && "sidebar__open" } sidebar`}>
                <form
                    className="sidebar__search"
                    action={`/post/search/${searchText}/`}
                    method="get"
                >
                    <input
                        type="search"
                        placeholder="검색하기"
                        value={searchText}
                        onChange={onChange}
                    />
                </form>
                <div className="sidebar__main">
                    <div className="sidebar__logo">
                        <span><b>Haju</b></span>
                        <span>IT</span>
                    </div>

                    <div
                        className={`${sidebarOpen && "category__open" } sidebar__category`}
                        style={categoryDisplay ? { display: "none" } : null}
                    >
                        <Link className="sidebar__all" to="/">분류 전체 보기</Link>
                        {!loading && (
                            categoryData.map((category, index) => {
                                return (
                                    <span key={index}>
                                        <Link to={`/category/${category.id}`}><p key={index}>{category.name}</p></Link>
                                    </span>
                                )
                            })
                        )}
                    </div>
                </div>
                <div className="sidebar__auth">
                    <Link to="/signup/">회원가입</Link>
                    <Link to="/login/" style={ 700 <= width <= 1030 ? {marginRight: "30px"} : null}>로그인</Link>
                    
                    <FontAwesomeIcon
                        icon={sidebarOpen ? faX : faBars}
                        className="listed_onclick"
                        onClick={OpenSidebar}
                    />
                </div>
            </section>

            <FontAwesomeIcon
                icon={sidebarOpen ? faX : faBars}
                className="onclick"
                onClick={OpenSidebar}
                inverse={sidebarOpen && true}
            />
        </>
    )
}

export default Header;