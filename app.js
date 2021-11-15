/*
const os = require('os');
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('UserInfo: ', os.userInfo().username);
*/



const fs = require('fs');

const genders = ['M', 'F'];

const maleNames = ['Adam','Brad', 'Dave', 'Liam', 'John', 'Mark', 'Ryan'];

const femaleNames = ['Ann', 'Ava', 'Eve', 'Ida', 'Liv', 'Mia', 'Zoe'];

const lastNames = ['Allen', 'Brown', 'Davis', 'Jones', 'Moore', 'Smith', 'White'];

const randChoice = arr => {
  let elem = Math.floor(Math.random() * arr.length);
  return arr[elem];
}

const people = [];

for(let i = 0; i < 20; i++){
  let gender = randChoice(genders);
  
  let firstName = '';
  if(gender == 'M'){
    firstName = randChoice(maleNames);
  } else{
    firstName = randChoice(femaleNames);
  };
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)]; //dlaczego nie randChoice?
  let age = Math.floor(Math.random() * 60 + 18);
  let person = {
    gender: gender,
    firstName: firstName,
    lastName: lastName,
    age: age,
  }

  people.push(person);
}

const peopleFile = JSON.stringify(people);

fs.writeFile('people.json', peopleFile, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});