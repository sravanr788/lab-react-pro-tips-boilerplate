import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const AuthContext = ({children}) => {
    const [isSubmit,setSubmit] = useState(false)
    console.log(isSubmit)
  return (
    <AppContext.Provider value={{isSubmit,setSubmit}}>
    {children}
  </AppContext.Provider>
  )
}

export default AuthContext