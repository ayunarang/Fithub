import React, { useState } from 'react';
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const submitData = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
    
        axios.post('http://localhost:6001/log-in-user', formData, config)
            .then(response => {
                // Handle successful response
                console.log('Login successful');
                console.log(response.data); // Assuming response.data contains the token
            })
            .catch(error => {
                // Handle error
                console.log('Login failed');
                console.log(error.response.data); // Assuming error.response.data contains the error message
            });
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        submitData();
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
