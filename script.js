// -------- data ---------



// ------- elements -------

const statusLine = document.getElementById("status");
const openButton = document.getElementById("open-button");

const newItem = document.getElementById("new-item");
const addButton = document.getElementById("add-button");
const prepList = document.getElementById("prep-list");

const mapLink = document.getElementById("map-link");


// ------ functions --------

// function openTruck(){
//     statusLine.textContent = "Open";
//     statusLine.classList.add("open");
// }


// ------- listeners --------

openButton.addEventListener("click", function(){
    statusLine.textContent = "Open";
    statusLine.classList.add("open");

    mapLink.href = "https://www.google.com/maps/";
});

addButton.addEventListener("click", function(){

    // if(newItem.value === ""){
    //     return;
    // }

    const item = document.createElement("li");
    item.textContent = newItem.value;

    item.addEventListener("click", function(event){
        console.log(event.target.tagName);
        item.classList.toggle("done");
        // console.log("item clicked");
    });

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function(){
        item.remove();
    });

    item.appendChild(removeButton);
    prepList.appendChild(item);

    // console.log("Prep list: " + prepList.children.length + " items");
    console.log(`Prep list: ${prepList.children.length} items`);
    newItem.value = "";
    addButton.disabled = true;

    // console.log(item.textContent);
});

newItem.addEventListener("input", function(){
    console.log(`input: ${newItem.value}`);
    addButton.disabled = newItem.value === "";

});

newItem.addEventListener("change", function(){
    console.log(`change: ${newItem.value}`);
});

newItem.addEventListener("keydown", function(event){
    console.log(`keydown: ${event.key}, box says: ${newItem.value}`);
});


// ------- run on load ---------

addButton.disabled = true;