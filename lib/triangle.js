//import Shapes class
const Shape = require('./shapes');

//the triangle class that inherits from Shape
class Triangle extends Shape{
    render(){
        return `<polygon height='100%' width='100%' points='0,200 300, 200 150,0' fill='${this.color}' />`
    }
}


module.exports = Triangle