const Shape = require('./shapes');

//the square class that inherits from Shape
class Square extends Shape{
    constructor(color){
        super(color);
        this.color = color;
    }
    render(){
        return `<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><rect x='50%' height='200' width='200' fill='${this.color}' /></svg>`;
    }
}


module.exports = Square;