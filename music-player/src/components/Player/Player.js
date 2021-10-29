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
            </div>
            <div className ="text-song">
                <p>{song.title}</p>
                <p>{song.artist}</p>
            </div>
        </div>)
        // console.log("Created by Simone")
    })

    const ShuffleSong =() =>{
        props.setCurrentSongIndex(() => {
                let temp = props.currentSongIndex;
                temp = Math.floor(Math.random() * props.songs.length);
                return temp;
            });
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
        let c=0;
        let a=document.getElementById("au");
            a.addEventListener('ended', function(){
                props.setCurrentSongIndex(() => {
                    let temp = props.currentSongIndex;
                    temp++;
                    if (temp > props.songs.length - 1) {
                        temp = 0;
                    }
                    return temp;
                });
            a.load();
            c++;
            if(c>=props.songs.length){
                c=0;
            }
        });
      }

    return (
        <div className="c-player">
            <h1 classname='title'>Rebmem Music Palyer</h1>
            <div>
            <input className='searchBar' type="text" placeholder="Search.." onChange={event =>{setSearchTerm(event.target.value)}}></input>{
                array.filter((song) =>{
                    if(searchTerm == ""){
                        return "";
                    }else if(song.title.toLowerCase().includes(searchTerm.toLowerCase())){
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
            <h4>Playing now</h4>
            <Details song={props.songs[props.currentSongIndex]} />
            <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
            <button className="shuffleButton" onClick={ShuffleSong}>
                Shuffle
                <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
            </button>
            <audio ref="audio_tag" src="./music/Imogen Heap - Just For Now.mp3" src={props.songs[props.currentSongIndex].src}
                ref={audioEl} id="au" controls autoPlay/>
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
            <div className='nameSong'>
            <p>Songs:</p>
            <div class="songslists">{allsongs}</div>
            </div>
        </div>
    )
}

export default Player;
