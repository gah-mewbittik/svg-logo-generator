const Shape = require('./shapes');

//the circle class that inherits from Shape
class Circle extends Shape{
    constructor(color){
        super(color);
        
    }
    render(){
        return `<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><circle cx='150' cy='100' r='50' fill='${this.color}' /></svg>`;
    }
}


module.exports = Circle;