import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [friends, setFriends] = useState(['Rinki', 'Pinki', 'Tinki'])
  const increment = () => 
    setCount(count + 1)
  const decrecrement = () => 
    setCount(count - 1)
  const reset = () => 
    setCount(0)

  const addFriend = () => {
    setFriends([...friends, "Minki"])
  }
  const removeFriend = () => {
    setFriends(friends.slice(0, friends.length - 1))
  }

  return (
    <section>
      <h1>Count: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrecrement}>-</button>
      <button onClick={reset}>reset</button>
      {friends.map((f) => ( <li key={Math.random()}>{f}</li>))}
      <button onClick={addFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove Friend</button>
      <button onClick={updateFriend}>Update Friend</button>





    </section>
  )
}

export default App
