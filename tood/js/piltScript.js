//random pilt mis tuleb massivist
function randomPilt(){
    const pildid=[
        '../pildid/1.png',
        '../pildid/2.png',
        '../pildid/3.png',
        '../pildid/tuhi.png',
    ];
    //random pilt
    //math.floor ümardab täisarvuni
    const pilt=Math.floor(Math.random() * pildid.length);
    const rpilt=pildid[pilt];
    const randomPilt=document.getElementById("randomPilt");

    randomPilt.src=rpilt;
    vastus.innerHTML="Siia tuleb vastus...";
    vastus.style.color="black";
}
function radioValik(){
    let vastus=document.getElementById("vastus");
    let valik=document.getElementsByName("valik"); //mitu elemdi ühe nimega
    let randomPilt=document.getElementById("randomPilt");

    //tsükkel for
    for(let i=0; i<valik.length; i++){
        if(valik[i].checked){
            if(randomPilt.getAttribute("src") == valik[i].value){
                vastus.innerHTML="õige";
                vastus.style.color="green";
            } else {
                vastus.innerHTML="vale vastus";
                vastus.style.color="red";
            }
        }
    }
}