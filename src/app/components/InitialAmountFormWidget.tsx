import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, TextField, Button, Box } from '@mui/material';

interface InitialAmountFormWidgetProps {
  initialAmount: number;
  onInitialAmountChange: (amount: number) => void;
}

const InitialAmountFormWidget: React.FC<InitialAmountFormWidgetProps> = ({
  initialAmount,
  onInitialAmountChange,
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [currentBudget, setCurrentBudget] = useState(initialAmount);

  // Update the current budget whenever the initial amount changes
  useEffect(() => {
    setCurrentBudget(initialAmount);
  }, [initialAmount]);

  // Handle form submission for setting the initial amount
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onInitialAmountChange(amount);
  };

  return (
    <Card
      sx={{
        backgroundColor: '#f5f5f5', // Light gray background
        borderRadius: '12px', // Rounded corners for the card
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        maxWidth: 500, // Limits the width for responsiveness
        margin: '20px auto', // Centers the card on the page with margin
        padding: 2, // Padding inside the card for spacing
      }}
    >
      <CardContent>
        {/* Display the current budget */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }} gutterBottom>
          Current Budget: Ksh {currentBudget.toFixed(2)}
        </Typography>

        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Set Initial Budget Amount
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            label="Initial Amount"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            type="number"
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              marginTop: 2, // Adds space between the button and input field
              borderRadius: '24px', // Rounded button
            }}
          >
            Set Amount
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default InitialAmountFormWidget;
