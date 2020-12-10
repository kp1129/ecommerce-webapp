export const initialState = {
  cart: [],
  user: null,
};

// instead of keeping track of subtotal in state,
// we can use a selector
export const getCartTotal = (cart) =>
  cart?.reduce((acc, item) => acc + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
