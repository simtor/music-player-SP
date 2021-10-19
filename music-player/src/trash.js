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