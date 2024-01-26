const {Triangle} = require('./triangle');

describe('Triangle', () => {
    it('should create a triangle with a blue color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');

        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
})