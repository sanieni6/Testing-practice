const stringTasks = require('../modules/strings');

function testStringLength() {

}

test('error', () => {
    expect(() => stringTasks.stringLength('butterflies')).toThrow("String cannot be longer than 10 characters");
    
});

test('the length of <butterfly> is 9', () => {
    expect(stringTasks.stringLength('butterfly')).toBe(9);

});

test('The reverse of <amapola> is alopama', () => {
    expect(stringTasks.reverseString('amapola')).toBe('alopama');

});

test('Type Error', () => {
    expect(() => stringTasks.reverseString(8)).toThrow('Value must be a string');
    
});