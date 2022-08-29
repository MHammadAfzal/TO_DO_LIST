let add = document.getElementById("add");
let tit, desc;
itemJsonArray = [];
function getAndUpdate() {
  console.log("Updatiing List .....");
  tit = document.getElementById("hell").value;
  desc = document.getElementById("description").value;
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}

function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArrayStr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  // Populate the table
  let tableBody = document.getElementById("table_Body");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += ` <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td><button class="btn btn-sm btn-primary" onclick="del(${index})">Delete</button></td>
            </tr>
            `;
  });
  tableBody.innerHTML = str;
}
add.addEventListener("click", getAndUpdate);
update();

function del(itemIndex) {
  console.log("delete", itemIndex);
  itemJsonArrayStr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  //   Delete item-index of array
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
function clearStorage() {
  if (confirm("Do you really want to clear?")) {
    localStorage.clear();
    console.log("Clearing Stotrage");
    update();
  }
}
