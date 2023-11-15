import React, { useState } from 'react';
import axios from 'axios';

const UpdatePurchaseForm = ({ userId, purchaseId, onActionComplete }) => {
    const [purchase, setPurchase] = useState({ price: '', date: '' });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8088/${userId}/purchaseUpdate/${purchaseId}`, purchase);
            alert(`Purchase Updated!\nPrice: ${purchase.price}\nDate: ${purchase.date}`)
            setErrorMessage('');
            onActionComplete();
        } catch (error) {
            setErrorMessage('An error occurred');
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
                <button type="submit">Update Purchase</button>
            </form>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default UpdatePurchaseForm;
