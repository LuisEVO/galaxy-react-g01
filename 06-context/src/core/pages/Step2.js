import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from '@mui/material';

const Step2 = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant='h6'>Resumen: </Typography>
          <Typography>Plan: Mensual S/12.99</Typography>
          <Typography>Cuenta: 191-*********-98</Typography>
        </CardContent>
      </Card>

      <form>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label={'Acepta los terminos y condiciones'} />
          <FormControlLabel control={<Checkbox />} label={'Acepta suscribirse para recibir ofertas'} />
          <Box sx={{ textAlign: 'center' }}>
            <ButtonGroup>
              <Button type='button'>Regresar</Button>
              <Button type='submit'>Comprar</Button>
            </ButtonGroup>
          </Box>
        </FormGroup>
      </form>
    </Box>
  );
};

export default Step2;
