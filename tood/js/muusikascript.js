function Muusikud(){
    let vastus1=document.getElementById("vastus1");
    let Yeat=document.getElementById("Yeat");
    let TravisScott=document.getElementById("TravisScott");
    let Shakira=document.getElementById("Shakira");
    let ViktorTsoi=document.getElementById("ViktorTsoi");
    let Haddaway=document.getElementById("Haddaway");

    if(Yeat.checked){
        muusika +=Yeat.value + ", ";
    }
    if(TravisScott.checked){
        muusika +=TravisScott.value + ", ";
    }
    if(Shakira.checked){
        muusika +=Shakira.value + ", ";
    }
    if(ViktorTsoi.checked){
        muusika +=ViktorTsoi.value + ", ";
    }
    if(Haddaway.checked){
        muusika +=Haddaway.value + ", ";
    }

    vastus1.innerHTML="Sinu valitud muusikud: " + muusika;
    return muusika;
}

function kool(){
    let nimi=document.getElementById("nimi");
    let vastus2=document.getElementById("vastus2");
    vastus2.innerHTML="Sinu arvamus: " + nimi.value;
    return nimi.value;
}

function Muusikatunnid(){
    let tund=document.getElementById("tund");
    let vastus3=document.getElementById("vastus3");
    vastus3.innerHTML="Sa kuulad muusikat " + tund.value + " tundi päevas";
    return tund.value;
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
    vastus4.innerHTML="Raadio kuulamine: " + valik;
    return valik;
}

function raadioJaam(){
    let vastus5=document.getElementById("vastus5");
    let radiojaam=document.getElementById("radiojaam");
    vastus5.innerHTML="Sinu nimetatud jaamad: " + radiojaam.value;
    return radiojaam.value;
}

function muusikastiilid(){

    let vastus6=document.getElementById("vastus6");
    let pop=document.getElementById("pop");
    let rock=document.getElementById("rock");
    let räpp=document.getElementById("räpp");
    let klassikaline=document.getElementById("klassikaline");
    let jazz=document.getElementById("jazz");
    let elektrooniline=document.getElementById("elektrooniline");
    let stiil="";

    if(räpp.checked){
        stiil+=räpp.value + ", ";
    }
    if(pop.checked){
        stiil+=pop.value + ", ";
    }
    if(rock.checked){
        stiil+=rock.value + ", ";
    }
    if(jazz.checked){
        stiil+=jazz.value + ", ";
    }
    if(elektrooniline.checked){
        stiil+=elektrooniline.value + ", ";
    }
    if(klassikaline.checked){
        stiil+=klassikaline.value + ", ";
    }
    if(stiil ==""){
        stiil="vali mingi stiil";
    }
    vastus6.innerHTML="Sinu vastus: " + stiil;
    return stiil;
}

function tervitus(){
    let vastus7=document.getElementById("vastus7");
    let muusika=Muusikud();
    let nimi=kool();
    let tund=Muusikatunnid();
    let valik=raadiokuulamine();
    let raadiojaam=raadioJaam();
    let stiil=muusikastiilid();

    vastus7.innerHTML="Valitud muusikud on " + muusika + "<br>"
        +"Arvamus muusika kuulamisest koolis: " + nimi + "<br>"
        +"Kuulad päevas nii palju tunde muusikat: " + tund + "<br>"
        +"Kas sa kuulad raadiot: " + valik + "<br>"
        +"Nimetatud raadiojaamad: " + raadiojaam + "<br>"
        +"Meeldivad muusika stiilid: " + stiil;

    vastus7.style.backgroundColor="white";
}

function Puhasta(){

    let vastus1=document.getElementById("vastus1");
    let vastus2=document.getElementById("vastus2");
    let vastus3=document.getElementById("vastus3");
    let vastus4=document.getElementById("vastus4");
    let vastus5=document.getElementById("vastus5");
    let vastus6=document.getElementById("vastus6");
    let vastus7=document.getElementById("vastus7");

    vastus1.innerHTML="";
    vastus2.innerHTML="";
    vastus3.innerHTML="";
    vastus4.innerHTML="";
    vastus5.innerHTML="";
    vastus6.innerHTML="";
    vastus7.innerHTML="";

    document.getElementById("nimi").value="";
    document.getElementById("tund").value="0";
    document.getElementById("radiojaam").value="";

    document.getElementById("Yeat").checked=false;
    document.getElementById("TravisScott").checked=false;
    document.getElementById("Shakira").checked=false;
    document.getElementById("ViktorTsoi").checked=false;
    document.getElementById("Haddaway").checked=false;

    document.getElementById("Ja").checked=false;
    document.getElementById("Ei").checked=false;

    document.getElementById("räpp").checked=false;
    document.getElementById("pop").checked=false;
    document.getElementById("rock").checked=false;
    document.getElementById("elektrooniline").checked=false;
    document.getElementById("jazz").checked=false;
    document.getElementById("klassikaline").checked=false;
}
