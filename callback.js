/* // normal function

function first(){
    console.log("Print First");
}
function second(){
    console.log("Print Second");
}
function third(){
    console.log("Print Third");
}
first();
third();
second();  */

// using callback function

/* function first(){
    console.log("Print First");
}
function second(){
    console.log("Print Second");
}
function third(){
    console.log("Print Third");
}

first();
setTimeout(second, 2000);
third();  */


// normal function
    
/* function display(res){
    console.log(Addition of two numbers is ${res});
}  
function calculation(a,b){
    let sum=a+b;
    display(sum);
}
calculation(3,3);   */

function display(res){
    console.log(ddition of two number is ${res});
}

function calculation(a,b,cb){
    let sum=a+b;
    cb(sum);
}
calculation(4,3,display);