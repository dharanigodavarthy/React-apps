import React from "react";
import axios from "axios";

class Button extends React.Component{
   state = {userName: ''};
    
    handleUser=(event)=>{
        event.preventDefault();
        let name=this.state.userName;
        let url='https://api.github.com/users/'
        axios.get(url+name)
        .then(resp=>{
            console.log(resp.data);
            this.props.onClickFun(resp.data)
        }).catch(error=>{
            console.log("throwing error");
        } );
        this.setState({userName:""});
    }
   
    render(){
         
        return(
            <div>
                <form onSubmit={this.handleUser}>
                    <input 
                    //ref={(input)=>this.username=input}
                     type="text"  value={this.state.userName} onChange={(e)=>{this.setState({userName:e.target.value})}} 
                     placeholder="github name..."/>
                    <button>Add me!</button>
                </form>
            </div>
        )
    }

}


export default Button;