import React, { useState } from 'react';
import { TextField, Button, MenuItem, Box, Typography } from '@mui/material';

interface TransactionFormProps {
  initialAmount: number;
  categories: string[];
  onAddTransaction: (transaction: any) => void;
}

const TransactionFormWidget: React.FC<TransactionFormProps> = ({ initialAmount, categories, onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [errors, setErrors] = useState<string | null>(null);

  const validateForm = () => {
    if (!description) return 'Description is required.';
    if (!amount || isNaN(Number(amount))) return 'Amount must be a valid number.';
    if (!category) return 'Category is required.';
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrors(validationError);
      return;
    }

    setErrors(null);
    const newTransaction = {
      _id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      type,
      category,
    };

    onAddTransaction(newTransaction);
    setDescription('');
    setAmount('');
    setCategory('');
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      p={4}
      sx={{
        backgroundColor: '#ffffff', // White background
        borderRadius: '8px', // Rounded corners
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow
        maxWidth: '600px', // Maximum width for responsiveness
        margin: '0 auto', // Center align the form
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Add Transaction
      </Typography>

      {errors && <Typography color="error" gutterBottom>{errors}</Typography>}

      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
        fullWidth
        margin="normal"
        variant="outlined"
      />

      <TextField
        label="Type"
        select
        value={type}
        onChange={(e) => setType(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
      >
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="expense">Expense</MenuItem>
      </TextField>

      <TextField
        label="Category"
        select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        fullWidth
        margin="normal"
        variant="outlined"
        disabled={categories.length === 0}
      >
        {categories.map((cat, index) => (
          <MenuItem key={index} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </TextField>

      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
        Add Transaction
      </Button>
    </Box>
  );
};

export default TransactionFormWidget;
