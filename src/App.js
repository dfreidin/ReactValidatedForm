import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      name_val: "Name is required",
      email_val: "Email is required",
      submitted: false
    };
    this.email_re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  }
  updateName(event) {
    let name = event.target.value;
    let name_val = "";
    if(name.length === 0) {
      name_val = "Name is required";
    }
    else if(name.length < 8) {
      name_val = "Name must be at least 8 characters";
    }
    this.setState({name, name_val});
  }
  updateEmail(event) {
    let email = event.target.value;
    let email_val = "";
    if(email.length === 0) {
      email_val = "Email is required";
    }
    else if(!this.email_re.test(email)) {
      email_val = "Email is invalid";
    }
    this.setState({email, email_val});
  }
  submit(event) {
    event.preventDefault();
    this.setState({
      submitted: true
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Validated Form</h1>
        {
          this.state.submitted ? <h3>Thanks!</h3> : (
          <form onSubmit={this.submit.bind(this)}>
            <p>
              <input type="text" placeholder="Name" value={this.state.name} onChange={this.updateName.bind(this)} />
              <span style={{color: "red"}}>{this.state.name_val}</span>
            </p>
            <p>
              <input type="text" placeholder="Email" value={this.state.email} onChange={this.updateEmail.bind(this)} />
              <span style={{color: "red"}}>{this.state.email_val}</span>
            </p>
            <p>
              <button type="submit" disabled={this.state.name_val || this.state.email_val}>Submit</button>
            </p>
          </form>
        )}
      </div>
    );
  }
}

export default App;
