import  Header  from './components/Header';
import { AboutMe } from './components/AboutMe';
import Container from '@mui/material/Container';
import { MortgageCalculator } from './components/MortgageCalculator';
import { ThemeProvider, StyledEngineProvider , createTheme } from '@mui/material/styles';
import {Myform} from './components/form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update import statement
import ExpenseTracker from './components/ExpenseTracker';
import  {RetirementPlanner}  from './components/RetirementPlanner';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Use Routes instead of Switch */}
        <Routes>
          {/* Use Route instead of Route */}
          <Route path="/mortgage-calculator" element={<MortgageCalculator />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/retirement-planner" element={<RetirementPlanner />} />
          <Route path="/about-me" element={<AboutMe />} />
          {/* Default route */}
          <Route path="/" element={<MortgageCalculator />} />
        </Routes>
      </div>
    </Router>
  );
};




export default App;
