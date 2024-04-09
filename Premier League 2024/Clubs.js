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

        STC.textContent = "G Jesus";
        FR.textContent = "Saka";
        AMC.textContent = "Odegaard";
        FL.textContent = "Martinelli";
        CMR.textContent = "Partey";
        CML.textContent = "D Rice";
        DR.textContent = "B White";
        DCR.textContent = "Saliba";
        DCL.textContent = "Gabriel M";
        DL.textContent = "Zinchenko";
        GK.textContent = "Raya";

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

        smallpic.src = "/Football/img/logos/Arsenal.webp";
    }

    if (selectedYear == "1") {

        STC.textContent = "Watkins";
        FR.textContent = "M Diaby";
        AMC.textContent = "J Ramsey";
        FL.textContent = "Bailey";
        CMR.textContent = "D Luiz";
        CML.textContent = "B Kamara";
        DR.textContent = "Konsa";
        DCR.textContent = "D Carlos";
        DCL.textContent = "P Torres";
        DL.textContent = "A Moreno";
        GK.textContent = "E Martínez";

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

        smallpic.src = "/Football/img/logos/Aston Villa.webp";
    }

    if (selectedYear == "2") {

        STC.textContent = "Unal";
        FR.textContent = "J Kluivert";
        AMC.textContent = "Solanke";
        FL.textContent = "Sinisterra";
        CMR.textContent = "Billing";
        CML.textContent = "T Adams";
        DR.textContent = "A Smith";
        DCR.textContent = "Senesi";
        DCL.textContent = "Zabarnyi";
        DL.textContent = "Kerkez";
        GK.textContent = "Neto";

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

        smallpic.src = "/Football/img/logos/Bournemouth.png";
    }

    if (selectedYear == "3") {

        STC.textContent = "Toney";
        FR.textContent = "Mbeumo";
        AMC.textContent = "Damsgaard";
        FL.textContent = "Wissa";
        CMR.textContent = "Jensen";
        CML.textContent = "Janelt";
        DR.textContent = "Ajer";
        DCR.textContent = "Mee";
        DCL.textContent = "Pinnock";
        DL.textContent = "Reguilon";
        GK.textContent = "Flekken";

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

        smallpic.src = "/Football/img/logos/Brentford.webp";
    }

    if (selectedYear == "4") {

        STC.textContent = "E Ferguson";
        FR.textContent = "March";
        AMC.textContent = "A Fati";
        FL.textContent = "Mitoma";
        CMR.textContent = "Milner";
        CML.textContent = "Groß";
        DR.textContent = "Veltman";
        DCR.textContent = "Webster";
        DCL.textContent = "L Dunk";
        DL.textContent = "Estupinan";
        GK.textContent = "Verbruggen";

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

        smallpic.src = "/Football/img/logos/Brighton.png";
    }

    if (selectedYear == "5") {

        STC.textContent = "Amdouni";
        FR.textContent = "B Manuel";
        AMC.textContent = "Tresor";
        FL.textContent = "Redmond";
        CMR.textContent = "Brownhill";
        CML.textContent = "Cullen";
        DR.textContent = "Assignon";
        DCR.textContent = "Beyer";
        DCL.textContent = "Esteve";
        DL.textContent = "C Taylor";
        GK.textContent = "Muric";

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

        smallpic.src = "/Football/img/logos/Burnley.png";
    }

    if (selectedYear == "6") {

        STC.textContent = "Nkunku";
        FR.textContent = "Palmer";
        AMC.textContent = "Gallagher";
        FL.textContent = "R Sterling";
        CMR.textContent = "E Fernandez";
        CML.textContent = "M Caicedo";
        DR.textContent = "R James";
        DCR.textContent = "T Silva";
        DCL.textContent = "Disasi";
        DL.textContent = "Chilwell";
        GK.textContent = "R Sanchez";

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

        smallpic.src = "/Football/img/logos/Chelsea.webp";
    }

    if (selectedYear == "7") {

        STC.textContent = "O Edouard";
        FR.textContent = "Olise";
        AMC.textContent = "E Eze";
        FL.textContent = "J Ayew";
        CMR.textContent = "C Doucoure";
        CML.textContent = "Lerma";
        DR.textContent = "Munoz";
        DCR.textContent = "J Andersen";
        DCL.textContent = "Guehi";
        DL.textContent = "Mitchell";
        GK.textContent = "D Henderson";

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

        smallpic.src = "/Football/img/logos/Crystal Palace.png";
    }

    if (selectedYear == "8") {

        STC.textContent = "Beto";
        FR.textContent = "McNeil";
        AMC.textContent = "A Doucoure";
        FL.textContent = "Danjuma";
        CMR.textContent = "A Onana";
        CML.textContent = "Gueye";
        DR.textContent = "Branthwaite";
        DCR.textContent = "Tarkowski";
        DCL.textContent = "M Keane";
        DL.textContent = "Mykolenko";
        GK.textContent = "Pickford";

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

        smallpic.src = "/Football/img/logos/Everton.webp";
    }

    if (selectedYear == "9") {

        STC.textContent = "R Jimenez";
        FR.textContent = "Iwobi";
        AMC.textContent = "A Pereira";
        FL.textContent = "Willian";
        CMR.textContent = "Lukic";
        CML.textContent = "Palhinha";
        DR.textContent = "Tete";
        DCR.textContent = "I Diop";
        DCL.textContent = "Adarabioyo";
        DL.textContent = "A Robinson";
        GK.textContent = "Leno";

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

        smallpic.src = "/Football/img/logos/Fulham.png";
    }

    if (selectedYear == "10") {

        STC.textContent = "D Nunez";
        FR.textContent = "Salah";
        AMC.textContent = "D Jota";
        FL.textContent = "L Diaz";
        CMR.textContent = "Szoboszlai";
        CML.textContent = "Mac Allister";
        DR.textContent = "Alexander-Arnold";
        DCR.textContent = "van Dijk";
        DCL.textContent = "Konate";
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

        smallpic.src = "/Football/img/logos/Liverpool.webp";
    }

    if (selectedYear == "11") {

        STC.textContent = "Adebayo";
        FR.textContent = "Ogbene";
        AMC.textContent = "Barkley";
        FL.textContent = "Townsend";
        CMR.textContent = "Nakamba";
        CML.textContent = "A Lokonga";
        DR.textContent = "Kabore";
        DCR.textContent = "Lockyer";
        DCL.textContent = "Mengi";
        DL.textContent = "Doughty";
        GK.textContent = "Kaminski";

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

        smallpic.src = "/Football/img/logos/Luton Town.webp";
    }

    if (selectedYear == "12") {

        STC.textContent = "Haaland";
        FR.textContent = "B Silva";
        AMC.textContent = "Foden";
        FL.textContent = "Grealish";
        CMR.textContent = "De Bruyne";
        CML.textContent = "Rodri";
        DR.textContent = "Walker";
        DCR.textContent = "R Dias";
        DCL.textContent = "Stones";
        DL.textContent = "Gvardiol";
        GK.textContent = "Ederson";

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

        smallpic.src = "/Football/img/logos/Man City.webp";
    }

    if (selectedYear == "13") {

        STC.textContent = "Hojlund";
        FR.textContent = "Garnacho";
        AMC.textContent = "B Fernandes";
        FL.textContent = "Rashford";
        CMR.textContent = "Mainoo";
        CML.textContent = "Casemiro";
        DR.textContent = "Dalot";
        DCR.textContent = "Varane";
        DCL.textContent = "Li Martinez";
        DL.textContent = "Shaw";
        GK.textContent = "Onana";

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

        smallpic.src = "/Football/img/logos/Man Utd.webp";
    }

    if (selectedYear == "14") {

        STC.textContent = "Wilson";
        FR.textContent = "Almiron";
        AMC.textContent = "A Isak";
        FL.textContent = "Gordon";
        CMR.textContent = "Joelinton";
        CML.textContent = "B Guimaraes";
        DR.textContent = "Trippier";
        DCR.textContent = "Schar";
        DCL.textContent = "Botman";
        DL.textContent = "Livramento";
        GK.textContent = "Pope";

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

        smallpic.src = "/Football/img/logos/Newcastle United.webp";
    }

    if (selectedYear == "15") {

        STC.textContent = "Awoniyi";
        FR.textContent = "Gibbs-W";
        AMC.textContent = "G Reyna";
        FL.textContent = "Origi";
        CMR.textContent = "Sangare";
        CML.textContent = "N Domínguez";
        DR.textContent = "Montiel";
        DCR.textContent = "Felipe A";
        DCL.textContent = "Niakhate";
        DL.textContent = "N Tavares";
        GK.textContent = "Vlachodimos";

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

        smallpic.src = "/Football/img/logos/Notingham Forest.webp";
    }

    if (selectedYear == "16") {

        STC.textContent = "Archer";
        FR.textContent = "McBurnie";
        AMC.textContent = "McAtee";
        FL.textContent = "Brereton D";
        CMR.textContent = "Hamer";
        CML.textContent = "V Souza";
        DR.textContent = "Bogle";
        DCR.textContent = "Holgate";
        DCL.textContent = "Ahmedhodzic";
        DL.textContent = "Trusty";
        GK.textContent = "Grbic";

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

        smallpic.src = "/Football/img/logos/Sheffield United.png";
    }

    if (selectedYear == "17") {

        STC.textContent = "H Son";
        FR.textContent = "Kulusevski";
        AMC.textContent = "Maddison";
        FL.textContent = "B Johnson";
        CMR.textContent = "Bentancur";
        CML.textContent = "Hojbjerg";
        DR.textContent = "P Porro";
        DCR.textContent = "C Romero";
        DCL.textContent = "van de Ven";
        DL.textContent = "Udogie";
        GK.textContent = "Vicario";

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

        smallpic.src = "/Football/img/logos/Tottenham.webp";
    }

    if (selectedYear == "18") {

        STC.textContent = "M Antonio";
        FR.textContent = "Kudus";
        AMC.textContent = "Paqueta";
        FL.textContent = "Bowen";
        CMR.textContent = "Ward-Prowse";
        CML.textContent = "E Alvarez";
        DR.textContent = "Mavropanos";
        DCR.textContent = "Zouma";
        DCL.textContent = "Aguerd";
        DL.textContent = "Emerson P";
        GK.textContent = "Areola";

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

        smallpic.src = "/Football/img/logos/West Ham United.png";
    }

    if (selectedYear == "19") {

        STC.textContent = "H Chan";
        FR.textContent = "Sarabia";
        AMC.textContent = "M Cunha";
        FL.textContent = "P Neto";
        CMR.textContent = "J Gomes";
        CML.textContent = "Lemina";
        DR.textContent = "N Semedo";
        DCR.textContent = "Bueno";
        DCL.textContent = "Kilman";
        DL.textContent = "Ait-Nouri";
        GK.textContent = "J Sa";

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

        smallpic.src = "/Football/img/logos/Wolves.png";
    }
}