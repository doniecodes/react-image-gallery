import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorElement = ({error}) => {

  return (
    <div className='error-div'>
        <h1>Error: {error.message}</h1>
        <p>Status: {error.status}, {error.statusText}</p>
        <p></p>
    </div>
  )
}

export default ErrorElement