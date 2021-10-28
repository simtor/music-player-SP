import React, {useState, useRef, useEffect} from 'react'
import Controls from './Controls';
import Details from './Details';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faRandom} from '@fortawesome/free-solid-svg-icons'

function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying, setIsPlaying,] = useState(false);
    const [searchTerm, setSearchTerm,] = useState("");
    const allsongs = [];

    useEffect(() => {
        if (isPlaying) {
            audioEl.current.play();
            console.log("moving to next track");
            nextTrack();
        } else {
            audioEl.current.pause();
        }
    });

    let array = props.songs;
    array.map((song)=>{
        allsongs.push(
        <div class="nameSong">
            <div className ='circle-image'>
            <img src={song.img_src} alt="" />
            {/* <button><img src={song.img_src} alt="" onClick={console.log("clicked")} /></button> */}
            </div>
            <div className ="text-song">
                <p>{song.title}</p>
                <p>{song.artist}</p>
            </div>
        </div>)
        console.log(song.title)
    })

    const ShuffleSong =() =>{
        props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp = Math.floor(Math.random() * props.songs.length);
                console.log(temp)
                return temp;
            });
        // console.log(props.songs[indexShuffle])
        // console.log(indexShuffle)
    }

    const SkipSong = (forwards = true) => {
        if (forwards) {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp++;
                if (temp > props.songs.length - 1) {
                    temp = 0;
                }
                return temp;
            });
        } else {
            props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp--;
                if (temp < 0) {
                    temp = props.songs.length - 1;
                }
                return temp;
            });
        }
    }

    function nextTrack(){
        console.log("Running....")
        let c=0;
        let a=document.getElementById("au");
            a.addEventListener('ended', function(){
                console.log("Song ended")
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp++;
                    if (temp > props.songs.length - 1) {
                        temp = 0;
                    }
                    return temp;
                    // let temp = props.currentSongIndex;
                    // temp = Math.floor(Math.random() * props.songs.length);
                    // console.log(temp)
                    // return temp;
                });
            // document.getElementById("au").src=props.songs[1];
            a.load();
            console.log(c);
            c++;
            if(c>=props.songs.length){
                c=0;
            }
        });
      }

    return (
        <div className="c-player">
            <h1 classname='title'>Rebmen Music Palyer</h1>
            <div>
            <input className='searchBar' type="text" placeholder="Search.." onChange={event =>{setSearchTerm(event.target.value)}}></input>{
                array.filter((song) =>{
                    console.log("searchTerm, " + searchTerm)
                    if(searchTerm == ""){
                        console.log("Got here 1");
                        return "";
                    }else if(song.title.toLowerCase().includes(searchTerm.toLowerCase())){
                        console.log("Got here")
                        return song.title;
                    } 
                }).map((song)=>{
                    console.log("I used it here")
                    return <div className="songslists2">{<div className ='circle-image2'>
                    <img src={song.img_src} alt="" />
                    </div>}
                    <div className ="text-song"><p>{song.title}</p></div>
                    </div>
                })}
            </div>
            {/* <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio> */}
            <h4>Playing now</h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <button className="shuffleButton" onClick={ShuffleSong}>
                Shuffle
                <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
            </button>
            <audio ref="audio_tag" src="./music/Imogen Heap - Just For Now.mp3" src={props.songs[props.currentSongIndex].src}
                ref={audioEl} id="au" controls autoPlay/>
            {/* <button onClick={nextTrack}>
                songs
            </button> */}
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
            {/* <button onClick={displayMusic}> Songs tracks or albums</button> */}
            <div className='nameSong'>
            <p>Songs:</p>
            {/* <ul>{allsongs}</ul> */}
            <div class="songslists">{allsongs}</div>
            </div>
        </div>
    )
}

export default Player;
