import inquirer from "inquirer";
import chalk from "chalk";
const answers = await inquirer.prompt([
    {
        name: "frirstNumber",
        type: "number",
        message: [
            chalk.green.bold(" Enter First Number For Methametical Operation :"),
        ],
    },
    {
        name: "secondNumber",
        type: "number",
        message: [
            chalk.yellow.bold(" Enter Second Number For Methametical Operation :"),
        ],
    },
    {
        name: "multipleChoices",
        type: "list",
        message: [
            chalk.blue.bold("Select One OF The Operator To Perfrom Operation :"),
        ],
        choices: ["+", "-", "/", "*", "%"],
    },
]);
switch (answers.multipleChoices) {
    case "+":
        console.log(answers.frirstNumber + answers.secondNumber);
        break;
    case "-":
        console.log(answers.frirstNumber - answers.secondNumber);
        break;
    case "/":
        console.log(answers.frirstNumber / answers.secondNumber);
        break;
    case "*":
        console.log(answers.frirstNumber * answers.secondNumber);
        break;
    case "%":
        console.log((answers.frirstNumber / answers.secondNumber) * 100);
        break;
    default:
        console.log(chalk.red.bold("Please select valid operator .!!"));
        break;
}
