// display users name or not
userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

// setting up the question
let userQuestion = '';

// log the question to user
console.log(`So, ${userName}, what is your ${userQuestion}?`);

// generate random number to pick answer
let randomNum = Math.floor(Math.random() * 8);

// the 8 ball container
let eightBall = '';

//the magic
if(randomNum === 0){
  eightBall = 'It is certain';
}else if(randomNum === 1) {
  eightBall = 'It is decidedly so';
}else if(randomNum === 2){
  eightBall = 'Reply hazy, try again';
}else if(randomNum === 3){
  eightBall = 'Cannot predict now';
}else if(randomNum === 4){
  eightBall = 'Do not count on it';
}else if(randomNum === 5){
  eightBall = 'My sources say no';
}else if(randomNum === 6){
  eightBall = 'Outlook not so good';
}else if(randomNum === 7){
  eightBall = 'Signs point to yes';
};

//log the magic
console.log(eightBall);
