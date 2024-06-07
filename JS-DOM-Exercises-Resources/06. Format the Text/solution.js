function solve() {
  let textInput = document.getElementById("input").value;
  let divOutput = document.getElementById("output");

  // Изтриваме предишното съдържание
  divOutput.innerHTML = "";

  // Разделяме текста на изречения
  let sentences = textInput.split(".");

  // Изчистваме празните изречения (например, ако текстът завършва с точка)
  sentences = sentences.filter((sentence) => sentence.trim() !== "");

  // Създаваме параграфи и ги добавяме към divOutput
  for (let i = 0; i < sentences.length; i += 3) {
    let paragraph = document.createElement("p");
    // Създаваме текстов възел със съответните изречения
    let textNode = document.createTextNode(
      sentences.slice(i, i + 3).join(". ")
    );
    // Добавяме текстовия възел към параграфа
    paragraph.appendChild(textNode);
    // Добавяме параграфа към divOutput
    divOutput.appendChild(paragraph);
  }
}
