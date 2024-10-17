'use client';

import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import BudgetManager from './components/BudgetManager'; // Import the BudgetManager component
import Banner from './components/Banner';

export default function Home() {
  return (
    <Container maxWidth="lg" className="p-4">
      <Banner />
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Budget Management App
        </Typography>

        {/* Render BudgetManager component */}
        <BudgetManager />
      </Box>
    </Container>
  );
}
