const yearSelector = document.getElementById("yearSelector");
const STC = document.getElementById("STC");
const STC2 = document.getElementById("STC2");
const FR = document.getElementById("FR");
const FR2 = document.getElementById("FR2");
const AMC = document.getElementById("AMC");
const AMC2 = document.getElementById("AMC2");
const FL = document.getElementById("FL");
const FL2 = document.getElementById("FL2");
const CMR = document.getElementById("CMR");
const CMR2 = document.getElementById("CMR2");
const CML = document.getElementById("CML");
const CML2 = document.getElementById("CML2");
const DR = document.getElementById("DR");
const DR2 = document.getElementById("DR2");
const DCR = document.getElementById("DCR");
const DCR2 = document.getElementById("DCR2");
const DCL = document.getElementById("DCL");
const DCL2 = document.getElementById("DCL2");
const DL = document.getElementById("DL");
const DL2 = document.getElementById("DL2");
const GK = document.getElementById("GK");
const GK2 = document.getElementById("GK2");
const smallpic = document.getElementById("smallpic");

yearSelector.addEventListener("change", () => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear == "0") {

        STC.textContent = "Shevchenko";
        FR.textContent = "Rui Costa";
        AMC.textContent = "Kaka";
        FL.textContent = "Seedorf";
        CMR.textContent = "Pirlo";
        CML.textContent = "Gattuso";
        DR.textContent = "Cafu";
        DCR.textContent = "Nesta";
        DCL.textContent = "T Silva";
        DL.textContent = "Maldini";
        GK.textContent = "Dida";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/ac milan.webp";
    }

    if (selectedYear == "1") {

        STC.textContent = "Kluivert";
        FR.textContent = "L Suarez";
        AMC.textContent = "Ibrahimovic";
        FL.textContent = "Sneijder";
        CMR.textContent = "F de Jong";
        CML.textContent = "Davids";
        DR.textContent = "Reiziger";
        DCR.textContent = "de Ligt";
        DCL.textContent = "F de Boer";
        DL.textContent = "D Blind";
        GK.textContent = "van der Sar";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/ajax.webp";
    }

    if (selectedYear == "2") {

        STC.textContent = "Henry";
        FR.textContent = "A Sanchez";
        AMC.textContent = "Ozil";
        FL.textContent = "Pires";
        CMR.textContent = "Fabregas";
        CML.textContent = "Vieira";
        DR.textContent = "Lauren";
        DCR.textContent = "Campbell";
        DCL.textContent = "Adams";
        DL.textContent = "A Cole";
        GK.textContent = "Seaman";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/arsenal.webp";
    }

    if (selectedYear == "3") {

        STC.textContent = "Batistuta";
        FR.textContent = "Salah";
        AMC.textContent = "Totti";
        FL.textContent = "Cassano";
        CMR.textContent = "Pjanic";
        CML.textContent = "De Rossi";
        DR.textContent = "Cafu";
        DCR.textContent = "Manolas";
        DCL.textContent = "Aldair";
        DL.textContent = "Candela";
        GK.textContent = "Alisson";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/as roma.webp";
    }

    if (selectedYear == "4") {

        STC.textContent = "Eto'o";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Puyol";
        DCL.textContent = "Pique";
        DL.textContent = "Alba";
        GK.textContent = "Valdes";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/barcelona.webp";
    }

    if (selectedYear == "5") {

        STC.textContent = "Lewandowski";
        FR.textContent = "Robben";
        AMC.textContent = "Muller";
        FL.textContent = "Ribery";
        CMR.textContent = "Ballack";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Kimmich";
        DCR.textContent = "Lucio";
        DCL.textContent = "Alaba";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/bayern munich.webp";
    }

    if (selectedYear == "6") {

        STC.textContent = "Drogba";
        FR.textContent = "Robben";
        AMC.textContent = "Lampard";
        FL.textContent = "E Hazard";
        CMR.textContent = "Kante";
        CML.textContent = "Makelele";
        DR.textContent = "Azpilicueta";
        DCR.textContent = "Terry";
        DCL.textContent = "Carvalho";
        DL.textContent = "A Cole";
        GK.textContent = "Cech";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/chelsea.webp";
    }

    if (selectedYear == "7") {

        STC.textContent = "Ronaldo";
        FR.textContent = "Zamorano";
        AMC.textContent = "Ibrahimovic";
        FL.textContent = "Sneijder";
        CMR.textContent = "Vieira";
        CML.textContent = "Cambiasso";
        DR.textContent = "Zanetti";
        DCR.textContent = "Lucio";
        DCL.textContent = "Samuel";
        DL.textContent = "Chivu";
        GK.textContent = "J Cesar";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/inter milan.webp";
    }

    if (selectedYear == "8") {

        STC.textContent = "Trezeguet";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Del Piero";
        FL.textContent = "Nedved";
        CMR.textContent = "Pogba";
        CML.textContent = "Pirlo";
        DR.textContent = "Thuram";
        DCR.textContent = "Cannavaro";
        DCL.textContent = "Chiellini";
        DL.textContent = "Zambrotta";
        GK.textContent = "Buffon";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/juventus.webp";
    }

    if (selectedYear == "9") {

        STC.textContent = "Torres";
        FR.textContent = "Salah";
        AMC.textContent = "Coutinho";
        FL.textContent = "L Suarez";
        CMR.textContent = "Gerrard";
        CML.textContent = "X Alonso";
        DR.textContent = "Alexander-Arnold";
        DCR.textContent = "Carragher";
        DCL.textContent = "van Dijk";
        DL.textContent = "Robertson";
        GK.textContent = "Alisson";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/liverpool.webp";
    }

    if (selectedYear == "10") {

        STC.textContent = "van Nistelrooy";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Giggs";
        CMR.textContent = "Scholes";
        CML.textContent = "R Keane";
        DR.textContent = "G Neville";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Vidic";
        DL.textContent = "Evra";
        GK.textContent = "Schmeichel";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/man utd.webp";
    }

    if (selectedYear == "11") {

        STC.textContent = "Benzema";
        FR.textContent = "Depay";
        AMC.textContent = "Fekir";
        FL.textContent = "Malouda";
        CMR.textContent = "Essien";
        CML.textContent = "Juninho";
        DR.textContent = "Reveillere";
        DCR.textContent = "Cris";
        DCL.textContent = "Marcelo A";
        DL.textContent = "Abidal";
        GK.textContent = "Lloris";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/lyon.webp";
    }

    if (selectedYear == "12") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "Mbappe";
        AMC.textContent = "Neymar";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Beckham";
        CML.textContent = "Verratti";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Marquinhos";
        DL.textContent = "Maxwell";
        GK.textContent = "K Navas";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/psg.webp";
    }

    if (selectedYear == "13") {

        STC.textContent = "Ronaldo";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Zidane";
        FL.textContent = "Figo";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "Hierro";
        DCL.textContent = "S Ramos";
        DL.textContent = "R Carlos";
        GK.textContent = "Casillas";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/real madrid.webp";
    }

    if (selectedYear == "14") {

        STC.textContent = "Kane";
        FR.textContent = "Bale";
        AMC.textContent = "Eriksen";
        FL.textContent = "H Son";
        CMR.textContent = "Modric";
        CML.textContent = "Carrick";
        DR.textContent = "Walker";
        DCR.textContent = "L King";
        DCL.textContent = "Vertonghen";
        DL.textContent = "D Rose";
        GK.textContent = "Lloris";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/tottenham.webp";
    }

    if (selectedYear == "15") {

        STC.textContent = "D Villa";
        FR.textContent = "Joaquin";
        AMC.textContent = "Aimar";
        FL.textContent = "D Silva";
        CMR.textContent = "Albelda";
        CML.textContent = "Baraja";
        DR.textContent = "Miguel";
        DCR.textContent = "Ayala";
        DCL.textContent = "Marchena";
        DL.textContent = "Alba";
        GK.textContent = "Canizares";

        STC2.src = "/Football/img/players/" + STC.textContent + ".webp";
        FR2.src = "/Football/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/Football/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/Football/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/Football/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/Football/img/players/" + CML.textContent + ".webp";
        DR2.src = "/Football/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/Football/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/Football/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/Football/img/players/" + DL.textContent + ".webp";
        GK2.src = "/Football/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/Football/img/logos/valencia.webp";
    }
}