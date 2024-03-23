import React, { useState } from 'react';
import './App.css';
import Stepper from './quiz02/Stepper';
import Content from './quiz02/Content';
import MyProvider from './context/MyContextProvider'; // Use the correct import path

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(prevStep => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handlePrev = () => {
    setStep(prevStep => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  return (
    <div>
      <h1>Quiz 02</h1>
      <MyProvider> {/* Remove value prop */}
        <Stepper step={step} handlePrev={handlePrev} handleNext={handleNext} />
        <Content step={step} />
        <div className='flex'>
          <button type="button" onClick={handlePrev}>Prev</button>
          <button type="button" onClick={handleNext}>Next</button>
        </div>
      </MyProvider>
    </div>
  );
}

export default App;
