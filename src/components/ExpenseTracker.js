import { Income } from "./Income";
import { Remaining } from "./Remaining";
import { TotalSpent } from "./TotalSpent";
import Container from '@mui/material/Container';
import { ExpenseList } from "./ExpenseList";
import { AddExpense } from "./AddExpense";
import { AppProvider } from "../context/AppContext";
import React from 'react';


const ExpenseTracker = () => {
    return (
      <AppProvider>
        <Container maxWidth="md" className="bg-white py-8 mt-10">
          <div className="flex mt-3">
            <div className="flex-1 mr-4">
              <Income />
            </div>
            <div className="flex-1">
              <Remaining />
            </div>
            <div className="flex-1">
              <TotalSpent />
            </div>
          </div>
          <h3 className="font-bold md:text-3xl text-2xl mt-4 text-[#BB0000]">
            Expenses
          </h3>
          <ExpenseList />
          <h3 className="font-bold md:text-3xl text-2xl mt-4 text-[#BB0000]">
            Add Expense
          </h3>
          <AddExpense />
        </Container>
      </AppProvider>
    );
  };

export default ExpenseTracker;