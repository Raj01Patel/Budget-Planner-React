import React from 'react';
import { useExpense } from '../context/ExpenseContext';
import './ExpenseList.css';

function ExpenseList() {
    const { expenses, removeExpense } = useExpense();

    return (
        <div>
            <h2>Expense List</h2>
            {expenses.length === 0 ? (
                <p className="empty-message">Add your Budget and Expenses!</p>
            ) : (
                <ul className="expense-list">
                    {expenses.map((expense, index) => (
                        <li key={index} className="expense-item">
                            <span>{expense.description}: ${expense.amount}</span>
                            <button className="remove-btn" onClick={() => removeExpense(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ExpenseList;
