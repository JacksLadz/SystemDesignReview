import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Question from './Question'
import Quiz from './Quiz';
import Login from '../containers/Login';
import '../../css/styles.css'
const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:"",
      password:"",
      isNew:false,
      logSuccess:false,
      quiz: {
        questions: [
          {
            question: "5 * 4 =",
            answers: [
              {
                "point": 1,
                "label": "20"
              },
              {
                "point": 0,
                "label": "10"
              },
              {
                "point": 0,
                "label": "30"
              },
              {
                "point": 0,
                "label": "25"
              },
            ]
          },
          {
            question: "5 + 5 =",
            answers: [
              {
                "point": 0,
                "label": "2345"
              },
              {
                "point": 1,
                "label": "10"
              },
              {
                "point": 0,
                "label": "999"
              },
              {
                "point": 0,
                "label": "55"
              },
            ]
          }
      ],
        index: 0,
        numberOfQuestions: 2,
        score: 0,
        answers: [],
        completed: false
      }
    }
    //
    // this.userChange = this.userChange.bind(this);
    // this.passChange = this.passChange.bind(this);
    // this.userSubmit = this.userSubmit.bind(this);
    // this.userSave = this.userSave.bind(this);
    // this.handleNew = this.handleNew.bind(this);

  }

  componentDidMount () {
    // fetch('/questions')
    //   .then(res => res.json())
    //   .then(data => {
    //     quiz = Object.assign(this.state, data);
    //     this.setState(quiz);
    //   })
  }

  handleNew = (e) => {
    e.preventDefault()
    this.setState({isNew:true});
  }

  userChange = (e) => {

    this.setState({username:e.target.value});
  }

  passChange = (e) => {
    this.setState({password:e.target.value});
  }

  userSubmit = (e) => {
    e.preventDefault()
    //axios.post('/confirm',{username:this.state.username,password:this.state.password})
    this.setState({logSuccess:true})

  }

  userSave = (e) => {
    e.preventDefault()
    //axios.post('/save',{username:this.state.username,password:this.state.password})
  }

  handleSubmit = () => {
    const { quiz } = this.state;
    const stateNew = Object.assign({}, this.state);
    console.log('index', quiz.index)
    if (quiz.index + 1 < quiz.numberOfQuestions) {
      stateNew.quiz.index = quiz.index + 1;
      console.log('newIndex', stateNew.quiz.index)
      this.setState(stateNew)
    } else {
      stateNew.quiz.completed = true;
      this.setState(stateNew);
      let score = quiz.score;
      stateNew.quiz.answers.map((answer, i) => (
        score = score + quiz.questions[i].answers[answer].point
      ))
      console.log('score', score);
      stateNew.quiz.score = score;
      this.setState(stateNew)
    }
  }

  handleAnswerSelected = (event) => {
    const { quiz } = this.state;
    let list = [...quiz.answers.slice(0, quiz.index),
                event.target.value,
                ...quiz.answers.slice(quiz.index + 1)]
    this.setState({'answers': list})
  }

  render() {
    return (
      <div className="app">
        <div>
          <Login userChange={this.userChange}
                  passChange={this.passChange}
                  userSave = {this.userSave}
                  userSubmit={this.userSubmit}
                  handleNew={this.handleNew}
                  isNew = {this.state.isNew}
                  logSuccess = {this.state.logSuccess}
                  username = {this.state.username}
                />
        </div>
        <Quiz quiz = {this.state.quiz}
              index = {this.state.quiz.index}
              numberOfQuestions = {this.state.quiz.numberOfQuestions}
              score = {this.state.quiz.score}
              completed = {this.state.quiz.completed}
              handleAnswerSelected = {this.handleAnswerSelected}
              handleSubmit = {this.handleSubmit}/>
    </div>
    )
   }
}

export default App;
