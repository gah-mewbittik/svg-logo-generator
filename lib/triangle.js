//import Shapes class
const Shape = require('./shapes');

//the triangle class that inherits from Shape
class Triangle extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
        
    }
    render(){
        return `<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><polygon points='0,200 300, 200 150,0' fill='${this.color}' /><text x='150' y='115' text-anchor='middle' font-size='40' fill='${this.textColor}'>${this.text}</text></svg>`;
    }
}


module.exports = Triangle;