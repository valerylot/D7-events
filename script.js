// -------- data ---------



// ------- elements -------

const statusLine = document.getElementById("status");
const openButton = document.getElementById("open-button");

const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const prepList = document.getElementById("prep-list");


// ------ functions --------

function openTruck(){
    statusLine.textContent = "Open";
    statusLine.classList.add("open");
}


// ------- listeners --------

openButton.addEventListener("click", openTruck);

addButton.addEventListener("click", function(){

    if(newItem.value === ""){
        return;
    }
    const item = document.createElement("li");
    item.textContent = newItem.value;

    item.addEventListener("click", function(){
        item.classList.toggle("done");
    });

    prepList.appendChild(item);

    // console.log("Prep list: " + prepList.children.length + " items");
    console.log(`Prep list: ${prepList.children.length} items`);
    newItem.value = "";
});