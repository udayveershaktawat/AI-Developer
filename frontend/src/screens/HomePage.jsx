import React, {useContext,useState} from 'react'
import {UserContext} from "../context/user.context"

const HomePage = () => {


  const {user} = useContext(UserContext)

  const [isModalOpen,setIsModalOpen]= useState(false)


  return (
   <main className='p-4'>
    <div className='projects'>
      <button className="project p-8 border border-slate-300 rounded-md m-8 ">
        <i className="ri-team-fill"></i>
      </button>
    </div>

   </main>
  )
}

export default HomePage
