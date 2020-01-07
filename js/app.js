window.onload = function (){
    let maxValue = -1;
    let mainArray = [];
    var input = document.getElementById("input");
    let list = document.getElementById("unorderedList");
    let listObjects = {};
    const NORMAL = "fa-exclamation";
    const PRIORITY = "fa-exclamation-circle";
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

        const job = element.attributes.job.value;
        console.log(job);
        if(element.type === "checkbox"){
            if(element.checked == false){
                element.parentElement.style.textDecoration = "";

            } else{
                element.parentElement.style.textDecoration = "line-through";

            }

        } else if(job == "delete"){
            alert("HEY YO")
        } else if(job == "priority")
        alert("ASDF")
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
             const PRIOR =  NORMAL;
            let listValue=  `<li job="nothing" id="li-">${object.value}<input id="box-${object.position}"
            	class="checkboxes" job ="nothing" type="checkbox">
                <i class="fa fa-trash-o de" job = "delete" id="${object.position}"></i>
                <i class="fa ${PRIOR} po" job = "priority" id="${object.position}"></i>

                </li>`;
            //`<li id = "li"> ` + object.value + ` <input id = "box-${object.position}" class="checkboxes" type="checkbox"></li>`;


            list.insertAdjacentHTML('beforeend', listValue);
        }

    }

}
