import { Step, StepLabel, Stepper } from '@mui/material';

const LayoutStepper = () => {
  return (
    <Stepper>
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
