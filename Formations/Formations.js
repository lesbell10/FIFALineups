const STL = document.querySelector('.STL');
const STL2 = document.querySelector('.STL2');
const STC = document.querySelector('.STC');
const STC2 = document.querySelector('.STC2');
const STR = document.querySelector('.STR');
const STR2 = document.querySelector('.STR2');
const LW = document.querySelector('.LW');
const LW2 = document.querySelector('.LW2');
const AMLC = document.querySelector('.AMLC');
const AMLC2 = document.querySelector('.AMLC2');
const AMC = document.querySelector('.AMC');
const AMC2 = document.querySelector('.AMC2');
const AMRC = document.querySelector('.AMRC');
const AMRC2 = document.querySelector('.AMRC2');
const RW = document.querySelector('.RW');
const RW2 = document.querySelector('.RW2');
const WL = document.querySelector('.WL');
const WL2 = document.querySelector('.WL2');
const LCM = document.querySelector('.LCM');
const LCM2 = document.querySelector('.LCM2');
const CM = document.querySelector('.CM');
const CM2 = document.querySelector('.CM2');
const RCM = document.querySelector('.RCM');
const RCM2 = document.querySelector('.RCM2');
const WR = document.querySelector('.WR');
const WR2 = document.querySelector('.WR2');
const LWB = document.querySelector('.LWB');
const LWB2 = document.querySelector('.LWB2');
const LDM = document.querySelector('.LDM');
const LDM2 = document.querySelector('.LDM2');
const DM = document.querySelector('.DM');
const DM2 = document.querySelector('.DM2');
const RDM = document.querySelector('.RDM');
const RDM2 = document.querySelector('.RDM2');
const RWB = document.querySelector('.RWB');
const RWB2 = document.querySelector('.RWB2');
const LB = document.querySelector('.LB');
const LB2 = document.querySelector('.LB2');
const LCB = document.querySelector('.LCB');
const LCB2 = document.querySelector('.LCB2');
const CB = document.querySelector('.CB');
const CB2 = document.querySelector('.CB2');
const RCB = document.querySelector('.RCB');
const RCB2 = document.querySelector('.RCB2');
const RB = document.querySelector('.RB');
const RB2 = document.querySelector('.RB2');
const GK = document.querySelector('.GK');
const GK2 = document.querySelector('.GK2');

const isFalseNine = false;

function clearFields() {
    STL.textContent = "";
    STL2.src = null;
    STC.textContent = "";
    STC2.src = null;
    STR.textContent = "";
    STR2.src = null;
    LW.textContent = "";
    LW2.src = null;
    AMLC.textContent = "";
    AMLC2.src = null;
    AMC.textContent = "";
    AMC2.src = null;
    AMRC.textContent = "";
    AMRC2.src = null;
    RW.textContent = "";
    RW2.src = null;
    WL.textContent = "";
    WL2.src = null;
    LCM.textContent = "";
    LCM2.src = null;
    CM.textContent = "";
    CM2.src = null;
    RCM.textContent = "";
    RCM2.src = null;
    WR.textContent = "";
    WR2.src = null;
    LWB.textContent = "";
    LWB2.src = null;
    LDM.textContent = "";
    LDM2.src = null;
    DM.textContent = "";
    DM2.src = null;
    RDM.textContent = "";
    RDM2.src = null;
    RWB.textContent = "";
    RWB2.src = null;
    LB.textContent = "";
    LB2.src = null;
    LCB.textContent = "";
    LCB2.src = null;
    CB.textContent = "";
    CB2.src = null;
    RCB.textContent = "";
    RCB2.src = null;
    RB.textContent = "";
    RB2.src = null;
    GK.textContent = "";
    GK2.src = null;
}

export function base(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent =
        STL2.src = "/img/players/" + STL.textContent + ".webp";
    STC.textContent =
        STC2.src = "/img/players/" + STC.textContent + ".webp";
    STR.textContent =
        STR2.src = "/img/players/" + STR.textContent + ".webp";
    LW.textContent =
        LW2.src = "/img/players/" + LW.textContent + ".webp";
    AMLC.textContent =
        AMLC2.src = "/img/players/" + AMLC.textContent + ".webp";
    AMC.textContent =
        AMC2.src = "/img/players/" + AMC.textContent + ".webp";
    AMRC.textContent =
        AMRC2.src = "/img/players/" + AMRC.textContent + ".webp";
    RW.textContent =
        RW2.src = "/img/players/" + RW.textContent + ".webp";
    WL.textContent =
        WL2.src = "/img/players/" + WL.textContent + ".webp";
    LCM.textContent =
        LCM2.src = "/img/players/" + LCM.textContent + ".webp";
    CM.textContent =
        CM2.src = "/img/players/" + CM.textContent + ".webp";
    RCM.textContent =
        RCM2.src = "/img/players/" + RCM.textContent + ".webp";
    WR.textContent =
        WR2.src = "/img/players/" + WR.textContent + ".webp";
    LWB.textContent =
        LWB2.src = "/img/players/" + LWB.textContent + ".webp";
    LDM.textContent =
        LDM2.src = "/img/players/" + LDM.textContent + ".webp";
    DM.textContent =
        DM2.src = "/img/players/" + DM.textContent + ".webp";
    RDM.textContent =
        RDM2.src = "/img/players/" + RDM.textContent + ".webp";
    RWB.textContent =
        RWB2.src = "/img/players/" + RWB.textContent + ".webp";
    LB.textContent =
        LB2.src = "/img/players/" + LB.textContent + ".webp";
    LCB.textContent =
        LCB2.src = "/img/players/" + LCB.textContent + ".webp";
    CB.textContent =
        CB2.src = "/img/players/" + CB.textContent + ".webp";
    RCB.textContent =
        RCB2.src = "/img/players/" + RCB.textContent + ".webp";
    RB.textContent =
        RB2.src = "/img/players/" + RB.textContent + ".webp";
    GK.textContent =
        GK2.src = "/img/players/" + GK.textContent + ".webp";
}

export function four_two_three_one(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STC.textContent = n9
    STC2.src = "/img/players/" + STC.textContent + ".webp";
    LW.textContent = n11
    LW2.src = "/img/players/" + LW.textContent + ".webp";
    AMC.textContent = n10
    AMC2.src = "/img/players/" + AMC.textContent + ".webp";
    RW.textContent = n7
    RW2.src = "/img/players/" + RW.textContent + ".webp";
    LCM.textContent = n6
    LCM2.src = "/img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/img/players/" + GK.textContent + ".webp";
}

export function four_three_three(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {

    isFalseNine = false

    clearFields();
    STC.textContent = n9
    STC2.src = "/img/players/" + STC.textContent + ".webp";
    LW.textContent = n11
    LW2.src = "/img/players/" + LW.textContent + ".webp";
    RW.textContent = n7
    RW2.src = "/img/players/" + RW.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/img/players/" + RCM.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/img/players/" + DM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/img/players/" + GK.textContent + ".webp";
}

export function four_three_three_false_nine(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    isFalseNine = true

    if (isFalseNine) {
        LW.style.top = - "24%"
        LW2.style.top = '3%';
    } else {
        LW.style.top = - "31%"
        LW2.style.top = '10%';
    }

    LW.textContent = n11
    LW2.src = "/img/players/" + LW.textContent + ".webp";
    AMC.textContent = n9
    AMC2.src = "/img/players/" + AMC.textContent + ".webp";
    RW.textContent = n7
    RW2.src = "/img/players/" + RW.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/img/players/" + RCM.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/img/players/" + DM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/img/players/" + GK.textContent + ".webp";
}

export function four_four_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n10;
    STL2.src = "/img/players/" + STL.textContent + ".webp";
    STR.textContent = n10;
    STR2.src = "/img/players/" + STR.textContent + ".webp";
    LW.textContent = n11;
    LW2.src = "/img/players/" + LW.textContent + ".webp";
    RW.textContent = n7;
    RW2.src = "/img/players/" + RW.textContent + ".webp";
    LCM.textContent = n6;
    LCM2.src = "/img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8;
    RCM2.src = "/img/players/" + RCM.textContent + ".webp";
    LB.textContent = n3;
    LB2.src = "/img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4;
    LCB2.src = "/img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5;
    RCB2.src = "/img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2;
    RB2.src = "/img/players/" + RB.textContent + ".webp";
    GK.textContent = n1;
    GK2.src = "/img/players/" + GK.textContent + ".webp";
}

export function four_three_one_two(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) {
    clearFields();
    STL.textContent = n9;
    STL2.src = "/img/players/" + STL.textContent + ".webp";
    STR.textContent = n11;
    STR2.src = "/img/players/" + STR.textContent + ".webp";
    AMC.textContent = n7
    AMC2.src = "/img/players/" + AMC.textContent + ".webp";
    LCM.textContent = n10
    LCM2.src = "/img/players/" + LCM.textContent + ".webp";
    RCM.textContent = n8
    RCM2.src = "/img/players/" + RCM.textContent + ".webp";
    DM.textContent = n6
    DM2.src = "/img/players/" + DM.textContent + ".webp";
    LB.textContent = n3
    LB2.src = "/img/players/" + LB.textContent + ".webp";
    LCB.textContent = n4
    LCB2.src = "/img/players/" + LCB.textContent + ".webp";
    RCB.textContent = n5
    RCB2.src = "/img/players/" + RCB.textContent + ".webp";
    RB.textContent = n2
    RB2.src = "/img/players/" + RB.textContent + ".webp";
    GK.textContent = n1
    GK2.src = "/img/players/" + GK.textContent + ".webp";
}