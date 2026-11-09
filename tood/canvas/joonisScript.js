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
        t.arc(100,50,raadius.value,0, 2*Math.PI, true); //alguspunkt x, y, raadius, 2*180 kraadi
        t.fill();
    }
}
function silm1(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "rose";
        t.arc(100,175,20,0, 2*Math.PI, true);
        t.fill();
    }
}
function silm2(){
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "rose";
        t.arc(180,175,30,0, 2*Math.PI, true);
        t.fill();
    }
}
function nina() {
    const tahvel=document.getElementById("tahvel");

    if(tahvel.getContext){
        let t=tahvel.getContext("2d");
        t.fillStyle = "orange";
        t.fillRect(135,200,20,50); //alguspunkt x, y, laius, kõrgus
    }
}