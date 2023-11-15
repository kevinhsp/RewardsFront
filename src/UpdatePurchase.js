import React, { useState } from 'react';
import axios from 'axios';

const UpdatePurchaseForm = ({ userId, purchaseId, onPurchaseUpdated }) => {
    const [purchase, setPurchase] = useState({ price: '', date: '' });
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8088/${userId}/purchaseUpdate/${purchaseId}`, purchase);
            setErrorMessage('');
            alert('Purchase updated!');
            onPurchaseUpdated();
        } catch (error) {
            // 错误处理逻辑
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPurchase({ ...purchase, [name]: value });
    };

    return (
        <div>
            {/* 表单内容 */}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};

export default UpdatePurchaseForm;
