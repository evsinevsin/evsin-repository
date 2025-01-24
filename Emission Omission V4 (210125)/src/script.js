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

  sidebarS.classList.toggle("right-sidebar");
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

// INPUT-SANITISIERUNG
document.getElementById("filter").addEventListener("input", (input) => {
  const filterInput = event.target.value;
  const sanitizedInput = filterInput.replace(/[<>()#]/g, function (match) {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "(":
        return "&#40;";
      case ")":
        return "&#41;";
      case "#":
        return "&#35";
      default:
        return match;
    }
  });
  event.target.value = sanitizedInput;
});

document
  .getElementsByClassName("kontaktformular")
  .addEventListener("ipnut", (event) => {
    if (
      event.target.tagName === "INPUT" ||
      event.target.tagName === "TEXTAREA"
    ) {
      const formInput = event.target.value;
      const sanitizedFormInput = formInput.replace(
        /[<>()#]/g,
        function (match) {
          switch (match) {
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case "(":
              return "&#40;";
            case ")":
              return "&#41;";
            case "#":
              return "&#35;";
            default:
              return match;
          }
        }
      );
      event.target.value = sanitizedFormInput;
    }
  });
