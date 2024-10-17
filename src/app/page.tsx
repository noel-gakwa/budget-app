'use client';

import React from 'react';
import { Container, Box, Paper, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { motion } from 'framer-motion';
import BudgetManager from './components/BudgetManager';
import Banner from './components/Banner';
import theme from './theme/theme'; // Import the theme from the theme folder

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Ensures a consistent global style */}
      <Container 
        maxWidth="lg" 
        sx={{ p: 4, backgroundColor: 'background.default', minHeight: '100vh' }}
      >
        {/* Banner Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper 
            elevation={3} 
            sx={{ mb: 4, p: 2, borderRadius: 3, textAlign: 'center' }}
          >
            <Banner />
          </Paper>
        </motion.div>

        {/* Budget Manager Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box>
            <BudgetManager />
          </Box>
        </motion.div>
      </Container>
    </ThemeProvider>
  );
}
