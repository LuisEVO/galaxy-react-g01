import { useContext, useEffect } from 'react';
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
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import useLayoutContext from '../context/LayoutContext/useLayoutContext';
import usePurchaseContext from '../context/PurchaseContext/usePurchaseContext';
import { PurchaseActions } from '../context/PurchaseContext/PurchaseProvider';

const Step2 = () => {
  const navigate = useNavigate();

  const { setActiveStep } = useLayoutContext()
  const { state, dispatch } = usePurchaseContext()
  
  const { values, handleSubmit, getFieldProps, isValid } = useFormik({
    initialValues: {
      termsConditions: state.step2.termsConditions,
      offers: state.step2.offers
    },
    onSubmit: (values) => {
    }
  })
  useEffect(() => {
    setActiveStep(1)
  }, [setActiveStep])

  useEffect(() => {
    dispatch(PurchaseActions.setStep2(values))
  }, [values, dispatch])


  const goBack = () => {
    navigate('../paso-1')
  }
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant='h6'>Resumen: </Typography>
          <Typography>Plan: Mensual S/12.99</Typography>
          <Typography>Cuenta: 191-*********-98</Typography>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <FormGroup>
          <FormControlLabel control={<Checkbox checked={values.termsConditions} {...getFieldProps('termsConditions')} />} label={'Acepta los terminos y condiciones'} />
          <FormControlLabel control={<Checkbox checked={values.offers} {...getFieldProps('offers')}/>} label={'Acepta suscribirse para recibir ofertas'} />
          <Box sx={{ textAlign: 'center' }}>
            <ButtonGroup>
              <Button type='button' onClick={goBack}>Regresar</Button>
              <Button type='submit' disabled={!isValid}>Comprar</Button>
            </ButtonGroup>
          </Box>
        </FormGroup>
      </form>
    </Box>
  );
};

export default Step2;
