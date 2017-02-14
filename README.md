### Usage
``` javascript
const dk = require('delightful-keycodes');

let key = dk(99);
// key => 'c'
```

delightful-keycodes can take multiple types of values and automatically convert the keyCode to the correct character.

### Example
``` javascript
let keyCode = 99;

dk(keyCode) // => 'c'

let keyPressEvent = {
  keyCode = 99
}

dk(keyPressEvent) // => 'c'

let keyPressEvent2 = {
  key: 'f',
  keyCode = 99
}

dk(keyPressEvent2) // => 'f'
// Chrome automatically converts the keyCode for you and provides it in the key property.
// This is showing that delightful-keycodes won't convert the keyCode if a key is already provided.
// This feature exists only because Safari doesn't convert the keyCode for you so you can throw the event into delightful-keycodes
// regardless of the browser and it's smart enough to decide whether it needs to convert or not.
```

### Planned Features
* Ability to take a character as an argument and automatically convert it to the proper keyCode.
