import { useContext } from 'react';
import { Step, StepLabel, Stepper } from '@mui/material';
import LayoutContext from '../context/LayoutContext/LayoutContext';

const LayoutStepper = () => {
  const { activeStep } = useContext(LayoutContext)
  return (
    <Stepper activeStep={activeStep} >
      <Step>
        <StepLabel>Paso 1</StepLabel>
      </Step>
      <Step>
        <StepLabel>Paso 2</StepLabel>
      </Step>
    </Stepper>
  );
};

export default LayoutStepper;
