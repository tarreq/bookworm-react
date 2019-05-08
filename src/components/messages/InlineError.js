import React from 'react'
import PropTypes from 'prop-types'


function InlineError({ text }) {
  return (
    <span style={{color: "#D63F26"}}>
      {text}
    </span>
  )
}

InlineError.propTypes = {
    text: PropTypes.string.isRequired
}

export default InlineError
