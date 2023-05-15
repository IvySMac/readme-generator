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
        message: "How could someone help contribute to this project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are some tests that you've made for this app?",
        name: "tests"
    }
];

module.exports = {
    questions
}