const { questions } = require("./utilities/questions");
const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utilities/generateMarkdown");


function askQuestions() {
    inquirer.prompt(questions).then((answers) => {
        const template = generateMarkdown(answers);

        fs.writeFile("README.md", template, "utf-8", function(err) {
            if (err) console.error(err);
        });
    });
}


function main() {
    askQuestions();
}

main();