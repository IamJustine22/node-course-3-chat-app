const expect = require('expect');

// var isRealString
const {isRealString} = require('./validation');


           //comments neeeded
//isRealString
//should reject non string values
//should reject string only spaces
//should allow string non-space characters


describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(98);
        expect(res).toBe(false);
    });
it('should reject string with only spaces', () => {
    var res = isRealString('   ');
    expect(res).toBe(false);

});

it('shoul allow string with non-space characters', () => {
    var res = isRealString('  Justine  ');
    expect(res).toBe(true);
});

});























