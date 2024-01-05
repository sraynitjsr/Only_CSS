let data = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
    { id: 3, name: "Item 3" }
];

function displayData() {
    let output = document.getElementById('output');
    output.innerHTML = "<h2>Data:</h2>";
    data.forEach(item => {
        output.innerHTML += `<p>${item.id}: ${item.name}</p>`;
    });
}

function read() {
    let itemId = prompt("Enter the ID to read:");
    if (itemId) {
        let item = data.find(item => item.id === parseInt(itemId));
        if (item) {
            let output = document.getElementById('output');
            output.innerHTML = `<h2>Data for ID ${item.id}:</h2><p>${item.id}: ${item.name}</p>`;
        } else {
            alert("Item not found!");
        }
    }
}

function create() {
    let newName = prompt("Enter a name for the new item:");
    if (newName) {
        let newItem = {
            id: data.length + 1,
            name: newName
        };
        data.push(newItem);
        displayData();
    }
}

function update() {
    let itemId = prompt("Enter the ID of the item to update:");
    let newName = prompt("Enter the new name:");
    if (itemId && newName) {
        let index = data.findIndex(item => item.id === parseInt(itemId));
        if (index !== -1) {
            data[index].name = newName;
            displayData();
        } else {
            alert("Item not found!");
        }
    }
}

function remove() {
    let itemId = prompt("Enter the ID of the item to delete:");
    if (itemId) {
        data = data.filter(item => item.id !== parseInt(itemId));
        displayData();
    }
}
