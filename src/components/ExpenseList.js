import React from 'react'
import { ExpenseItem } from './ExpenseItem';
import { useContext } from "react";
import { AppContext } from '../context/AppContext';

export const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
    return (
        <ul>
            {expenses.map((expense) => (
                <ExpenseItem
                id = {expense.id}
                name = {expense.name}
                cost = {expense.cost}
                />
            ))}
        </ul>
    )
}