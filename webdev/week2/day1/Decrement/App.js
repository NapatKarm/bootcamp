import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';


//Currently cannot figure out how to declare the number within the App function
class Decrement extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       Num: 50
    }
    this.setNewNumber = this.setNewNumber.bind(this)
 };
 setNewNumber() {
    if(this.state.Num === 0){
      alert("Cannot be less than zero")
    }
    if(this.state.Num !== 0) this.setState({Num: this.state.Num-1})
 }
 render() {
    return (
       <div>
          <button onClick = {this.setNewNumber}>DECREMENT</button>
          <Content myNumber = {this.state.Num}></Content>
       </div>
    );
 }
}
class Content extends React.Component {
 render() {
    return (
       <div>
          <h3>{this.props.myNumber}</h3>
       </div>
    );
 }
}

Decrement.propTypes = {
Num: PropTypes.number.isRequired,
}


class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Decrement Num ={10}/>
        </header>
      </div>
    );
  }
}


export default App;
