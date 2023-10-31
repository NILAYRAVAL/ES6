//  Let and const are ES6 
//  braces scope hota hai  
//  Let makes different variable , const can not be changed

// let a = 10;
// a = 54;
// console.log(a);

// {
//     let c = 455;
// }
// console.log(c)        // ERROR

// const b = 45;
// // b =77;
// console.log(b);


        //  Arrow functions

        // let a = ()=> {};
        // a();

        //   fat()=>{} ... Arrow function with one parameter  

        // let b = (heyeee)=> {console.log(heyeee)};    //12
        // b(12);
       
        //  fat() ... Arrow function with implicit return 
        
        // let c =()=> 12;
        // console.log( c() );

        // template literals  ` `
        // console.log(`hello ${2+2} kese ho ${2-2}`);

        // default parameter
    //     function g (param = 99) {  
    //     console.log(param) 
   
    //     }
    //   g(12222)
    //   g(2222)
    //   g(12)
    //   g()    // undefined   // param =99 than  99


    //     function n (a =0,b=50,c = 22222) {  
    //     console.log(a,b,c);
    //   }
    //   n (1,2,3);
    //   n (2,2,2);
    //   n(1,);

// spread use hota hai copy karne ke liye
//  let a = [1,2,3,4,5];
//  let b = [...a];    
//  console.log(b);        // 1 2 3 4 5 
//  console.log(a);        // 1 2 3 4 5 

// bache huve values ek variable mei daalne ho

//     function f (a,b,c, ...d){
//     console.log(a,b,c,d);           // 1 2 3 4 5 6 7 8 9 
// }
//   f(1,2,3,4,5,6,7,8,9);


  // destructuring

//   let a = [1,2,3];
//   let [d,g,j] = a;     // b=a  g=2 j=3
//   let [d,,c] =a;      // d=1 , , c=3

//   let b = {name: "Nilay", age: 21};
//   let {age}= b;                  //21  
//   let {name}= b;                 // Nilay   
 