// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – 
//show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

// let login = prompt('Username?', '');

// if (login === 'Admin') {
//     let password = prompt('Password?', '');
//     if (password === 'TheMaster') {
//         alert ('Welcome');
//     } else if (password !== 'Welcome') {
//         alert ('Wrong password');
//     } else {
//         alert ('Cancelled');
//     }
// } else if (login !== 'Admin') {
//     alert ("I don't know you");
// } else {
//     alert ('Cancelled');
// }


let login = prompt('Username?', '');

if (login === 'Admin') {
    let password = prompt('Password?', '');
    if (password === 'TheMaster') {
        alert ('Welcome');
    } else if (password === '' || password === null) {
        alert ('Cancelled');
    } else {
        alert ('Wrong password');
    }
} else if (login === '' || login === null) {
    alert ('Cancelled');
} else {
    alert ('Wrong password');
}