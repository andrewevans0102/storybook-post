import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export class Reyrey extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
   
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
   
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
   
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
   
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
   
      return (
        <div>
   
          {button}
        </div>
      );
    }
  }
   
  function LoginButton(props) {
    return (
        <div className="container">
            <button onClick={props.onClick}>show message</button>
        </div>
    );
  }
   
  function LogoutButton(props) {
    return (
        <div className="container">
            <h1>Reyrey likes using Storybook!</h1>
            <img src={require('./Reyrey.jpg')} alt="Reyrey"></img>
        </div>
    );
  }
   
  ReactDOM.render(
    <Reyrey />,
    document.getElementById('root')
  );