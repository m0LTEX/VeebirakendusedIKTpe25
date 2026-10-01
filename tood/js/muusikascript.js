function Muusikud(){
    let vastus1=document.getElementById("vastus1");
    let Yeat=document.getElementById("yeat");
    let TravisScott=document.getElementById("travisScott");

    let muusika=""
    if(Yeat.checked){
        muusika +=Yeat.value + ", ";
    }
    if (TravisScott.checked){
        muusika +=TravisScott.value + ", ";
    }
    vastus1.innerHTML=muusika;
    return muusika;
}
function kool(){
    let nimi=document.getElementById("nimi");
    let vastus2=document.getElementById("vastus2");

    vastus2.innerHTML= "Sinu arvamus: " + nimi.value;
    return nimi.value;
}
function Muusikatunnid(){
    let tund=document.getElementById("tund");
    let vastus3=document.getElementById("vastus3");
}
function raadiokuulamine(){
    let Ja=document.getElementById("Ja");
    let Ei=document.getElementById("Ei");
    let vastus4=document.getElementById("vastus4");

    let valik="";
    if(Ja.checked){
        valik=Ja.value;
    }
    else if(Ei.checked){
        valik=Ei.value;
    }
    else{
        valik="palun tee valik";
    }
    vastus4.innerHTML="Kas sa kuulad raadiot: " + valik;

    return valik.value;
}