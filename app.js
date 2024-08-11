let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// btn.addEventListener("click", function() {
//     console.log(inp.value);
//     inp.value = "";
// });

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete"); 

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
});


ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});

// this will not work on new buttons added on page to solve this problem we use EVENT DELEGATIONS ,new child element ka same event listner hum parent element ke liye use krenge ; buubling ka phenomena use krke hum event delegation ko krwatre h ,


// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


// console.log(event.target.nodeName);
