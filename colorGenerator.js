const randomColor = () => {
  "use strict";

  let randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var h = randomInt(0, 360);
  var s = randomInt(42, 98);
  var l = randomInt(40, 90);
  let x = `hsl(${h},${s}%,${l}%, 40%)`;
  return x;
};
