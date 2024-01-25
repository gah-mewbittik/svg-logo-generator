const Shape = require('./shapes');

//the circle class that inherits from Shape
class Circle extends Shape{
    constructor(color){
        super(color);
        
    }
    render(){
        return `<circle cx='50%' cy='50%' r='100' fill='${this.color}' />`;
    }
}


module.exports = Circle;