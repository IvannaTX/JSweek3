/*VERY HARD: 
1. Create a Person constructor that has three properties: name, job, and age.
2. Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
3. Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
4. Create a Programmer constructor that inherits all the members from Person with an additional 'languages' property that 
is passed in and a busy property that is NOT passed in and is set to true by default.
5. Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 
Also give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
6. Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy 
and another if the programmer is not, e.g. should initially log out "Mark can't accept any new tasks right now." 
and "Mark would love to take on a new responsibility." if the programmer is not busy.
7. Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages to the programmer and list off all 
languages the programmer knows.
8. Test it out - can you create different programmers and run all the methods on them? Does each programmer maintain their 
own properties properly and independently of the other programmers?


Notes on prototype: //https://www.tutorialsteacher.com/javascript/prototype-in-javascript#:~:text=The%20prototype%20is%20an%20object,includes%20prototype%20object%20by%20default.

*/

/* FIRST ATTEMPT

function person1(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.excercise = function(){
        console.log('Swimming is better than running');
    };
    this.fetchJob = function(){
        console.log(`${this.name} is a ${this.job}`);
    };
}*/

//20TH THOUSAUND ATTEMPT *SAD FACE*

//1.
function Person(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}
//2./3.
Person.prototype.exercise = () => console.log("Running is fun! - said no one ever");
Person.prototype.fetchJob = function() {console.log(`${this.name} is a ${this.job}`)};


//4.
function Programmer(name, job, age, languages) {
    Person.call(this, name, job, age);
    this.languages = languages;
    this.busy = true;
}
//5.
Programmer.prototype = {...Person.prototype};
Programmer.prototype.completeTask = function(){this.busy = false};
Programmer.prototype.acceptNewTask = function(){this.busy = true};
//6.
Programmer.prototype.offerNewTask = function(){
    //scope function
    console.log(this.busy ? `${this.name} can't accept any new tasks right now.` : `${this.name} would love to take on a new responsibility.`)
};
//7.
Programmer.prototype.learnLanguage = function(language) { this.languages.push(language) };
Programmer.prototype.listLanguages = function() {console.log(this.languages)};

// 8. Test Programmers:
// Step 2/3:
const p1 = new Person('Brad', 'back-end developer', 53);
p1.exercise();
p1.fetchJob();
// --> Running is fun! - said no one ever
// --> Brad is a back-end developer

// 5/6/7:
const p2 = new Programmer('Mark', 'Junior Developer', 24, ['HTML', 'CSS', 'JavaScript']);
p2.fetchJob(); // --> Mark is a Junior Developer
p2.acceptNewTask(); // BUSY
p2.offerNewTask(); // --> Mark can't accept any new tasks right now.
p2.completeTask(); // NOT BUSY
p2.offerNewTask(); // --> Mark would love to take on a new responsibility.
p2.listLanguages(); // --> [ 'HTML', 'CSS', 'JavaScript' ]
p2.learnLanguage('React'); // JUST LEARNED NEW LANG
p2.listLanguages(); // --> [ 'HTML', 'CSS', 'JavaScript', 'React' ]