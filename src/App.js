import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import Header from './components/Header/Header'
import Introduction from './components/Introduction/Introduction'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Technology from './components/Technology/Technology'


function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Introduction />
      <Technology />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
