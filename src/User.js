import React from 'react';

const User = (props) => {
  const { email, firstName, lastName, avatar } = props;
  return (
    <div className="user">
      <img src={avatar} alt="avatar" />
      
      <div className="header">
        <div className="name">{lastName}, {firstName}</div>
        <div className="email">{email}</div>        
      </div>
      
    </div>
  )
}

export default User;