#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addtask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What You Want To Add in Your Todos?",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do You Want To Add More?",
            default: "false",
        }
    ]);
    todos.push(addtask.todo);
    condition = addtask.addmore;
    console.log(todos);
}
