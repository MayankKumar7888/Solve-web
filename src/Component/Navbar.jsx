import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import CartList from '../Component/CartList';

const drawerWidth = 280;
const pages = [
  { label: 'Shop', path: '/shop' },
  { label: 'Cart', path: '/cart' }
];

export default function Navbar(props) {

  const cartProducts = useSelector(state => state.cart)
  const { window, navColor } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cartOpen, setCartOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const toggleCartDrawer = () => {
    setCartOpen(!cartOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', color: 'var(--txt1-clr)' }}>
      <Typography
        className='logo1'
        variant="h5"
        sx={{ my: 2, textAlign: 'center'}}
      >
        LOOKBOOK
      </Typography>
      <Divider />
      <List>
  {pages.map((page) => (
    <ListItem key={page.label} disablePadding>
      {page.label === 'Cart' ? (
        <ListItemButton onClick={toggleCartDrawer} sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center'}}>       

            <ListItemText primary={
              <>
                {page.label}&nbsp;{cartProducts.length > 0 && (<span className="cart-badge">{cartProducts.length}</span>)}
              </>
            }
            primaryTypographyProps={{ component: 'div', sx: { display: 'flex', alignItems: 'center', justifyContent: 'center' } }}
            secondary={null}
            />
          </ListItemButton>
          ) : (
          <ListItemButton component={Link} to={page.path} sx={{ textAlign: 'center' }}>
          <ListItemText primary={page.label} /></ListItemButton>
      )}
    </ListItem>
  ))}
</List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: navColor}} >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ height: '64px' }}>
            <Typography className='logo1'variant="h6" noWrap component="a" href="#" sx={{ color: navColor }}> LOOKBOOK </Typography>
            <Typography className='logo2' variant="h6" noWrap component="div"
              sx={{ userSelect: 'none', display: { xs: 'none', md: 'block' }, color: navColor }} > Sølve
            </Typography>

            <Box className="menu-box" sx={{ mr: 1, }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) =>
                  page.label === 'Cart' ? (
                    <Button
                      key={page.label}
                      onClick={toggleCartDrawer}
                      sx={{ color: navColor }}
                    >
                    <span>{page.label}</span>
                      {cartProducts.length > 0 && (
                    <span className="cart-badge">{cartProducts.length}</span>
                    )}
                    </Button>
                  ) : (
                  <Button
                    key={page.label}
                    component={Link}
                    to={page.path}
                    sx={{ color: navColor }}
                  >
                {page.label}
                </Button>
                 )
                )}
              </Box>
              <IconButton className='menu-Icon' color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle} sx={{ color: navColor }} >
                <svg width="35" height="14" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="-9" y1="4" x2="35" y2="4" stroke="currentColor" strokeWidth="4.5" />
                  <line x1="35" y1="16" x2="10" y2="16" stroke="currentColor" strokeWidth="4.5" />
                </svg>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer container={container} variant="temporary" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}
          sx={{ '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              color: navColor
            }
          }}
          anchor="right"
        >
          {drawer}
        </Drawer>

        <Drawer anchor="right" open={cartOpen} onClose={toggleCartDrawer} PaperProps={{ style: { width: drawerWidth } }} >
          <Box sx={{ width: drawerWidth, padding: 2 }}>
            <Typography variant="h6" sx={{ mb: 2 }} className='cart-header'><span className='cart-logo'>Cart</span> <span className='cart-btn' onClick={toggleCartDrawer}>Close</span></Typography>
            {cartProducts.length === 0 ? (
              <Typography sx={{ color: 'gray' }} className='cart-empty-text' >Your cart is empty</Typography>
            ) : (
              <Grid container spacing={2}>
                <CartList products={cartProducts} />
              </Grid>
            )}
          </Box>
          <Box className="cart-product-total-box" sx={{ px: 2 }} >
          <Typography variant="subtitle1" className='cart-product-total-text'>
          Subtotal
          </Typography>

          <Typography variant="subtitle1" className='cart-product-total-price'>
            {cartProducts.reduce((acc, product) => {
              const price = parseFloat(product.price.replace(/[^0-9.]/g, '')) || 0;
              const qty = product.quantity || 1;
              return acc + price * qty;
              }, 0).toFixed(2)} USD
          </Typography>
          </Box>

          <Box sx={{ width: drawerWidth, padding: 2 }}>
            <button className='cart-product-submit-btn' 
            onClick={() => {
              // Handle continue to checkout 
            }}
          >
            Continue to Checkout
          </button>
        </Box>
        </Drawer> 
      </nav>
    </Box>
  );
}














