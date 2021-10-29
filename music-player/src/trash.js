// // import logo from './logo.svg';
// // import './App.css';
// import { useState } from 'react';
// // import {filteredPosts } from 'react';

// function App() {
//   const { search } = window.location;
//   const query = new URLSearchParams(search).get('s');
//   const [searchQuery, setSearchQuery] = useState(query || '');
//   // const filteredPosts = filterPosts(posts, searchQuery);

//   function playMusic(){
//     console.log("Music play")
//   }
//   function StopMusic(){
//     console.log("Music stop")
//   }
//   const Search = () => {
//     return <div>Search</div>
//   }
//   const posts = [
//     { id: '1', name: 'This first post is about React' },
//     { id: '2', name: 'This next post is about Preact' },
//     { id: '3', name: 'We have yet another React post!' },
//     { id: '4', name: 'This is the fourth and final post' },
//   ];
//   return (
//     <div className="App">
//       <header className="App-header">
//         <form>
//           <label htmlFor="header-search">
//               <span className="visually-hidden"></span>
//           </label>
//           <input
//               value={searchQuery}
//               onInput={e => setSearchQuery(e.target.value)}
//               type="text"
//               id="header-search"
//               placeholder="Search blog posts" 
//               name="s" 
//           />
//           <button type="submit">Search</button>
//       </form>
//       <div>
//             <Search 
//               searchQuery={searchQuery}
//               setSearchQuery={setSearchQuery}
//             />
//             <ul>
//             {posts.map((post) => (
//                     <li key={post.id}>{post.name}</li>
//                 ))}
//                 {/* {filteredPosts.map(post => (
//                     <li key={post.key}>{post.name}</li>
//                 ))} */}
//             </ul>
//         </div>
//         <button onClick={playMusic}> Play</button>
//         <button onClick={StopMusic}> Stop</button>
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//       </header>
//     </div>
//   );
// }

// export default App;
//////////////////////////////////
// import logo from './logo.svg';
// import './App.css';

// function App() {

//   function playMusic(){
//     console.log("Music play")
//   }
//   function StopMusic(){
//     console.log("Music stop")
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={playMusic}> Play</button>
//         <button onClick={StopMusic}> Stop</button>
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//       </header>
//     </div>
//   );
// }

// export default App;

//////////////////////
// let amountSongs  = props.songs.length;
        // let numberSong = 0;
        // while(0 < amountSongs){
        //     // console.log(array.next(numberSong).value);
        //     numberSong++;

        // }
        // console.log(array.next(numberSong).value);
        // console.log(amountSongs)
        // console.log(array[0].title);
                // console.log(array.next().value);
        // console.log(array.next().value);
        // console.log(array.next().value);
        // console.log(array.next().value);


        // .searchBar{
        //         width: 100%;
        //         text-align:center;
            
        //     }
        //     .nameSong{
        //           position:relative;
        //           height: 50px;
        //           display: grid;
        //           top:-300px;
        //           left:300px;
        //           grid-template-columns: 50px 1fr;
        //         /* color:white;
        //         position:relative;
        //         top:-500px;
        //         left:500px;
        //         padding: 10x;
        //         float:right;
        //         background-color: rgb(72, 161, 106); */
        //         /* width: 300px; */
        //         /* text-align:right; */
        //     }
            
        //     ul {
        //       color: #EEE;
        //     }
            
            
        //     .circle-image{
        //         display: flex;
        //         border-radius: 50%;
        //         overflow: hidden;
        //         width: 50px;
        //         height: 50px;
        //         /* float:left; */
        //       }
        //       .circle-image img{
        //         width:100%;
        //         height:100%;
        //         object-fit: cover;
        //       }
            
        //     .text-song{
        //         color: white;
            
        //     }
            
        //     .songslists{
        //         display: flex;
        //         flex-direction: column;
        //     }



//         import React, {useState, useRef, useEffect} from 'react'
// import Controls from './Controls';
// import Details from './Details';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faRandom} from '@fortawesome/free-solid-svg-icons'

// function Player(props) {
//     const audioEl = useRef(null);
//     const [isPlaying, setIsPlaying,] = useState(false);
//     const [searchTerm, setSearchTerm,] = useState("");
//     const allsongs = [];

//     useEffect(() => {
//         if (isPlaying) {
//             audioEl.current.play();
//             // console.log("moving to next track");
//             nextTrack();
//         } else {
//             audioEl.current.pause();
//         }
//     });

//     let array = props.songs;
//     array.map((song)=>{
//         allsongs.push(
//         <div class="nameSong">
//             <div className ='circle-image'>
//             <img src={song.img_src} alt="" />
//             </div>
//             <div className ="text-song">
//                 <p>{song.title}</p>
//                 <p>{song.artist}</p>
//             </div>
//         </div>)
//         console.log(song.title)
//     })

//     const ShuffleSong =() =>{
//         props.setCurrentSongIndex(() => {
//                 let temp = props.currentSongIndex;
//                 temp = Math.floor(Math.random() * props.songs.length);
//                 // console.log(temp)
//                 return temp;
//             });
//     }

//     const SkipSong = (forwards = true) => {
//         if (forwards) {
//             props.setCurrentSongIndex(() => {
//                 let temp = props.currentSongIndex;
//                 temp++;
//                 if (temp > props.songs.length - 1) {
//                     temp = 0;
//                 }
//                 return temp;
//             });
//         } else {
//             props.setCurrentSongIndex(() => {
//                 let temp = props.currentSongIndex;
//                 temp--;
//                 if (temp < 0) {
//                     temp = props.songs.length - 1;
//                 }
//                 return temp;
//             });
//         }
//     }

//     function nextTrack(){
//         // console.log("Running....")
//         let c=0;
//         let a=document.getElementById("au");
//             a.addEventListener('ended', function(){
//                 // console.log("Song ended")
//                 props.setCurrentSongIndex(() => {
//                     let temp = props.currentSongIndex;
//                     temp++;
//                     if (temp > props.songs.length - 1) {
//                         temp = 0;
//                     }
//                     return temp;
//                     // let temp = props.currentSongIndex;
//                     // temp = Math.floor(Math.random() * props.songs.length);
//                     // console.log(temp)
//                     // return temp;
//                 });
//             // document.getElementById("au").src=props.songs[1];
//             a.load();
//             // console.log(c);
//             c++;
//             if(c>=props.songs.length){
//                 c=0;
//             }
//         });
//       }

//     return (
//         <div className="c-player">
//             <h1 classname='title'>Rebmen Music Palyer</h1>
//             <div>
//             <input className='searchBar' type="text" placeholder="Search.." onChange={event =>{setSearchTerm(event.target.value)}}></input>{
//                 array.filter((song) =>{
//                     // console.log("searchTerm, " + searchTerm)
//                     if(searchTerm == ""){
//                         // console.log("Got here 1");
//                         return "";
//                     }else if(song.title.toLowerCase().includes(searchTerm.toLowerCase())){
//                         // console.log("Got here")
//                         return song.title;
//                     } 
//                 }).map((song)=>{
//                     console.log("I used it here")
//                     return <div className="songslists2">{<div className ='circle-image2'>
//                     <img src={song.img_src} alt="" />
//                     </div>}
//                     <div className ="text-song"><p>{song.title}</p></div>
//                     </div>
//                 })}
//             </div>
//             {/* <audio src={props.songs[props.currentSongIndex].src} ref={audioEl}></audio> */}
//             <h4>Playing now</h4>
//             <Details song={props.songs[props.currentSongIndex]} />
//             <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong} />
//             <button className="shuffleButton" onClick={ShuffleSong}>
//                 Shuffle
//                 <FontAwesomeIcon icon={faRandom}></FontAwesomeIcon>
//             </button>
//             <audio ref="audio_tag" src="./music/Imogen Heap - Just For Now.mp3" src={props.songs[props.currentSongIndex].src}
//                 ref={audioEl} id="au" controls autoPlay/>
//             {/* <button onClick={nextTrack}>
//                 songs
//             </button> */}
//             <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
//             {/* <button onClick={displayMusic}> Songs tracks or albums</button> */}
//             <div className='nameSong'>
//             <p>Songs:</p>
//             {/* <ul>{allsongs}</ul> */}
//             <div class="songslists">{allsongs}</div>
//             </div>
//         </div>
//     )
// }

// export default Player;
