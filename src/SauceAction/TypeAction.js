import React, { Component } from 'react';
import {createActions, createReducer} from 'reduxsauce';
import {Immutable} from 'seamless-immutable';

const {Types,Creators} = createActions({
    increment: {payload:1},
    decrement: {payload:1}

},{});

export function increment(state,action){
    console.log("default state " + JSON.stringify(state));
    return {...state, count: action.payload + state.count}
}

export function decrement(state,action){
    return {...state,count: state.count - action.payload}
}

export default Creators;
export const FormType = Types;


// match the type of action to specific function
const INITIAL_STATE = {count: 0, status: false};
export const reducer = createReducer(INITIAL_STATE,{
    [Types.INCREMENT]: increment,
    [Types.DECREMENT] : decrement
});
