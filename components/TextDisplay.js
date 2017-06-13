import React, { Component } from 'react';

class TextDisplay extends Component {

    handleClick() {
        console.log('click');
        this.props.deleteLetter();
    }

    render() {
        return (
            <div>
                <div>Display From Parent : {this.props.text}</div>
                <button
                    onClick={this.handleClick.bind(this)}>
                    Delete One Letter
                </button>
            </div>
        );
    }
}

export default TextDisplay;