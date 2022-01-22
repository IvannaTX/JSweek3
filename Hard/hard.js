/*HARD: Data security exercise. Inside of a closure, create an object called 
pii (Personally Identifiable Information)that cannot be accessed directly. 
The object should have at least two properties: name and ssn. 
Only the name property should be accessible, and it should be called through a public function. 
The ssn property should not be accessible at all.
Creating private objects and private properties helps you control who has access to 
what data and helps you prevent people who shouldn't see important info like 
social security numbers from getting access to the data.
You can use 'getName' or other get methods to access data that people might need. 
For example, people addressing a package or email may need a customer's name, 
but they definitely shouldn't have access to their ssn.*/

/* FIRST ATTEMPT

function PII () {
    this.firstName = 'Ivanna'
    this.lastName = "Contreras"
    this.ssn ="123-45-6789"

}*/


/* NOT ANY BETTER, BUT 2ND ATTEMPT LOL
var PII = (function() = {
    let firstName= "Ivanna";
    let lastName = "Contreras";
    let SNN = "I am a private variable";
    
    let person = function(){ console.log('Hello', firstName, lastName); };
    let method2 = function(){ console.log('I am method 2, ', SNN); };
    
    return {
        person: person,
        method2: method2
    }
}());

PII.person(); // I am method 1
PII.method2(); // I am method 2, I am a private variable*/


//THIRD ATTEMPT. YIKES!

const PII = (privateNumber) => {
    const person = "Hello! Ivanna Contreras"
    const SNN = privateNumber;
  
    return {
      getName: function() {
        return person;
      },
    };
  };
  
  const account = PII();
  
  console.log(account.getName());  
  