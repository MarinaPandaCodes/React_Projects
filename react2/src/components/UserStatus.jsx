import React from 'react'

const UserStatus = (props) => {
  if (props.loggedIn && props.isAdmin) {
    return (
      <div>
        <h1>Welcome Admin</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Welome User</h1>
      </div>
    )
  }
}

export default UserStatus
