console.log(arrowTitle)
/* START CODE UNDER THIS LINE */
console.log("Pulse Check");
console.log('#'.repeat(20));
// 1-

/* let myFavoriteFood ="Orange";
const favoriteFood = function () {
  
   myFavoriteFood ="Apple";
  return myFavoriteFood;
  
}
favoriteFood();*/
// 2-
let myFavoriteFood ="Orange";
const favoriteFood = function () {
  
  return myFavoriteFood;
  
}
favoriteFood();
const updateFavoriteFood = function (newValue) {
  myFavoriteFood =   newValue;
}
updateFavoriteFood("Pizza");
console.log( favoriteFood());


/***********************/
  // 3-
  const createCounter = function () {
    let counter = 0;
    // this anonymous function is a closure function that has access to its own closure variable
    return function () {
      return ++counter;
    };
  }
  let x = createCounter();
  let y = createCounter();
  x();
  x();
  console.log("x = ",x());
  y();
  y();
  y();
  console.log("y = ",y());
// 4-
const createCounter_p4 = function (start) {
    count = start;
    return function(){
        return ++count;
    }
  };
  let num1 = createCounter(1);
  console.log("num1 --> Counter start 1 ");
  let num2 = createCounter(3);
  console.log("num2 --> Counter start 3 ");

  num1();
  num2();
  console.log("num1 = ",num1());
  num2();
  num2();
  num2();
  console.log("num2 = ",num2()); 

console.log("#".repeat(20));
console.log("Practice" , "....".repeat(10));

console.log("Practice 1");
let age = 25;
if (true) {
  age = 30;
}
age // 30 , Because the value of the variable S has been reassigned at the level global by if statment . 
const myName = "John";
if (true) {
    const myName = "Jane" 
 console.log( myName);
}
 myName; // print in console "John " , Because a variable has been defined at the scoop level in if statment , the value of the variable myName has not changed at the global.
 
 console.log("Practice 2");
 // 1- 
 console.log("Q1"+"#".repeat(5));
 let number = 10;
 const func1 = function () {
   let number = 15;
   if ((1+1) == 2) {
     let number = 24;
   }
   return number;
 };
func1() // --> 15 , because the variable in if statment is not reassigned in scope function .

/**************/ 
// 2- 
console.log("Q2"+"#".repeat(5));

const func2 = function (age) {
  age = 10;
  if (true) {
    let age = 24;
    age = 20;
   
  }
  return age;
};
func2(26); // -- > 10 , because  variable is declared in the if statement and its value is reassigned at the Scope local.
/**************/ 
// 3- 
console.log("Q3"+"#".repeat(5));

 let count =5;
const countDown = function () {
  return function(){
  if ( count > 0){
     return --count;
    }
  else{
    return "count down is over";
  }}
};
let n =countDown();
console.log(n());
console.log(n());
console.log(n());
console.log(n());
console.log(n());
console.log(n());
console.log(n());
console.log(n());

/**************/ 
// 4-
console.log("Q4"+"#".repeat(5));

let count4 = 3;
const countUp = function(){
return function(){
  return ++ count4;
}

}
let n4 = countUp();
console.log(n4());
console.log(n4());
console.log(n4());
console.log(n4());
console.log(n4());
/**************/ 
// 5-
console.log("Q5"+"#".repeat(5));

const resetCount= function(start){
  return function(){
    return ++start;
  }
}

let n1= resetCount(0);
let n2=resetCount(10);
console.log("n1 =0 ");
console.log(n1());
console.log("n1 =10 ");
console.log(n2());

/*************/
// 6-
console.log("Q6"+"#".repeat(5));

let s2='';
let s1;
const addToList = function (toDo) {
   s1= toDo;
   s2 =s2 + " " + s1;
   return s2;
};
console.log( addToList("Eat"));
console.log(addToList("Play"));
console.log( addToList("Sleep"));
console.log(addToList("repeat"));
/*************/
// 7-
console.log("Q7"+"#".repeat(5));
const createToDoList  = function () {
  let sp7_2='';
  let sp7_1;
  return function(toDo){
    sp7_1= toDo;
    sp7_2 =sp7_2 + " " + sp7_1;
   return sp7_2;}
};
let statment_p7 =createToDoList();
console.log( statment_p7("Eat"));
console.log(statment_p7("Play"));
console.log( statment_p7("Sleep"));
console.log(statment_p7("repeat"));
/*************/
// 8-
console.log("Q8"+"#".repeat(5));
let amountOrginal =0;
const deposit = function (amount) {
  return amountOrginal +=amount; 
};
//console.log(deposit(100));
//console.log(deposit(50));
// 9-
console.log("Q9"+"#".repeat(5));
const withdraw  = function (amount) {
  let x; // variable x is value amountOrginal before reassigned. 
  x=amountOrginal;
  amountOrginal-=amount;
  if(amountOrginal >= 0 ){
    return amountOrginal;}
  else {
    return "insufficient funds, current balance: " +x ;};
};
console.log(deposit(100));  // => 100
console.log( deposit(50)); // => 150
console.log( withdraw(70)); // => 80
console.log( deposit(50)); // => 130
console.log( withdraw(100)); // => 30
console.log( withdraw(100)); // "insufficient funds, current balance: 30"
// 10 -
console.log("Q10"+"#".repeat(5));
console.log("aaaaaaa"); 
const createAccount = function(initialValue){
  return function(transactionType ,amount){
    if (transactionType === "withdraw"){
      if (initialValue < amount){
        return "insufficient funds, current balance: " + initialValue;}
        else
     return initialValue -=amount;
    }
    else if (transactionType === "deposit"){
      return initialValue +=amount;
    }
  }};
const accountOne = createAccount(0);
console.log("accountOne = " ,accountOne("withdraw", 10));
console.log("accountOne = " ,accountOne("deposit", 50));
console.log("accountOne = " ,accountOne("deposit", 70));
console.log("accountOne = " ,accountOne("withdraw", 10));
const accountTwo = createAccount(500);
console.log("accountTwo= " ,accountTwo("withdraw", 100));
console.log("accountTwo= " ,accountTwo("withdraw", 100));
console.log("accountTwo= " ,accountTwo("deposit", 50));
console.log("accountTwo= " ,accountTwo("withdraw", 500));
console.log("*".repeat(20));


console.log("Extra Practice");
console.log("Q1 :"+ "#".repeat(10));

let max=Number.NEGATIVE_INFINITY;
let min=Number.POSITIVE_INFINITY;
const minMax = function (number) {
    if(number < min){
      min = number;
    }
     if(number > max){
      max = number;
    }
    return "the maximum number is:" + max +" and the minimum number is "  + min;
  };
  console.log(minMax(5));
  console.log(minMax(2));
  console.log(minMax(3));
  console.log(minMax(7));
  console.log(minMax(0));

  console.log("Q2 :"+ "#".repeat(10));
let value1 = "rock";
let value2="paper";
let value3 = "scissors";
const rockPaperScissors = function (move) {
  if (move === value1 || move === value2 || move === value3){
    return "valid move" ;
  }else {
    return "invalid move";
  }};
  
console.log(rockPaperScissors("rock"));
console.log(rockPaperScissors("paper"));
console.log(rockPaperScissors("scissors"));
console.log(rockPaperScissors("knife"));











 
















