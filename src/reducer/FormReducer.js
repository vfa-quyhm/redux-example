import React from 'react';

const initialState = {
    count : 0,
    status : true
};
const FormReducer = (state = initialState,action) => {
    switch (action.type) {
        case "Increment":
            return {...state, count:state.count+action.payload};
            break;
        case "Decrement":
            return {...state, count:state.count-action.payload};
            break;
        default:
            return {...state};
            break;
    }
};

export default FormReducer;