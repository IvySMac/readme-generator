function generateMarkdown(answers) {
    return `# __${answers.projectName}__

## __Description__


${answers.description}


## __Table of Contents__

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Features](#features)

- [How to Contribute](#how-to-contribute)

- [Tests](#tests)

- [Questions](#questions)

- [Credits](#credits)


## __Installation__

${answers.install}


## __Usage__
  

![${answers.altText}](${answers.screenshotUrl})
    

${answers.usage}


## __License__


 ${answers.license}


## __Badges__


${answers.languageBadges}


## __Features__


${answers.features}


## __How to Contribute__


${answers.contribution}

## __Tests__


${answers.tests}


## __Questions__


If you have any additional questions, feel free to reach out to me on GitHub
or through my e-mail. 

- <a href="${answers.gitHub}">GitHub</a>

- <a href="mailto:${answers.email}">${answers.email}</a>


## __Credits__


${answers.credits}


    `
}

module.exports = {
    generateMarkdown
};
