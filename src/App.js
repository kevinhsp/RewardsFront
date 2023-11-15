import React, { useState } from 'react';
import PurchaseForm from './PurchaseForm';
import UserPurchases from './UserPurchases';
import YearMonthPurchases from './YearMonthPurchases';
// 假设还有其他组件，比如 UpdatePurchaseForm 和 DeletePurchaseButton

function App() {
    const [userId, setUserId] = useState('');
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const [month, setMonth] = useState((new Date().getMonth() + 1).toString());
    const [refresh, setRefresh] = useState(false);

    const refreshPurchases = () => {
        setRefresh(prev => !prev);
    };

    return (
        <div className="App">
            <h2>User Information</h2>
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <h2>Create Purchase</h2>
            <PurchaseForm userId={userId} onPurchaseCreated={refreshPurchases} />
            <h2>User Purchases</h2>
            <UserPurchases userId={userId} refresh={refresh} />
            <h2>Purchases in Specific Month</h2>
            <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="Year"
            />
            <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="Month"
            />
            <YearMonthPurchases userId={userId} year={year} month={month} />
        </div>
    );
}

export default App;
