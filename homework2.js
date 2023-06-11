/// Tesk 1
let x = 1;
let y = 2;

let res1 = (x+y)*4+"";
console.log(res1); // "12"
console.log(typeof res1); // "string"

let res2 = ("true"+x*y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

let res3 = (2*x === y)
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = parseInt("xy");
console.log(res4); // NaN
console.log(typeof res4); // "number"

//Task2

let enter = prompt("pl enter a number");
if ((enter%2 === 0)&& (enter > 0)) {
    console.log("even and positive")
} else if ((enter%7 == 0)){
    console.log("even to  7")
} else {
    console.log("incorrect value")
}


//Task3

const task3 = ["17", "ipsum", "false", "null"];
console.log(task3.length);
let el5 =prompt("enter any value");
task3[4] = el5;
console.log(task3[4]);
const deltask3 = task3.shift();
console.log(task3);

// task 4
let cities = ["Rome", "Lviv", "Warsaw"]; 
cities = cities.join("*");
let citiesS = cities.toString();
console.log(citiesS);

//task5
let isAudult = prompt("how old are you?");
if (isAudult >= 18) {
    console.log("you rae adult");
} else if (isAudult < 18 && isAudult > 0){
    console.log("you are too young");
} else {
    console.log("incorrect value")
}

// task 6

let a = Number(prompt("a side of triangle"));
let b = Number(prompt("b side of triangle"));
let c = Number(prompt("c side of triangle"));
let S;
let p;

if (a >0 && b > 0 && c >0) {
    p = (a*b*c)/2; 
    S = Math.sqrt(p*(p-a)*(p-b)*(p-c))
       if (S===(0.5*a*b)||S===(0.5*a*c)||S===(0.5*b*c)) {
        console.log("right andled")
    }   
    console.log("S of trieangle" + S.toFixed(3)) 
} else {
    console.log("incorrect value")
}



//task7
let mydate = Date.getHours();

switch (mydate){
   case (mydate>=23 || mydate<5):
         console.log("good night");
        break;
   case (mydate>=5 || mydate<11):
        console.log("good morning");
        break;
   case (mydate>=11 || mydate<17):
         console.log("good afternoon");
         break;
   case (mydate>=17 || mydate<23):
        console.log("good evening");
        break;
}

//
if (mydate>=23 || mydate<5) {
     console.log("good night")
} else if (mydate>=5 || mydate<11) {
     console.log("good morning");
} else if (mydate>=11 || mydate<17) {
    console.log("good afternoon");
} else if (mydate>=17 || mydate<23) {
    console.log("good evening");
} else {
    console.log("incorrect value");
}


