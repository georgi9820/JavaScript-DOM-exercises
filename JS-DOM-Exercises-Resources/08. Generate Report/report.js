function generateReport() {
  // Select all table headers with checkboxes
  const headers = document.querySelectorAll("thead th");

  // Get the table rows excluding the header
  const rows = document.querySelectorAll("tbody tr");

  // Prepare an array to store the resulting JSON objects
  const result = [];

  // Iterate through each row
  rows.forEach((row) => {
    // Create an object to store the data for the current row
    const rowData = {};

    // Get all the cells in the current row
    const cells = row.children;

    // Iterate through each header and corresponding cell
    headers.forEach((header, index) => {
      const checkbox = header.querySelector('input[type="checkbox"]');
      if (checkbox && checkbox.checked) {
        // If the checkbox is checked, add the cell data to the rowData object
        const key = checkbox.name;
        const value = cells[index].textContent;
        rowData[key] = value;
      }
    });

    // Add the rowData object to the result array if it has any data
    if (Object.keys(rowData).length > 0) {
      result.push(rowData);
    }
  });

  // Convert the result array to a JSON string
  const jsonResult = JSON.stringify(result, null, 2);

  // Output the JSON string to the textarea with id "output"
  document.getElementById("output").value = jsonResult;
}
