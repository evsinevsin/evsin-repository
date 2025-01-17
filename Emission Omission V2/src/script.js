"use strict";

function sortTable() {
  let isSwitching = true;
  const table = document.getElementById("emissionsTable");
  let rows, shouldSwap, currentRow, nextRow;

  while (isSwitching) {
    isSwitching = false;
    rows = table.rows;

    for (let index = 1; index < rows.length - 1; index++) {
      shouldSwap = false;

      currentRow = rows[index].getElementsByTagName("TD")[0];
      nextRow = rows[index + 1].getElementsByTagName("TD")[0];

      if (
        currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()
      ) {
        shouldSwap = true;
        rows[index].parentNode.insertBefore(rows[index + 1], rows[index]);
        isSwitching = true;
        break;
      }
    }
  }
}

function filterFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  table = document.getElementById("emissionsTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function openNav() {
  const sidenav = document.getElementById("sidenav");
  if (sidenav) {
    sidenav.style.width = "250px";
  }
}

function closeNav() {
  const sidenav = document.getElementById("sidenav");
  if (sidenav) {
    sidenav.style.width = "0";
  }
}

function adjustSidebarPosition() {
  // Check the document's language or the direction of text flow
  const dir = document.documentElement.getAttribute("dir") || "ltr"; // Default to 'ltr' if no dir attribute

  const sidebar = document.getElementById("sidenav"); // Assuming the sidebar has an ID of 'sidebar'

  if (dir === "rtl") {
    // If the document is RTL, position the sidebar on the right
    sidebar.style.position = "fixed";
    sidebar.style.right = "0";
    sidebar.style.left = "auto"; // Ensure no conflicting position is set for the left
  } else {
    // If the document is LTR, position the sidebar on the left
    sidebar.style.position = "fixed";
    sidebar.style.left = "0";
    sidebar.style.right = "auto"; // Ensure no conflicting position is set for the right
  }
}

// Call the function when the page loads or when the content's reading direction changes
window.onload = adjustSidebarPosition;

const lang = document.documentElement.lang || "en";
if (lang === "ar" || lang === "he") {
  // Arabic or Hebrew (RTL languages)
  sidebar.style.right = "0";
  sidebar.style.left = "auto";
} else {
  // For other languages (LTR languages)
  sidebar.style.left = "0";
  sidebar.style.right = "auto";
}

// JavaScript for toggle functionality
const btnNavigation = document.querySelector(".btn-navigation");
const headerNav = document.querySelector(".header-navigation");

btnNavigation.addEventListener("click", () => {
  // Toggle the display of the header navigation
  headerNav.classList.toggle("active");
});
