import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect} from 'react-redux';
import LoginForm from '../forms/LoginForm'
import { login } from '../../actions/auth'


export class LoginPage extends Component {

  // submit data, if successful, redirect to home page
  submit = data => this.props.login(data).then(() => this.props.history.push("/dashboard"))

  render() {
    return (
      <div>
        <h1>Login Page</h1>

        <LoginForm submit={this.submit} />
    </div>
    )
  }
}


LoginPage.propTypes = {
  login: PropTypes.func.isRequired
}

export default connect(null, { login })(LoginPage)
