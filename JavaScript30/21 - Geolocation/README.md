## Geolocation

What I learned on this mini-project.

*******

### geolocation

This is a property of the window object, that contains data about the users
location. You must enable access for it to work.

``` javascript
navigator.geolocation.watchPosition(data => {
    console.log(data);

    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (error) => {
    console.error(error);
    alert('ENABLE GEOLOCATION!!!');
});
```

The geolocation object is only briefly introduced.

### watchPosition

This method, allows you to update the users position at regular intervals,
instead of getting a snapshot of where they are.

The data returned then needs to be manipulated via a `promise`, that handles
success and failure outcomes.

### coords

Most of the data that you will need is contained in this object.
Examples of this include the latitude, longitude and heading (representing
degrees from north).
