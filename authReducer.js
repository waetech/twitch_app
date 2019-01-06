
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIGN_OUT:
         return {...state, isSignedIn: true, userId: action.payload };
         case SIGN_OUT:
           return {...state, isSignedOut: false, userId: null };
           default:
           return state;
    }
};
