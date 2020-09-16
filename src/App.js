import React, {useState} from 'react';
import SimpleSelect from './SimpleSelect';
// import logo from './logo.svg';
// import './App.css';

function App() {
  /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
      </header>
    </div>
  ); */
  const [select, setSelect] = useState([
    { id:1, name:'Selected 1', selected:false}, 
    { id:2, name:'Selected 2', selected:false}, 
    { id:3, name:'Selected 3', selected:false}]);

  const [value, setValue] = useState('a mango');
  const handleSelect = (e) => {
    setValue(e)
  }

  return (
    <>
      <h1>Yet Another Single Select!</h1>
      <SimpleSelect title="Select a fruit" select={select} onChange={handleSelect}/>
      <p>What were you expecting, {value}?</p>
    </>
  )
}

export default App;
