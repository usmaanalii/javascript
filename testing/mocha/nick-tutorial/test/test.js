/* jshint -W117, -W030 */

var expect = chai.expect;
var should = chai.should();

describe('Is Even Tests', function(){
    it('Should always return a boolean', function(){
        expect(isEven(2)).to.be.a('boolean');
    });

    it('Calling isEven(76) should return true', function(){
        expect(isEven(76)).to.be.true;
    });

    it('Calling isEven(77) should return false', function(){
        expect(isEven(77)).to.be.false;
    });

});
