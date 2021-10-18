// import logo from './logo.svg';
// import './App.css';

function App() {

  function playMusic(){
  
    console.log("CLicked")
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={playMusic}> Play</button>
        <button onClick={playMusic}> Stop</button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
