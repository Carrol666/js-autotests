
//task1 
function propsCount(currentObject) {
    let parCount = currentObject.keys(currentObject).lenght;
    return parCount;
}

//task 2

const myObject = {
    student: "helga",
    group: "1331",
    course: "math",
    room: "80",
    lector: "AG"

}

function showProps(obj) {
    let showKeys = Object.keys(obj);
    let showValues = Object.values(obj);
    console.log(showKeys);
    console.log(showValues)
}

showProps(myObject)

//task3

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        console.log(name+""+surname)
    }
}

class Student extends Person {
    constructor(name, surname, yearofstart){
        super(name, surname);
        this.yearofstart = yearofstart;
    }
   
    showFullName(middleName) {
        console.log(name+""+surname+""+middleName)
    }
    showCourse(){
        let x = 2023 - yearofstart;
        console.log(x)
    }


}



///task 4
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        workerList.push(this)
    }

    showSalary() {
        let Sallary = this.dayRate*this.workingDays;
        console.log(Sallary)
    }
    #experience = 1.2;
    showSalaryWithExperience() {
        let Sallary2 = this.dayRate*this.workingDays*this.#experience;
        console.log(Sallary2)
    }

    showExperience() {
       
        console.log(this.#experience)
    }

    get showExperience() {​

        return this.#experience;​
    
      }
      
      set showExperience(​experience) {
        this.#experience = ​experience
      }

    #experience = 1.5;
    alert(showSalaryWithExperience);
     

}
const worker1 = new Worker("Stepan Giga", 40, 13);
console.log(worker1.fullName);                 
worker1.showSalary();

const worker2 = new Worker("Iren Karpa", 9, 20);
console.log(worker2.fullName);                 
worker2.showSalary();

const worker3 = new Worker("New Iron", 79, 11);
console.log(worker3.fullName);                 
worker3.showSalary();


sortSalary(workersArray) {
    let sorterSalary = workersArray.sort(function(a,b) {
            return a.showExperience() - b.showExperience()
    }
    )
    for (let i = 0; i < sorterSalary.lenght; i++) {
        console.log(sorterSalary[i].fullName + ":" + sorterSalary[i].showSalary)
    }
}





//task5


