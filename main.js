#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a name";
        },
    }, {
        name: "courses",
        type: "list",
        message: "Select your course to enroll",
        choices: ["Biotechnology", "Microbiology", "Biochemistry", "Pharmacy"]
    }
]);
const tuitionfee = {
    "Biotechnology": 29000,
    "Microbiology": 28000,
    "Biochemistry": 27500,
    "Pharmacy": 35000,
};
console.log(`\nTuition Fees :${tuitionfee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Pay order", "Fee voucher"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a payment method";
        },
    }
]);
console.log(`\nYou selected payment menthod ${paymentType.payment}\n`);
const tuitionfees = tuitionfee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionfees === paymentAmount) {
    console.log(`Congratulations, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["View status", "Exit"]
        }]);
    if (ans.select === "View status") {
        console.log("\n********Status********\n");
        console.log(`Student Name:${answer.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tuition fees paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExisting student terminal");
    }
}
else {
    console.log("Inavlid amount, please put correct amount");
}
