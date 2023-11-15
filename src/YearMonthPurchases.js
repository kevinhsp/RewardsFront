import React, { useState, useEffect } from 'react';
import axios from 'axios';

const YearMonthPurchases = ({ userId, year, month }) => {
    const [purchases, setPurchases] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const fetchPurchases = async () => {
            if (!userId) {
                setErrorMessage('Invalid User ID');
                return;
            }
            try {
                const response = await axios.get(`http://localhost:8088/${userId}/Points/${year}/${month}`);
                setPurchases(response.data.purchaseEntityList);
                setErrorMessage('');
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setErrorMessage('Resource not found');
                } else {
                    setErrorMessage('An error occurred');
                }
                setPurchases([]);

            }
        };

        fetchPurchases();
    }, [userId, year, month]);

    return (
        <div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {!errorMessage && purchases.length > 0 && (
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    {purchases.map((purchase, index) => (
                        <tr key={index}>
                            <td>{purchase.id}</td>
                            <td>{purchase.date}</td>
                            <td>{"$" + purchase.price}</td>
                            <td>{purchase.points}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default YearMonthPurchases;
