import React from 'react';
import { List, ListItem, ListItemText, Typography, Paper, Chip } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

interface Transaction {
  _id: string;
  description: string;
  amount: number;
  type: 'income' | 'expense';
  date: string; // Assuming the date is a string
}

interface Props {
  transactions: Transaction[];
}

const TransactionList: React.FC<Props> = ({ transactions }) => {
  return (
    <Paper elevation={3} style={{ marginTop: '20px' }}>
      <List>
        {transactions.map((transaction) => {
          const transactionDate = new Date(transaction.date);
          return (
            <ListItem key={transaction._id} divider>
              <ListItemText
                primary={
                  <Typography variant="subtitle1">
                    {transaction.description}
                  </Typography>
                }
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="textPrimary">
                      Ksh {transaction.amount.toFixed(2)}
                    </Typography>
                    <br />
                    {/* Check if the date is valid before displaying it */}
                    {isNaN(transactionDate.getTime()) ? null : (
                      <Typography component="span" variant="body2" color="textSecondary">
                        {transactionDate.toLocaleDateString()}
                      </Typography>
                    )}
                  </>
                }
              />
              <Chip
                icon={transaction.type === 'income' ? <ArrowUpward /> : <ArrowDownward />}
                label={transaction.type}
                color={transaction.type === 'income' ? 'success' : 'error'}
                variant="outlined"
              />
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default TransactionList;
