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
    },
    photoListToHTML: function(photos) {
        return ['<ul>', photos.map(PhotoLister.photoToListItem).join(''), '</ul>'].join('');
    },
    addPhotosToElement: function ($, selector, list) {
        return $(selector).append(list);
    }
};

if ((typeof module !== 'undefined') && (typeof module.exports !== undefined)) {
    module.exports = PhotoLister;
}
