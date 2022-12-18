'use strict';
(function () {

    // let person1 = {
    //     fname: 'dimitar',
    //     lname: 'jovevski'
    // }

    // let person2 = {}

    // let merge = Object.assign({},person2,person1)
    // console.log(merge);
    // console.log(person1)

    // let sofia = {
    //     fName: 'sofia',
    //     lName: 'cooper',
    //     age:17,
    //     isAdult: function() {return this.age > 21}
    // }

    // function Person (firstName, lastName, age){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    // }

    // let jim = new Person('Jim', 'Cooper', 22);
    // let sofia = new Person('sofia', 'cooper', 25);

    // console.log(jim);
    // console.log(sofia);

    // let person = Object.create(
    //     Object.prototype,
    //     {
    //         fName: {value: 'Jim', enumerable: true, writable: true, enumerable: true, configurable: true},
    //         lName: {value: 'Cooper', enumerable: true, writable: true, enumerable: true, configurable: true},
    //         age: {value: 25, enumerable: true, writable: true, enumerable: true, configurable: true}
    //     }
    // )
    // console.log(person)

    //3 ways to create objec: Object Literal, Constructor Function, Object.create (prototype)

    // let person1 = {
    //          fname: 'dimitar',
    //          lname: 'jovevski'
    // }

    // //Object.defineProperty(person1, 'fname', {writable:false}) // we cannot change the fname property value;
    // //Object.defineProperty(person1, 'fname', {enumerable:false}); // we cannot serialize it with json.stringify or show the keys with Object.key but if we go person.fname it will show;
    // Object.defineProperty(person1, 'fname', {configurable:false}) // doesn't allow us to change configurable and enumurable and doesnt allow to delete the property but we can change writable.
    // //console.log(Object.getOwnPropertyDescriptor(person1, 'fname'));
    
    // // console.log(person1.fname='marko');
    // // console.log(JSON.stringify(person1));
    // //  console.log(Object.keys(person1));
    // delete person1.fname
    // console.log(person1);

    //Enb=umurable means we can loop throu them with for example for in loop
    
    
    //PROTOTYPES
    //When function is defined a prototype function is defined. 
//     function Person(firstName, lastName){
//         this.firstName = firstName,
//         this.lastName = lastName
//     }

//     console.log(Person);
//     console.log(Person.prototype);

    
//     let sofia = new Person();
    

//     let dimitar = new Person('Dimitar', 'Jovevski');
//  console.log(Person.prototype.age=17);
    // console.log(dimitar);
    // console.log(dimitar.__proto__);

    // function Person(firstName, lastName){
    //     this.firstName = firstName,
    //     this.lastName = lastName
    // }

    //Classes

    //Konstruktor vo klasa se praj polesno odkolku vo konstruktor funkcija kaj so treba da koristime Obj.defineProperty funkcija.
    // class Person {
    //     constructor (firstName, lastName, age) {
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //         this.age = age;
    //     }

    //     get fullName() {
    //         return this.firstName + ' ' + this.lastName;
    //     }

    //     set fullName(fullName) {
    //         var nameParts = fullName.split('');
    //         this.firstName = nameParts[0];
    //         this.lastName = nameParts[1];
    //     }

    //     isAdult(){
    //         return this.age > 18;
    //     }
    // }

    // class Student extends Person{
    //     constructor(firstName, lastName, age){
    //         super(firstName, lastName, age)
    //         this._enrollCourses = [];
    //     }

    //          enroll(courseId){
    //             this._enrollCourses.push(courseId);
    //         }

    //         getCourses(){
    //             return this.fullName + "'s enroll courses are:"
    //             this._enrollCourses.join(',')
    //         }
        
    // }

    // let dimitar = new Student('Dimitar', 'Jovevski', 25);
    // dimitar.enroll('CS101');
    // console.log(dimitar.getCourses());
    // console.log(dimitar.fullName);
   
    //console.log(dimitar.fullName="Dimitar Jovevski");

    //Built In Objects
    // console.log(Math.PI);
    // console.log(Math.max(10,100,1000,2000));
    // console.log(Math.round(12.78273827812345));

    // let date = new Date();
    // console.log('Ne se UTC');
    // console.log(date.toString());
    // console.log(date.getFullYear());
    // console.log(date.getMonth());
    // console.log(date.getDay());
    // console.log(date.getHours());
    // console.log(date.getSeconds());
    // console.log(date.getMilliseconds());
    // console.log('Se UTC');
    // console.log(date.getUTCFullYear());
    // console.log(date.getUTCMonth());
    // console.log(date.getUTCDay());
    // console.log(date.getUTCHours());
    // console.log(date.getUTCSeconds());
    // console.log(date.getUTCMilliseconds());

})();

