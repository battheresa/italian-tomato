export const initialState = {
    cart: [],
};

export const StateReducer = (state, action) => {
    let nCart = [ ...state.cart ];

    switch (action.type) {
        case 'ADD_CART': 
            if (action.quantity === 0)
                return { ...state, cart: state.cart };

            const indexAdd = state.cart.findIndex(item => 
                item.id === action.item.id && 
                item.size === action.item.size && 
                item.message === action.item.message
            );

            if (indexAdd >= 0)
                nCart[indexAdd].quantity += action.item.quantity;
            else 
                nCart.push(action.item);

            return { ...state, cart: nCart };

        case 'UPDATE_CART': 
            if (action.quantity === 0)
                return { ...state, cart: state.cart };

            const indexUpdate = state.cart.findIndex(item => item.id === action.item.id);
            nCart[indexUpdate].quantity = action.item.quantity;

            return { ...state, cart: nCart };
        
        case 'REMOVE_CART': 
            const indexRemove = state.cart.findIndex(item => 
                item.id === action.item.id && 
                item.size === action.item.size && 
                item.message === action.item.message
            );

            if (indexRemove >= 0)
                nCart.splice(indexRemove, 1);

            return { state, cart: nCart };

        case 'EMPTY_CART':
            return { ...state, cart: [] };

        default:
            return state;
    }
};