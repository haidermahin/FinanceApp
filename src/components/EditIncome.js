import React from 'react';

import { useState } from 'react';

const EditIncome = (props) => {
	const [value, setValue] = useState(props.income);
	return (
        <div>
            <input
                required='required'
                type='number'
                className='border-none rounded-md px-2 py-1 mr-3 bg-[#F2F2F2] text-[#BB0000]'
                id='name'
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <button
                type='button'
                className='bg-[#572A84] text-white py-1 px-3 rounded-md'
                onClick={() => props.handleSaveClick(value)}
            >
                Save
            </button>
        </div>
    );
};

export default EditIncome;