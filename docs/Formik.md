# Formik

## Instalacion

```
npm install --save formik
yarn add formik
```

## Uso Basico

```
const SignIn = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: (formValues) => {
      console.log('llamada http', formValues)
    }
  })

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className={styles.container}
    >
      <input
        className={ (touched.email && errors.email) ? styles.error : undefined }
        type='text'
        placeholder='Email'
        name='email'
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      { touched.email && errors.email && <div>{errors.email}</div> }
      <input
        type='password'
        placeholder='Password'
        name='password'
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      { touched.password && errors.password && <div>{errors.password}</div> }
      <button type='submit'>Ingresar</button>
    </form>
  );
};
```

## Usando getFieldProps

```
const SignIn = () => {
  const { errors, touched, getFieldProps, handleSubmit } = useFormik({
    initialValues,
    validate,
    onSubmit: (formValues) => {
      console.log('llamada http', formValues)
    }
  })

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete='off'
      className={styles.container}
    >
      <input
        className={ (touched.email && errors.email) ? styles.error : undefined }
        type='text'
        placeholder='Email'
        {...getFieldProps('email')}
      />
      { touched.email && errors.email && <div>{errors.email}</div> }
      <input
        type='password'
        placeholder='Password'
        {...getFieldProps('password')}
      />
      { touched.password && errors.password && <div>{errors.password}</div> }
      <button type='submit'>Ingresar</button>
    </form>
  );
};
```


## Usando componentes de Formik
```
const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
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
```


## Validaciones con Yup

### Instalacion

https://github.com/jquense/yup

```
npm install yup
yarn add yup
```

### Importar

`import * as Yup from 'yup';`

### Agregar al formulario

```
<Formik
  validationSchema={Yup.object().shape({
    email: Yup.string().email('Ingrese un formato valido').required('Este campo es requerido'),
    password: Yup.string().min(5, 'Minimo 5 Caracteres').max(10).required('Este campo es requerido')
  })}
>
```

```
useFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Ingrese un formato valido').required('Este campo es requerido'),
    password: Yup.string().min(5, 'Minimo 5 Caracteres').max(10).required('Este campo es requerido')
  })
})
>
```

