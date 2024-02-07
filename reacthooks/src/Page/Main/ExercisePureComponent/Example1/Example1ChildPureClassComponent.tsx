import { Component, PureComponent } from "react";
import { PropsForClass } from "./Example1Types";

// Legacy class component
export class Example1ChildPureClassComponent extends PureComponent<PropsForClass> {
    
    state = {
        backgroundColor: 'white'
    }
    
    changeTheme = () => {
        if(this.state.backgroundColor === 'white'){
            this.setState({backgroundColor: 'black'})
        }
        if(this.state.backgroundColor === 'black'){
            this.setState({backgroundColor: 'white'})
        }
    }
    
    render(){
        console.log('child render');
        return(
            <div className="example1ChildPureComponent" style={{backgroundColor: this.state.backgroundColor}}>Child Component
                <p>{this.props.myObj.a}</p>
                <p>{this.props.myObj.b}</p>
                <button onClick={()=> this.changeTheme()}>Change theme</button>
                <button onClick={()=>this.props.myObj.c()}>callback function</button>
            </div>
        )
    }
}



// function component wrapped med "memo" = class Example extends PureComponent {}
// button callback function må ikke trigger en re-render