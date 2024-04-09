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

        STC.textContent = "Haaland";
        FR.textContent = "Mbappe";
        AMC.textContent = "Messi";
        FL.textContent = "Vini Jr";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "J Cancelo";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "Robertson";
        GK.textContent = "Courtois";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "1") {

        STC.textContent = "Benzema";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "Mbappe";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Casemiro";
        DR.textContent = "Kimmich";
        DCR.textContent = "R Dias";
        DCL.textContent = "Marquinhos";
        DL.textContent = "J Cancelo";
        GK.textContent = "Courtois";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "2") {

        STC.textContent = "Lewandowski";
        FR.textContent = "Salah";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "R Dias";
        DL.textContent = "J Cancelo";
        GK.textContent = "Neuer";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "3") {

        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "van Dijk";
        DCL.textContent = "S Ramos";
        DL.textContent = "Robertson";
        GK.textContent = "Oblak";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "4") {

        STC.textContent = "C Ronaldo";
        FR.textContent = "Messi";
        AMC.textContent = "E Hazard";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kante";
        DR.textContent = "Kimmich";
        DCR.textContent = "S Ramos";
        DCL.textContent = "van Dijk";
        DL.textContent = "Alba";
        GK.textContent = "Oblak";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "5") {

        STC.textContent = "L Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Godin";
        DL.textContent = "Marcelo";
        GK.textContent = "De Gea";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "6") {

        STC.textContent = "L Suarez";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "Modric";
        CML.textContent = "Kroos";
        DR.textContent = "Carvajal";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Chiellini";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "7") {

        STC.textContent = "Lewandowski";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Neymar";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "S Ramos";
        DCL.textContent = "Boateng";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "8") {

        STC.textContent = "L Suarez";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Pogba";
        DR.textContent = "Lahm";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Marcelo";
        GK.textContent = "Neuer";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "9") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "Robben";
        AMC.textContent = "Messi";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Iniesta";
        CML.textContent = "Kroos";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "S Ramos";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "10") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Messi";
        FL.textContent = "Ribery";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "D Alves";
        DCR.textContent = "T Silva";
        DCL.textContent = "Kompany";
        DL.textContent = "Lahm";
        GK.textContent = "Neuer";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "11") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Busquets";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "S Ramos";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "12") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Ozil";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Y Toure";
        DR.textContent = "D Alves";
        DCR.textContent = "Vidic";
        DCL.textContent = "Pique";
        DL.textContent = "A Cole";
        GK.textContent = "Neuer";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "13") {

        STC.textContent = "Rooney";
        FR.textContent = "Messi";
        AMC.textContent = "Iniesta";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Schweinsteiger";
        DR.textContent = "Maicon";
        DCR.textContent = "Vidic";
        DCL.textContent = "Terry";
        DL.textContent = "Evra";
        GK.textContent = "Casillas";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "14") {

        STC.textContent = "F Torres";
        FR.textContent = "Messi";
        AMC.textContent = "Kaka";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Essien";
        DR.textContent = "D Alves";
        DCR.textContent = "Puyol";
        DCL.textContent = "Ferdinand";
        DL.textContent = "A Cole";
        GK.textContent = "Buffon";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "15") {

        STC.textContent = "Ibrahimovic";
        FR.textContent = "Messi";
        AMC.textContent = "Kaka";
        FL.textContent = "C Ronaldo";
        CMR.textContent = "Xavi";
        CML.textContent = "Gerrard";
        DR.textContent = "D Alves";
        DCR.textContent = "Puyol";
        DCL.textContent = "Nesta";
        DL.textContent = "Lahm";
        GK.textContent = "Casillas";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "16") {

        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Fabregas";
        CML.textContent = "Gerrard";
        DR.textContent = "S Ramos";
        DCR.textContent = "Nesta";
        DCL.textContent = "Terry";
        DL.textContent = "Zanetti";
        GK.textContent = "Buffon";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "17") {

        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Lampard";
        CML.textContent = "Gerrard";
        DR.textContent = "Zambrotta";
        DCR.textContent = "Terry";
        DCL.textContent = "F Cannavaro";
        DL.textContent = "Abidal";
        GK.textContent = "Buffon";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "18") {

        STC.textContent = "Ronaldo";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Rooney";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Zidane";
        CML.textContent = "Essien";
        DR.textContent = "Cafu";
        DCR.textContent = "Ferdinand";
        DCL.textContent = "Maldini";
        DL.textContent = "A Cole";
        GK.textContent = "Casillas";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "19") {

        STC.textContent = "Henry";
        FR.textContent = "Totti";
        AMC.textContent = "Zidane";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Gerrard";
        CML.textContent = "Vieira";
        DR.textContent = "Thuram";
        DCR.textContent = "Nesta";
        DCL.textContent = "Lucio";
        DL.textContent = "Maldini";
        GK.textContent = "Buffon";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "20") {

        STC.textContent = "Henry";
        FR.textContent = "C Ronaldo";
        AMC.textContent = "Kaka";
        FL.textContent = "Ronaldinho";
        CMR.textContent = "Zidane";
        CML.textContent = "Makelele";
        DR.textContent = "Cafu";
        DCR.textContent = "Terry";
        DCL.textContent = "Nesta";
        DL.textContent = "R Carlos";
        GK.textContent = "Buffon";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "21") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "22") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "23") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "24") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "25") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "26") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "27") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "28") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "29") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }

    if (selectedYear == "30") {

        STC.textContent = "";
        FR.textContent = "";
        AMC.textContent = "";
        FL.textContent = "";
        CMR.textContent = "";
        CML.textContent = "";
        DR.textContent = "";
        DCR.textContent = "";
        DCL.textContent = "";
        DL.textContent = "";
        GK.textContent = "";

        STC2.src = "/img/players/" + STC.textContent + ".webp";
        FR2.src = "/img/players/" + FR.textContent + ".webp";
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
        FL2.src = "/img/players/" + FL.textContent + ".webp";
        CMR2.src = "/img/players/" + CMR.textContent + ".webp";
        CML2.src = "/img/players/" + CML.textContent + ".webp";
        DR2.src = "/img/players/" + DR.textContent + ".webp";
        DCR2.src = "/img/players/" + DCR.textContent + ".webp";
        DCL2.src = "/img/players/" + DCL.textContent + ".webp";
        DL2.src = "/img/players/" + DL.textContent + ".webp";
        GK2.src = "/img/players/" + GK.textContent + ".webp";

        smallpic.src = "/img/logos/.webp";
    }
}