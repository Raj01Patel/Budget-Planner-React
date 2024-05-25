import React, { useEffect } from 'react';
import { useExpense } from '../context/ExpenseContext';
import './Balance.css'

function Balance() {
    const { budget, totalExpenses } = useExpense();

    useEffect(() => {
        if (budget - totalExpenses < 0) {
            alert('Warning: Your expenses exceed your budget!');
        }
    }, [budget, totalExpenses]);

    return (
        <div className="balance-container">
            <h2>Total Balance</h2>
            <p>Budget: ${budget}</p>
            <p>Total Expenses: ${totalExpenses}</p>
            <p>Balance: ${budget - totalExpenses}</p>
        </div>
    );
}

export default Balance;
