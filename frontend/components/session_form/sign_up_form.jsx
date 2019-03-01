import React from 'react';

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

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email:
          <input type="text" value={this.state.email} onChange={this.update("email")}/>
        </label>
        <br/>
        <label>Username:
          <input type="text" value={this.state.username} onChange={this.update("username")}/>
        </label>
        <br/>
        <label>Password:
          <input type="password" value={this.state.password} onChange={this.update("password")}/>
        </label>
        <br/>
        <input type="submit" value={this.props.formType}/>
      </form>
    )
  }
}

export default SignUpForm;