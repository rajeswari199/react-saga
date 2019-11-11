const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_CURRENCY':
            return { ...state, currency: 'fetching data' };
        case 'DATA':
            return { ...state, currency: action.json }
        default:
            return state;
    }
};
export default reducer;