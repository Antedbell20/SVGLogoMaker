const {Circle, Square, Triangle} = require("./shapes")
//importing the classes from shapes.js

//circle test
describe("Circle", () => {
    test("renders", () => {
        const shape = new Circle();
        var color =("")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});
//square test
describe("Square", () => {
    test("renders", () => {
        const shape = new Square();
        var color =("")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}">`);
    });
});
//triangle test
describe("Triangle", () => {
    test("renders", () => {
        const shape = new Triangle();
        var color =("")
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}">`);
    });
});