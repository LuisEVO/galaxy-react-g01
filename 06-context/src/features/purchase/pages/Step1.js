import { useEffect, useState, useContext } from 'react'
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
import usePurchaseContext from '../context/PurchaseContext/usePurchaseContext';
import { PurchaseActions } from '../context/PurchaseContext/PurchaseProvider';

const Step1 = () => {
  const navigate = useNavigate();

  const [plans, setPlans] = useState([])
  const [accounts, setAccounts] = useState([])
  const { setActiveStep } = useLayoutContext()
  const { state, dispatch } = usePurchaseContext()

  const { values, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      plan: state.step1.plan,
      account: state.step1.account
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
    PurchaseHttp.getStep1Params()
      .then(res => {
        setPlans(res.plans)
        setAccounts(res.accounts)
      })
  }, [])

  useEffect(() => {
    setActiveStep(0)
  }, [setActiveStep])


  useEffect(() => {
    dispatch(PurchaseActions.setStep1(values))
  }, [values, dispatch])

  
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup sx={{ gap: '1rem' }}>
        <FormLabel>Ingrese los siguientes datos</FormLabel>
        <FormControl>
          <InputLabel>Plan</InputLabel>
          <Select label={'Plan'} {...getFieldProps('plan')}>  
            <MenuItem value=''>Seleccione un plan</MenuItem>
            { plans.map(plan => <MenuItem key={plan.id} value={plan.id}>{ plan.label }</MenuItem>) }
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Cuenta</InputLabel>
          <Select label={'Cuenta'} {...getFieldProps('account')}>
            <MenuItem value=''>Seleccione una cuenta</MenuItem>
            { accounts.map(account => <MenuItem key={account.id} value={account.id}>{ account.label }</MenuItem>) }
          </Select>
        </FormControl>

        <Button type='submit'>Continuar</Button>
      </FormGroup>
    </form>
  );
};

export default Step1;
