import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/auth'


function HomePage({ isAuthenticated, logout }) {
  return (
    <div>
      <h1>Home Page!</h1>
      <div>
      { isAuthenticated ? <button onClick= {() => logout() }>Logout</button> : <Link to="/login">Login</Link>}
      </div>
           
    </div>
  )
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
})




export default connect(mapStateToProps, { logout })(HomePage)
