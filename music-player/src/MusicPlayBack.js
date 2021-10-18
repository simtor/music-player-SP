// const { exec } = require("child_process");
// const readline = require('readline');
// const rl = readline.createInterface({
//   input : process.stdin, 
//   output : process.stdout
// });

// console.log("songs list: 1.Example 2.Left")

// rl.question("Input song: ", playerSelector)
// function playerSelector(selectedSong){
//     // rl.question("Input song: ", playerSelector)
//     if(selectedSong== 1){
//         console.log("started")
//         exec("afplay Example.mp3")
//         rl.question("Input song: ", playerSelector)
//     }else if (selectedSong== 2){
//         exec("afplay Left.mp3");
//         rl.question("Input song: ", playerSelector)
//     }else if(selectedSong==='Q'){
//         rl.close()
//     }else if(selectedSong==='V'){
//         rl.question("volume: ", volume)
//         exec(`afplay Example.mp3 -v ${volume}`);
//         rl.question("Input song: ", playerSelector)
//     }else{
//         rl.question("Input song: ", playerSelector)
//     }
// }