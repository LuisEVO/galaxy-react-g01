import { useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import PurchaseActions from '../../../core/store/purchase/actions';
import usePurchase from '../../../core/store/purchase/usePurchase';

const Step2 = () => {
  const navigate = useNavigate();

  const { setActiveStep } = useLayoutContext()

  const { step2 } = usePurchase()
  const dispatch = useDispatch()

  
  const { values, handleSubmit, getFieldProps, isValid } = useFormik({
    initialValues: {
      termsConditions: step2.termsConditions,
      offers: step2.offers
    },
    onSubmit: (values) => {
      // http
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
