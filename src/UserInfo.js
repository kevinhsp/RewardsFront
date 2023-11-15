import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = ({ userId }) => {
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchPurchases = async () => {
            if (!userId) {
                setErrorMessage('Invalid User ID');
                return;
            }
            try {
                const response = await axios.get(`http://localhost:8088/${userId}/user`);
                setName(response.data.data.name);
                console.log(response.data.data.name)
                setErrorMessage('');
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setErrorMessage('Resource not found');
                } else {
                    setErrorMessage('An error occurred');
                }
                setName('');
            }
        };

        fetchPurchases();
    }, [userId]);

    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {!errorMessage && <div className="name">{"Name: " + name}</div>}
        </div>
    );
};

export default UserInfo;
