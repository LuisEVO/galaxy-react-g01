import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';

const Step1 = () => {
  return (
    <form>
      <FormGroup sx={{ gap: '1rem' }}>
        <FormLabel>Ingrese los siguientes datos</FormLabel>
        <FormControl>
          <InputLabel>Plan</InputLabel>
          <Select label={'Plan'}>
            <MenuItem value=''>Seleccione un plan</MenuItem>
            <MenuItem value={'M'}>Mensual S/ 12.99</MenuItem>
            <MenuItem value={'A'}>Anual S/ 120.00</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Cuenta</InputLabel>
          <Select label={'Cuenta'}>
            <MenuItem value=''>Seleccione una cuenta</MenuItem>
            <MenuItem value={'CT99999'}>191-**********-98</MenuItem>
            <MenuItem value={'CT88888'}>194-**********-54</MenuItem>
          </Select>
        </FormControl>

        <Button type='submit'>Continuar</Button>
      </FormGroup>
    </form>
  );
};

export default Step1;
