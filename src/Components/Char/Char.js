import React, { Component } from 'react';

class Char extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const styling = {
            padding: '16px',
            textAlign: 'center',
            margin: '16px',
            border: '1px solid black'
        }
        return (
            <p style={styling} onClick={this.props.delete}>{this.props.children}</p>
        );
    }
};

export default Char;
