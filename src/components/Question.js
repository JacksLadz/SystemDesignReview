import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Quiz from './Quiz'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

class Question extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: ''
    }
  }

  toggleCheck = (e) => {
    console.log('checked', e.target)
    let stateCopy = Object.assign({}, this.state);
     stateCopy.isChecked = !stateCopy.isChecked ? "checked" : false;
     this.setState(stateCopy);
     console.log('stateCopy', stateCopy);
  }

  render() {
    const { correct, question, index, onAnswerSelected, onSubmit, nextSubmit } = this.props;
    const styles = {
      block: {
        maxWidth: 250,
      },
      radioButton: {
        width: '95%',
        marginBottom: 5,
        marginLeft: '2.5%',
        padding: '2.5em 0',
        // border: '1px solid black',
        backgroundColor: '#eee',
        borderRadius: '5px'
      },
      submit: {
        margin: '2.5%',
        marginLeft: '30%',
        width: '40%',
        fontSize: '15px',
        color: 'white',
        backgroundColor: '#009DF0'
      },
      label: {
        'font-size': '20px',
        'font-weight': 'bold'
      }
    };

    console.log(correct)

function rightOrWrong(correct) {
  console.log('this is the correct state ',correct)
    if (correct===1)
    return (<div id="correctMsg" className="feedbackMsg">Correct!</div>)
    else if (correct===2)
    return (<div id="incorrectMsg" className="feedbackMsg">Try Again</div>)
}

var shuffleAnswers = (input) => {
      let answersArr = [];
      for (let i = 0; i < input.length; i += 1) {
        answersArr.push(input[i]);
      }
      var count = answersArr.length, temp, index;


      // While there are still elements in answersArr
      while (count > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * count);
        // Decrease count by 1
        count--;
        // And swap the last element with it
        temp = answersArr[count];
        answersArr[count] = answersArr[index];
        answersArr[index] = temp;
      }
      return answersArr;
    }

    var answers = shuffleAnswers(question.answers);

    return (
      <MuiThemeProvider>
        <div>
          {/*<span className='questionWrapper'>
            <h1 className="questionText">{question.question}</h1>
          </span>*/}

          <div className="container">
            <h2 className="questionText">{question.question}</h2>

            <ul>
              <li>
                <input type="radio" id="f-option" name="selector" value={0}checked={this.state.isChecked} />
                <label for="f-option" onClick={this.toggleCheck}>
                  {question.answers[0]}
                  </label>
                <div className="check"></div>
              </li>

              <li>
                <input type="radio" id="s-option" name="selector" value={1}checked={this.state.isChecked} />
                <label for="s-option" onClick={this.toggleCheck}>
                  {question.answers[1]}
                </label>
                <div className="check"><div className="inside"></div></div>
              </li>

              <li>
                <input type="radio" id="t-option" name="selector" value={2} checked={this.state.isChecked}/>
                <label for="t-option" onClick={this.toggleCheck}>
                  {question.answers[2]}
                </label>
                <div className="check"><div className="inside"></div></div>
              </li>

              <li>
                <input type="radio" id="t-option" name="selector" value={3}checked={this.state.isChecked}/>
                <label for="t-option" onClick={this.toggleCheck}>
                  {question.answers[3]}
                </label>
                <div className="check"><div className="inside"></div></div>
              </li>
            </ul>
          </div>

          {/*<form onChange={onAnswerSelected}>
            <input className="answerChoice" type="radio" value={0} /> {question.answers[0]} <br/>
            <input className="answerChoice" type="radio" value={1} /> {question.answers[1]} <br/>
            <input className="answerChoice" type="radio" value={2} /> {question.answers[2]} <br/>
            <input className="answerChoice" type="radio" value={3} /> {question.answers[3]} <br/>
          </form>*/}

          {/*<RadioButtonGroup name="shipSpeed" defaultSelected="not_light" onChange={onAnswerSelected}>
            <RadioButton
              value={0}
              label={question.answers[0]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
            <RadioButton
              value={1}
              label={question.answers[1]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
            <RadioButton
              value={2}
              label={question.answers[2]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
            <RadioButton
              value={3}
              label={question.answers[3]}
              style={styles.radioButton}
              labelStyle={styles.label}
            />
          </RadioButtonGroup>*/}

          {rightOrWrong(this.props.correct)}
          <RaisedButton label="Submit" style={styles.submit} labelStyle={{fontSize: styles.submit.fontSize, color: styles.submit.color}} backgroundColor={styles.submit.backgroundColor} onClick={onSubmit} />
          <RaisedButton label=">" labelStyle={{fontSize: styles.submit.fontSize, color: styles.submit.color}} backgroundColor={styles.submit.backgroundColor} onClick={nextSubmit} />

        </div>
      </MuiThemeProvider>
    )
  }
}

export default Question
