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
  const [select, setSelect] = useState([{ id:1, name:'Selected 1', selected:false}])
  return (
    <>
      <div>Select a Thing</div>
      <SimpleSelect select={select} />
      <button>Select</button>
    </>
  )
}

export default App;
