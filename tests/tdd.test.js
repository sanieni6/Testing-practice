capitalize = require('../modules/capitalize');

test('The capitalization of madrid is Madrid', () => {
    expect(capitalize('madrid')).toBe('Madrid');

});