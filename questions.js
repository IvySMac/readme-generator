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
        message: "List all the credits for this project",
        name: "credits"
    },
    {
        type: "input",
        message: "What are some tests that you've made for this app?",
        name: "tests"
    },
    // {
    //     type: "checkbox",
    //     message: "Which license did you use?",
    //     name: "license",
    //     choices: ['MIT', 'GPLv2', 'Apache','GPLv3','None']
    // },
    {
        type: "input",
        message: "How could someone contribute to your project?",
        name: "contribution"
    }
];


module.exports = {
    questions
}