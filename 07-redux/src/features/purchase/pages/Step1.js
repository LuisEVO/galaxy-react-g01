import { useEffect, useState } from 'react'
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import PurchaseHttp from '../http/purchase-http';
import useLayoutContext from '../context/LayoutContext/useLayoutContext';
import { useDispatch, useSelector } from 'react-redux';
import PurchaseActions from '../../../core/store/purchase/actions';
import PurchaseSelector from '../../../core/store/purchase/selector';
import usePurchase from '../../../core/store/purchase/usePurchase';

const Step1 = () => {
  const navigate = useNavigate();

  const { setActiveStep } = useLayoutContext()

  const { step1, params, isParamsLoading } = usePurchase()
  const dispatch = useDispatch()

  const { values, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      plan: step1.plan,
      account: step1.account
    },
    validationSchema: Yup.object().shape({
      plan: Yup.string().required(),
      account: Yup.string().required(),
    }),
    onSubmit: (values) => {
      // domain.com/compra/paso-1
      navigate('../paso-2')
    }
  })

  useEffect(() => {
    dispatch(PurchaseActions.loadStep1Params())
  }, [dispatch])

  useEffect(() => {
    setActiveStep(0)
  }, [setActiveStep])


  useEffect(() => {
    dispatch(PurchaseActions.setStep1(values))
  }, [values, dispatch])

  return (
    <form onSubmit={handleSubmit}>
      {isParamsLoading && <p>Cargando Parametros</p>}
      <FormGroup sx={{ gap: '1rem' }}>
        <FormLabel>Ingrese los siguientes datos</FormLabel>
        <FormControl>
          <InputLabel>Plan</InputLabel>
          <Select label={'Plan'} {...getFieldProps('plan')}>  
            <MenuItem value=''>Seleccione un plan</MenuItem>
            { params.plans.map(plan => <MenuItem key={plan.id} value={plan.id}>{ plan.label }</MenuItem>) }
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Cuenta</InputLabel>
          <Select label={'Cuenta'} {...getFieldProps('account')}>
            <MenuItem value=''>Seleccione una cuenta</MenuItem>
            { params.accounts.map(account => <MenuItem key={account.id} value={account.id}>{ account.label }</MenuItem>) }
          </Select>
        </FormControl>

        <Button type='submit'>Continuar</Button>
      </FormGroup>
    </form>
  );
};

export default Step1;
