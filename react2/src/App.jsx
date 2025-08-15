import React from 'react'
import Weather from './components/Weather'
import UserStatus from './components/UserStatus'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>
      <Weather />
      <UserStatus loggedIn ={true} isAdmin={false}/>
      <Greeting timeOfDay = "morning"/>
    </div>
  )
}

export default App
