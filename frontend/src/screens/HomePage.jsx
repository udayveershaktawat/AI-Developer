import React, {useContext} from 'react'
import {UserContext} from "../context/user.context"

const HomePage = () => {


  const {user} = useContext(UserContext)


  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default HomePage
