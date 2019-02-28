
class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        username: '',
        password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => (
    })
  }
}