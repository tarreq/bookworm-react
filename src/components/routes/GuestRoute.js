import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


function UserRoute({ isAuthenticated, component: Component, ...rest}) {
    return (
       <Route {...rest} render={props => !isAuthenticated ? <Component {...props} /> : <Redirect to="/dashboard" />} />
    )
}

UserRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.token
})


export default connect(mapStateToProps)(UserRoute)
