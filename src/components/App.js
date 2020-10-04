import React,{Component} from 'react';
import {connect} from 'react-redux';

import {incriment,decrement} from '../actions';

class App extends Component{
  render(){
    const props  = this.props
    return (
      <React.Fragment>
        <div>value: {props.value} </div>
        <button onClick={props.incriment} >+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    
    )
  }
}

const mapStateToProps = state => ({value: state.count.value})
const mapDispatchToProps = dispatch => ({
  incriment:() => dispatch(incriment()),
  decrement:() => dispatch(decrement())
})
export default connect(mapStateToProps,mapDispatchToProps)(App)

