## Speech Detection

What I learned on this mini-project.

*******

### SpeechRecognition()

This is a window object that enables you to utilise your microphone for
speech recognition functionality

``` javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
```

In chrome, you need to prepend SpeechRecognition with `webkit`.

### result

This is the event that can be listened for when the microphone receives input.

``` javascript
recognition.addEventListener('end', recognition.start);
```

The result of this, is a `SpeechRecognitionResultList` object which has
many properties, one of which is the `transcript` containing the words that
were interpreted.

Another propery from this object, that was used here is `isFinal`, which attempts to detect the ending of the speech.
