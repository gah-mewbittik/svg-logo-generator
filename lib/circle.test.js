const {Circle} = require('./circle');

describe('Circle', () => {
    it('should create a circle with a HEX color', () => {
        const circle = new Circle();
        circle.setColor('#ffff00');

        expect(circle.render()).toEqual('<circle cx="125" cy="115" r="40" fill="#ffff00" />');
});
})