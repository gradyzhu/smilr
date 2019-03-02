import React from 'react';
import { Link } from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  render() {
    return (
      <div>
        <div className="session-wrap">
          <div className="session-forms">
            <div className="session-forms-container">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div className="dots">
                    <h1 className="dot-1">●</h1>
                    <h1 className="dot-2">●</h1>
                  </div>
                  <h1 className="form-h1">Login to Smilr</h1>
                  <label>
                    <input type="text"
                      value={this.state.username}
                      onChange={this.update('username')}
                      className="form-input"
                      placeholder="Username"
                    />
                  </label>
                  <label>
                    <input type="password"
                      value={this.state.password}
                      onChange={this.update('password')}
                      className="form-input"
                      placeholder="Password"
                    />
                  </label>
                  <div className="login-errors"><h1>{this.props.errors[0]}</h1></div>
                  <input 
                    type="submit" 
                    value={this.props.formType}
                    className="form-submit-button" />
                </div>
                <h2 className="form-h2">Not a member?&nbsp;
                  <Link to='/signup' className="form-sign-up-link">Sign up here</Link>
                </h2>
              </form>
            </div>
          </div>
        </div>
        <div className="log-in-bg"></div>
      </div>
    );
  }
}

export default LogInForm;
