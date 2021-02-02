alert (null || 2 || undefined);
//     falsy //truthy -> stops
//Returns 2

//What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) );
//alert returns undifined
//falsy || truthy
//-> '1' '2'

//What is the result of AND?
alert( 1 && null && 2 );
// truthy && falsy 
// -> null

//What is the result of AND'ed alerts?
alert( alert(1) && alert(2) );
//-> 1 && undefined

//The result of OR AND OR
alert( null || 2 && 3 || 4 );
//     falsy// truthy(2 && 3 -> 3 are truphy)
//-> alert( null || 3 || 4 );
//-> 3

//Check the range between
if (age >= 14 && age <= 90) {
    alert('Wow, you are average');
}

//Check the range outside
if (!(age >= 14 && age <= 90))

if (!(age >=14) || !(age <=90))

if (age < 14 || age > 90)



//A question about "if"

if (-1 || 0) alert( 'first' );
//truphy || falsy -> alert

if (-1 && 0) alert( 'second' );
// truphy && falsy -> not alert

if (null || -1 && 1) alert( 'third' );
// falsy || truphy && truphy ->


