import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: '',
        email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    return (
      <div>
        <div className="session-wrap">
          <div className="session-forms">
            <div className="session-forms-container">
              <form className="col-flex" onSubmit={this.handleSubmit}>
                <div className="dots">
                  <h1 className="dot-1">●</h1>
                  <h1 className="dot-2">●</h1>
                </div>
                <h1 className="form-h1">Welcome to Smilr</h1>
                <label>
                  <input className="form-input" type="text" value={this.state.email} onChange={this.update("email")} placeholder="Email address"/>
                </label>
                <label>
                  <input className="form-input" type="text" value={this.state.username} onChange={this.update("username")} placeholder="Username"/>
                </label>
                <label>
                  <input className="form-input" type="password" value={this.state.password} onChange={this.update("password")} placeholder="Password"/>
                </label>
                <div className="login-errors"><h1>{this.props.errors[0]}</h1></div>
                <input className="sign-up-custom blue-button" type="submit" value={this.props.formType}/>
                <h2 className="form-h2">Already a member?&nbsp;
                <Link to='/login' className="form-sign-up-link">Login here</Link>
                </h2>
              </form>
            </div>
          </div>
        </div>
        <div className="sign-up-bg"></div>
      </div>
    )
  }
}

export default SignUpForm;