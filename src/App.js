import React from 'react';
import './App.css';
import Users from './Users';
import { userData } from './data.js';


const App =() => {
                      
    return (
      <div className="App">
        <Users users={userData} />        
      </div>
    );
}

export default App;
