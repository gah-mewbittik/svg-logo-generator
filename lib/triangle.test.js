// imports the Triangle class
const Triangle = require('./triangle');

// the triangle test
describe('Triangle', () => {
    it('should create a triangle with a blue color', () => {
        const triangle = new Triangle('#ffff00', 'Hi', 'blue');
       

        expect(triangle.render()).toEqual(`<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><polygon points='0,200 300, 200 150,0' fill='#ffff00' /><text x='150' y='115' text-anchor='middle' font-size='40' fill='blue'>Hi</text></svg>`);
});
})