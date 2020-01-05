
window.onload = function() {
    document.getElementById("Add").onclick = adding;
    //document.getElementById("President").onclick = president;
    //document.getElementById("Removing").onclick = removing;
}
let maxValue = -1;
let mainArray = [];
const adding = function() {

let input = document.getElementById("input").value;
document.getElementById("Add").placeholder = "Ex. Finish hw by 8pm";
let listObjects = {
    type : "normal",
    words : input,
    position : undefined
}

positioning(listObjects);
}
const president = function() {

}
const removing = function(){

}
const positioning = function(item) {

    if(item.type == "normal"){
        maxValue++;
        item.position = maxValue;
        mainArray[maxValue] = item;
    } else if(item.type == "important"){
        let itemValue = item.position;
        item.position = 0;
        value = maxValue;
        while(value > 0 ){
            if(value > itemValue){
            } else if(value == itemValue){
                mainArray[value - 1].position = value;
            } else {
                mainArray[value].position = value;
            }
            value--;
        }
    } else if(item.type == "removing"){
        let itemValue = item.position;
        let value = maxValue;
        while(value >= 0){
            if(value > itemValue){
                mainArray[value].position = value - 1;
            }
            value--;
        }

    }

    arrayMaker();
}
const arrayMaker = function(){

    let value = maxValue;
    let value2 = maxValue;
    let arrayHolder = [];
    let counter = 0;
while(value >= 0){
    if(mainArray[value].type == "removing"){
        maxValue--;
        mainArray.splice(value, 1);
    }
    value--;
}
while(value2 >= 0){
    counter = mainArray[value2].position;
    arrayHolder[counter] = mainArray[value2];
    value2--;
}
mainArray = arrayHolder;

clearer();
drawer();
}
const clearer = function(){

}
const drawer = function() {

    for (let objects of mainArray){
        let paragraph = document.createElement("p");
        paragraph.innerHTML = objects.words;
        document.appendChild(paragraph);
    }

}
