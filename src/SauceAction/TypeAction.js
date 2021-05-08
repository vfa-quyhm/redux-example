import React, { Component } from 'react';
import {createActions, createReducer} from 'reduxsauce';
import {Immutable} from 'seamless-immutable';

const {Types,Creators} = createActions({
    increment: {payload:1},
    decrement: {payload:1}

},{});

function increment(state,action){
    switch (action.type) {
        case '':
            
            break;
   
        default:
            break;
    }
}

function decrement(state,action){

}

export default TypeAction;
