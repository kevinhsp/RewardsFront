import React from 'react';
import axios from 'axios';

const DeletePurchaseButton = ({ userId, purchaseId, onPurchaseDeleted }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8088/${userId}/purchaseDelete/${purchaseId}`);
            alert('Purchase deleted!');
            onPurchaseDeleted();
        } catch (error) {
            // 错误处理逻辑
        }
    };

    return (
        <button onClick={handleDelete}>Delete Purchase</button>
    );
};

export default DeletePurchaseButton;
