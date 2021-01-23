let year = 1982;
let isGenZ  = year > 2000;
let isNotGenZ = !isGenZ // year <= 2000;

let myVariable;
let isUndefined = myVariable === undefined;
let isNull = myVariable === null;
let hasNoValue = !isUndefined && !isNull;
let hasAValue = !hasNoValue;


let hasAValue = myVariable != null; //the most concise


//let hasAValue = myVariable !== undefined && myVariable !== null;
//let hasAValue = !(myVariable === undefined) && !(myVariable === null); 
let hasAValue = !(myVariable === undefined || myVariable === null);
if (hasAValue) {
    alert(myVariable);
}