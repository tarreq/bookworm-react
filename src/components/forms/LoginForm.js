import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button, Label, Message } from 'semantic-ui-react'
import Validator from 'validator'
import InlineError from '../messages/InlineError'

export class LoginForm extends Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    // onChange handler
    onChange = e => this.setState({ data: {...this.state.data, [e.target.name]: e.target.value} })

    // Form onSubmit
    onSubmit = () => {
        // Validate form data
        const errors = this.validate(this.state.data)

        // update state error object
        this.setState({ errors })

        // If there is no errors
        if(Object.keys(errors).length === 0) {

            // Set loading state to true
            this.setState({ loading: true })
            this.props.submit(this.state.data)
            .catch(err => this.setState({ errors: err.response.data.errors, loading: false}))
        }
    }

    // Validate
    validate = data => {
        const errors = {}
        if(!Validator.isEmail(data.email)) errors.email = "Invalid Email!"
        if(!data.password) errors.password = "Can't be blank!"

        return errors

    }

  render() {
    const { data, errors, loading } = this.state

    return (
      <Form onSubmit={this.onSubmit} loading={loading}>
      { errors.global && <Message negative>
      <Message.Header>Something went wrong</Message.Header>
      <p>{errors.global}</p>
      </Message>}
          <Form.Field error={!!errors.email}>
              <label>Email</label>
              <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="example@example.com" 
                    value={data.email}
                    onChange={this.onChange}
                    />
                {errors.email && <InlineError text={errors.email} />}
          </Form.Field>
          <Form.Field error={!!errors.password}>
              <label>Password</label>
              <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="make it secure..." 
                    value={data.password}
                    onChange={this.onChange}
                    />
                {errors.password && <InlineError text={errors.password} />}
          </Form.Field>
          <Button positive>Login</Button>

                  
      </Form>
      
    )
  }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
}

export default LoginForm
