
import React, { Component } from 'react';
import './App.css';
import Card from './card';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      cardname:"",
      number:"",
     validthru:""
    }
  }
  handlechange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  
render() {
  const { cardname, number, validthru } = this.state

  return (
    <div className="App">
      
      <Card name={cardname} num={number} valid={validthru} />
      <form>
        

        <input type='text' name='number' onChange={this.handlechange}/><br/>
        <input type='text' name='cardname' placeholder='enter your name' onChange={this.handlechange} /><br/>
        <input type='text' name='validthru' onChange={this.handlechange}/>
        

      </form>
    </div>

  );
}
}
export default App;
