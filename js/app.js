
window.onload = function() {
    document.getElementById("Add").onclick = adding;
}
let maxValue = 0;
let mainArray[];
const adding = function() {

let input = document.getElementById("input").value;
let listObjects = {
    type : "normal",
    value : input,
    position : maxValue
}
maxValue++;
array(listObjects)
}
const array = function(item) {
    let mainArray[item.position] = item;
    for (let things of mainArray){
        document.getElementByClass("list");
        list.append(things.value);

    }
}
const positioning = function(item) {

    } else if(item.type == "important"){
        let itemPos = item.position;
        for value
        item.position = 1;

    } else if(item.type == "removing"){

    }

    }
}
