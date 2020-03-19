import React, { useState } from 'react';
import './App.css';
import MemberFrom from './components/Form';
import TeamCard from './TeamMembers';


function App() {
  const [team, setTeam] = useState([
    {
      name: "",
      email: "", 
      job: "",
    }
  ]);
}

export default App;
