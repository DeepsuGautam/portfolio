const { hashSync } = require("bcryptjs");

const pass = hashSync("deepsu", 10);
console.log(pass)