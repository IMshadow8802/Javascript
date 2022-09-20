//console.log("Hello, from JS!");
// const h1Elements = document.getElementsByTagName("h1");
// console.log(h1Elements);
// const heading1 = h1Elements[0];
// console.log(heading1);
// console.log(heading1.innerText);
// const pElement = document.createElement("p");
// pElement.innerText = "innerText property refers to the text inside an element";
// const divElement = document.getElementById("facts-list");
// divElement.appendChild(pElement);

// function addNewFact(factText){
//     const paraElement = document.createElement("p");
//     paraElement.innerText = factText;

//     const divElement = document.getElementById("facts-list");
//     divElement.appendChild(paraElement);
// }

// addNewFact("innerText property refers to the text inside an element");
// addNewFact("append() or appendChild() methods can add a new child element");
// const factsListDiv = document.getElementById("facts=list");
// factsListDiv.innerHTML = "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>";

// let factsListDiv = document.getElementById("facts-list");

// factsListDiv.innerHTML = "<p>Browser creates DOM from HTML content</p><p>Developers can access the DOM using the DOM APIs</p><p>innerHTML property refers to the HTML inside an element</p>"

// function loadTable(){
//     let table = document.createElement("table");
//     table.setAttribute("border","solid");
//     table.setAttribute("width","400px");

//     let thead = document.createElement("thead");
//     thead.innerHTML = `
//     <tr>
//         <th>Id</th>
//         <th>Name</th>
//     </tr>  `;

//     table.append(thead);

//     let tbody = document.createElement("tbody");
//     let trow = document.createElement("tr");
//     trow.innerHTML = `
//     <td>1</td>
//     <td>Rajesh</td>`;

//     tbody.appendChild(trow);
//     table.append(tbody);

//     document.getElementById("table-div").append(table);

// }
// loadTable();

function getStyledTable() {
  let table = document.createElement("table");
  table.setAttribute("border", "1");
  table.setAttribute("width", "400px");
  return table;
}
function getTableHeader() {
  let thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
             <th>Id</th>
             <th>Name</th>
    </tr>
    `;
  return thead;
}
function getTableRow(id, name) {
  let trow = document.createElement("tr");
  trow.innerHTML = `

    <td>${id}</td>

    <td>${name}</td>

  `;
  return trow;
}
function loadTableRefactored() {
  let table = getStyledTable();
  document.getElementById("table-div").append(table);
  let tableHead = getTableHeader();
  table.append(tableHead);
  let tableRow = getTableRow("1", "Rajesh");
  let tbody = document.createElement("tbody");
  tbody.appendChild(tableRow);
  table.appendChild(tbody);
}
//loadTableRefactored();

//console.log(students[0].name)

function loadTableFromJSON() {
  let table = getStyledTable();
  document.getElementById("table-div").append(table);
  let tableHead = getTableHeader();
  table.append(tableHead);
  let tbody = document.createElement("tbody");
  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let trow = getTableRow(currentStudent.id, currentStudent.name);
    tbody.appendChild(trow);
  }
  tableHead.appendChild(tbody);
}
//loadTableFromJSON();

let showTableButton = document.querySelector("button");
showTableButton.addEventListener("click", function () {
  loadTableFromJSON();
});

let nameInput = document.querySelector("input");

nameInput.addEventListener("input", function (event) {
  let inputText = event.target.value;

  let nameDisplayDiv = document.querySelector("#name-display");

  nameDisplayDiv.innerText = inputText;
});
