import {
  Box,
  Card,
  CardContent,
  Button,
  TextField,
  CardActions,
  CardHeader,
} from '@mui/material';

const Login = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1876d2'
      }}
    >
      <Card sx={{ maxWidth: '100%', width: 350 }}>
        <CardHeader title='Autenticación'></CardHeader>
        <CardContent sx={{ display: 'grid', gap: 2 }}>
          <TextField label='Usuario' variant='outlined'  />
          <TextField label='Contraseña' variant='outlined' error helperText="Incorrect entry." />
        </CardContent>
        <CardActions>
          <Button variant='outlined' fullWidth>Ingresar</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Login;
