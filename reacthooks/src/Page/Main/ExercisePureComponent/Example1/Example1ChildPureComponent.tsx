import { Component, PureComponent } from "react";

interface Props {
    myObj: { a: number, b: string, c: ()=>void}
}

export class Example1ChildPureComponent extends PureComponent<Props> {
    render(){
        console.log('child render');
        return(
            <div className="example1ChildPureComponent">Child Component
                <p>{this.props.myObj.a}</p>
                <p>{this.props.myObj.b}</p>
                <button onClick={()=>this.props.myObj.c()}>callback function</button>
            </div>
        )
    }
}

// function component wrapped med "memo" = class Example extends PureComponent {}
// button callback function må ikke trigger en re-render