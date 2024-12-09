import { findRoots } from "./findRoots.js";
import { handleDivision } from "./handleDivision.js";

function openTab(tabName) {
  const tabContents = document.getElementsByClassName("tabcontent");
  const tabLinks = document.getElementsByClassName("tablink");

  // Hide all tab content and remove active class from tab links
  for (const content of tabContents) {
    content.style.display = "none";
    content.classList.remove("active");
  }
  for (const link of tabLinks) {
    link.classList.remove("active");
  }

  // Show the selected tab content and add active class to the corresponding tab link
  document.getElementById(tabName).style.display = "block";
  document.querySelector(`#${tabName}-tab`).classList.add("active");
}

window.addEventListener("load", () => {
  // Tab switch event listeners
  document
    .querySelector("#division-tab")
    .addEventListener("click", () => openTab("division"));
  document
    .querySelector("#roots-tab")
    .addEventListener("click", () => openTab("roots"));

  // Button click event listeners
  document
    .querySelector("#divide-btn")
    .addEventListener("click", handleDivision);

  document.querySelector("#find-roots-btn").addEventListener("click", () => {
    const polyInput = document.querySelector("#polynomial").value;
    const roots = findRoots(polyInput);
    const resultDiv = document.querySelector("#result-roots");
    resultDiv.innerHTML = `<p><strong>Roots:</strong> ${roots.join(", ")}</p>`;
  });

  // Initialize the default tab
  openTab("division");
});
