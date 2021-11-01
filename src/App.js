import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button.js'
import HeaderText from './components/HeaderText/HeaderText.js'

function App() {
  return (
    <div className="App">
{/*      <header className="App-header">
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
          Learn React
        </a>
      </header>*/}
      <HeaderText 
        label="Create the best Norway Wedding Registry"
        className="pst_title"
      />
      <Button 
        label="CREATE" 
        className="Primary"
        disabled=""
      />
    </div>
  );
}

export default App;
