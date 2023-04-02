const t1 = document.getElementById("tarea");
const tc1 = document.getElementById("tc");
const rc1 = document.getElementById("rc");

t1.addEventListener("keyup", ()=>{
    UPcounter();
});

UPcounter();

function UPcounter(){
    tc1.innerText = t1.value.length;
    rc1.innerText = t1.getAttribute("maxLength") - t1.value.length;

}