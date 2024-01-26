const {Square} = require('./square');

describe('Square', () => {
    it('should create a Square with a given color', () => {
        const square = new Square();
        square.setColor('purple');

        expect(square.render()).toEqual('<circle cx="125" cy="115" r="40" fill="purple" />');
});
})