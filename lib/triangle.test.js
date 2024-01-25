const {Triangle} = require('./shapes');

describe('Triangle', () => {
    it('should create a triangle with a given color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');

        expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});
})