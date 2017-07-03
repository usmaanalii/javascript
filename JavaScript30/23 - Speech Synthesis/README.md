## Speech Synthesis

What I learned on this mini-project.

*******

### speechSynthesisUtterance

An interface for the Web Speech API. This contains the content the speech
service will read along with options such as language and pitch.

``` javascript
const msg = new SpeechSynthesisUtterance();

// Example properties used
msg.lang;
msg.pitch;
msg.rate;
msg.text;
```

- `voiceschanged` - This event listener can be used to attach an event to add voices to use.
- `getVoices()` - Will extract the voices on the device being used as an array

### SpeechSynthesis

This is the controller interface for the speech service, which can be used to
get information about the voices available. It can also be used to start and
pause the speech.

``` javascript
speechSynthesis.paused;
speechSynthesis.pending;
speechSynthesis.speaking;

speechSynthesis.cancel();
speechSynthesis.pause();
speechSynthesis.speak();
```

Above, are example properties and methods that can be used to alter the state of the speech
device.

### Anonymous function

At times you might want to provide a parameter to a function for use in an
event listener. Unfortunately, doing this by a traditional function call
will result in it being run on page load.

Using an anonymous function, you can avoid this problem

``` javascript
stopButton.addEventListener('click', () => toggle(false));
```

One caveat to this is the creation of a new function, doing this too much
can unnecessary overhead to the code affecting its speed and efficiency.
