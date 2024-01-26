//importing the Square class
const Square = require('./square');

// the square test
describe('Square', () => {
    it('should create a Square with a given color', () => {
        const square = new Square('#ffff00', 'Hello', 'green');
       

        expect(square.render()).toEqual(`<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><rect height='200' width='200' fill='#ffff00' /><text x='100' y='100' text-anchor='middle' font-size='40' fill='green'>Hello</text></svg>`);
});
})