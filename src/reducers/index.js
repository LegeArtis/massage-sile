
const initialState = {
    blog: [],
    pass: undefined
};

const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case 'BLOG_LOADED':
            return {
                ...state,
                blog: action.payload
            };
        case 'PASS_ADD':
            return {
                ...state,
                pass: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
