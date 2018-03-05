import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {}
    };
  }
  componentDidMount() {
   this.UserList();
  }
  UserList() {
    fetch("http://localhost:8080/user/1")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          user : result
        });
      },
      (error) => {
        console.log(error);
      }
    )
  }

  render() {
    const { user } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.<br/>{user.name} --> {user.email} --> {user.mobile}
        </p>
      </div>
    );
  }
}

export default App;