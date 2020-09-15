export const initialState = {
    cart: [],
    subtotal: 0
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.item],
                subtotal: state.subtotal + action.item.price
            };
        default:
            return state;
    }
}

export default reducer;