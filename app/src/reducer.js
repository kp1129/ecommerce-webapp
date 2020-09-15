export const initialState = {
  cart: [],
};

// instead of keeping track of subtotal in state,
// we can use a selector
export const getCartSubtotal = (cart) =>
  cart?.reduce((acc, item) => acc + item.price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
