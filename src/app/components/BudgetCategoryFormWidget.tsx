import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface BudgetCategoryFormProps {
  categories: string[];
  setCategories: (categories: string[]) => void;
}

const BudgetCategoryFormWidget: React.FC<BudgetCategoryFormProps> = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() === '') return;

    // Add the new category to the categories list
    setCategories([...categories, newCategory]);

    // Clear the input field after adding
    setNewCategory('');
  };

  return (
    <Box p={2}>
      <TextField
        label="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddCategory}>
        Add Category
      </Button>
    </Box>
  );
};

export default BudgetCategoryFormWidget;
