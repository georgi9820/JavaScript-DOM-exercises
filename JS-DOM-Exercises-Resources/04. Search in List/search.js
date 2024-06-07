function search() {
  let input = document.getElementById("searchText").value;
  let liElements = document.querySelectorAll("li");
  let result = document.getElementById("result");

  let matches = 0;

  for (let i = 0; i < liElements.length; i++) {
    if (liElements[i].textContent.toLowerCase().includes(input.toLowerCase())) {
      liElements[i].style.fontWeight = "bold";
      liElements[i].style.textDecoration = "underline";
      matches++;
    } else {
      liElements[i].style.fontWeight = "";
      liElements[i].style.textDecoration = "";
    }
  }

  result.textContent = `${matches} matches found`;
}
