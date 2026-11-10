//Sirge joon
function sirgeJoon() {
    //määrame tahvli
    const t=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="red";
        t.lineWidth=2;
        t.moveTo(50,50);//alguspunkt
        t.lineTo(150,200);//lõpppunkt
        t.stroke();
    }

}
function puhasta() {
    const t=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.clearRect(0,0,300,400);
    }
}
//kolmnurk
function kolmnurk() {
        const t=document.getElementById("tahvel");

        if(tahvel.getContext){
            let t=tahvel.getContext("2d");
            //kolmnurk
            t.beginPath();
            t.strokeStyle="red";
            t.fillStyle="green";//taust
            t.lineWidth=2;
            t.moveTo(50,50);//alguspunkt
            t.lineTo(50,200);
            t.lineTo(150,200);//lõpppunkt
            t.lineTo(50,50);
            t.stroke();
            t.fill();
        }
}
function ristkylik(){
    const tahvel=document.getElementById("tahvel");
    const laius=document.getElementById("laius");
    const korgus=document.getElementById("korgus");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle="lightgreen";
        t.fillRect(100,50,laius.value,korgus.value);//alguspunkt - x,y laius, kõrgus
    }
}
function ring(){
    const tahvel=document.getElementById("tahvel");
    const raadius=document.getElementById("raadius");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = varv.value;
        t.beginPath();
        t.arc(150,150,raadius.value,0, 2*Math.PI, true); //alguspunkt x, y, raadius, 2*180 kraadi
        t.fill();
    }
}
function silm1(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "black";
        t.beginPath();
        t.arc(110,130,12,0, 2*Math.PI, true);
        t.fill();
    }
}
function silm2(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "black";
        t.beginPath();
        t.arc(190,130,12,0, 2*Math.PI, true);
        t.fill();
    }
}
function nina() {
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "orange";
        t.fillRect(140,145,20,40); //alguspunkt x, y, laius, kõrgus
    }
}
function pea(){

    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "lightyellow";
        t.beginPath();
        t.arc(150,150,115,0, 2*Math.PI, true); //alguspunkt x, y, raadius, 2*180 kraadi
        t.fill();
    }
}
function korv1(){

    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "lightyellow";
        t.fillRect(25,130,30,60); //alguspunkt x, y, laius, kõrgus
    }
}
function korv2(){

    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "lightyellow";
        t.fillRect(245,130,30,60); //alguspunkt x, y, laius, kõrgus
    }
}
function suu() {
    //määrame tahvli
    const t=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        //joon
        t.beginPath();
        t.strokeStyle="black";
        t.lineWidth=2;
        t.moveTo(110,200);//alguspunkt
        t.lineTo(190,200);//lõpppunkt
        t.stroke();
    }

}
//pilt failist //drawImage()
function pilt() {
    const tahvel = document.getElementById("tahvel");
    if (tahvel.getContext) {
        let t = tahvel.getContext("2d");
        const fail = new Image();
        fail.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZ3uVyidntSrxeIsH8G2i4QpLTUpPxRiUYrXWyWe2rw&s=10";
        fail.onload = () => {
            t.drawImage(fail, 50, 50, 250, 250);
        }
    }
}
function smile(){
    puhasta();
    pea ();
    silm1();
    silm2();
    nina();
    suu();
    korv1();
    korv2();
}