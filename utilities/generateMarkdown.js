// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}


function generateMarkdown(answers) {
    return `# ${answers.projectName}

## __Description__

${answers.description}


## __Installation__

${answers.install}

## __Usage__

${answers.usage}

    
![alt text](assets/images/screenshot.png)
    

## Credits



## License

// ${answers.license}

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

${answers.contribution}

## Tests

${answers.tests}
    `
}

module.exports = {
    generateMarkdown
};
