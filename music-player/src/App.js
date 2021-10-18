// import logo from './logo.svg';
// import './App.css';

function App() {

  function playMusic(){
    console.log("Music play")
  }
  function StopMusic(){
    console.log("Music stop")
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={playMusic}> Play</button>
        <button onClick={StopMusic}> Stop</button>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;
