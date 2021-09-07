import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Navigation from 'components/Navigation/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <section id="me" ><p>Me</p></section>
        <section id="education" ><p>Education</p></section>
        <section id="skills" >Skills</section>
      </Router>
    </div>
  );
}

export default App;
