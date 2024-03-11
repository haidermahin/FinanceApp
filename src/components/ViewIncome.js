
const ViewIncome = (props) => {
    return (
        <div className="bg-[#F2F2F2]  text-[#BB0000] px-3 py-1 rounded-md flex items-center justify-between">
            <span>Income: {props.income}$</span>
            <button
                type='button'
                className='bg-[#572A84] text-white px-1 py-0.2 rounded-sm'
                onClick={props.handleEditClick}
            >
                Edit
            </button>
        </div>
    );
};

export default ViewIncome;