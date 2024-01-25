//import Shapes class
const Shape = require('./shapes');

//the triangle class that inherits from Shape
class Triangle extends Shape{
    constructor(color){
        super(color);
        this.color = color;
    }
    render(){
        return `<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><polygon points='0,200 300, 200 150,0' fill='${this.color}' /></svg>`;
    }
}


module.exports = Triangle;