import Container from '@mui/material/Container';
import { Myform } from './form';

export const MortgageCalculator = () => {
    return (
      <Container maxWidth="md" className="bg-white py-8 mt-10">
        <div className="gap-4 px-4">
          <div className="mt-10">
            <h1 className="font-bold md:text-5xl text-3xl text-[#BB0000]">
              Mortgage Calculator
            </h1>
            <div className="font-medium text-[#E30513] mt-2">
              <p className="md:inline-block text-2xl">Calculate your monthly payment</p>
            </div>
            <Myform />
          </div>
        </div>
      </Container>
    );
  };
  