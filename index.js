const inquirer = require('inquirer');
const FileSystem = require('fs');
// importing fs and inquirer
const{Circle, Square, Triangle} = require("./lib/shapes");
//importing the classes from shapes.js

// This defines the svg class which has a constructor which initializes the textElement and shapeElement and sets the textElement and shapeElement value.
class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`  
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}
// the questions array is used to ask the user for input
const questions =[
    {
        type: "input",
        name: "text",
        message: "TEXT: Enter up to (3) Characters:",
    },
    // asks for text
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    // asks for text color
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color keyword (OR a hexadecimal number):",
    },
    // asks for shape color
    {
        type: "list",
        name: "pixel-image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
    // asks for shape
];
// this function writes data to the file
function writeToFile(fileName, data) {
    console.log("Writing to file...")
    FileSystem.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    });
}

async function init() {
    console.log("Starting init...");
    var svg = "";
    var svgFile = "logo.svg";
    const answers = await inquirer.prompt(questions);
    var userText = "";
    if (answers.text.length <= 0 && answers.text.length > 4) {
        userText = answers.text.
     else 
        console.log("Please enter up to (3) characters and atleast (1) character.");
        return;
    }

    console.log("User Text: " + userText);

    userFontColor = answers["text-color"];
    console.log("User Font Color: " + userFontColor);

    userShapeColor = answers["shape-color"];
    console.log("User Shape Color: " + userShapeColor);

    userShapeType = answers["pixel-image"];
	console.log("User entered shape = [" + userShapeType + "]");
    
    let userShape;
    if (userShapeType === "Square" || userShapeType === "square") {
		userShape = new Square();
		console.log("User selected Square shape");
	}
	else if (userShapeType === "Circle" || userShapeType === "circle") {
		userShape = new Circle();
		console.log("User selected Circle shape");
	}
	else if (userShapeType === "Triangle" || userShapeType === "triangle") {
		userShape = new Triangle();
		console.log("User selected Triangle shape");
	}
	else {
		console.log("Invalid shape!");
	}
	userShape.setColor(userShapeType);
    var svgs = new Svg();
    svgs.setTextElement(userText, userFontColor);
    svgs.setShapeElement(userShape);
    svg = svgs.render();

    console.log("displaying shape:\n\n" + svg);
    console.log("shape generation completed");
    console.log("writing to file...")
    writeToFile(svgFile, svg);
}
init()


