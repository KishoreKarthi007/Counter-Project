
let num = 0;

function update() {
    document.getElementById("h2").innerHTML = num;
}

function inc(){
    num++;
    update()
}

function dec() {
    num--;
    update()
}
function reset(){
    num = 0;
    update()
}