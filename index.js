// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//importing the shapes needed 
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
const square = require('./lib/square');

// an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message: 'Enter three (3) letters for your logo: ',
        validate: (input) =>{ //checks if you entered a title
            if(!input.trim() || input.length > 3){
                return 'Please enter the 3 letters you would like to use.';
            }
            return true;
        }
    },
    {
        type:'input',
        name:'text-color',
        message: 'Enter the color you want your text to be: ',
        validate: (input) =>{ //checks if you entered a description
            if(!input.trim()){
                return 'Please enter the text color you would like to use.';
            }
            return true;
        }
    },
    {
        type:'list',
        name:'shape',
        message: 'Enter the shape you want your logo to possess: ',
        options: ['Circle', 'Triangle', 'Square'],
       
    },
    {
        type:'input',
        name:'shape-color',
        message: 'Enter the color you want your shape to be: ',
        validate: (input) =>{ //checks if you entered a description
            if(!input.trim()){
                return 'Please enter the color you would like to use.';
            }
            return true;
        }
    },
   
];



// function to write README file
function writeToFile(fileName, data) {
        
        //fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        fileName = `logo.svg`;

        fs.writeFile(fileName, genMarkDown(data), (err) => {
        err ? console.log(err) : console.log('Generated logo.svg')
        });
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
    
        writeToFile('logo.svg', data);
    })
    .catch((error) => {
        console.error(error.message);

    });
}

// Function call to initialize app
init();