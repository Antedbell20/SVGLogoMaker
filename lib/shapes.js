class Shape{
    // This defines a class called Shape which has a constructor intializing color and sets the color value.
    
        constructor(){
            this.color=''
        }
        setColor(color){
            this.color=(color);
        }
    }
    // This defines the circle class which extends the Shape class and has a constructor which initializes the radius and sets the radius value.
    class Circle extends Shape{
        render(){
            return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
        }
    }
    // This defines the square class which extends the Shape class and has a constructor which initializes the side and sets the side value.
    class Square extends Shape{
        render(){
            return `<rect x="50" height="200" width="200" fill="${this.color}">`
        }
    }
    // This defines the triangle class which extends the Shape class and has a constructor which initializes the side and sets the side value.
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`  
        }
    }

module.exports = {Circle, Square, Triangle}