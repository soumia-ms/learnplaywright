// function books(bookname,genre) {
//     console.log("Book is " + bookname);
//     console.log("Genre is " + genre);

// }
// books("Grey's Anatomy","Medical");

// function add(num1,num2) {
//     return num1 + num2;
// }

// console.log(add(5,50));

// function multiply(num1,num2) {
//     return num1 * num2;
// }

// // console.log(multiply(5,10));

// function login(username,password) {
//     console.log("Username: " + username);
//     console.log("Password: " + password);
// }

// const logincreds = {
//     user1 :{username: "admin",password: "admin123"},
//     user2: {username: "user",password: "admin493"},
//     user3:{username:"guest",password: "guest871"}
// };    

// for (let user in logincreds) {
//     login(logincreds[user].username,logincreds[user].password);
        
//         console.log("Username: " + logincreds[user].username);
//     console.log("Password: " + logincreds[user].password);

// }

//function with return statement

// function add(num1,num2) {
//     return num1 + num2;
// }
// value= (add(4,18));
// // console.log(value);

// function generateIndianMobileNumber() {
//     const prefixes = ['6', '7', '8', '9'];
//     const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
//     const remainingDigits = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join('');
//     return prefix + remainingDigits;
// }

// function generateUSMobileNumber() {
//     const areaCode = Math.floor(Math.random() * 900 + 100);
//     const exchangeCode = Math.floor(Math.random() * 900 + 100);
//     const lineNumber = Math.floor(Math.random() * 9000 + 1000);
//     return `(${areaCode}) ${exchangeCode}-${lineNumber}`;
// }

// console.log('Random Indian Mobile Number:', generateIndianMobileNumber());
// console.log('Random US Mobile Number:', generateUSMobileNumber());

function add(num1, num2) {
    console.log(num1 + num2);
}
add(10, 125);