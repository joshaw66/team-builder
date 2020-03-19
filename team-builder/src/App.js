import React, { useState } from 'react';
import './App.css';
import MemberForm from './components/Form';
import TeamCard from './TeamMembers';


function App() {
  const [member, setMember] = useState([{
    id: 1,
    name: 'Joshua Shaw',
    email: 'joshaw66@gmail.com',
    role: 'software engineer'
  }])
  const addNewMember = newMem => {
    
    
    setMember ([...member, newMem]);

  };
  
  return (
    <div className="container">
      <h1 className="header">See the Team Members</h1>
      <div className="form">
        <MemberForm addNewMember={addNewMember} />
        <TeamCard member={member} />
      </div>
    </div>
  );
}

export default App;
