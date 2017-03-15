var num1= 5;
var num2= 7;
console.log(num1+num2);
var str1= "Hello";
var str2= "World!";
console.log(str1+" "+str2);
var array1=[
  ["yes", "no", "mabye"],
  ["so", "see", "you"],
  ["later", "alligator"]
];
console.log(array1[0][2]+" "+array1[2][1]);
var num3= prompt("Enter a number.");
if(num3< 100){
  alert("Your number is less than 100");
}
else{
  alert(num3+" is greater than 100");
}
var str3= "Wazzzup";
if(str3 === "wazzzup"){
  alert("The strings match");
}
else {
  alert("The strings don't match");
}
function alertName(n){
  alert(n+" is the name you entered.");
}
var name1= prompt("Enter a name.");
alertName(name1);
function print(){
  console.log("Yo what's good?");
}
print();
var chosenDoor= prompt("Enter Door 1, Door 2, or Door 3");
function givePrize(door){
  if(door === "Door 1"){
    alert("You have won nothing!");
  }
  else if (door === "Door 2") {
    alert("You have won a new car!");
  }
  else if (door === "Door 3") {
    alert("You have won a puppy!");
  }
  else{
    alert("You have not chosen a valid door!");
  }
}
givePrize(chosenDoor);
