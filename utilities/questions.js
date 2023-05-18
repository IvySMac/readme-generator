const licenses = require("./licenses");

const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "projectName",
    },
    {
        type: "input",
        message: "How would you describe this project?",
        name: "description",
    },
    {
        type: "input",
        message: "How would you install this app?",
        name: "install",
    },
    {
        type: "input",
        message: "How do you use this app?",
        name: "usage"
    },
    {
        type: "input",
        message: "Input URL of a screenshot for your project here",
        name: "screenshotUrl"
    },
    {
        type: "input",
        message: "Input alt text for screenshot image",
        name: "altText"
    },
    {
        type: "input",
        message: "What are some tests that you've made for this app?",
        name: "tests"
    },
    {
        type: "list",
        message: "Which license did you use?",
        name: "license",
        choices: licenses
    },
    {
        type: "input",
        message: "What are some key features of your app?",
        name: "features"
    },
    {
        type: "input",
        message: "How could someone contribute to your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "Input your GitHub URL",
        name: "gitHub"
    },
    {
        type: "input",
        message: "Input your e-mail address",
        name: "email"
    },
    {
        type: "input",
        message: "List all the credits for this project",
        name: "credits"
    }
];


module.exports = {
    questions
}