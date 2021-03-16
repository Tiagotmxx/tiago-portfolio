let user = {};
user.name = "John"; //Create
user["surname"] = "Smith";
user.name = "Pete"; //Update
delete user.name;

console.log(user.name); //Read
