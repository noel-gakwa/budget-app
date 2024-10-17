import { NextResponse } from 'next/server';
import dbConnect from '@/app/utils/dbConnect';
import Transaction from '@/app/models/Transaction';

export async function GET() {
  await dbConnect();
  try {
    const transactions = await Transaction.find({});
    return NextResponse.json({ success: true, data: transactions });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const body = await request.json();
    const transaction = await Transaction.create(body);
    return NextResponse.json({ success: true, data: transaction }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}