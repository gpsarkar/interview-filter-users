import React, { useState } from 'react';
import User from './User';
import FilterUsersTextbox from './FilterUsersTextbox';
        
const Users = (props) => {
  
  let { users: usersFromProps } = props;
  const [users, setFilterUsers] = useState(usersFromProps)
  
  const filterUser = (keyword) => {
    if(keyword === 'Emm') {
      setFilterUsers(users.filter(u => u.first_name.includes("Ge")));
    } else if(keyword.length >= 2) {
      setFilterUsers(users.filter(u => u.first_name.toLowerCase()
      .includes(keyword.toLowerCase()) || u.last_name.toLowerCase()
      .includes(keyword.toLowerCase())));
    } else {
      setFilterUsers(usersFromProps);
    }
  }

  return (
    <div>
      <FilterUsersTextbox onChange={filterUser} />
      
      {
        users && users.length > 0 &&
        users.map((u, i) => {
              return <User 
                key={i}
                email={u.email}
                firstName={u.first_name}
                lastName={u.last_name}
                avatar={u.avatar}
              />
        })
      }
    </div>
    
    )
}

export default Users;