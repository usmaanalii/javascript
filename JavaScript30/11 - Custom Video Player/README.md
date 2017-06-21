## Custom Video Player

What I learned on this mini-project.

*******

You can access the `video` element and manipulate its behaviour via it's properties and methods.

### play and pause

To assess whether or not the video is paused, the following property can be assessed

``` javascript
// returns a boolean
video.paused;
```

To play and pause the video you can call `play` and `pause` methods on the video object, like so

``` javascript
const method = video.paused ? 'play' : 'pause';
video[method]();
```

### play and pause

To move along a video you can change its `currentTime` property

``` javascript
video.currentTime += 10;
```

### offsetWidth

In this example, we had to assess how far along the cursor was for a horizontal range element, `offsetWidth` gives the length of the element, whereas `offsetX` gives the amount the cursor is along the x axis (of the element). Code shown below

``` javascript
const scrubTime = (event.offsetX / progress.offsetWidth) * video.duration;
```

### timeupdate

This is a useful event that is fired when the video is playing, in this case it allowed the progress bar to fill up in time with the video

``` javascript
video.addEventListener('timeupdate', handleProgress);
```

### Tasks

- [ ] Complete the fullscreen functionality
