import React from 'react';
import Grid from '@mui/material/Grid';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { remove } from '../Store/CartSlice';


export default function CartList({ products }) {
  const dispatch = useDispatch();
  const removeToCart = (idx) => {
    dispatch(remove(idx));
  }

  return (
    <>
      {products.map((product, idx) => (
        <Grid container spacing={2}>
            <Grid item size={{ xs: 12 , md: 3 }} className="cart-product-Inner-box1">
                <img src={product.img} alt={product.name} className="cart-product-img" />
            </Grid>
            <Grid item size={{ xs: 12 , md: 9 }} key={idx} className="cart-product-Inner-box2">
                    <h2 className="card-product-heading">{product.name}</h2>
                    <p className="cart-product-price">{product.price}</p>
                    <div className="cart-product-qty-btn">
                        <NavLink className="cart-product-quantity-btn btn" style={{ paddingLeft: "1em", paddingRight: "1em" }}>
                            {product.quantity || 1}
                        </NavLink>
                        <NavLink className="cart-remove-btn" onClick={() => removeToCart(idx)}>
                            🗑️ 
                        </NavLink>
                    </div>
            </Grid>
        </Grid>
      ))}
    </>
  )
}
