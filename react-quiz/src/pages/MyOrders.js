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

const MyOrders = () => {
  return (
    <Box>
      <AppBar position='sticky'>
        <Toolbar>
          <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant='h5'>Galaxy Store</Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color='inherit'>Mis Pedidos</Button>
              <Badge badgeContent={4} color='warning'>
                <IconButton color='inherit'>
                  <ShoppingCartIcon />
                </IconButton>
              </Badge>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box sx={{ pt: 4 }}>
        <Container sx={{ display: 'grid', gap: 2 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant='h5'>
                      Nro: 000000001
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='h5'>
                      S/ 199.00
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <img
                      height={50}
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
                    <Typography>S/ 109.95</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <img
                      height={50}
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
                    <Typography>S/ 109.95</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={2}>
                    <Typography variant='h5'>
                      Nro: 000000001
                    </Typography>
                  </TableCell>
                  <TableCell align='right'>
                    <Typography variant='h5'>
                      S/ 199.00
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <img
                      height={50}
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
                    <Typography>S/ 109.95</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
    </Box>
  );
};

export default MyOrders;
