function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let resultSpan = document.getElementById("result");
  function convertText(text, type) {
    let words = text.toLowerCase().split(" ");
    if (type === "Camel Case") {
      for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
      return words.join("");
    } else if (type === "Pascal Case") {
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
      }
      return words.join("");
    } else {
      return "Error!";
    }
  }

  const result = convertText(input, currentCase);
  resultSpan.textContent = result;
}
