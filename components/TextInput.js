import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputText: 'init Text'
        }
    }

    handleChange(e) {
        // this.setState = {

        // }
        this.setState({
            inputText: e.target.value
        });
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder="Insert Text"
                    value={this.state.inputText}
                    onChange={this.handleChange.bind(this)}
                />
                <TextDisplay text={this.state.inputText} />
            </div>
        );
    }
}

export default TextInput;