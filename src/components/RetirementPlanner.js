import React, { useEffect, useState } from 'react';
import { Container, Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

export const RetirementPlanner = () => {
    const initialRetirementAge = Number(localStorage.getItem("retirementAge") || 100);
    const initialTargetRetirementAmount = Number(localStorage.getItem("TargetRetirementAmount") || 0);
    const initialAnnualRetirementExp = Number(localStorage.getItem("AnnualRetirementExp") || 100);
    const initialCurrentAge = Number(localStorage.getItem("CurrentAge") || 25);
    const initialCurrentSavings = Number(localStorage.getItem("CurrentSavings") || 100000);
    const initialContributions = Number(localStorage.getItem("Contributions") || 500);
    const initialContributionsFrequency = Number(localStorage.getItem("ContributionsFrequency") || "Monthly");
    const initialPreRetirementRateOfReturn = Number(localStorage.getItem("PreRetirementRateOfReturn") || 7);
    const initialPostRetirementRateOfReturn = Number(localStorage.getItem("PostRetirementRateOfReturn") || 7);
    const initialInflation = Number(localStorage.getItem("Inflation") || 3);

    const [retirementAge , setRetirementAge] = useState(initialRetirementAge);
    const [targetRetirementAmount , setTargetRetirementAmount] = useState(initialTargetRetirementAmount);
    const [annualRetirementExp , setAnnualRetirementExp] = useState(initialAnnualRetirementExp);
    const [currentAge , setCurrentAge] = useState(initialCurrentAge);
    const [currentSavings , setCurrentSavings] = useState(initialCurrentSavings);
    const [contributions , setContributions] = useState(initialContributions);
    const [contributionsFrequency  , setContributionsFrequency] = useState(initialContributionsFrequency);
    const [preRetirementRateOfReturn  , setPreRetirementRateOfReturn] = useState(initialPreRetirementRateOfReturn);
    const [postRetirementRateOfReturn  , setPostRetirementRateOfReturn] = useState(initialPostRetirementRateOfReturn);
    const [inflation , setInflation] = useState(initialInflation);

    useEffect(() => {
        localStorage.setItem('retirementAge', retirementAge);
        localStorage.setItem('TargetRetirementAmount', targetRetirementAmount);
        localStorage.setItem('AnnualRetirementExp', annualRetirementExp);
        localStorage.setItem('CurrentAge', currentAge);
        localStorage.setItem('CurrentSavings', currentSavings);
        localStorage.setItem('Contributions', contributions);
        localStorage.setItem('ContributionsFrequency', contributionsFrequency);
        localStorage.setItem('PreRetirementRateOfReturn', preRetirementRateOfReturn);
        localStorage.setItem('PostRetirementRateOfReturn', postRetirementRateOfReturn);
        localStorage.setItem('Inflation', inflation);
    
        const calculateRetirementAge = (newTargetRetirementAmount) => {
          let netPreReturnOnInvestment = (preRetirementRateOfReturn - inflation) / 100;
          var currBal = currentSavings;
          const annualCont = contributionsFrequency === 'Annually' ? contributions : contributions * 12;
          let retAge = currentAge;
          while (currBal < newTargetRetirementAmount) {
            currBal = annualCont + currBal * (1 + netPreReturnOnInvestment);
            retAge += 1;
    
            if (retAge > 150) break;
          }
          setRetirementAge(retAge);
        };
    
        var netPostReturnOnInvestment = (postRetirementRateOfReturn - inflation) / 100;
        if (netPostReturnOnInvestment === 0) netPostReturnOnInvestment = 0.000001;
    
        let newTargetRetirementAmount = annualRetirementExp / netPostReturnOnInvestment;
        setTargetRetirementAmount(newTargetRetirementAmount);
    
        calculateRetirementAge(newTargetRetirementAmount);
      }, [
        annualRetirementExp,
        currentAge,
        currentSavings,
        contributions,
        contributionsFrequency,
        preRetirementRateOfReturn,
        postRetirementRateOfReturn,
        inflation,
        retirementAge,
        targetRetirementAmount
      ]);
    
    const handleContributionsFrequencyChange = (event) => {
        const selectedFrequency = event.target.value;
        setContributionsFrequency(selectedFrequency);
      };

    function formatDollars(amount, decimalPlaces = 2) {
        // Check if the amount is a valid number
        if (isNaN(amount)) {
          return 'Invalid amount';
        }
        
        // Use toLocaleString to format as currency (USD) with specified decimal places
        return amount.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces,
        });
      }
      

      

      return (
        <Container maxWidth="md" className="my-8">
          <Box className="mb-6">
            <Typography variant="h4" component="h1" gutterBottom style={{ color: '#BB0000' }} className="font-bold">
              Retirement Planner
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom style={{ color: '#002D62' }}>
              Age you can retire at: {retirementAge}
            </Typography>
            <Typography variant="body1" gutterBottom style={{ color: '#002D62' }}>
              Target retirement amount: {formatDollars(targetRetirementAmount, 3)}
            </Typography>
          </Box>
      
          <Box component="form" className="flex flex-col space-y-4">
            <TextField
              label={<span style={{ color: '#BB0000' }}>Annual retirement expenses in today's currency</span>}
              type="number"
              value={annualRetirementExp}
              onChange={(e) => setAnnualRetirementExp(parseInt(e.target.value) || 0)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label={<span style={{ color: '#BB0000' }}>Your current age</span>}
              type="number"
              value={currentAge}
              onChange={(e) => setCurrentAge(parseInt(e.target.value) || 0)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label={<span style={{ color: '#BB0000' }}>Your current savings</span>}
              type="number"
              value={currentSavings}
              onChange={(e) => setCurrentSavings(parseInt(e.target.value) || 0)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label={<span style={{ color: '#BB0000' }}>Regular contributions</span>}
              type="number"
              value={contributions}
              onChange={(e) => setContributions(parseInt(e.target.value) || 0)}
              variant="outlined"
              fullWidth
            />
            <FormControl fullWidth className="w-full">
              <InputLabel id="contribution-frequency-label" style={{ color: '#BB0000' }}>Contribution frequency</InputLabel>
              <Select
                labelId="contribution-frequency-label"
                value={contributionsFrequency}
                onChange={handleContributionsFrequencyChange}
                label="Contribution frequency"
              >
                <MenuItem value="Monthly">Monthly</MenuItem>
                <MenuItem value="Annually">Annually</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label={<span style={{ color: '#BB0000' }}>Pre retirement rate of return (%)</span>}
              type="number"
              value={preRetirementRateOfReturn}
              onChange={(e) => setPreRetirementRateOfReturn(parseInt(e.target.value) || 0)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label={<span style={{ color: '#BB0000' }}>Post retirement rate of return (%)</span>}
              type="number"
              value={postRetirementRateOfReturn}
              onChange={(e) => setPostRetirementRateOfReturn(parseInt(e.target.value) || 0)}
              variant="outlined"
              fullWidth
            />
            <TextField
              label={<span style={{ color: '#BB0000' }}>Inflation rate (%)</span>}
              type="number"
              value={inflation}
              onChange={(e) => setInflation(parseFloat(e.target.value) || 0)}
              variant="outlined"
              fullWidth
              step="0.01"
            />
            <Button
              variant="contained"
              color="primary"
              style={{ backgroundColor: '#572A84', color: 'white' }}
            >
              Save
            </Button>
          </Box>
        </Container>
      );
      
}
