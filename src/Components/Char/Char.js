import React, { Component } from 'react';

class Char extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <p onClick={this.props.delete}>{this.props.children}</p>
        );
    }
};

export default Char;
