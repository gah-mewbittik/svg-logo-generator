// The Base/Super class Shape 
class Shape{
    constructor(color){
        this.color = color;
        this.width = 300;
        this.height = 200;
    }
    setColor(color){
        this.color = color;
    }
    setSize(shapeSize){
        shapeSize = `<svg version='1.1' width='300' height='200' xmlns='https://www.w3.org/2000/svg'>`;
    }
}


module.exports = Shape;