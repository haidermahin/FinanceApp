import React from "react";
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';

export const TotalSpent = () => {
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
    return (
        <div className="bg-[#F2F2F2]  text-[#BB0000] px-4 py-3 ml-4 rounded-md">
            <span>Money spent : {totalExpenses}$ </span>
        </div>
    )
}