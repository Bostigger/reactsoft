import React, {Component} from "react";

export default class Profile extends Component{
    state= {
        count: 0
    }
    render() {
        return (
            <div>
                <h2>Number of clicks: {this.state.count}</h2>
                <button onClick={(e)=>{this.setState({count:this.state.count+1})}}>Click me</button>
            </div>
        );
    }
}