import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white shadow-xl">
      <ul className="flex justify-center space-x-4 py-4">
        <li>
          <Link to="/expense-tracker" className="text-[#BB0000] hover:text-[#E30513] font-family['Scotiabank-Regular', 'Frutiger-Roman', sans-serif] text-lg">
            Expense Tracker
          </Link>
        </li>
        <li>
          <Link to="/mortgage-calculator" className="text-[#BB0000] hover:text-[#E30513] font-family['Scotiabank-Regular', 'Frutiger-Roman', sans-serif] text-lg">
            Mortgage Calculator
          </Link>
        </li>
        <li>
          <Link to="/retirement-planner" className="text-[#BB0000] hover:text-[#E30513] font-family['Scotiabank-Regular', 'Frutiger-Roman', sans-serif] text-lg">
            Retirement Planner
          </Link>
        </li>
        <li>
          <Link to="/about-me" className="text-[#BB0000] hover:text-[#E30513] font-family['Scotiabank-Regular', 'Frutiger-Roman', sans-serif] text-lg">
            About Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;

