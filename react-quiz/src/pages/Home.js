import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,
  Badge,
  IconButton,
} from '@mui/material';
import { Container } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Home = () => {
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
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardMedia
                  sx={{ objectFit: 'contain' }}
                  component='img'
                  height='240'
                  image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
                  alt='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                />
                <CardContent>
                  <Typography gutterBottom variant='h6' component='div'>
                    Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
                  </Typography>
                  <Box
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography variant='h5' component='div'>
                      S/ 109.95
                    </Typography>
                    <Button size='large'>
                      <AddShoppingCartIcon></AddShoppingCartIcon>
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
