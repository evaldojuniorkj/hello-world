import React from "react";

export class Demo extends React.Component {
    render(){
        return(
            <button onClick={ () => alert('Hello, world!') }>Click me!</button>
        )
    }
}