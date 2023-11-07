let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let newelement = document.createElement("ul");
        newelement.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newelement);
        inputs.value="";
        newelement.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newelement.remove()
        }
    }
}