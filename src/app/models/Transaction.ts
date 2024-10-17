import mongoose from 'mongoose';

// Update the schema by adding the category field
const TransactionSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  date: { type: Date, default: Date.now },
  type: { type: String, enum: ['income', 'expense'] }, // Keep the existing fields
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'BudgetCategory' }, // Add this new field
});

export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
