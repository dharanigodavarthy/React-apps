import React, { Component } from 'react';
import './App.css';
import Button from './components/button';
import Result from './components/result';

class App extends Component {  
  state={counter:0};
  handleClickFun=(incrementValue)=>{
    this.setState((prevState)=>({
        counter: this.state.counter+incrementValue
    }));
}

  render(){
  return (
   <div>
    <Button incrementValue={1} onClickFun={this.handleClickFun}/>
    <Button incrementValue={2} onClickFun={this.handleClickFun}/>
    <Button incrementValue={5} onClickFun={this.handleClickFun}/>
    <Button incrementValue={100} onClickFun={this.handleClickFun}/>
    <Button incrementValue={1000} onClickFun={this.handleClickFun}/>
    <Result counter={this.state.counter}/>
    </div>
  );
};
};

export default App;
