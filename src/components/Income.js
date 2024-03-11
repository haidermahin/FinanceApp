import { useContext, useState } from "react";
import React from "react";
import { AppContext } from "../context/AppContext";
import ViewIncome from "./ViewIncome";
import EditIncome from "./EditIncome";

export const Income = () => {
    const {income , dispatch} = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false)
    const handleEditClick = () => {
        setIsEditing(true)
    }

    const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_INCOME',
			payload: value,
		});
		setIsEditing(false);
	};
    return (
        <div className="bg-gray-200 text-gray-800 border border-gray-300 px-4 py-2 rounded-md">
            {isEditing ? (
				<EditIncome handleSaveClick={handleSaveClick} income={income} />
			) : (
				<ViewIncome handleEditClick={handleEditClick} income={income} />
                
                )}

        </div>
    )
}