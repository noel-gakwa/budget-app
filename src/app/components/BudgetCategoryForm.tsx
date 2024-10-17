import React, { useState } from 'react'; 
import axios from 'axios'; // Make sure axios is installed
import { TextField, Button, Box, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const BudgetCategoryForm = () => {
  const [name, setName] = useState('');
  const [initialAmount, setInitialAmount] = useState('');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !initialAmount || !startDate || !endDate) {
      alert("Please fill in all fields.");
      return;
    }

    const amount = parseFloat(initialAmount);

    try {
      const response = await axios.post('/api/budget-categories', {
        name,
        initialAmount: amount,
        startDate,
        endDate
      });
      console.log(response.data);
      // Reset form fields or notify user of success
      setName('');
      setInitialAmount('');
      setStartDate(null);
      setEndDate(null);
    } catch (error) {
      console.error("Error adding budget category:", error);
      alert("Failed to add category.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Typography variant="h6">Add Budget Category</Typography>
      <TextField
        label="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <TextField
        label="Initial Amount"
        type="number"
        value={initialAmount}
        onChange={(e) => setInitialAmount(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Start Date"
          value={startDate}
          onChange={(newDate) => setStartDate(newDate)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
        />
        <DatePicker
          label="End Date"
          value={endDate}
          onChange={(newDate) => setEndDate(newDate)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
        />
      </LocalizationProvider>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Add Category
      </Button>
    </Box>
  );
};

export default BudgetCategoryForm;
