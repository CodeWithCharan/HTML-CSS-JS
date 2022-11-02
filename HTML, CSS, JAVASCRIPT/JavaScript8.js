//for loops
for(let i=0; i<3; i++){

    console.log(`${i} is less than 3`);
}

//OR
let names = ["charan","sushanth","dinesh"]; //Old way
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}`);
    
}

//OR you can use forEach
names.forEach(function f(element) {
    console.log(`Good morning ${element}`);
})

//OR
for(Element of names){                      //Modern way
    console.log(`Whats up? ${Element}`);
}

//for loop through objects
let employee = {

    name : "charan",
    salary : 10,
    emailId : "thoutamsricharan@gmail.com"
}
for(key in employee){
    console.log(`The ${key} of employee is ${employee[key]}`);
}

//While loop
let j = 0;
while(j < 4){
    console.log(`${j} is less than 4`);
    j++;
}

//do while
let k = 10;
do {
    console.log(`${k} is less than 4, it will execute once before checking condition in do while`);
    k++;
} while (k < 4);