window.onload = function (){
    let maxValue = -1;
    let mainArray = [];
    var input = document.getElementById("input");
    let list = document.getElementById("unorderedList");
    let listObjects = {};
    document.getElementById("Add").onclick = adding;
    list.addEventListener("click", boxChecked);

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
    function boxChecked(event) {
        const element = event.target;

        console.log(element.type);
        if(element.type === "checkbox"){
            if(element.checked == false){
                element.parentElement.style.textDecoration = "";

            } else{
                element.parentElement.style.textDecoration = "line-through";

            }

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
            let listValue=  `<li id="li-">${object.value}<input id="box-${object.position}"
            	class="checkboxes" type="checkbox"></li>`;
            //`<li id = "li"> ` + object.value + ` <input id = "box-${object.position}" class="checkboxes" type="checkbox"></li>`;


            list.insertAdjacentHTML('beforeend', listValue);
        }

    }

}
