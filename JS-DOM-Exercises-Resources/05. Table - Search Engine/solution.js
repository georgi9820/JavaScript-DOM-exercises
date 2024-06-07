function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchValue = document.getElementById("searchField").value;

    let rows = document.querySelectorAll("tbody tr");

    rows.forEach((row) => row.classList.remove("select"));

    rows.forEach((row) => {
      let cells = row.querySelectorAll("td");
      let matchFound = false;

      cells.forEach((cell) => {
        if (
          cell.textContent.toLowerCase().includes(searchValue.toLowerCase())
        ) {
          matchFound = true;
        }
      });

      if (matchFound) {
        row.classList.add("select");
      }
    });

    document.getElementById("searchField").value = "";
  }
}
