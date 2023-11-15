import React, { useState } from 'react';
import CreateUserForm from './CreateUserForm';
import PurchaseForm from './PurchaseForm';
import UserPurchases from './UserPurchases';
import UpdatePurchaseForm from './UpdatePurchaseForm';
import DeletePurchaseButton from './DeletePurchaseButton';
import UserInfo from "./UserInfo";
import YearMonthPurchases from "./YearMonthPurchases";

function App() {
    const [userId, setUserId] = useState('');
    const [purchaseId, setPurchaseId] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [year, setYear] = useState(new Date().getFullYear().toString());
    const [month, setMonth] = useState((new Date().getMonth() + 1).toString());

    const handleActionComplete = () => {
        setRefresh(prev => !prev);
    };

    return (
        <div className="App">
            <CreateUserForm onUserCreated={handleActionComplete} />
            <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter User ID"
            />
            <UserInfo userId={userId} refresh = {refresh} />
            <UserPurchases userId={userId} refresh={refresh} />
            <PurchaseForm userId={userId} onPurchaseCreated={handleActionComplete} />
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

            <input
                type="text"
                value={purchaseId}
                onChange={(e) => setPurchaseId(e.target.value)}
                placeholder="Enter Purchase ID for Update/Delete"
            />
            <UpdatePurchaseForm userId={userId} purchaseId={purchaseId} onActionComplete={handleActionComplete} />
            <DeletePurchaseButton userId={userId} purchaseId={purchaseId} onActionComplete={handleActionComplete} />
        </div>
    );
}

export default App;
