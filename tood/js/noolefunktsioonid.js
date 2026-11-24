// 1. Klassikaline funktsioon
function nimiKlassikaline() {
    let vastus = document.getElementById("vastus1");
    vastus.innerHTML = "Mark-Leon Tjuska";
}

// Noolefunktsioon
const nimiNool = () => {
    let vastus = document.getElementById("vastus1");
    vastus.innerHTML = "Mark-Leon Tjuska";
};


// 2. Argumendiga funktsioon
function kuupaevEesti(kuupaev) {
    let osad = kuupaev.split(".");
    let kuud = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
        "juuli", "august", "september", "oktoober", "november", "detsember"];

    let paev = Number(osad[0]);
    let kuu = Number(osad[1]);
    let aasta = Number(osad[2]);

    if(aasta < 100) {
        aasta = 2000 + aasta;
    }

    if(osad.length !== 3 || !/^\d{2}\.\d{2}\.\d{2}$/.test(kuupaev) ||
        kuu < 1 || kuu > 12 || paev < 1 || paev > 31) {
        return "Vale kuupäev!";
    }

    let kontroll = new Date(aasta, kuu - 1, paev);

    if(kontroll.getDate() !== paev ||
        kontroll.getMonth() !== kuu - 1) {
        return "Vale kuupäev!";
    }

    return paev + ". " + kuud[kuu - 1] + " " + aasta;
}

function kuupaevNaitamine() {
    let kuupaev = document.getElementById("kuupaev").value;
    let vastus = document.getElementById("vastus2");

    let tulemus = kuupaevEesti(kuupaev);

    console.log(tulemus);
    vastus.innerHTML = tulemus;
}


// 3. Teadmata hulk
function arvutaArvud() {
    let summa = 0;
    let kogus = 0;
    let arv;

    // küsime kasutajalt arve
    while(true) {
        arv = prompt("Sisesta täisarv. Lõpetamiseks vajuta Cancel");

        if(arv === null) {
            break;
        }

        if(arv.trim() === "") {
            continue;
        }

        arv = Number(arv);

        if(Number.isInteger(arv)) {
            summa = summa + arv;
            kogus++;
        } else {
            alert("Palun sisesta täisarv!");
        }
    }

    let vastus = document.getElementById("vastus3");

    if(kogus > 0) {
        let keskmine = summa / kogus;

        vastus.innerHTML =
            "Arvude koguarv: " + kogus + "<br>" +
            "Keskmine: " + keskmine;

        return {koguarv: kogus, keskmine: keskmine};
    } else {
        vastus.innerHTML = "Arve ei sisestatud";
        return {koguarv: 0, keskmine: 0};
    }
}


// 4. Salajane sõnum
const salajaneSonum = sonum => sonum.replace(/[aeiouõäöü]/gi, "*");

function sonumiNaitamine() {
    let sonum = document.getElementById("sonum").value;
    let vastus = document.getElementById("vastus4");

    vastus.innerHTML = salajaneSonum(sonum);
}


// 5. Unikaalsed nimed
const leiaUnikaalsedNimed = nimed => {
    let uuedNimed = [];

    nimed.forEach(nimi => {
        if(uuedNimed.indexOf(nimi) === -1) {
            uuedNimed.push(nimi);
        }
    });

    return uuedNimed;
};

function nimedeNaitamine() {
    let nimed = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];

    let vastus = document.getElementById("vastus5");
    let uuedNimed = leiaUnikaalsedNimed(nimed);

    vastus.innerHTML = uuedNimed;
}
