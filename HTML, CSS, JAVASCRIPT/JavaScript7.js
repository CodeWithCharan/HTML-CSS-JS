//alert box
alert("This Website is only for adults");

//prompt box
let name = prompt("Enter your name", "Guest")
console.log(name);

//confirm box
let age = confirm("Are you 18+?");
if(age == true){
    console.log("Welcome!");
}
else{
    console.log("Access denied!");
}