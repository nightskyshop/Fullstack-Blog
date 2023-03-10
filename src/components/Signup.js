import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axiosInstance from "../axios";

function Signup() {
    const navigate = useNavigate();

    const initialFormData = Object.freeze({
        email: '',
        username: '',
        password: '',
    });

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post('user/register/', {
                email: formData.email,
                username: formData.username,
                password: formData.password
            })
            .then((response) => {
                navigate('/login');
                console.log(response);
                console.log(response.data);
            })
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    name="username"
                    placeholder="Name"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
        </main>
    )
}

export default Signup;