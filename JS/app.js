



/**
 * ELECTRITY BILL
 * 1 FAN = 50 WAT
 * 1 AC = 100 WAT
 * 1 LIGHT = 5 WAT
 * 5 FAN, 2 AC, 10 LIGHT
 * TOTAL WAT
 * 1 WAT = 100 TK
 * TOTAL BILL
 */

let name = prompt("Enter your Name");
let fan = parseInt(prompt("Fan"));
let ac = parseInt(prompt("AC"));
let light = parseInt(prompt("Light"));
let totalWat = parseInt(prompt("Wat"));

let result = (fan + ac + light + (totalWat * 100));

console.log(`Total Bill ${result}TK`);