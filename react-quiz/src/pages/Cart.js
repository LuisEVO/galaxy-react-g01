import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  Button,
  Grid,
  Badge,
  IconButton,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { Container } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  return (
    <Box>
      <AppBar position='sticky'>
        <Toolbar>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h5'>Galaxy Store</Typography>
            <Badge badgeContent={4} color='warning'>
              <IconButton color='inherit'>
                <ShoppingCartIcon />
              </IconButton>
            </Badge>
          </Container>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: 4 }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={9}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2}>Producto</TableCell>
                      <TableCell>Precio</TableCell>
                      <TableCell>Eliminar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <img
                          height={100}
                          src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                          alt=''
                        />
                      </TableCell>
                      <TableCell>
                        <Typography>
                          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h6'>S/ 109.95</Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton color='error'>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={3}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell colSpan={2}>
                        <Typography variant='h6'>RESUMEN DEL PEDIDO</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant='h6'>Total</Typography>
                      </TableCell>
                      <TableCell align='right'>
                        <Typography variant='h5'>S/ 109.95</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2} align='center'>
                        <Button variant='contained' color='warning' fullWidth>
                          Procesar Compra
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Cart;
