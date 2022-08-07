//MODEL
let records = [];

window.onload = init;

//initialization function
function init() {
    const storage = JSON.parse(localStorage.getItem("expensesRecords"));

    if (storage) {
        records = storage;
    }

    renderList();
}

function saveRecords() {
    localStorage.setItem("expensesRecords", JSON.stringify(records));
}

//add record to database
function addRecord(name, cost) {
    const recordId = new Date().getTime() + ''

    const record = {
        name: name,
        cost: cost,
        id: recordId
    }

    records.push(record)
    saveRecords();
}

//remove record from database
function removeRecord(recordIdToRemove) {
    records = records.filter(record => {
        if (record.id === recordIdToRemove) {
            return false;
        } else {
            return true;
        }
    });
    saveRecords();
}
//VIEW
//render list with current records[] information
function renderList() {
    const list = document.getElementById("list");
    list.innerHTML = '';
    let total = 0;

    records.forEach(record => {
        total += parseFloat(record.cost);
        console.log("this runed");
        //create new div html element
        const newItem = document.createElement("article");
        const nameLabel = document.createElement("label");
        const costLabel = document.createElement("label");

        newItem.appendChild(nameLabel);
        newItem.classList.add("item");


        //set record info in new html element
        nameLabel.innerText = record.name;
        nameLabel.style = "text-align: left; width:60%; display: inline-block;";
        costLabel.innerText = "$" + record.cost;
        costLabel.style = "text-align: right; width:25%; margin-right: 5%; display: inline-block;";

        //add delete button to new html element
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "X";
        deleteButton.classList.add("delete-button");
        deleteButton.id = record.id;
        deleteButton.onclick = removeExpenseButton;

        newItem.appendChild(costLabel);
        newItem.appendChild(deleteButton);

        //add new html element to document
        list.appendChild(newItem);
    });

    //total amount field
    if (records.length > 0) {
        const nameLabel = document.createElement("label");
        nameLabel.style = "text-align: left; width:60%; display: inline-block;";
        const costLabel = document.createElement("label");
        costLabel.style = "text-align: right; width:25%; margin-right: 5%; display: inline-block;";
        const newItem = document.createElement("article");
        newItem.classList.add("item");
        newItem.style = "border-top: 0px"

        nameLabel.innerText = "Total amount:";
        costLabel.innerText = total;

        newItem.appendChild(nameLabel);
        newItem.appendChild(costLabel);

        const result = document.getElementById("total");
        result.innerHTML = "";
        result.appendChild(newItem);
    }
}

//CONTROLLER
function addExpenseButton() {
    const nameInput = document.getElementById("name-input");
    const costInput = document.getElementById("cost-input");

    const name = nameInput.value;
    const cost = costInput.value

    nameInput.value = "";
    costInput.value = "";

    addRecord(name, cost);
    renderList();
}

function removeExpenseButton(event) {
    const deleteButton = event.target;
    const recordIdToRemove = deleteButton.id;

    removeRecord(recordIdToRemove);
    renderList();
}