// src/app/components/BudgetManager.tsx
import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
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
      setInitialAmount((prevAmount) => prevAmount + transaction.amount);
    } else if (transaction.type === 'expense') {
      setInitialAmount((prevAmount) => prevAmount - transaction.amount);
    }
  };

  const handleDeleteTransaction = (transactionId: string) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction._id !== transactionId)
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Budget Manager
        </Typography>
      </motion.div>

      <Paper elevation={4} sx={{ p: 4, mt: 3 }}>
        <Grid container spacing={3}>
          {/* Initial Amount and Categories in one row */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
              <InitialAmountFormWidget
                onInitialAmountChange={setInitialAmount}
                initialAmount={initialAmount}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 2, height: '100%' }}>
              <BudgetCategoryFormWidget
                categories={categories}
                setCategories={setCategories}
              />
            </Paper>
          </Grid>

          {/* Transaction Form */}
          <Grid item xs={12}>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Add Transaction</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TransactionFormWidget
                  initialAmount={initialAmount}
                  categories={categories}
                  onAddTransaction={handleAddTransaction}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Transaction List */}
          <Grid item xs={12}>
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Transaction List</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TransactionListWidget
                  transactions={transactions}
                  onDeleteTransaction={handleDeleteTransaction}
                />
              </AccordionDetails>
            </Accordion>
          </Grid>

          {/* Current Budget */}
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
              <Typography variant="h6">
                Current Budget: <strong>Ksh {initialAmount.toFixed(2)}</strong>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default BudgetManager;
