/*jslint node: true */
/* jshint -W117, -W030 */

// photo-lister-spec.js
var expect = require('chai').expect,
    cheerio = require('cheerio'),
    PhotoLister = require('./photo-lister');

describe('PhotoLister', function() {
    it('should exist', function() {
        expect(PhotoLister).not.to.be.undefined;
    });

});

describe('#photoToListItem()', function() {
    it('should take a photo object and return a list item string', function() {
        var input = {
                title: 'This is a test',
                url: 'http://loremflickr.com/960/593'
            },
            expected = '<li><figure><img src="http://loremflickr.com/960/593" alt=""/>' + '<figcaption>This is a test</figcaption></figure></li>';

        expect(PhotoLister.photoToListItem(input)).to.equal(expected);

        input = {
                title: 'This is another test',
                url: 'http://loremflickr.com/960/593/puppy'
            },
            expected = '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>' + '<figcaption>This is another test</figcaption></figure></li>';
        expect(PhotoLister.photoToListItem(input)).to.equal(expected);
    });

});

describe('#photoListToHTML()', function() {
    it('shold take an array of photo object and convert them to an HTML list', function() {
        var input = [{
                title: 'This is a test',
                url: 'http://loremflickr.com/960/593'
            }, {
                title: 'This is another test',
                url: 'http://loremflickr.com/960/593/puppy'
            }],
            expected = '<ul><li><figure><img src="http://loremflickr.com/960/593" alt=""/>' + '<figcaption>This is a test</figcaption></figure></li>' +
            '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>' +
            '<figcaption>This is another test</figcaption></figure></li></ul>';

        expect(PhotoLister.photoListToHTML(input)).to.equal(expected);
    });
});

// ... snip ...
describe('#addPhotosToElement()', function() {
    it('should take an HTML string of list items and add them to an element with a given selector', function() {
        var $ = cheerio.load('<html><head></head><body><div id="mydiv"></div></body></html>'),
            list = '<ul><li><figure><img src="http://loremflickr.com/960/593" alt=""/>' + '<figcaption>This is a test</figcaption></figure></li>' +
            '<li><figure><img src="http://loremflickr.com/960/593/puppy" alt=""/>' + '<figcaption>This is another test</figcaption></figure></li></ul>',
            selector = '#mydiv',
            $div = PhotoLister.addPhotosToElement($, selector, list);

            expect($div.find('ul').length).to.equal(1);
            expect($div.find('li').length).to.equal(2);
            expect($div.find('figure').length).to.equal(2);
            expect($div.find('img').length).to.equal(2);
            expect($div.find('figcaption').length).to.equal(2);
    });

});
