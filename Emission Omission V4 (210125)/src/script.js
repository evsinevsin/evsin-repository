"use strict";

function sortTable() {
  const table = document.getElementById("emissionsTable");
  const rowsArray = Array.from(table.rows).slice(1);

  rowsArray.sort((rowA, rowB) => {
    const cellA = rowA.cells[0].textContent.toLowerCase();
    const cellB = rowB.cells[0].textContent.toLowerCase();
    return cellA.localeCompare(cellB);
  });

  const tableBody = table.tBodies[0];
  rowsArray.forEach((row) => tableBody.appendChild(row));
}

function filterFunction() {
  const input = document.getElementById("filter");
  const filter = input.value.toUpperCase();
  const table = document.getElementById("emissionsTable");
  const tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    const tds = tr[i].getElementsByTagName("td");
    let isMatch = false;

    for (let j = 0; j < tds.length; j++) {
      const td = tds[j];
      if (td && td.textContent.toUpperCase().includes(filter)) {
        isMatch = true;
        break;
      }
    }

    tr[i].style.display = isMatch ? "" : "none";
  }
}

document.querySelector(".toggle").addEventListener("click", () => {
  const sidebar = document.querySelector(".sidebar-navigation");
  const toggler = document.querySelector(".toggle");

  if (sidebar.classList.contains("right")) {
    sidebar.classList.remove("right");
  } else {
    sidebar.classList.add("right");
  }

  if (toggler.classList.contains("right")) {
    toggler.classList.remove("right");
  } else {
    toggler.classList.add("right");
  }
});

document.querySelector(".toggle-sidebar").addEventListener("click", () => {
  const sidebarS = document.querySelector(".sidebar-menu");
  const togglerT = document.querySelector(".toggle-sidebar");

  if (sidebarS.classList.contains("right-sidebar")) {
    sidebarS.classList.remove("right-sidebar");
  } else {
    sidebarS.classList.add("right-sidebar");
  }

  if (togglerT.classList.contains("right-sidebar")) {
    togglerT.classList.remove("right-sidebar");
  } else {
    togglerT.classList.add("right-sidebar");
  }
});

// document.querySelector(".dark-mode-icon").addEventListener("click", () => {
//   document.querySelector("body").style.backgroundColor = "black";
// });

document.getElementById("benutzermail").addEventListener("input", function () {
  const emailInput = this.value;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(emailInput)) {
    this.setCustomValidity("");
  } else {
    this.setCustomValidity("Please enter a valid email address.");
  }
});
