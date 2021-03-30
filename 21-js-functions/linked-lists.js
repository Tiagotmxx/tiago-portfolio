let obj1 = { value: 1 };
let obj2 = { value: 2 };
let obj3 = { value: 3 };
let obj4 = { value: 4 };

// function remove(obj, list) {
//   obj.next = null;
// }

let list = obj1;
obj1.next = obj2;
obj1.previous = null;
obj2.next = obj3;
obj2.previous = obj1;
obj3.next = obj4;
obj3.previous = obj2;
obj4.next = null;
obj4.previous = obj3;

console.log(list);

//tree
let obj1 = { value: 1 };
let obj2 = { value: 2 };
let obj3 = { value: 3 };
let obj4 = { value: 4 };

let tree = obj1;
obj1.children = [obj2, obj3];
obj1.parent = null;
obj2.children = [];
obj2.parent = obj1;
obj3.children = [obj4];
obj3.parent = obj1;
obj4.children = [];
obj4.parent = obj3;
console.log(tree);
