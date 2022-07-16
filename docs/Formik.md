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