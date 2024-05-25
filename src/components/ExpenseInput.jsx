import React, { useState } from 'react';
import { useExpense } from '../context/ExpenseContext';

function ExpenseInput() {
    const { addExpense } = useExpense();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        if (description === '' || amount === 0) {
            return alert('Add your Expense description and Expense amount')
        }
        e.preventDefault();
        addExpense({ description, amount: parseFloat(amount) });
        setDescription('');
        setAmount(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Expense</h2>
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
            <button type="submit">Add Expense</button>
        </form>
    );
}

export default ExpenseInput;
