var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Phone"] = document.getElementById("Phone").value;
    formData["Gender"] = document.getElementById("Gender").value;
    formData["Skills"] = document.getElementById("Skills").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.Email;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.Phone;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.Gender;
        cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.Skills;
    cell6= newRow.insertCell(5);
        cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Phone").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Gender").value = selectedRow.cells[3].innerHTML;
    document.getElementById("Skills").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.Email;
    selectedRow.cells[2].innerHTML = formData.Phone;
    selectedRow.cells[3].innerHTML = formData.Gender;
    selectedRow.cells[4].innerHTML = formData.Skills;
}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Name").value = '';
    document.getElementById("Email").value = '';
    document.getElementById("Phone").value = '';
    document.getElementById("Gender").value = '';
    document.getElementById("Skills").value = '';
    selectedRow = null;
}
