/*jslint node: true */
/* jshint -W117, -W030 */

'use strict';

var expect = chai.expect;
var should = chai.should();

describe('Is Even Tests', function(){
    it('Should always return a boolean', function(){
        expect(isEven(2)).to.be.a('boolean');
    });

});
