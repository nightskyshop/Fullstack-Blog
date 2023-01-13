import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css";

function Header() {
    const [categoryData, setCategoryData] = useState();
    const [loading, setLoading] = useState(true);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const apiUrl = "http://127.0.0.1:8000/api/category";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setCategoryData(data))
            .then(() => setLoading(false))
    }, []);

    function OpenSidebar() {
        setSidebarOpen((prev) => !prev);
    }

    return (
        <>
            <section className={`${sidebarOpen && "sidebar__open" } sidebar`}>
                <form className="sidebar__search" action="#" method="get">
                    <input placeholder="검색하기" />
                </form>
                <div className="sidebar__main">
                    <div className="sidebar__logo">
                        <span><b>Haju</b></span>
                        <span>IT</span>
                    </div>

                    <div className="sidebar__category">
                        <Link className="sidebar__all" to="/">분류 전체 보기</Link>
                        {!loading && (
                            categoryData.map((category, index) => {
                                return (
                                    <>
                                        <Link key={index} to="/">{category.name}</Link>
                                    </>
                                )
                            })
                        )}
                    </div>
                </div>
                <div className="sidebar__auth">
                    <Link to="/">회원가입</Link>
                    <Link to="/">로그인</Link>
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