import React from 'react';
import {connect} from 'react-redux';
import TypeAction from '../SauceAction/TypeAction';
const Form = ({count,status,Increment,Decrement}) => {
    return (
        <div>
            <button onClick={() => Increment()}>+</button>
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
     Increment : () => dispatch(TypeAction.increment()),
     Decrement : () => dispatch(TypeAction.decrement())
   }
}

export default connect(mapStateToProps,mapdispatchtoprops)(Form);