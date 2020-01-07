window.onload = function (){
    let maxValue = -1;
    let mainArray = [];
    var input = document.getElementById("input");
    let list = document.getElementById("unorderedList");
    let listObjects = {};
    document.getElementById("Add").onclick = adding;
    list.li.input.onclick = removing();

    function adding(){
        if(input.value == ""){
            alert("Please put in a value :D");

        } else {
                maxValue++;
            var object = {
                value : input.value,
                position: maxValue


            };
            mainArray[object.position] = object;
            cleaner();
        }

    }
    function cleaner(){
        list.innerHTML = "";
        drawing();
    }
    function removing(){
        alert("ASD");
    }
    function drawing(){
        for(let object of mainArray){
            let listValue= `<li id = "li"> ` + object.value + ` <input id = "box-${object.position}" class="checkboxes" type="checkbox"></li>`;
            console.log(listValue);
            list.insertAdjacentHTML('beforeend', listValue);
        }

    }

}
