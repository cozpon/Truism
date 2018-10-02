var Randomizer = (function(){
  var textDiv = document.getElementById("text");
  let truth = truismGenerator();
  textDiv.innerHTML = truth;

  var color = randomColor();
  console.log(color);
  document.body.style.backgroundColor = color;
})();