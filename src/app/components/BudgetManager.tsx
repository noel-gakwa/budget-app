// src/app/components/BudgetManager.tsx
import React, { useState } from 'react';
import InitialAmountFormWidget from './InitialAmountFormWidget';
import TransactionFormWidget from './TransactionFormWidget';
import TransactionListWidget from './TransactionListWidget';
import BudgetCategoryFormWidget from './BudgetCategoryFormWidget';

const BudgetManager: React.FC = () => {
  const [initialAmount, setInitialAmount] = useState<number>(0);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const handleAddTransaction = (transaction: { amount: number; type: 'income' | 'expense' }) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);

    if (transaction.type === 'income') {
      setInitialAmount(prevAmount => prevAmount + transaction.amount);
    } else if (transaction.type === 'expense') {
      setInitialAmount(prevAmount => prevAmount - transaction.amount);
    }
  };

  const handleDeleteTransaction = (transactionId: string) => {
    setTransactions((prevTransactions) => 
      prevTransactions.filter((transaction) => transaction._id !== transactionId)
    );
  };

  return (
    <div>
      <InitialAmountFormWidget
        onInitialAmountChange={setInitialAmount}
        initialAmount={initialAmount}
      />
      <BudgetCategoryFormWidget
        categories={categories}
        setCategories={setCategories}
      />
      <TransactionFormWidget
        initialAmount={initialAmount}
        categories={categories}
        onAddTransaction={handleAddTransaction}
      />
      <TransactionListWidget
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}  // Ensure you're passing this prop correctly
      />
      <div>
        <h2>Current Budget: Ksh{initialAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default BudgetManager;
