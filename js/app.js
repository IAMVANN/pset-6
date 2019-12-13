
window.onload = function() {
    document.getElementById("Add").onclick = addOn;
}
const listy = function(){
    if(listPos == undefined){
        listPos = 0;
    } else {
        listPos++;
    }
}

const addOn = function() {
    let listPos;
    listy;
    alert(listPos);
let addwords = prompt("What would you like to add?");
if(addwords == null ){

} else {
    let list = document.getElementById("List");
    let newadd = document.createElement("li");
    newadd.innerHTML = addwords;
    newadd.font = "48px sans-serif";
    list.append(newadd);

}
}
