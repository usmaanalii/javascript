/*jslint node: true */
/* jshint -W117, -W030 */

// photo-lister.js
PhotoLister = {
    photoToListItem: function (photo) {
        return [
            '<li><figure><img src="',
            photo.url, '" alt=""/>',
            '<figcaption>',
            photo.title,
            '</figcaption></figure></li>'
        ].join('');
    }
};

module.exports = PhotoLister;
