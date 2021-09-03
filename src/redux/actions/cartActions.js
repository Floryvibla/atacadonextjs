<<<<<<< HEAD
import { CART } from "../defines";

export const addToCart = (product, quantity, color, size) => ({
  type: CART.ADD_TO_CART,
  product,
  quantity,
  color,
  size,
});

export const removeFromCart = (cartId) => ({
  type: CART.REMOVE_FROM_CART,
  cartId,
});

export const removeAllFromCart = () => ({
  type: CART.REMOVE_ALL_FROM_CART,
});

export const decreaseQuantityCart = (cartId) => ({
  type: CART.DECREASE_QUANTITY_CART,
  cartId,
});

export const increaseQuantityCart = (cartId) => ({
  type: CART.INCREASE_QUANTITY_CART,
  cartId,
});
=======
import { CART } from "../actionTypes";

import * as cartApis from "../../apis/cart";

//Get cart data
export const fetchCart = () => ({
  type: CART.FETCH_CART,
});

export const fetchCartSuccess = (data) => ({
  type: CART.FETCH_CART_SUCCESS,
  payload: {
    data,
  },
});

export const fetchCartFail = (err) => ({
  type: CART.FETCH_CART_FAIL,
  payload: {
    err,
  },
});

export const fetchCartRequest = () => {
  return (dispatch) => {
    dispatch(fetchCart());
    cartApis
      .fetchCartData()
      .then((res) => {
        dispatch(fetchCartSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCartFail(err));
      });
  };
};
>>>>>>> dev01
