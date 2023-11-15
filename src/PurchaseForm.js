import React, { useState } from 'react';
import axios from 'axios';

const PurchaseForm = ({ userId }) => {
    const [purchase, setPurchase] = useState({ price: '', date: '' });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!userId) {
            setErrorMessage('Invalid User ID');
            return;
        }
        try {
            await axios.post(`http://localhost:8088/${userId}/purchase`, purchase);
            setErrorMessage('');
            alert('Purchase created!');
            setPurchase({ price: '', date: '' });
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setErrorMessage('Resource not found');
            } else {
                setErrorMessage('An error occurred');
            }
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPurchase({ ...purchase, [name]: value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="price"
                    value={purchase.price}
                    onChange={handleChange}
                    placeholder="Price"
                />
                <input
                    type="date"
                    name="date"
                    value={purchase.date}
                    onChange={handleChange}
                />
                <button type="submit">Create Purchase</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default PurchaseForm;
