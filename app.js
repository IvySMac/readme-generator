const { questions } = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");


function askQuestions() {
    inquirer.prompt(questions).then(({projectName: project}) => {
        console.log(project);
        fs.appendFile("test.md", JSON.stringify(project), "utf-8", function(err) {
            if (err) console.error(err);
        });
    });
}


function main() {
    askQuestions();
}

main();