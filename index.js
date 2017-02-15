let dk = function (item) {

  let library = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    27: 'escape',
    32: 'space'
  };

  let keyCode;

  switch (typeof item) {
    case 'object':
      if (item.keyCode || item.charCode) {
        if (item.key) {
          return item.key;
        }

        keyCode = item.keyCode || item.charCode;
      }
      break;
    case 'number':
      keyCode = item;
      break;
    case 'string':
      let temp = Number(item);
      if (!isNaN(temp)) {
        keyCode = temp;
      }
      break;
  }

  return getKey(keyCode);

  function getKey (keyCode) {
    if (library.hasOwnProperty(String(keyCode))) {
      return library[String(keyCode)];
    }
    else {
      return String.fromCharCode(keyCode);
    }
  }
}

module.exports = dk;
