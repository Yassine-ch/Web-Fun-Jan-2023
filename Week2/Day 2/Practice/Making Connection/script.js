var requests= document.querySelector("#requests");
var con = document.querySelector("#connections");
var names = document.querySelector("#name");

function yes(id) {
    var element = document.querySelector(id);
    element.remove();
    requests.innerText--;
    conn.innerText++;
}

function no(id) {
    var element = document.querySelector(id);
    element.remove();
    requests.innerText--;
}

function edit() {
    names.innerText = "Michelle Lu";
}