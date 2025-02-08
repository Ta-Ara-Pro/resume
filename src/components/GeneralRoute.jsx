import React from 'react'
import { Outlet } from 'react-router-dom'

const GeneralRoute = ({children}) => {
  return (
    <div>
      {children }
    </div>
  )
}

export default GeneralRoute
