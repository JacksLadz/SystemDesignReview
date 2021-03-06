import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import '../../css/styles.css'
import Background from '../../css/animalCollective.jpg'

class Login extends Component {

    //function

    render() {
      const styles = {
        input: {
          width: '90%',
          padding: '15px',
          'border': '1px solid black'
        },
        button: {
          border: '1px solid gray',
          padding: '5px'
        }
      }
      const {
        userChange,
        passChange,
        emailChange,
        userSubmit,
        userSave,
        isNew,
        logSuccess,
        handleNew,
        username,
        password,
        email,
        handleLogout
      } = this.props;

      // render login page when member is not new and not logged in
      if (!isNew && !logSuccess) {
        return (
            <div className="innerBox">
              {/*<span style={{'margin-left':'50%'}}><h2>LOGIN</h2></span>*/}
              <form>
                <input className="userName" onChange={userChange} value= {username} name="username" type= "text" placeholder="username" /><br/>
                <input className="pword" onChange={passChange} name="password" value = {password} type="password" placeholder="password" /><br/>
                <input value="Log In" className="but" onClick={userSubmit} type="submit" />
                <input id="register" className="but" type="submit" value="New Account" href="" onClick={handleNew}/>
              </form>

            </div>
        );
      }

      //render new account page if member is new and not logged in
      else if (isNew&& !logSuccess) {
        return (
          <div className="innerBox">
              <span style={{fontSize: '20px'}}>New Account</span>
              <form>
                <input className="userName" onChange={userChange} value={username} name="username" type= "text" placeholder="username"/><br/>
                <input className="pword" onChange={passChange} value = {password} name="password" type="password" placeholder="password"/><br/>
                <input className="email" onChange={emailChange} value = {email} name="email" type="text" placeholder="email"/><br/>
                <input value="Add Account" className="but" onClick={userSave} type="submit"/>
              </form>
          </div>
        )
      }

      //render welcome page if member is logged in
      else if (logSuccess) {
        return (
          <div>
          </div>
        )
      }
    }

}

// Get apps state and pass it as props to Login
//      > whenever state changes, the Login will automatically re-render
function mapStateToProps(state) {
    // return {
    //     username: state.username,
    //     password: state.password
    //   };
}

// Get actions and pass them as props to to Login
//      > now Login has this.props.selectUser
function mapDispatchToProps(dispatch){
    // return bindActionCreators({selectUser: selectUser}, dispatch);
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(mapStateToProps, mapDispatchToProps)(Login);
