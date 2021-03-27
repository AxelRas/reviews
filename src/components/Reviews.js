import React, { Component } from 'react';

export default class Reviews extends Component {
    
    render() {
        return (
            <div className="review">
                <img src={this.props.data[this.props.current].picture}></img>
                <div className="review-text">
                    <p className="name">{this.props.data[this.props.current].name}</p>
                    <p className="role">{this.props.data[this.props.current].role}</p>
                    <p className="desc">{this.props.data[this.props.current].reviewDesc}</p>
                </div>
                <div className="functions">
                    <div className="arrows">
                        <button onClick={this.props.previous}>&#60;</button>
                        <button onClick={this.props.next}>&#62;</button>
                    </div>
                    <div className="surprise">
                        <button onClick={this.props.random}>Surprise Me</button>
                    </div>
                </div>
            </div>
        )
    }
}
