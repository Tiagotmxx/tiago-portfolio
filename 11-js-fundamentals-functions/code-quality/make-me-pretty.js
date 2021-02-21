const myFunc = function () {console.log('Functions expressions');}

myFunc();

button.onclick = function() {
    alert('Clicked!');



ask('Did you understand?', 
    function() { 
        alert('Awesome!');
    }, function() { 
        alert('I will repeat it once more.');
    }
);

ask('Are you hungry?', onHungry, onNotHungry);


function onHungry() {
    alert('Then eat!');
}

function onNotHungry() {
    alert('Then drink!');
}
function ask(question, handleYes, handleNo) {
    let answer = confirm(question);
    if (answer) {
        handleYes();
    } else {
        handleNo();
    }
}