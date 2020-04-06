import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstN: '',
      firstNStatus: 'none',
      lastN: '',
      lastNStatus: 'none',
      phone: '',
      phoneStatus: 'none',
      email: '',
      emailStatus: 'none',
    }
  }

  handleFirstName = (e) => {
    const name = e.target.value;
    this.setState({ firstN: name }, () => {
      if (!this.state.firstN) {
        this.setState({ firstNStatus: 'initial' });
      } else {
        this.setState({ firstNStatus: 'none' });
      }
    });
  }

  handleLastName = (e) => {
    const name = e.target.value;
    this.setState({ lastN: name }, () => {
      if (!this.state.lastN) {
        this.setState({ lastNStatus: 'initial' });
      } else {
        this.setState({ lastNStatus: 'none' });
      }
    });
  }

  handlePhone = (e) => {
    const number = e.target.value;
    this.setState({ phone: number }, () => {
      if (this.state.phone.length !== 10) {
        this.setState({ phoneStatus: 'initial' });
      } else {
        if (this.state.phone[0] !== '0') {
          this.setState({ phoneStatus: 'initial' });
        } else {
          this.setState({ phoneStatus: 'none' });
        }
      }
    });
  }

  handleEmail = (e) => {
    const email = e.target.value;
    const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ email: email }, () => {
      if (mailformat.test(String(this.state.email).toLowerCase())) {
        this.setState({ emailStatus: 'none' });
      } else {
        this.setState({ emailStatus: 'initial' });
      }
    });
  }

  render() {
    return (
      <div>
        <form>
          <div className="field-group">
            <label for="fname">First Name</label>
            <input id="fname" name="firstN" type="text" value={this.state.firstN} onChange={this.handleFirstName} />
            <span className="error-message" style={{ 'display': this.state.firstNStatus }}>First name is required</span>
          </div>
          <div className="field-group">
            <label for="lname">Last Name</label>
            <input id="lname" name="lastN" type="text" value={this.state.lastN} onChange={this.handleLastName} />
            <span className="error-message" style={{ 'display': this.state.lastNStatus }}>Last name is required</span>
          </div>
          <div className="field-group">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" type="text" value={this.state.phone} onChange={this.handlePhone} />
            <span className="error-message" style={{ 'display': this.state.phoneStatus }}>Phone number is invalid</span>
          </div>
          <div className="field-group">
            <label for="email">Email</label>
            <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleEmail} />
            <span className="error-message" style={{ 'display': this.state.emailStatus }}>Email is invalid</span>
          </div>
        </form>
      </div>
    )
  }
}

export default App;
