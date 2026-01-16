import React, {useContext} from 'react'
import {UserContext} from "../context/user.context"

const HomePage = () => {


  const {user} = useContext(UserContext)


  return (
    <div>
      {(user)}
    </div>
  )
}

export default HomePage
