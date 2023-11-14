function randomInput() {
  var randomValue = [
    "4 * sin(x) + 5 * cos(x / 2)",
    "x * sin(x ^ 2)",
    "x ^ 4 * sin(x)",
    "e ^ sin(x)",
  ];
  var randomExpression = Math.floor(Math.random() * randomValue.length);
  document.getElementById("expression").value = randomValue[randomExpression];
  userInput();
}
function userInput() {
  try {
    var input = document.getElementById("expression").value;
    var derivative = math.derivative(input, "x");
    document.getElementById("derivative").innerHTML = `\`y' = ${derivative}\``;
    MathJax.Hub.Typeset();
  } catch (error) {
    alert(error);
  }
}
MathJax = window.MathJax;
MathJax.Hub.processSectionDelay = 0;
MathJax.Hub.Config({
  messageStyle: "none",
});
window.onload = randomInput();
document.getElementById("form").onsubmit = function (event) {
  event.preventDefault();
  userInput();
};
