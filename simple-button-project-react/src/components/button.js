import React, { Component } from 'react';


class Button extends React.Component{
    handleClick=()=>{
      this.props.onClickFun(this.props.incrementValue);  
    };
   
    render(){
        return (
       <button onClick={this.handleClick}>
       +{this.props.incrementValue}
        </button>
        );
      };
};

 export default Button;