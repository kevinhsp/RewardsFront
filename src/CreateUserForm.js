import React, { useState } from 'react';
import axios from 'axios';

const CreateUserForm = ({ onUserCreated }) => {
    const [user, setUser] = useState({ name: '' });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:8088/user', user);
            setUser({ name: '' });
            onUserCreated();
        } catch (error) {
            setErrorMessage('Failed to create user');
        }
    };

    const handleChange = (event) => {
        setUser({ ...user, name: event.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={user.name}
                    onChange={handleChange}
                    placeholder="User Name"
                />
                <button type="submit">Create User</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default CreateUserForm;
