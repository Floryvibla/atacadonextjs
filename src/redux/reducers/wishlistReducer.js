<<<<<<< HEAD
import { WISHLIST } from "../defines";

const initialState = [];

export default function wishlistReducer(state = initialState, action) {
  const wishlistItem = state.find((item) => item.id === action.productId);
  const wishlistItemIndex = wishlistItem && state.indexOf(wishlistItem);
  switch (action.type) {
    case WISHLIST.ADD_TO_WISHLIST:
      const addedWishlistItem = state.find(
        (item) => item.id === action.product.id
      );
      const addedWishlistItemIndex =
        addedWishlistItem && state.indexOf(addedWishlistItem);
      if (!addedWishlistItem) {
        return [
          ...state,
          {
            ...action.product,
          },
        ];
      }
    case WISHLIST.REMOVE_FROM_WISHLIST:
      return [
        ...state.slice(0, wishlistItemIndex),
        ...state.slice(wishlistItemIndex + 1),
      ];
=======
import { WISHLIST } from "../actionTypes";

const initialState = { loading: true, data: [], error: false };

export default function WISHLISTReducer(state = initialState, action) {
  switch (action.type) {
    case WISHLIST.FETCH_WISHLIST:
      return {
        loading: true,
        data: [],
        error: false,
      };
    case WISHLIST.FETCH_WISHLIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case WISHLIST.FETCH_WISHLIST_FAIL:
      // let { err } = action.payload;
      return {
        ...state,
        loading: false,
        error: true,
      };
>>>>>>> dev01
    default:
      return state;
  }
}
