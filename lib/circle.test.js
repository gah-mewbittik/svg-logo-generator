const Circle = require('./circle');

describe('Circle', () => {
    it('should create a circle with a given color', () => {
        const circle = new Circle('#ffff00', 'Hello', 'black');
        
        

        expect(circle.render()).toEqual(`<svg version='1.1' xmlns='https://www.w3.org/2000/svg'><circle cx='150' cy='100' r='50' fill='#ffff00' /><text x='150' y='115' text-anchor='middle' font-size='40' fill='black'>Hello</text></svg>`);
});
})