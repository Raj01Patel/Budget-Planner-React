import React from 'react';
import { ExpenseProvider } from './context/ExpenseContext';
import Header from './components/Header';
import ExpenseInput from './components/ExpenseInput';
import BudgetInput from './components/BudgetInput';
import ExpenseList from './components/ExpenseList';
import Balance from './components/Balance';
import './App.css';

function App() {
  return (
    <ExpenseProvider>
      <Header />
      <div className="container">
        <div>
          <BudgetInput />
          <ExpenseInput />
          <Balance />
        </div>
        <div>
          <ExpenseList />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
