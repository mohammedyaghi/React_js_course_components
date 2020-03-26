import React from "react";

//
export default class Display extends React.Component{
    render() {

        const mystyle={
            color:"red",
            backgroundColor:"black",
            padding:"10px"

        }

        return (
            <div style={mystyle}>Welcome!!!!!</div>
        )
    }

}
