import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleInput = field => e => this.setState({
    [field]: e.currentTarget.value
  });

  handleSubmit = e => {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo = (e) => {
    e.preventDefault();
    const user = {
      username: "josh", 
      email: "josh@gmail.com", 
      password: "password"
    };

    this.props.processForm(user);
  };

  componentWillUnmount = () => {
    this.props.clearErrors();
  };

  render = () => {
    const { errors, formType } = this.props;
    const { username, password } = this.state;
    return (
      <>
        <div className="session-wrap">
          <div className="session-forms">
            <div className="session-forms-container">
              <form onSubmit={this.handleSubmit}>
                <div className="col-flex">
                  <div className="dots">
                    <h1 className="dot-1">●</h1>
                    <h1 className="dot-2">●</h1>
                  </div>
                  <h1 className="form-h1">Login to Smilr</h1>
                  <label>
                    <input type="text"
                      value={username}
                      onChange={this.handleInput('username')}
                      className="username-input form-input"
                      placeholder="Username"
                    />
                  </label>
                  <label>
                    <input type="password"
                      value={password}
                      onChange={this.handleInput('password')}
                      className="password-input form-input"
                      placeholder="Password"
                    />
                  </label>
                  <div className="login-errors"><h1>{errors[0]}</h1></div>
                  <input 
                    type="submit" 
                    value={formType}
                    className="login-button blue-button"/>
                  <button
                    type="submit" 
                    onClick={this.handleDemo}
                    className="demo-button blue-button">Demo</button>
                  <h2 className="form-h2">Not a member?&nbsp;
                    <Link to='/signup' className="form-sign-up-link">Sign up here</Link>
                  </h2>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="log-in-bg"></div>
      </>
    );
  }
}

export default LogInForm;
