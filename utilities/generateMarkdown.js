function generateMarkdown(answers) {
    return `# ${answers.projectName}

## __Description__


${answers.description}


## __Table of Contents__

-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Features](#features)
-[How to Contribute]


## __Installation__

${answers.install}

## __Usage__
  
![${answers.altText}](${answers.screenshotUrl})
    
${answers.usage}

## License

 ${answers.license}


## Features

${answers.features}

## How to Contribute

${answers.contribution}

## Tests

${answers.tests}

## Credits

${answers.credits}

    `
}

module.exports = {
    generateMarkdown
};
