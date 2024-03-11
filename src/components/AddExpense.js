import React, { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';


export const AddExpense = () => {
    const {dispatch} = useContext(AppContext);
    const [name , setName] = useState("");
    const [cost , setCost] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const expense = {
			id: uuidv4(),
			name,
			cost: parseInt(cost),
		};

		dispatch({
			type: 'ADD_EXPENSE',
			payload: expense,
		});

        setName('');
		setCost('');
    };

    return (
        <form className="mt-4" onSubmit={onSubmit}>
          <div className="flex flex-col md:flex-row">
            <div className="mb-3 md:mr-4">
              <label htmlFor="name" className="text-sm font-medium text-[#BB0000]">
                Name
              </label>
              <input
                required
                type="text"
                className="mt-1 p-2 border rounded-md w-full border-[#BB0000]"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3 md:ml-4">
              <label htmlFor="cost" className="text-sm font-medium text-[#BB0000]">
                Cost
              </label>
              <input
                required
                type="number"
                className="mt-1 p-2 border rounded-md w-full border-[#BB0000]"
                id="cost"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
          </div>
          <div className="flex mt-3">
            <button
              type="submit"
              className="bg-[#572A84] text-white py-2 px-4 rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      );
    }      
