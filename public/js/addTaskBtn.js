var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("add-task-button");
var closeBtn = document.getElementsByClassName("closeBtn")[0];
var oneBO = document.getElementById("")

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);


function openModal(){
    modal.style.display = "block"
}

function closeModal(){
    modal.style.display = "none"
}