// task1

let task1 = [2,3,4,5];
let sum = 0;
for (let i=0; i< task1.length; i++) {
     sum = task1[i]+sum;
    
    }
    console.log(sum);
//// task1.1
let n = 0
let sum2 = 0;
 while (n< task1.length) {
    sum2 = task1[n]+sum2; 
 }   
 console.log(sum);

 //task2

 for (let i = 0; i <= 15; i++) {   // run 3 times​
    if (i%2==0) {
        console.log(i + " is even") 
    } else {
        console.log(`${i} is odd`) 
 }
    }
   
//task3


function randArray(k){
    let task4 = new Array();
    for (i=0; i<=k; i++) {
        let r = Math.floor(Math.random * 499); 
        task4[i] = (r+1);
        
    }
    return task4
}


///task4
  let a = Number(prompt("insert number a"));
  let b = Number(prompt("insert degree b"));

  function raiseToDegree(a,b) {
    let afloor = Math.floor(a);
    let bfloor = Math.floor(b);
    let d =  afloor**bfloor;
    return d
  }


  //task5
  function findMin(){
        let minvalue = Math.min(...arguments);
        return minvalue
  } 

//task6
let myarr = new Array();

function findUnique(...myarr) {
    let isduplicate = (new Set(myarr)).size !== myarr.length;
     return isduplicate
}

//task7
let nArray = new Array();
let z;
function lastElem(nArray, z) {
    for (i=z+1; i>nArray.lenght-z; i--) {
        let lastelArray = unshift(nArray[i])
    }   
    
        return lastelArray
}



//task8
let mytext = new String();

function upperMyText(mytext){
    for (var i = 0; i < mytext.length; i++) {
        if (mytext.charAt(i) == " ") {
            mytext.charAt(i+1).toUpperCase();

        } else 
        continue
      }
      return mytext
}


