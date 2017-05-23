// flickr-fetcher.js
var FlickrFetcher;

FlickrFetcher = {
    photoObjToUrl: function(photoObj) {
        return [
            'https://farm',
            photoObj.farm, '.staticflickr.com/',
            photoObj.server, '/',
            photoObj.id, '_',
            photoObj.secret, '_b.jpg'
        ].join('');
    },
    transformPhotoObj: function(photoObj) {
        return {
            title: photoObj.title,
            url:   FlickrFetcher.photoObjToUrl(photoObj)
        };
    },
    fetchFlickrData: function(apiKey, fetch) {
        var url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&text=pugs&format=json&nojsoncallback=1';

        return fetch(url);
    },
    fetchPhotos: function(apiKey, fetch) {
        return FlickrFetcher.fetchFlickrData(apiKey, fetch).then(function(data) {
            return data.photos.photo.map(FlickrFetcher.transformPhotoObj);
        });
    }



};

module.exports = FlickrFetcher;
