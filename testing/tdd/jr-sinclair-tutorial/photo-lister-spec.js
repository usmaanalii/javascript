/*jslint node: true */
/* jshint -W117, -W030 */

// photo-lister-spec.js
var expect = require('chai').expect,
    PhotoLister = require('./photo-lister');

describe('PhotoLister', function() {
    it('should exist', function(){
        expect(PhotoLister).not.to.be.undefined;
    });

});

describe('#photoToListItem()', function() {
    it('should take a photo object and return a list item string', function(){
        var input = {
            title: 'This is a test',
            url: 'http://loremflickr.com/960/593'
        },
        expected = '<li><figure><img src="http://loremflickr.com/960/593" alt=""/>' + '<figcaption>This is a test</figcaption></figure></li>';

    expect(PhotoLister.photoToListItem(input)).to.equal(expected);

        input = {
            title: 'This is another test',
            url:   'http://loremflickr.com/960/593/puppy'
        },
        expected = '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>' + '<figcaption>This is another test</figcaption></figure></li>';
        expect(PhotoLister.photoToListItem(input)).to.equal(expected);
    });

});
