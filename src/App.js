import React, { Component } from 'react';
import Validator from './Components/Validator/Validator';
import Char from './Components/Char/Char';

class App extends Component {
  state = {
    inputText: '',
    inputTextLength: 0
  }

  inputTextHandler = event => {
    const inputText = event.target.value;
    this.setState({
      inputText: inputText,
      inputTextLength: inputText.length
    })
  }

  deleteLetterHandler = i => {
    let letterArr = this.state.inputText.split('');
    letterArr.splice(i, 1);
    let letters = letterArr.join('');
    const updatedState = {
      inputText: letters,
      inputTextLength: letters.length
    }
    this.setState(updatedState);
  }

  render() {
    const styling = {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    }
    let letterArr = this.state.inputText.split('');
    let lettersDiv;
    if (this.state.inputTextLength !== 0) {
      lettersDiv = 
        <div style={styling}>
          {letterArr.map((letter, index) => {
            return (
              <Char 
              key={index}
              delete={() => {this.deleteLetterHandler(index)}}
              >{letter}</Char>
            )
          })}
        </div>
    }

    return (
      <div>
        <input type="text" placeholder="Input here" value={this.state.inputText} onChange={this.inputTextHandler}></input>
        <Validator inputLength={this.state.inputTextLength}/>
        {lettersDiv}
      </div>
    )
  }
}

export default App;
