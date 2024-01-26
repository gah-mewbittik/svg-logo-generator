const Shape = require('./shapes');

//the circle class that inherits from Shape
class Circle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
        
    }
    render(){
        return `<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><circle cx='150' cy='100' r='50' fill='${this.color}' /><text x='150' y='115' text-anchor='middle' font-size='40' fill='${this.textColor}'>${this.text}</text></svg>`;
    }
}


module.exports = Circle;