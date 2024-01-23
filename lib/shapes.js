// The Base/Super class Shape 
class Shape{
    constructor(){
        this.color = '';
    }
    setColor(color){
        this.color = color;
    }
}

//the circle class that inherits from Shape
class Circle extends Shape{
    render(){
        return `<circle cx='50%' cy='50%' r='100' fill='${this.color}' />`;
    }
}

//the triangle class that inherits from Shape
class Triangle extends Shape{
    render(){
        return `<polygon height='100%' width='100%' points='0,200 300, 200 150,0' fill='${this.color}' />`
    }
}


//the square class that inherits from Shape
class Square extends Shape{
    render(){
        return `<rect x='50%' height='200' width='200' fill='${this.color}' />`
    }
}


module.exports = {Circle, Triangle, Square}