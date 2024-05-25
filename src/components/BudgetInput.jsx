import React, { useState } from 'react';
import { useExpense } from '../context/ExpenseContext';

function BudgetInput() {
    const { updateBudget } = useExpense();
    const [budget, setBudget] = useState(0);

    const handleSubmit = (e) => {
        if (budget === 0) {
            alert('Warning: Add your Budget amount..');
        }
        e.preventDefault();
        updateBudget(budget);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Set Budget</h2>
            <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(parseFloat(e.target.value))}
            />
            <button type="submit">Set Budget</button>
        </form>
    );
}

export default BudgetInput;
