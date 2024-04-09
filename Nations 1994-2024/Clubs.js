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

yearSelector.addEventListener("change", (e) => {
    updatePlayerInfo();
});

let selectedYear = 0;

function updatePlayerInfo() {

    selectedYear = yearSelector.value;

    if (selectedYear == "0") {

        STC.textContent = "Aguero";
        FR.textContent = "Messi";
        AMC.textContent = "Aimar";
        FL.textContent = "Di Maria";
        CMR.textContent = "Banega";
        CML.textContent = "Mascherano";
        DR.textContent = "Zanetti";
        DCR.textContent = "Ayala";
        DCL.textContent = "Samuel";
        DL.textContent = "Rojo";
        GK.textContent = "S Romero";

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

        smallpic.src = "/Football/img/logos/argentina.webp";
    }

    if (selectedYear == "1") {

        STC.textContent = "Lukaku";
        FR.textContent = "Mertens";
        AMC.textContent = "De Bruyne";
        FL.textContent = "E Hazard";
        CMR.textContent = "Tielemans";
        CML.textContent = "Witsel";
        DR.textContent = "Meunier";
        DCR.textContent = "Kompany";
        DCL.textContent = "Alderweireld";
        DL.textContent = "Vertonghen";
        GK.textContent = "Courtois";

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

        smallpic.src = "/Football/img/logos/belgium.webp";
    }

    if (selectedYear == "2") {

        STC.textContent = "Ronaldo";
        FR.textContent = "Neymar";
        AMC.textContent = "Kaka";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Fernandinho";
        CML.textContent = "Casemiro";
        DR.textContent = "Cafu";
        DCR.textContent = "T Silva";
        DCL.textContent = "Lucio";
        DL.textContent = "R Carlos";
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

        smallpic.src = "/Football/img/logos/brazil.webp";
    }

    if (selectedYear == "3") {

        STC.textContent = "Larin";
        FR.textContent = "Hoilett";
        AMC.textContent = "J David";
        FL.textContent = "De Rosario";
        CMR.textContent = "Hutchinson";
        CML.textContent = "J de Guzman";
        DR.textContent = "Stalteri";
        DCR.textContent = "McKenna";
        DCL.textContent = "D Henry";
        DL.textContent = "A Davies";
        GK.textContent = "Borjan";

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

        smallpic.src = "/Football/img/logos/canada.webp";
    }

    if (selectedYear == "4") {

        STC.textContent = "Mandzukic";
        FR.textContent = "Suker";
        AMC.textContent = "Modric";
        FL.textContent = "Perisic";
        CMR.textContent = "Rakitic";
        CML.textContent = "Prosinecki";
        DR.textContent = "Vrsaljko";
        DCR.textContent = "Lovren";
        DCL.textContent = "Stimac";
        DL.textContent = "Jarni";
        GK.textContent = "Pletikosa";


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

        smallpic.src = "/Football/img/logos/croatia.webp";
    }

    if (selectedYear == "5") {

        STC.textContent = "Rooney";
        FR.textContent = "Beckham";
        AMC.textContent = "Lampard";
        FL.textContent = "Sterling";
        CMR.textContent = "Scholes";
        CML.textContent = "Gerrard";
        DR.textContent = "Alexander-Arnold";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Terry";
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

        smallpic.src = "/Football/img/logos/england.webp";
    }

    if (selectedYear == "6") {

        STC.textContent = "Henry";
        FR.textContent = "Griezmann";
        AMC.textContent = "Zidane";
        FL.textContent = "Mbappe";
        CMR.textContent = "Pogba";
        CML.textContent = "Vieira";
        DR.textContent = "Thuram";
        DCR.textContent = "Desailly";
        DCL.textContent = "Varane";
        DL.textContent = "Evra";
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

        smallpic.src = "/Football/img/logos/france.webp";
    }

    if (selectedYear == "7") {

        STC.textContent = "Klose";
        FR.textContent = "Sane";
        AMC.textContent = "Ballack";
        FL.textContent = "Ozil";
        CMR.textContent = "Kroos";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Kimmich";
        DCR.textContent = "Boateng";
        DCL.textContent = "Hummels";
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

        smallpic.src = "/Football/img/logos/germany.webp";
    }

    if (selectedYear == "8") {

        STC.textContent = "Vieri";
        FR.textContent = "Cassano";
        AMC.textContent = "Totti";
        FL.textContent = "Del Piero";
        CMR.textContent = "Pirlo";
        CML.textContent = "De Rossi";
        DR.textContent = "Zambrotta";
        DCR.textContent = "Cannavaro";
        DCL.textContent = "Nesta";
        DL.textContent = "Maldini";
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

        smallpic.src = "/Football/img/logos/italy.webp";
    }

    if (selectedYear == "9") {

        STC.textContent = "Chicharito";
        FR.textContent = "Lozano";
        AMC.textContent = "Blanco";
        FL.textContent = "Guardado";
        CMR.textContent = "H Herrera";
        CML.textContent = "Pardo";
        DR.textContent = "Aguilar";
        DCR.textContent = "R Marquez";
        DCL.textContent = "Moreno";
        DL.textContent = "Salcido";
        GK.textContent = "Ochoa";

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

        smallpic.src = "/Football/img/logos/mexico.webp";
    }

    if (selectedYear == "10") {

        STC.textContent = "van Nistelrooy";
        FR.textContent = "Robben";
        AMC.textContent = "Bergkamp";
        FL.textContent = "Seedorf";
        CMR.textContent = "F de Jong";
        CML.textContent = "Davids";
        DR.textContent = "Reiziger";
        DCR.textContent = "Stam";
        DCL.textContent = "van Dijk";
        DL.textContent = "van Bronckhorst";
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

        smallpic.src = "/Football/img/logos/netherlands.webp";
    }

    if (selectedYear == "11") {

        STC.textContent = "C Ronaldo";
        FR.textContent = "Figo";
        AMC.textContent = "Rui Costa";
        FL.textContent = "Quaresma";
        CMR.textContent = "Deco";
        CML.textContent = "J Moutinho";
        DR.textContent = "Cancelo";
        DCR.textContent = "R Dias";
        DCL.textContent = "K Pepe";
        DL.textContent = "R Guerreiro";
        GK.textContent = "Rui Patricio";

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

        smallpic.src = "/Football/img/logos/portugal.webp";
    }

    if (selectedYear == "12") {

        STC.textContent = "D Villa";
        FR.textContent = "D Silva";
        AMC.textContent = "Raul";
        FL.textContent = "Iniesta";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "S Ramos";
        DCR.textContent = "Puyol";
        DCL.textContent = "Pique";
        DL.textContent = "Alba";
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

        smallpic.src = "/Football/img/logos/spain.webp";
    }

    if (selectedYear == "13") {

        STC.textContent = "L Suarez";
        FR.textContent = "Valverde";
        AMC.textContent = "Forlan";
        FL.textContent = "Cavani";
        CMR.textContent = "Vecino";
        CML.textContent = "Bentancur";
        DR.textContent = "M Pereira";
        DCR.textContent = "D Godin";
        DCL.textContent = "J Gimenez";
        DL.textContent = "A Pereira";
        GK.textContent = "Muslera";

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

        smallpic.src = "/Football/img/logos/uruguay.webp";
    }

    if (selectedYear == "14") {

        STC.textContent = "Dempsey";
        FR.textContent = "Pulisic";
        AMC.textContent = "Donovan";
        FL.textContent = "F Johnson";
        CMR.textContent = "Bradley";
        CML.textContent = "Reyna";
        DR.textContent = "Yedlin";
        DCR.textContent = "G Cameron";
        DCL.textContent = "Bocanegra";
        DL.textContent = "Beasley";
        GK.textContent = "T Howard";

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

        smallpic.src = "/Football/img/logos/usa.webp";
    }
}