import React from 'react';
import {connect} from 'react-redux';
import {getIncrement, getDecrement} from '../action/FormAction';
const Form = ({count,status, Increment, Decrement}) => {
    return (
        <div>
            <button onClick={() =>Increment() }>+</button>
            <span>{count}</span>
            <button onClick={() => Decrement()}>-</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count : state.form.count,
        status : state.form.status
    }
}

const mapdispatchtoprops = (dispatch) => {
   return {
     Increment : () => dispatch(getIncrement()),
     Decrement : () => dispatch(getDecrement())
   }
}

export default connect(mapStateToProps,mapdispatchtoprops)(Form);