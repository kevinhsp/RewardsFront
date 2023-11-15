import React from 'react';
import axios from 'axios';

const DeletePurchaseButton = ({ userId, purchaseId, onActionComplete }) => {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8088/${userId}/purchaseDelete/${purchaseId}`);
            alert(`Purchase deleted!\nUserId: ${userId}\npurchaseId: ${purchaseId}`)
            onActionComplete(); // 通知父组件操作完成
        } catch (error) {
            alert('Failed to delete purchase');
        }
    };

    return <button onClick={handleDelete}>Delete Purchase</button>;
};

export default DeletePurchaseButton;
