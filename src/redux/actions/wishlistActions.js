<<<<<<< HEAD
import { WISHLIST } from "../defines";

export const addToWishlist = (product) => ({
  type: WISHLIST.ADD_TO_WISHLIST,
  product,
});

export const removeFromWishlist = (productId) => ({
  type: WISHLIST.REMOVE_FROM_WISHLIST,
  productId,
});
=======
import { WISHLIST } from "../actionTypes";

import * as wishlistApis from "../../apis/wishlist";

//Get cart data
const fetchWishList = () => ({
  type: WISHLIST.FETCH_WISHLIST,
});

const fetchWishListSuccess = (data) => ({
  type: WISHLIST.FETCH_WISHLIST_SUCCESS,
  payload: {
    data,
  },
});

const fetchWishListFail = (err) => ({
  type: WISHLIST.FETCH_WISHLIST_FAIL,
  payload: {
    err,
  },
});

export const fetchWishListRequest = () => {
  return (dispatch) => {
    dispatch(fetchWishList());
    wishlistApis
      .fetchWishlistData()
      .then((res) => {
        dispatch(fetchWishListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchWishListFail(err));
      });
  };
};
>>>>>>> dev01
