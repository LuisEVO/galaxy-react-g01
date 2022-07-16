import { Field, Formik, ErrorMessage, useFormik, Form } from 'formik';
import emailValidator from '../../../../common/form/validators/email-validator';
import requiredValidator from '../../../../common/form/validators/required-validator';
import styles from './SignUp.module.scss';
import * as Yup from 'yup';

const initialValues = {
  email: '',
  password: '',
};

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        email: Yup.string().email('Ingrese un formato valido').required('Este campo es requerido'),
        password: Yup.string().min(5, 'Minimo 5 Caracteres').max(10).required('Este campo es requerido')
      })}
      onSubmit={(formValues) => {
        console.log('llamada http', formValues);
      }}
    >
      {() => (
        <Form
          autoComplete='off'
          className={styles.container}
        >
          <Field
            type='text'
            placeholder='Email'
            name='email'
          />
          <ErrorMessage name='email'/>
          <Field
            type='password'
            placeholder='Password'
            name="password"
          />
          <ErrorMessage name='password'/>
          <button type='submit'>Ingresar</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
