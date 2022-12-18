// // //Array.of() takes arguments and converts them to array

// // let array1 = [1,2,3,4,5];
// // let array2 = [6,7,8,9,10];
// // //array1.fill(0);
// // //console.log(array1);


// // //let array3 = array1.concat(array2);
// // // let array4 = [...array1, ...array2, ...array3];
// // // console.log(array3);
// // // console.log(array4);

// // let nad2 = array1.find(element => element > 3);
// // console.log(nad2);

// //SETS
// //ne smee da ima duplikati prima objekti stringoj funkcii
// //weak set sodrzi samo objekiti garbage coletor and limited functions like add delete and has


// // let mnozestvo = new Set();
// // mnozestvo.add(1);
// // console.log(mnozestvo);

// //MAPS key-value pare and keeps the iteration in order of the keys. \
// //Objects and primitives can be used as key or value.
// //ima inheritance od objekt
// let mapa = new Map();

// mapa.set(1,'Dimitar');
// mapa.set(2,'Mitko');
// console.log(mapa.get(2));

// console.log(mapa.delete(1));
// console.log(mapa);

// let person16 = {
//     fname: 'dm',
//     lname: 'da'
// }

// for(const property in person16){
//     console.log(`${property}: ${person16[property]}`);
// }