import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

export const ExpenseItem = (props) => {
    const {dispatch} =useContext(AppContext);

    const handleRemoveClick = () => {
        dispatch({
            type : 'DELETE_EXPENSE' , 
            payload : props.id, 
        })
    }

    return (
        <li className="list-group-item flex justify-between items-center bg-[#F2F2F2] px-4 py-2 rounded-md">
          {props.name}
          <div className="flex items-center">
            <span className="bg-[#BB0000] text-white px-2 py-1 rounded-full mr-2">
              ${props.cost}
            </span>
            <TiDelete size="1.5em" className="text-[#BB0000]" onClick={handleRemoveClick} />
          </div>
        </li>
      );
  };
  

