#! /user/bin/env node
// this line is called shebang 
// impoet the module which is a command line interface for node.js
import inquirer from "inquirer";

// declare a constant answers and assign it to the result og inquirer.promt function
const answers: {
    sentence: string
 } = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: "enter your sentence to count the word: "
        }
    ]
 )
 const words = answers.sentence .trim().split(" ")
 // print the array of words to the console

 console.log (words)

 // print the word count of the sentence to the console
 console.log (`your sentence word count is  ${words.length}`);