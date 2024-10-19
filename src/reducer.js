export const initialState = {
    basket: [],
    // setting the initial state to an empty array or basket
}; 

const reducer = (state, action) => { 
    console.log(action);
    switch (action.type) {
        // It would be listening to the action on the Add to Basket button
        case 'ADD_TO_BASKET':
            // Then it will update the state based on
            return {
                ...state,
                // the old state, + , the new state(which is the action taken)
                basket: [...state.basket, action.item],
            };
        default:
            return state;
    }
};

export default reducer;
