console.log("This is a code from js file");

function greet(name, greetText = "This is a default greeting from JS") {

    console.log(greetText + " " + name);
    console.log(name + " is the best programmer");

}
let name0 = "charan";
let name1 = "sushanth";
let name2 = "sriram";

greetText = "Good morning";

greet(name0, greetText);
greet(name1, greetText);
greet(name2, greetText);

function sum(a, b, c) {
    let d = a + b + c;
    console.log("sum of "+a+" + "+b+" + "+c+" = "+d);
    return d;
}

sum(2,3,4);