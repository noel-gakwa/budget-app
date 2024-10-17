import mongoose from 'mongoose';

const BudgetCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  initialAmount: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.BudgetCategory || mongoose.model('BudgetCategory', BudgetCategorySchema);
