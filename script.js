document
.getElementById("saveBtn")
.addEventListener("click", function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    let amount =
    document.getElementById("amount").value;

    let date =
    document.getElementById("date").value;

    let list =
    document.getElementById("customerList");

    let item =
    document.createElement("li");

    item.innerHTML =
    name +
    " | Rs " +
    amount +
    " | " +
    date +
    " | Pending";

    list.appendChild(item);
    document.getElementById("totalCustomers").innerHTML =
list.children.length;
let current =
Number(
document.getElementById("totalAmount").innerHTML
);

document.getElementById("totalAmount").innerHTML =
current + Number(amount);

});