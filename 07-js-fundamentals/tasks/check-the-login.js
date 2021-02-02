//Check the login

//prompt for a login
//


let username = prompt("Who's there?");
if (username === 'Admin') {
    let password = prompt('Password');
    if (password == null || password === '') {
        alert('Canceled');
    } else if (password === 'TheMaster'){
        alert('Welcome');
    }
} else if (username == null || username === '') {
//else if (!username)
    alert ('Canceled');
} else {
    alert("I don't know you");
}