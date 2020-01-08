window.onload = function (){
    alert("Please note: the trash can icon as well as the exclamation mark(mark and circle) icons were not made by me(fonts folder and css/font-awesome.css ). Title: Font Awesome; Author:davegandy; Date : N.D.; CodeVerson  4.7.0;")
    let maxValue = -1;
    let mainArray = [];
    var input = document.getElementById("input");
    let list = document.getElementById("unorderedList");
    let listObjects = {};
    const NORMAL = "fa-exclamation";
    const PRIORITY = "fa-exclamation-circle";
    document.getElementById("Add").onclick = adding;
    list.addEventListener("click", boxChecked);

//something wrong
    function adding(){
        if(input.value == ""){
            alert("Please put in a value :D");

        } else {
                maxValue++;
            var object = {
                value : input.value,
                position: maxValue,
                priority : NORMAL,
                cross: "No"


            };
            mainArray[object.position] = object;
            cleaner();
        }

    }
    function boxChecked(event) {
        const element = event.target;

        const job = element.attributes.job.value;
        if(element.type === "checkbox"){
            let id
            if(maxValue < 10){
              let ida = element.parentElement.id;
              id = ida.slice(3,4);
            } else if(maxValue < 100){
              let ida = element.parentElement.id;
              id = ida.slice(3,5);
            } else if(maxValue < 1000){
              let ida = element.parentElement.id;
              id = ida.slice(3,6);
            }
            if(element.checked == false){
                mainArray[id].cross = "No";
                element.parentElement.style.textDecoration = "";

            } else{
                mainArray[id].cross = "Yes";
                element.parentElement.style.textDecoration = "line-through";

            }
            cleaner();
        } else if(job == "delete"){
          let id;
          if(maxValue < 10){
            let ida = element.parentElement.id;
            id = ida.slice(3,4);
          } else if(maxValue < 100){
            let ida = element.parentElement.id;
            id = ida.slice(3,5);
          } else if(maxValue < 1000){
            let ida = element.parentElement.id;
            id = ida.slice(3,6);
          }
          maxValue--;
          let value = maxValue + 1;
          while(value >= 0 ){
            if(value == id){
                  mainArray.splice(id, 1);
            } else if (value > id){
                  mainArray[value].position = value - 1;
            } else {

            }
                value--;
          }
          cleaner();
        } else if(job == "priority"){
            let id;
            if(maxValue < 10){
              let ida = element.parentElement.id;
              id = ida.slice(3,4);
            } else if(maxValue < 100){
              let ida = element.parentElement.id;
              id = ida.slice(3,5);
            } else if(maxValue < 1000){
              let ida = element.parentElement.id;
              id = ida.slice(3,6);
            }
            let item = mainArray[id];
            let arrayHolder = [];

            if (element.classList.contains(PRIORITY)){
                element.classList.toggle(NORMAL);
                item.position = maxValue;
                let value = maxValue;
                while(value >= 0){
                    if(value > id){
                        arrayHolder[value - 1] = mainArray[value];
                        arrayHolder[value - 1].position = value - 1;
                    } else if(value == id){
                        arrayHolder[maxValue] = item;
                        arrayHolder[maxValue].priority = NORMAL;
                    } else {
                        arrayHolder[value] = mainArray[value];
                    }
                    value--;

                }
                    mainArray = arrayHolder;
                    cleaner();


            } else {
                element.classList.toggle(PRIORITY);
                  item.position = 0;
                  let value = maxValue;
                  while(value >= 0 ){
                      if(value < id){
                         arrayHolder[value + 1] = mainArray[value];

                         arrayHolder[value + 1].position = value + 1;

                      } else if(value == id){
                         arrayHolder[0] = item;
                         arrayHolder[0].priority = PRIORITY;
                      } else {
                         arrayHolder[value] = mainArray[value];
                      }
                      value--;
                  }
                  mainArray = arrayHolder;


                  cleaner();
                }
        }
    }
    function cleaner(){
        list.innerHTML = "";
        drawing();
    }

    function drawing(){
        for(let object of mainArray){
            let listValue;
            if(object.cross == "Yes"){
                listValue =  `<li job="nothing" id="li-${object.position}"><strike>${object.value}</strike>
                    <input id="box-${object.position}"class="checkboxes" job ="nothing" type="checkbox" checked= "checked">
                    <i class="fa fa-trash-o de" job = "delete" id="${object.position}"></i>
                    <i class="fa ${object.priority} po" job = "priority" id="${object.position}"></i>

                    </li>`;
            } else {
                listValue =  `<li job="nothing" id="li-${object.position}">${object.value}
                    <input id="box-${object.position}"class="checkboxes" job ="nothing" type="checkbox">
                    <i class="fa fa-trash-o de" job = "delete" id="${object.position}"></i>
                    <i class="fa ${object.priority} po" job = "priority" id="${object.position}"></i>

                    </li>`;
            }

            list.insertAdjacentHTML('beforeend', listValue);
        }

    }

}
