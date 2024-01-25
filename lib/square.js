const Shape = require('./shapes');

//the square class that inherits from Shape
class Square extends Shape{
    constructor(color, text, textColor){
        super(color, text, textColor);
        
    }
    render(){
        return `<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><rect height='200' width='200' fill='${this.color}' /><text x='100' y='100' text-anchor='middle' font-size='40' fill='${this.textColor}'>${this.text}</text></svg>`;
    }
}


module.exports = Square;