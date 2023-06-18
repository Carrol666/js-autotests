
/////task1
function calcRectangleArea(width, height) {
    if ((isNaN(width) == true) || (isNan(height) == true) ){
        throw new Error('wight or height is now a number')
    }
    return width*height;

}

try {
    alert(calcRectangleArea(34,55));
}
catch(exeption){
    console.log(exeption);
}

/////task2///



function checkAge() {
    try{
         let yourage = promt("enter your age to watch a movie");
         if (yourage == ""){
            throw new Error("Age cann't be empty, please enter your age")
         } else if (isNan(parseInt(yourage))) {
            throw new Error("Value is not a number, please enter your age once again")
         }else if (yourage < 14 ) {
            throw new Error("this movie is blocked for people ynder 14 years old")
            }
        }
     catch(exp) {
         console.log(exp.name+exp.message)
     }
}

////task3

class MonthException extends Error {
    constructor(message) {
        this.message = message;
        this.name = "MonthException";
    }
}

function showMonthName(month){
    arrMonth = ["jan","feb","march","april","may","jine", "july", "august", "sep", "oct", "nov", "dec" ]
    let i = month-1
    if (arrMoth[i] !== undefined) {
        return arrmonth[i];
    } else {
        throw new MonthException("moth with number " +month+"doesn't exist");
    
    }
}

try {
    let testMonth = showMonthName(month);
    console.log(testMonth);
} catch (exp) {
    console.log(exp.name+exp.message)
}


///task4  --зробила як в прикладі в лекції , щоб розібратись з forEach 

function showUser(id){
    if(id<0){
        throw new Error("the number is negative")
    } else {
        return {id};
    }
}

function showUsers(ids){
    let newUser = new Array();
    ids.forEach(function (id) {
        try {
            let checkUser = showUser(id);
            newUser.push(checkUser);
        } catch(exp) {
            console.log(exp.message)
        }
    });
    return newUser;
}

  






try 
