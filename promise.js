// promises

// let ans = new Promise ((res, rej) => {
//     if (false) {
//         return res();
//     } else {
//         return rej();
//     }
// })

// ans.then (function () {console.log("then use for resolve");})
//    .catch (function () { console.log("catch use for reject");})


   // user will ask for number between 0 to 9 and if the number is below 5 resolve if not reject

//    let ans = new Promise ( (res, rej) => {
//    let n = Math.floor(Math.random()*10);

//         if (n < 5){
//             return res();
//         }
//         else {
//             return rej();

//         }
//    })
   
//    ans.then (function(){
//     console.log("BELOW");
//    })
//     .catch (function(){
//        console.log("ABOVE"); 
//     })



// let ans = new Promise (function(res,rej){
//     return res ("Sabse pahele ghar par aao")
// })

//  let p2 = ans.then (function(data){
//     console.log(data);           // Sabse pahele ghar par aao

//     return new Promise((resolve, reject) => {
//         return resolve ("gate kholo aur gate lagao")
//     })

// })

//  let p3 = p2.then(function(data){
//     console.log(data);

//     return new Promise((resolve, reject) => {
//         return resolve ("Khana pakao khana khao")
//     })
//   })

//   let p4 = p3.then(function(data){
//     console.log(data);

//     return new Promise((resolve, reject) => {
//         return resolve ("Incognito mode chalao")

//     })
//   })

//   p4.then(function(data){
//     console.log(data);
//   })

// replace .then = async await

//  function abcd() {

//      fetch(`https://randomuser.me/api/`)
//        .then(function(raw){
//       return raw.json();
//      })
//      .then(function(data){
//       console.log(data);
//      })
//   }
//   abcd();

// dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uska answer kab aayega

//    async function abcd(){
//    let raw = await fetch(`https://randomuser.me/api/`);        // fetch all data than run forward
//    let ans = await raw.json();     // wait for all data than run this await
//    console.log(ans);
// } 
// abcd();




// try catch use thi jo koi error hoy toy bhi aagad code chalse 

console.log("data");
try {
   console.log(data);
   
} catch (error) {
   console.log(error);
}
console.log("data");