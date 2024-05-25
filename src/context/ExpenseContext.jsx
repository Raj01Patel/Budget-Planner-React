import React, { createContext, useState, useContext } from 'react';

const ExpenseContext = createContext();

export const useExpense = () => {
  return useContext(ExpenseContext);
};

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const removeExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense, budget, updateBudget, totalExpenses }}>
      {children}
    </ExpenseContext.Provider>
  );
};
