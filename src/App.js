import React from 'react'
import Header from "./components/Header"
import TopContainer from './components/TopContainer/TopContainer'
import SkillContainer from './components/SkillContainer/SkillContainer';
import ProjectContainer from './components/ProjectContainer/ProjectContainer';
import Contacts from './components/Contacts/Contacts';
import "./App.css"
const App=()=>
{
  return(
    <div>
<Header />
<TopContainer />
<SkillContainer />
<ProjectContainer />
<Contacts />
    </div>
  );
};

export default App