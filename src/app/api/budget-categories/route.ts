import { NextResponse } from 'next/server';
import dbConnect from '@/app/utils/dbConnect';
import BudgetCategory from '@/app/models/BudgetCategory';

export async function GET() {
  await dbConnect();
  try {
    const categories = await BudgetCategory.find({});
    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const body = await request.json();
    const category = await BudgetCategory.create(body);
    return NextResponse.json({ success: true, data: category }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  await dbConnect();
  try {
    const { id } = await request.json();
    await BudgetCategory.findByIdAndDelete(id);
    return NextResponse.json({ success: true }, { status: 204 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
