/*EASY: Write a function that would allow you to do this:

var run = exercise('running');

console.log(run()); // prints "Today's exercise: running"

var swim = exercise('swimming');

console.log(swim()); // prints "Today's exercise: swimming"*/


/*FIRST ATTEMPT

let run = exercise('running');

function exercise () {
    console.log("Today's exercise: running");
}

let swim = exercise2('swimming');

function exercise2 () {
    console.log("Today's exercise: swimming");
}*/

/* 2ND ATTEMPT


let run = exercise('running');
let swim = exercise('swimming');

function exercise () {
    console.log("Today's exercise: running");
    console.log("Today's exercise: swimming");
}

**Harold says this was close but still wrong LOL*/


/*3RD ATTEMPT

let run = () => {
    console.log("Today's exercise: swimming")
};*/



/*let run = excercise('running');
let swim = excercise('swimming');

function excercise(){
    return function excercise(){
        return `Today's excercise: ${excercise} `
    }
}

console.log(run());
console.log(swim());*/

function exercise(activity){
  
    return  function() {
      return "Today's exercise: " + activity; 
    }
  }
  
  var run = exercise("running");
  var swim = exercise("Swimming");
  console.log(run());
  console.log(swim())