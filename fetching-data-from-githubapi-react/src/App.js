import React, { Component } from 'react';
import CardList from './components/cardList.js';
import Button from './components/input';
import './App.css';

class App extends Component {
  state = {
    users:[
  ]
  }
  clickHandler=(user)=>{
    this.setState(prevState=>({
      users:prevState.users.concat(user)
    }))
    }
  
  render() {
    return (
      <div className="Apps">
        <Button onClickFun={this.clickHandler} />
        <CardList data={this.state.users}/>
      </div>
    );
  }
}

export default App;
