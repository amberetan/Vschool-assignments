function sum(x, y){
    try {
        if (isNaN(x) || isNaN(y)) {
        throw new Error("This is not a number!")
        }
        else {
            return x + y
        }
    }
    catch(err){
        console.log(err)
    }
}

console.log(sum(1,2))

var user = {username: "sam", password: "123abc"};

function login(username, password){
  try {
      if(username !== user.username || password !== user.password){
          throw new Error("Your username or password does not match!")
      }
      else {
        console.log("Login successful!")
      }
  }
  catch(err){
      console.log(err)
  }
}

console.log(login("sam","123abc"))