import React from 'react'
import {connect} from 'react-redux';
import {createIncreaseAction,createDecreaseAction,createAsyncIncreaseAction,createAsyncDecreaseAction} from '../../store/action/count';

/**
 * 展示组件
 * @param props
 * @returns {*}
 * @constructor
 */
function Counter (props) {
  return (
    <div>
      <h1>{props.number}</h1>
      <p>
        <button onClick={props.onDecrease}>减</button>
        <button onClick={props.onAsyncDecrease}>异步减</button>
        <button onClick={props.onIncrease}>加</button>
        <button onClick={props.onAsyncIncrease}>异步加</button>
      </p>
    </div>
  )
}

function mapStateToProps (state,ownState) {
  console.log(ownState);
  return {
    number: state.count,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    onIncrease(){
      dispatch(createIncreaseAction());
    },
    onDecrease(){
      dispatch(createDecreaseAction());
    },
    onAsyncIncrease(){
      dispatch(createAsyncIncreaseAction());
    },
    onAsyncDecrease(){
      dispatch(createAsyncDecreaseAction());
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

