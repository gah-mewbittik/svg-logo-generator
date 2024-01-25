const Shape = require('./shapes');

//the square class that inherits from Shape
class Square extends Shape{
    constructor(color){
        super(color);
        this.color = color;
    }
    render(){
        return `<rect x='50%' height='200' width='200' fill='${this.color}' />`
    }
}


module.exports = Square;