import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question'

function getInitialState () {
  return {
    questions: [{
      question: "Why don't you understand Redux?",
      answerChoices: ['You are lame', 'Answer', 'You are lame', 'You are lame']
    }]
  }
}

// function fetchData() {
//   return fetch('/data')
//     .then(response => response.json());
// }

class App extends Component {
  constructor (props) {
    super(props)
    this.state = getInitialState();
  }

  componentDidMount () {
    // fetch data here
  }

  render () {
    return (
      <div className="app">
        <div>
          login
        </div>
        <Question state= {this.state} questions={this.state.questions} />
      </div>
    )
  }
}

export default App;
