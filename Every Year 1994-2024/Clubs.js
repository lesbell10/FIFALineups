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
}