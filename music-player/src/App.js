import {useState, useEffect} from 'react';
import Player from './components/Player/Player';


function App() {
  const [songs] = useState([
    {
      title: "Life Of The Party (feat. Andre 3000)",
      artist: "Kanye West",
      img_src: "./images/song-1.jpg",
      src: "./music/Kanye West - Life Of The Party (feat. Andre 3000).mp3"
    },
    {
      title: "Flashing Lights",
      artist: "Kanye West",
      img_src: "./images/song-2.png",
      src: "./music/Flashing Lights.mp3"
    },
    {
      title: "I'm God",
      artist: "Clams Casino",
      img_src: "./images/song-3.jpg",
      src: "./music/Clams Casino - I'm God.mp3"
    },
    {
      title: "Just For Now",
      artist: "Imogen Heap",
      img_src: "./images/song-4.jpg",
      src: "./music/Imogen Heap - Just For Now.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);


  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;

