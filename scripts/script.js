import { findRoots } from './findRoots.js';
import { handleDivision } from './handleDivision.js';

function openTab(tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

window.addEventListener('load', () => {
    document.querySelector("#division-tab").addEventListener("click", () => openTab('division'));
    document.querySelector("#roots-tab").addEventListener("click", () => openTab('roots'));

    document.querySelector("#divide-btn").addEventListener("click", handleDivision);

    document.querySelector("#find-roots-btn").addEventListener("click", () => {
        const polyInput = document.querySelector("#polynomial").value;
        const roots = findRoots(polyInput);
        const resultDiv = document.querySelector("#result-roots");
        resultDiv.innerHTML = `<p><strong>Roots:</strong> ${roots.join(', ')}</p>`;
    });

    openTab('division');
});
