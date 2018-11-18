import React from "react";


class Squares extends React.Component{
   

    render() {

        // when clicked should change the color
        // 

        return (
            <div className="squares" >
                <div Onclick={this.changeColor} className="square" />
                <div Onclick={this.changeColor} className="square" />
                <div Onclick={this.changeColor} className="square" />
                <div Onclick={this.changeColor} className="square" />
                <div Onclick={this.changeColor} className="square" />
                <div Onclick={this.changeColor} className="square" />
            </div>

        )
    }

}
export default Squares 