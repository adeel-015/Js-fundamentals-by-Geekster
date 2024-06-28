// let arr = [1,2,3,4,5,5,6,7, "Hello", "World", true];
// console.log(arr);

let players = [
    {name: "Adeel", scoreboard:100},
    {name: "Anshul", scoreboard:90},
    {name: "Takeio", scoreboard:100},
    {name: "Yemen", scoreboard:95},
    {name: "Dempsey", scoreboard:92},
    {name: "Grok", scoreboard:99}
];

let arr = [1, 23, 45, 1000, 300];
console.log(arr.sort(function(a,b){
    return a-b;
}));

// let info = players.find(function(obj){
//     return obj.scoreboard === 100;
// })

// console.log(info);

// let info = players.every(function(obj){
//     if (obj.scoreboard > 90){
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(info);


// players.splice(1, 2, {name: "Heck", scoreboard: 98});

// console.log(players);

// let arrSliced = players.slice(-3, -1);

// console.log(arrSliced);
