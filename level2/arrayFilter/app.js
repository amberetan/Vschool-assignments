//1. return new array with number greater than or equal 5

function fiveAndGreaterOnly(arr) {
    return arr.filter(num => num >= 5)
  }

  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); 

//2. new array with only even numbers
function evensOnly(arr) {
    return arr.filter(num => num % 2 === 0)
  }
  
  console.log(evensOnly([3, 6, 8, 2]));

//3. new arry with strings 5 or less characters
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(str => str.length <= 5)
  }

  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

//4. new array filters out those who aren't in club
function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(member => member.member)
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));

//5. filtered list of people older than 18
function ofAge(arr){
    return arr.filter(user => user.age > 18)
  }
  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ])); 

