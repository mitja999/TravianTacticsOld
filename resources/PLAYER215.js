var newtravianversion = false
var MapZoom = 3;
var linkislik = {
    "t7": "http://shrani.si/f/v/sz/hjcjN8t/t7.gif",
    "t10": "http://shrani.si/f/R/d4/3Mwrxj7Z/t10.gif",
    "t9": "http://shrani.si/f/d/lU/1ai3Vxr/t9.gif",
    "t11": "http://shrani.si/f/A/O8/4s5xjslP/t11.gif",
    "t8": "http://shrani.si/f/3i/XU/1BgzqmQC/t8.gif",
    "t1": "http://shrani.si/f/6/vg/2dmrKi5s/t1.gif",
    "r10": "http://shrani.si/f/3o/Do/4Z2qLc8o/r10.gif",
    "t3": "http://shrani.si/f/3J/aM/26l5tY31/t3.gif",
    "t2": "http://shrani.si/f/3F/Xd/Sg9c6YF/t2.gif",
    "t5": "http://shrani.si/f/2Z/Un/18IvUrYR/t5.gif",
    "t6": "http://shrani.si/f/2o/U9/1LLjCqyh/t6.gif",
    "t4": "http://shrani.si/f/1W/SX/1ikbtYWs/t4.gif",
    "r11": "http://shrani.si/f/1v/XS/1VbRfHzB/r11.gif",
    "r9": "http://shrani.si/f/V/yc/UJ4nOxi/r9.gif",
    "r7": "http://shrani.si/f/M/zt/3nhqkS0V/r7.gif",
    "r8": "http://shrani.si/f/2Z/j/129vHeku/r8.gif",
    "r5": "http://shrani.si/f/2f/DX/1dO3VERW/r5.gif",
    "r6": "http://shrani.si/f/2c/7R/3YYSLhzh/r6.gif",
    "r2": "http://shrani.si/f/2a/bi/1mAnm7rw/r2.gif",
    "r4": "http://shrani.si/f/1S/MG/2bLWYbX/r4.gif",
    "r3": "http://shrani.si/f/1i/yE/1NermpRT/r3.gif",
    "g10": "http://shrani.si/f/3t/1P/1Erw17HK/g10.gif",
    "r1": "http://shrani.si/f/2i/104/vIsECGJ/r1.gif",
    "g11": "http://shrani.si/f/1v/XS/1VbRfHzB/g11.gif",
    "g9": "http://shrani.si/f/W/Ka/1TLgXafB/g9.gif",
    "r7": "http://shrani.si/f/M/zt/3nhqkS0V/r7.gif",
    "r8": "http://shrani.si/f/2Z/j/129vHeku/r8.gif",
    "r5": "http://shrani.si/f/2f/DX/1dO3VERW/r5.gif",
    "r6": "http://shrani.si/f/2c/7R/3YYSLhzh/r6.gif",
    "r2": "http://shrani.si/f/2a/bi/1mAnm7rw/r2.gif",
    "r4": "http://shrani.si/f/1S/MG/2bLWYbX/r4.gif",
    "r3": "http://shrani.si/f/1i/yE/1NermpRT/r3.gif",
    "g10": "http://shrani.si/f/3t/1P/1Erw17HK/g10.gif",
    "r1": "http://shrani.si/f/2i/104/vIsECGJ/r1.gif",
    "g11": "http://shrani.si/f/1v/XS/1VbRfHzB/g11.gif",
    "g9": "http://shrani.si/f/W/Ka/1TLgXafB/g9.gif",
    "g7": "http://shrani.si/f/n/wm/3pLJbHYS/g7.gif",
    "g3": "http://shrani.si/f/d/Ux/2qLVtvQY/g3.gif",
    "g5": "http://shrani.si/f/43/A4/3OV5rtoy/g5.gif",
    "g4": "http://shrani.si/f/3y/Hf/tsNdLVo/g4.gif",
    "g2": "http://shrani.si/f/3Q/a4/3tv9RL2W/g2.gif",
    "g8": "http://shrani.si/f/3k/sL/3uTWTAKo/g8.gif",
    "g6": "http://shrani.si/f/1i/dP/3gViTZiH/g6.gif",
    "g1": "http://shrani.si/f/24/z7/1YY0SmOS/g1.gif",

    "e1": "http://shrani.si/f/3S/Sk/2rhiGVqD/e1.gif",
    "e2": "http://shrani.si/f/3o/yJ/3cxkEleM/e2.gif",
    "e3": "http://shrani.si/f/2O/2b/3VaAO0Fs/e3.gif",
    "e4": "http://shrani.si/f/25/jX/3HQRU1cK/e4.gif",
    "e5": "http://shrani.si/f/37/Q8/34WjoYTS/e5.gif",
    "e6": "http://shrani.si/f/1L/iw/4pQKPEg4/e6.gif",
    "e7": "http://shrani.si/f/2j/9z/PrwxYvz/e7.gif",
    "e8": "http://shrani.si/f/1V/L8/4BorwBzF/e8.gif",
    "e9": "http://shrani.si/f/Z/HH/uneyhbq/e9.gif",
    "e10": "http://shrani.si/f/30/12p/3C6cQVkd/e10.gif",


    "h1": "http://shrani.si/f/y/ea/39BEc2mj/h1.gif",
    "h2": "http://shrani.si/f/3A/Lh/3Rx9Siup/h2.gif",
    "h3": "http://shrani.si/f/E/WZ/UTeGvMt/h3.gif",
    "h4": "http://shrani.si/f/E/WZ/UTeGvMt/h4.gif",
    "h5": "http://shrani.si/f/f/bH/2GkgXg25/h5.gif",
    "h6": "http://shrani.si/f/1y/EP/2eXuT6qq/h6.gif",
    "h7": "http://shrani.si/f/2D/Jo/4pV2Xbo7/h7.gif",
    "h8": "http://shrani.si/f/2R/dP/4NS8jC7A/h8.gif",
    "h9": "http://shrani.si/f/27/lJ/E61X1Mz/h9.gif",
    "h10": "http://shrani.si/f/1e/4N/3XMJMh6G/h10.gif",


    "hero": "http://shrani.si/f/2H/5N/15ROR4Hd/hero.gif"
}

var farmlistelastnosti = [
{
    lastnost: "reportsanalysed",
    vrednost: 0
},
{
    lastnost: "analysereportsbeforesending",
    vrednost: false
},
{
    lastnost: "zadnjireportpozidivnidonos",
    vrednost: true
},
{
    lastnost: "zadnji5reportpozidivnidonos",
    vrednost: true
}
];


////////////
//PLAYER
//////////


function Player() {
    this.AnalizaIGMjevON = false;
    this.SteviloAnalizeIGMjev = 0;
    this.AnalizaReportovON = false;
    this.SteviloAnalizeReportov = 0;
    this.LastSavedData = 0;
    this.FARMLISTE = [];
    this.FARMLISTEid = 0;
    this.PosljiSMSIGM = false;
    this.DodajNaPrednostno = 101;
    this.OnemogociFarmo = 0;
    this.PosljiSMSReport = false;
    this.CountryCode = "";
    this.PhoneNumber = "";
    this.intervalanalizeMin = 50;
    this.intervalanalizeMax = 70;
    //farmanje moznosti
    this.CheckTroopsInOases = true;
    this.CheckLastReport = true;
    this.saveaferanalysing = true;
    //logs
    this.logs = [];
    this.maxLogs = 100;
    //
    this.workingtime = new WorkingTime();
    this.demolish = {
        TASKNUMBER: 0,
        TASKS: []
    }
    this.attackbuilder = {
        TASKNUMBER: 0,
        TASKS: []
    }


        this.timedif = 0;

    this.hero = {
        on: false,
        time: 0,
        advanture: false,
        oases: false,
        oasesdef: 500,
        minhealth: 50,
        interval: 200
    }
    this.offline = {
        on: false,
        coupon: "",
        goldlink: "",
        username: "",
        password: "",
        activated: false
    }
    this.ANALIZAVSEH = false;
    this.SMARTANALIZA = true;
    this.offlinetime = 0;
    this.TASKNUMBER = 0;

    this.evade = {
        villages: []
    }
    this.template = {
        templates: []
    }
    this.farmSearch = {
        searchHistory: [],
        savedSearch: [],
        filterHistory: [],
        savedFilter: [],
        maxSearchSaved: 30,
        maxFilterSaved: 30
    }
    this.merchantsonwaytext = "";
    this.incommingmerchantstext = "";
    this.incomingmerchants = "";
    this.outgoingmerchants = "";
}

Player.prototype.ReadLocalData = function () {
    var data = localStorage[this.server2 + "_" + this.uid];
    if (data) {
        var data2 = eval("(" + data + ")");
        this.setPlayer(data2);
        this.server = this.server2;
    }
    else {
        data = localStorage[this.server + "_" + this.uid];
        if (data) {
            var data2 = eval("(" + data + ")");
            this.setPlayer(data2);
        }
    }
}

Player.prototype.Import = function (data) {
    var data2 = eval("(" + data + ")");
    this.setPlayer(data2);
    alert(prevodi.translate271);
}

Player.prototype.setFromObject = function (obj) {
    this.server = obj.server;
    this.server2 = obj.server2;
    this.name = obj.name;
    this.uid = obj.uid;
    this.villages = [];
    for (var qqq = 0; qqq < obj.villages.length; qqq++) {
        var villagename = ""
        try {
            if (obj.villageNames[qqq] == null || obj.villageNames[qqq] == undefined) {
                villagename = "";
            }
            else {
                villagename = filtriraj(obj.villageNames[qqq]);
            }
        }
        catch (err) {
            villagename = "";
        }
        this.villages.push(new Village(obj.villages[qqq], obj.villageIds[qqq], villagename));
    }
    this.tribe = obj.tribe;
    this.speed = obj.speed;
    this.troopspeed = 1;
    if (obj.speed == 3 || obj.speed == 2 || obj.speed == 5) {
        this.troopspeed = 2;
    }
    this.lang = obj.lang;
    this.AnalizaIGMjevON = false;
    this.SteviloAnalizeIGMjev = 0;
    this.AnalizaReportovON = false;
    this.SteviloAnalizeReportov = 0;
    this.LastSavedData = 0;
    this.FARMLISTE = [];
    this.FARMLISTEid = 0;
    this.PosljiSMSIGM = false;
    this.DodajNaPrednostno = 101;
    this.OnemogociFarmo = 0;
    this.PosljiSMSReport = false;
    this.CountryCode = "";
    this.PhoneNumber = "";
    this.intervalanalizeMin = 50;
    this.intervalanalizeMax = 70;
    //farmanje moznosti
    this.CheckTroopsInOases = true;
    this.CheckLastReport = true;
    this.saveaferanalysing = true;
    //logs
    this.logs = [];
    this.maxLogs = 100;
    //
    this.workingtime = new WorkingTime();
    this.demolish = {
        TASKNUMBER: 0,
        TASKS: []
    }
    this.attackbuilder = {
        TASKNUMBER: 0,
        TASKS: []
    }


    if (obj.timedif) {
        this.timedif = obj.timedif;
    }
    else {
        this.timedif = 0;
    }
    this.hero = {
        on: false,
        time: 0,
        advanture: false,
        oases: false,
        oasesdef: 500,
        minhealth: 50,
        interval: 200
    }
    this.offline = {
        on: false,
        coupon: "",
        goldlink: "",
        username: "",
        password: "",
        activated: false
    }
    this.ANALIZAVSEH = false;
    this.SMARTANALIZA = true;
    this.offlinetime = 0;
    this.TASKNUMBER = 0;

    this.evade = {
        villages: []
    }
    this.template = {
        templates: []
    }
    this.farmSearch = {
        searchHistory: [],
        savedSearch: [],
        filterHistory: [],
        savedFilter:[],
        maxSearchSaved: 30,
        maxFilterSaved: 30
    }
}

Player.prototype.setFromObject2 = function (obj) {
    this.server = obj.server;
    this.server2 = obj.server2;
    this.name = obj.name;
    this.uid = obj.uid;
    for (var qqq = 0; qqq < obj.villages.length; qqq++) {
        var villagename = ""
        try {
            if (obj.villageNames[qqq] == null || obj.villageNames[qqq] == undefined) {
                villagename = "";
            }
            else {
                villagename = filtriraj(obj.villageNames[qqq]);
            }
        }
        catch (err) {
            villagename = "";
        }
        oldvill = this.getVillage(obj.villages[qqq])
        if (oldvill)
        {
            oldvill.ID = obj.villageIds[qqq]
            oldvill.villageid = obj.villages[qqq];
            oldvill.name = villagename;
            oldvill.x = this.getXfromCoord(obj.villageIds[qqq]);
            oldvill.y = this.getYfromCoord(obj.villageIds[qqq]);
        }
    }
    this.tribe = obj.tribe;
    this.speed = obj.speed;
    this.troopspeed = 1;
    if (obj.speed == 3 || obj.speed == 2 || obj.speed == 5) {
        this.troopspeed = 2;
    }
    this.lang = obj.lang;
    
    if (obj.timedif) {
        this.timedif = obj.timedif;
    }
    else {
        this.timedif = 0;
    }
}

Player.prototype.getVillage = function (villageid) {

    for (var qqq = 0; qqq < this.villages.length; qqq++) {
        if (this.villages[qqq].villageid * 1 == villageid * 1) {
            return this.villages[qqq];
        }
    }
}

Player.prototype.getVillageFromXY = function (x, y) {

    for (var qqq = 0; qqq < this.villages.length; qqq++) {
        if (parseFloat(this.villages[qqq].x )== parseFloat(x) && parseFloat(this.villages[qqq].y) == parseFloat(y)) {
            return this.villages[qqq];
        }
    }
    return false;
}

Player.prototype.GetIdFromNewdid = function (newdid) {
    for (var i = 0; i < this.villages.length; i++) {
        if (this.villages[i].villageid == newdid) {
            return this.villages[i].ID;
        }
    }
}

Player.prototype.GetNewdidFromId = function (Id) {
    for (var i = 0; i < this.villages.length; i++) {
        if (this.villages[i].ID == Id) {
            return this.villages[i].villageid;
        }
    }
    return false;
}

Player.prototype.GetAllVillages = function () {
    var villages = []
    for (var i = 0; i < this.villages.length; i++) {
        villages.push(this.villages[i]);
    }
    return villages;
}

Player.prototype.GetVillageNumber = function (villageid) {
    for (var i = 0; i < this.villages.length; i++) {
        if (this.villages[i].villageid == villageid) {
            return i;
        }
    }
    return -1;
}



Player.prototype.getCoordfromXY = function (x, y) {
    x = parseInt(x);
    y = parseInt(y);
    var coordZ = (x + 401) + ((400 - y) * 801);
    if (newtravianversion) {
        coordZ = (x + 201) + ((200 - y) * 401);
    }
    return coordZ;
}

Player.prototype.getXfromCoord = function (z) {
    z = parseInt(z);
    var x = ((z - 1) % 801) - 400;
    if (newtravianversion) {
        x = ((z - 1) % 401) - 200;
    }
    return x;
}

Player.prototype.getYfromCoord = function (z) {
    z = parseInt(z);
    var y = 400 - (parseInt(((z - 1) / 801)));
    if (newtravianversion)
    {
        y = 200 - (parseInt(((z - 1) / 401)));
    }
    return y;
}


Player.prototype.AnalizirajVsaNaselja = function () {

    document.getElementById("Analiza").setAttribute("tip", "vse");
    document.getElementById("Analiza").setAttribute("villageid", "");
    var nadaljevalnaskripta = "NovCas=new Date();";
    nadaljevalnaskripta += "unsafeWindow.LastSavedData=[NovCas.getDate(),NovCas.getMonth(),NovCas.getFullYear(),NovCas.getHours(),NovCas.getMinutes(),NovCas.getSeconds()];";
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus('Finished with analysing');";
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    nadaljevalnaskripta += "for(var hhh=0;hhh<unsafeWindow.PLAYER.villages.length;hhh++){";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOT=NovCas.getTime()+RandomXtoY(unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOTintervalMIN*60000,unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOTintervalMAX*60000);";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.villages[hhh].UpdateCasAnalizeEnot();}";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.villages[hhh].CASANALIZE=NovCas.getTime()+DodatenCas;}";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.LastSavedData=NovCas.getTime()+DodatenCas;";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate272 + "\",'Analysing',0));";

    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();

}

Player.prototype.PreveriAnalizoVsehNaselij = function () {
    if (!this.ANALIZAVSEH) {
        return false;
    }
    CasZadnjegaShranjevanja = new Date(this.LastSavedData*1);
    CasZdaj = new Date();
    if (CasZadnjegaShranjevanja.getTime() <= CasZdaj.getTime() - 3600000) {
        return true;
    }
    else {
        return false;
    }
}
/*
NovCas = new Date(); unsafeWindow.SpremeniStatus('Finished with analysing');
var NovCas = new Date();
var DodatenCas = RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin * 60000, unsafeWindow.PLAYER.intervalanalizeMax);
for (var hhh = 0; hhh < unsafeWindow.PLAYER.villages.length; hhh++) {
    unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOT = NovCas.getTime() + RandomXtoY(unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOTintervalMIN * 60000, unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOTintervalMAX * 60000);
    unsafeWindow.PLAYER.villages[hhh].UpdateCasAnalizeEnot(); unsafeWindow.PLAYER.villages[hhh].CASANALIZE = NovCas.getTime() + DodatenCas;
}
unsafeWindow.PLAYER.LastSavedData = NovCas.getTime() + DodatenCas;
unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData('All villages have been analysed', 'Analysing', 0));
if (unsafeWindow.PLAYER.saveaferanalysing) {
    unsafeWindow.PLAYER.SaveDataLocaly()
} 
unsafeWindow.StartEvent();
analiziranje.izvajam = false;
unsafeWindow.draw(100);
setTimeout(function () { document.getElementById('ProgressBarDiv').style.display = 'none' }, 2000);
*/
Player.prototype.AnalizirajVsaNaseljaInZacni = function () {
    document.getElementById("Analiza").setAttribute("tip", "vse");
    document.getElementById("Analiza").setAttribute("villageid", "");
    var nadaljevalnaskripta = "NovCas=new Date();";
    //nadaljevalnaskripta += "unsafeWindow.Stopped=false;"
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus(\"" + prevodi.translate273 + "\");";
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    nadaljevalnaskripta += "for(var hhh=0;hhh<unsafeWindow.PLAYER.villages.length;hhh++){";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOT=NovCas.getTime()+RandomXtoY(unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOTintervalMIN*60000,unsafeWindow.PLAYER.villages[hhh].CASANALIZEENOTintervalMAX*60000);";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.villages[hhh].UpdateCasAnalizeEnot();}";
   // nadaljevalnaskripta += "unsafeWindow.PLAYER.villages[hhh].CASANALIZE=NovCas.getTime()+DodatenCas;}";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.LastSavedData=NovCas.getTime()+DodatenCas;";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate272 + "\",'Analysing',0));";
    nadaljevalnaskripta += "if(unsafeWindow.PLAYER.saveaferanalysing){unsafeWindow.PLAYER.SaveDataLocaly()}";
    nadaljevalnaskripta += "setTimeoutStart(1000,3000);";
    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();

}

Player.prototype.SaveDataLocaly = function () {
    localStorage[this.server + "_" + this.uid] = JSON.stringify(this);
}

Player.prototype.setPlayer = function (obj) {
    var novonaselje = false;
    for (var key in obj) {
        if (key == "villages") {
            var naselja = [];
            if (!offlinebot) {
                for (var i = 0; i < this.villages.length; i++) {
                    var st = -1;
                    for (var j = 0; j < obj.villages.length; j++) {
                        if (obj.villages[j].villageid == this.villages[i].villageid && obj.villages[j].ID == this.villages[i].ID) {
                            st = j;
                            break;
                        }
                    }
                    if (st > -1) {
                        var village = new Village(obj.villages[st].villageid, obj.villages[st].ID, this.villages[i].name);
                        delete obj.villages[st].name;
                        village.setVillage(obj.villages[st]);
                    }
                    else {
                        var village = this.villages[i];
                        novonaselje = true;
                    }
                    naselja.push(village);
                }
            }
            else {
                for (var i = 0; i < obj.villages.length; i++) {
                    //return obj.villages[i];
                    var village = new Village(obj.villages[i].villageid, obj.villages[i].ID, obj.villages[i].name);
                    //delete obj.villages[st].name;
                    village.setVillage(obj.villages[i]);
                    naselja.push(village);
                }
            }
            obj[key] = naselja;
        }
        else if (key == "FARMLISTE") {
            var farmliste = [];
            for (var i = 0; i < obj.FARMLISTE.length; i++) {
                var tafarmlista = {};
                for (var last in obj.FARMLISTE[i]) {
                    tafarmlista[last] = obj.FARMLISTE[i][last];
                }
                for (var a = 0; a < farmlistelastnosti.length; a++) {
                    if (typeof obj.FARMLISTE[i][farmlistelastnosti[a].lastnost] == 'undefined') {
                        tafarmlista[farmlistelastnosti[a].lastnost] = farmlistelastnosti[a].vrednost;
                    }
                }
                if (typeof obj.FARMLISTE[i].Slots == 'undefined') {
                    tafarmlista.Slots = new Slots(obj.FARMLISTE[i].lid);
                }
                else {
                    tafarmlista.Slots = new Slots(obj.FARMLISTE[i].lid);
                    for (var slots in obj.FARMLISTE[i].Slots) {
                        if (slots != "lid") {
                            tafarmlista.Slots[slots] = new Slot(obj.FARMLISTE[i].Slots[slots]);
                        }
                        //                        for (var slot in obj.FARMLISTE[i].Slots[slots]) {
                        //                            //                            if (slot == "Report") {
                        //                            //                                tafarmlista.Slots[slots][slot] = new Report();
                        //                            //                                for (var rep in tafarmlista.Slots[slots][slot]) {
                        //                            //                                    tafarmlista.Slots[slots][slot][rep] = obj.FARMLISTE[i].Slots[slots][slot][rep];
                        //                            //                                }
                        //                            //                            }
                        //                            //                            else {
                        //                            tafarmlista.Slots[slots][slot] = obj.FARMLISTE[i].Slots[slots][slot];
                        //                            //                            }
                        //                        }
                    }
                }
                farmliste.push(tafarmlista);
            }
            obj[key] = farmliste;
        }
        else if (key == "workingtime") {
            var objectt = new WorkingTime();
            objectt.setFromObject(obj.workingtime);
            obj.workingtime = objectt;
        }

        if (offlinebot) {
            this[key] = obj[key];
        }
        else if (key != "server" && key != "server2" && key != "timedif" && key != "speed" && key != "troopspeed") {
            this[key] = obj[key];
        }
    }
    if (novonaselje) {
        PLAYER.LastSavedData = 0;
    }
}

Player.prototype.PreveriTribe = function () {
    if ("tribe" in this) {
        if (this.tribe == 4)
        {
            return true;
        }
        return false;
    }
    return true
}

Player.prototype.setPlayer2 = function (obj) {
    var novonaselje = false;
    for (var key in obj) {
        if (key == "villages") {
            var naselja = [];
            
            for (var i = 0; i < obj.villages.length; i++) {
                //return obj.villages[i];
                var village = new Village(obj.villages[i].villageid, obj.villages[i].ID, obj.villages[i].name);
                //delete obj.villages[st].name;
                village.setVillage(obj.villages[i]);
                naselja.push(village);
            }

            this[key] = naselja;
        }
        else if (key == "FARMLISTE") {
            var farmliste = [];
            for (var i = 0; i < obj.FARMLISTE.length; i++) {
                var tafarmlista = {};
                for (var last in obj.FARMLISTE[i]) {
                    tafarmlista[last] = obj.FARMLISTE[i][last];
                }
                for (var a = 0; a < farmlistelastnosti.length; a++) {
                    if (typeof obj.FARMLISTE[i][farmlistelastnosti[a].lastnost] == 'undefined') {
                        tafarmlista[farmlistelastnosti[a].lastnost] = farmlistelastnosti[a].vrednost;
                    }
                }
                if (typeof obj.FARMLISTE[i].Slots == 'undefined') {
                    tafarmlista.Slots = new Slots(obj.FARMLISTE[i].lid);
                }
                else {
                    tafarmlista.Slots = new Slots(obj.FARMLISTE[i].lid);
                    for (var slots in obj.FARMLISTE[i].Slots) {
                        if (slots != "lid") {
                            tafarmlista.Slots[slots] = new Slot(obj.FARMLISTE[i].Slots[slots]);
                        }
                        //                        for (var slot in obj.FARMLISTE[i].Slots[slots]) {
                        //                            //                            if (slot == "Report") {
                        //                            //                                tafarmlista.Slots[slots][slot] = new Report();
                        //                            //                                for (var rep in tafarmlista.Slots[slots][slot]) {
                        //                            //                                    tafarmlista.Slots[slots][slot][rep] = obj.FARMLISTE[i].Slots[slots][slot][rep];
                        //                            //                                }
                        //                            //                            }
                        //                            //                            else {
                        //                            tafarmlista.Slots[slots][slot] = obj.FARMLISTE[i].Slots[slots][slot];
                        //                            //                            }
                        //                        }
                    }
                }
                farmliste.push(tafarmlista);
            }
            obj[key] = farmliste;
            this[key] = obj[key];
        }
        else if (key == "workingtime") {
            var objectt = new WorkingTime();
            objectt.setFromObject(obj.workingtime);
            obj.workingtime = objectt;
            this[key] = obj[key];
        }
        else {
            this[key] = obj[key];
        }
    }
    if (novonaselje) {
        PLAYER.LastSavedData = 0;
    }
}


Player.prototype.DisplayTasks = function (obj) {


    PLAYER.TASKNUMBER = 0;

    for (var i = 0; i < this.villages.length; i++) {
        if (this.villages[i].TASKS.length > 0) {
            var tempbuild = [];
            var temptrain = [];
            var temptrade = [];
            var temparmor = [];
            var tempfestival = [];

            for (var j = 0; j < this.villages[i].TASKS.length; j++) {
                switch (this.villages[i].TASKS[j].type) {
                    case "trade":
                        temptrade.push(this.villages[i].TASKS[j]);
                        //this.villages[i].DodajTrgovanje(this.villages[i].TASKS[j]);
                        break;
                    case "building":
                        tempbuild.push(this.villages[i].TASKS[j]);
                        //this.villages[i].DodajVCakalnoVrsto(this.villages[i].TASKS[j]);
                        break;
                    case "Train":
                        temptrain.push(this.villages[i].TASKS[j]);
                        //this.villages[i].DodajUrjenje(this.villages[i].TASKS[j]);
                        break;
                    case "ArmorUpgrade":
                        temparmor.push(this.villages[i].TASKS[j]);
                        //this.villages[i].DodajArmorUpgrade(this.villages[i].TASKS[j]);
                        break;
                    case "Party":
                        tempfestival.push(this.villages[i].TASKS[j]);
                        //this.villages[i].DodajParty(this.villages[i].TASKS[j]);
                        break;
                }
            }


            tempbuild = PreurediTaske(tempbuild);
            temptrain = PreurediTaske(temptrain);
            temptrade = PreurediTaske(temptrade);
            temparmor = PreurediTaske(temparmor);
            tempfestival = PreurediTaske(tempfestival);

            this.villages[i].BUILD = tempbuild;
            this.villages[i].TRADE = temptrade;
            this.villages[i].TRAIN = temptrain;
            this.villages[i].ARMOR = temparmor;
            this.villages[i].FESTIVAL = tempfestival;

            this.villages[i].TASKS = [];
        }
        try {
            if (this.demolish.TASKS.length > 0) {
                for (var i = 0; i < this.demolish.TASKS.length; i++) {
                    var task = this.demolish.TASKS[i];
                    var naselje = PLAYER.getVillage(task.villageid);
                    PLAYER.TASKNUMBER++;
                    task.tasknumber = PLAYER.TASKNUMBER;
                    task.joinwithprevious = true;
                    naselje.DEMOLISH.push(task);
                }
                this.demolish.TASKS = [];
            }
        }
        catch (err) { }

        for (var j = 0; j < this.FARMLISTE.length; j++) {
            PLAYER.TASKNUMBER++;
            this.FARMLISTE[j].tasknumber = PLAYER.TASKNUMBER;
            if (!this.FARMLISTE[j].joinwithprevious) {
                this.FARMLISTE[j].joinwithprevious = false;
            }
        }
        for (var j = 0; j < this.villages[i].BUILD.length; j++) {
            PLAYER.TASKNUMBER++;
            this.villages[i].BUILD[j].tasknumber = PLAYER.TASKNUMBER;
            if (this.villages[i].villageid != this.villages[i].BUILD[j].villageid) {
                this.villages[i].BUILD.splice(j, 1);
                j--;
                continue;
            }
            this.villages[i].DodajVCakalnoVrsto(this.villages[i].BUILD[j]);
        }
        for (var j = 0; j < this.villages[i].TRADE.length; j++) {
            PLAYER.TASKNUMBER++;
            this.villages[i].TRADE[j].tasknumber = PLAYER.TASKNUMBER;
            if (this.villages[i].villageid != this.villages[i].TRADE[j].villageid) {
                this.villages[i].TRADE.splice(j, 1);
                j--;
                continue;
            }
            if (this.villages[i].TRADE[j].option * 1 == 3) {
                if (typeof this.villages[i].TRADE[j].round === 'undefined') {
                    this.villages[i].TRADE[j].round = 100;
                }
                if (typeof this.villages[i].TRADE[j].fullmerchants === 'undefined') {
                    this.villages[i].TRADE[j].fullmerchants = false;
                }
            }

            this.villages[i].DodajVCakalnoVrsto(this.villages[i].TRADE[j]);
        }
        for (var j = 0; j < this.villages[i].TRAIN.length; j++) {
            PLAYER.TASKNUMBER++;
            this.villages[i].TRAIN[j].tasknumber = PLAYER.TASKNUMBER;
            if (this.villages[i].villageid != this.villages[i].TRAIN[j].villageid) {
                this.villages[i].TRAIN.splice(j, 1);
                j--;
                continue;
            }
            this.villages[i].DodajVCakalnoVrsto(this.villages[i].TRAIN[j]);
        }
        for (var j = 0; j < this.villages[i].ARMOR.length; j++) {
            PLAYER.TASKNUMBER++;
            this.villages[i].ARMOR[j].tasknumber = PLAYER.TASKNUMBER;
            if (this.villages[i].villageid != this.villages[i].ARMOR[j].villageid) {
                this.villages[i].ARMOR.splice(j, 1);
                j--;
                continue;
            }
            this.villages[i].DodajVCakalnoVrsto(this.villages[i].ARMOR[j]);

        }
        for (var j = 0; j < this.villages[i].FESTIVAL.length; j++) {
            PLAYER.TASKNUMBER++;
            this.villages[i].FESTIVAL[j].tasknumber = PLAYER.TASKNUMBER;
            if (this.villages[i].villageid != this.villages[i].FESTIVAL[j].villageid) {
                this.villages[i].FESTIVAL.splice(j, 1);
                j--;
                continue;
            }
            this.villages[i].DodajVCakalnoVrsto(this.villages[i].FESTIVAL[j]);
        }
        for (var j = 0; j < this.villages[i].DEMOLISH.length; j++) {
            PLAYER.TASKNUMBER++;
            this.villages[i].DEMOLISH[j].tasknumber = PLAYER.TASKNUMBER;
            if (this.villages[i].villageid != this.villages[i].DEMOLISH[j].villageid) {
                this.villages[i].DEMOLISH.splice(j, 1);
                j--;
                continue;
            }
            this.villages[i].DodajVCakalnoVrsto(this.villages[i].DEMOLISH[j]);
        }

        for (var j = 0; j < this.villages[i].FARME.length; j++) {
            PLAYER.TASKNUMBER++;
            if (this.villages[i].FARME[j].tasknumber == this.villages[i].FARMNUMBER) {
                this.villages[i].FARMNUMBER = PLAYER.TASKNUMBER;
            }

            /*if (this.villages[i].FARME[j].tasknumber == this.villages[i].STARTFARM) {
                this.villages[i].STARTFARM = PLAYER.TASKNUMBER;
            }*/

            this.villages[i].FARME[j].tasknumber = PLAYER.TASKNUMBER;
            if (this.villages[i].villageid != this.villages[i].FARME[j].villageid) {
                this.villages[i].FARME.splice(j, 1);
                j--;
                continue;
            }
            this.villages[i].DodajFarmo(this.villages[i].FARME[j]);
        }
        try {
            this.villages[i].UpdateFarmDisplay();
        }
        catch (err) { }
    }

    for (var j = 0; j < this.template.templates.length; j++) {
        PLAYER.TASKNUMBER++;
        this.template.templates[j].tasknumber = PLAYER.TASKNUMBER;
    }
}





Player.prototype.UstvariCakalnoListo = function () {
    var div2 = document.getElementById("CakalnaVrsta");
    var span = document.createElement("span");
    div2.appendChild(span);
    var villages = this.villages;
    for (var j = 0; j < villages.length; j++) {
        var vsebina = '<div style="border-radius:15px; text-align:center;" class="village1darkdark" villageid="' + villages[j].villageid + '" name="' + villages[j].villageid + '" tip="taski">'
        vsebina += '<table style="width:100%; border-collapse:collapse;">'
        vsebina += '<tr>'
        vsebina += '<td style="text-align:center;"> ' + villages[j].name + '  (' + villages[j].x + '|' + villages[j].y + ')</td>'
        vsebina += '<td name="Tabs" villageid="' + villages[j].x + '" tip="all" class="village1" style="width:40px; height:30px; text-align:center; border-top-left-radius:15px; border-top-right-radius:15px;">' + prevodi.translate276 + '</td>'
        vsebina += '<td name="Tabs" villageid="' + villages[j].x + '" tip="build" class="village1dark" style="width:40px; height:30px; text-align:center; border-top-left-radius:15px; border-top-right-radius:15px;"><img src="http://shrani.si/f/R/4H/22iKUswf/build.png" title="build" style="width:30px; height:30px;"></td>'
        vsebina += '<td name="Tabs" villageid="' + villages[j].x + '" tip="trade" class="village1dark " style="cursor: pointer; width:40px; height:30px; text-align:center; border-top-left-radius:15px; border-top-right-radius:15px;"><img src="http://shrani.si/f/F/3y/1WddXeu4/trade.png" title="trade" style="width:30px; height:30px;"></td>'
        vsebina += '<td name="Tabs" villageid="' + villages[j].x + '" tip="train" class="village1dark " style="cursor: pointer; width:40px; height:30px; text-align:center; border-top-left-radius:15px; border-top-right-radius:15px;"><img src="http://shrani.si/f/y/k1/1zH0yBYd/train.png" title="train" style="width:30px; height:30px;"></td>'
        vsebina += '<td name="Tabs" villageid="' + villages[j].x + '" tip="festival" class="village1dark " style="cursor: pointer; width:40px; height:30px; text-align:center; border-top-left-radius:15px; border-top-right-radius:15px;"><img src="http://shrani.si/f/r/ph/1NZXoQ3A/festival.gif" title="festival" style="width:30px; height:30px;"></td>'
        vsebina += '<td name="Tabs" villageid="' + villages[j].x + '" tip="armor" class="village1dark " style="cursor: pointer; width:40px; height:30px; text-align:center; border-top-left-radius:15px; border-top-right-radius:15px;"><img src="http://shrani.si/f/1E/7l/39kZvTAZ/armor.gif" title="upgrade armor" style="width:30px; height:30px;"></td>'
        vsebina += '<td name="Tabs" villageid="' + villages[j].x + '" tip="demolish" class="village1dark " style="cursor: pointer; width:40px; height:30px; text-align:center; border-top-left-radius:15px; border-top-right-radius:15px;"><img src="http://shrani.si/f/N/Wk/ViNc2sz/demolish.png" title="demolish" style="width:30px; height:30px;"></td>'
        vsebina += '</tr>'
        vsebina += '<tr>'
        vsebina += '<td  class="village1" style="border-bottom-left-radius:15px;border-bottom-right-radius:15px; padding:5px;" colspan="8">'
        vsebina += '<div id="building' + villages[j].villageid + '" class="BUILD" style="text-align: justify;">'
        vsebina += '</div>';
        vsebina += '<div id="trade' + villages[j].villageid + '" class="TRADE" style="text-align: justify;">';
        vsebina += '</div>';
        vsebina += '<div id="Train' + villages[j].villageid + '" class="TRAIN" style="text-align: justify;">';
        vsebina += '</div>';
        vsebina += '<div id="Party' + villages[j].villageid + '" class="FESTIVAL" style="text-align: justify; ">';
        vsebina += '</div>';
        vsebina += '<div id="ArmorUpgrade' + villages[j].villageid + '" class="ARMOR" style="text-align: justify; ">';
        vsebina += '</div>';
        vsebina += '<div id="demolish' + villages[j].villageid + '" class="DEMOLISH" style="text-align: justify;">';
        vsebina += '</div>';
        vsebina += '</td>';
        vsebina += '</tr>';
        vsebina += '</table>';
        vsebina += '</div>';

        span.innerHTML += vsebina;

    }
    DodajEventTab()
}
Player.prototype.NastaviBarve = function () {
    var Barve = ["#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880", "#FA8080", "#D680FA", "#9C80FA", "#82D092", "#9CB571", "#C9A329", "#FA8880"];
    var VelikostElementov = [0.35, 0.35];
    for (var h = 0; h < this.villages.length; h++) {
        var villageid = this.villages[h].villageid;
        var PraviElementi = document.getElementsByName(villageid);
        for (var i = 0; i < PraviElementi.length; i++) {
            if (PraviElementi[i].getAttribute("tip") == "taski") {
                continue;
            }
            var Dolzina = innerWidth * VelikostElementov[i] - 45;
            $(PraviElementi[i]).css("background-color", Barve[h])
								.css("min-width", Dolzina + "px")
                                .css("border-radius", "15px");
        }

    }


}
Player.prototype.PreveriAttackBuilder = function () {
    var toleranca = 5 * 60000;
    var caszdaj = new Date();
    var minCas = 99999999999999999999;
    var task = -1;
    for (var attack = 0; attack < this.attackbuilder.TASKS.length; attack++) {
        if (!this.attackbuilder.TASKS[attack].active) {
            continue;
        }

        var cas = this.attackbuilder.TASKS[attack].triptime;
        if (Math.abs(this.attackbuilder.TASKS[attack].time - caszdaj.getTime() - PLAYER.timedif - cas) < toleranca) {
            if (this.attackbuilder.TASKS[attack].time - caszdaj.getTime() - PLAYER.timedif - cas < minCas) {
                minCas = this.attackbuilder.TASKS[attack].time - caszdaj.getTime() - PLAYER.timedif - cas;
                task = attack;
                var totaltroop = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (var i = 0; i < PLAYER.attackbuilder.TASKS[task].attacks.length; i++) {
                    for (var j = 0; j < PLAYER.attackbuilder.TASKS[task].attacks[i].troops.length; j++) {
                        totaltroop[j] += PLAYER.attackbuilder.TASKS[task].attacks[i].troops[j] * 1;
                    }
                }
                this.attackbuilder.TASKS[task].totaltroop = totaltroop;
            }
        }
    }
    if (task > -1) {
        return this.attackbuilder.TASKS[task];
    }
    return false;
}


Player.prototype.PreveriHero = function () {
    var caszdaj = new Date();
    if (PLAYER.hero.on) {
        if (PLAYER.hero.time < caszdaj.getTime() && (PLAYER.hero.advanture || PLAYER.hero.oases)) {
            return PLAYER.hero;
        }
    }
    return false;
}
Player.prototype.PreveriDemolish = function () {
    var caszdaj = new Date();
    for (var i = 0; i < this.villages.length; i++) {
        for (var demolish = 0; demolish < this.villages[i].DEMOLISH.length; demolish++) {
            if (this.villages[i].DEMOLISH[demolish].time < caszdaj.getTime()) {
                return this.villages[i].DEMOLISH[demolish];
            }
        }
    }
    return false;
}

Player.prototype.SetDemolishTime = function (villageid, newtime) {
    var naselje = this.getVillage(villageid);
    for (var demolish = 0; demolish < naselje.DEMOLISH.length; demolish++) {
        naselje.DEMOLISH[demolish].time = newtime;
    }
}

Player.prototype.removeDemolishTask = function (tasknumber, villageid) {
    var naselje = this.getVillage(villageid);
    for (var demolish = 0; demolish < naselje.DEMOLISH.length; demolish++) {
        if (naselje.DEMOLISH[demolish].tasknumber == tasknumber) {
            naselje.DEMOLISH.splice(demolish, 1);
        }
    }
}

Player.prototype.povecajCasFarmliste2 = function (tasknumber, PrviSlot, ZadniSlot, konec) {
    for (var stevilkafarme = 0; stevilkafarme < PLAYER.FARMLISTE.length; stevilkafarme++) {
        if (PLAYER.FARMLISTE[stevilkafarme].tasknumber == tasknumber) {
            var cas = new Date();
            cas = cas.getTime();
            if (PLAYER.FARMLISTE[stevilkafarme].farmnumber + "" == ZadniSlot + "" || PLAYER.FARMLISTE[stevilkafarme].farmnumber + "" == "0" || PLAYER.FARMLISTE[stevilkafarme].farmnumber + "" == "undefined") {
                PLAYER.FARMLISTE[stevilkafarme].lastfarm = PrviSlot;
            }
            else {
                PLAYER.FARMLISTE[stevilkafarme].lastfarm = PLAYER.FARMLISTE[stevilkafarme].farmnumber;
            }
            PLAYER.FARMLISTE[stevilkafarme].farmnumber = ZadniSlot;

            if (PLAYER.FARMLISTE[stevilkafarme].repeat + "" == "true") {
                PLAYER.FARMLISTE[stevilkafarme].date = cas + randomXToY(PLAYER.FARMLISTE[stevilkafarme].intervalmin * 60000, PLAYER.FARMLISTE[stevilkafarme].intervalmax * 60000);
            }
            else {
                if (!konec) {
                    PLAYER.FARMLISTE[stevilkafarme].completed = true;
                    PLAYER.FARMLISTE[stevilkafarme].completedtime = cas;
                }
                else {
                    while (stevilkafarme > 0 & PLAYER.FARMLISTE[stevilkafarme].joinwithprevious) {//nastavi prvi farmlisti (ki nima join) cas
                        stevilkafarme = stevilkafarme - 1;
                    }
                    PLAYER.FARMLISTE[stevilkafarme].date = cas + randomXToY(PLAYER.FARMLISTE[stevilkafarme].intervalmin * 60000, PLAYER.FARMLISTE[stevilkafarme].intervalmax * 60000);
                    
                }
            }
            return;
        }
    }





}
Player.prototype.povecajCasFarmliste = function (farmlist, PrviSlot, ZadniSlot, konec) {
    for (var stevilkafarme = 0; stevilkafarme < PLAYER.FARMLISTE.length; stevilkafarme++) {
        if (PLAYER.FARMLISTE[stevilkafarme].tasknumber == farmlist.tasknumber) {
            var cas = new Date();
            cas = cas.getTime();
            if (PLAYER.FARMLISTE[stevilkafarme].farmnumber + "" == ZadniSlot + "" || PLAYER.FARMLISTE[stevilkafarme].farmnumber + "" == "0" || PLAYER.FARMLISTE[stevilkafarme].farmnumber + "" == "undefined") {
                PLAYER.FARMLISTE[stevilkafarme].lastfarm = PrviSlot;
            }
            else {
                PLAYER.FARMLISTE[stevilkafarme].lastfarm = PLAYER.FARMLISTE[stevilkafarme].farmnumber;
            }
            PLAYER.FARMLISTE[stevilkafarme].farmnumber = ZadniSlot;

            if (PLAYER.FARMLISTE[stevilkafarme].repeat + "" == "true") {
                PLAYER.FARMLISTE[stevilkafarme].date = cas + randomXToY(PLAYER.FARMLISTE[stevilkafarme].intervalmin * 60000, PLAYER.FARMLISTE[stevilkafarme].intervalmax * 60000);
            }
            else {
                if (!konec) {
                    PLAYER.FARMLISTE[stevilkafarme].completed = true;
                    PLAYER.FARMLISTE[stevilkafarme].completedtime = cas;
                }
                else {
                    while (stevilkafarme > 0 & PLAYER.FARMLISTE[stevilkafarme].joinwithprevious) {//nastavi prvi farmlisti (ki nima join) cas
                        stevilkafarme = stevilkafarme - 1;
                    }
                    PLAYER.FARMLISTE[stevilkafarme].date = cas + randomXToY(PLAYER.FARMLISTE[stevilkafarme].intervalmin * 60000, PLAYER.FARMLISTE[stevilkafarme].intervalmax * 60000);

                }
            }
            return;
        }
    }





}

Player.prototype.PreveriFarmliste = function () {
    var caszdaj = new Date();
    var casZdaj = new Date();
    for (var farmlista = 0; farmlista < this.FARMLISTE.length; farmlista++) {
        if (this.FARMLISTE[farmlista].troopshome + "" == "undefined") {
            this.FARMLISTE[farmlista].troopshome = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }
        if (this.FARMLISTE[farmlista].joinwithprevious + "" == "undefined") {
            this.FARMLISTE[farmlista].joinwithprevious = false;
        }
        if (this.FARMLISTE[farmlista].lastfarm + "" == "undefined") {
            this.FARMLISTE[farmlista].lastfarm = 0;
        }

        if (this.FARMLISTE[farmlista].intervalmin*1 < 5) {
            this.FARMLISTE[farmlista].intervalmin = 5;
        }
        if (this.FARMLISTE[farmlista].intervalmax * 1 < this.FARMLISTE[farmlista].intervalmin * 1) {
            this.FARMLISTE[farmlista].intervalmax = this.FARMLISTE[farmlista].intervalmin * 1;
        }

        if (this.FARMLISTE[farmlista].completedtime + "" == "undefined") {
            this.FARMLISTE[farmlista].completedtime = casZdaj.getTime() - 300001;
        }
        if (!this.FARMLISTE[farmlista].completed) {
            this.FARMLISTE[farmlista].completed = false;
        }
        if (this.FARMLISTE[farmlista].joinwithprevious == false&&this.FARMLISTE[farmlista].active == true) {
            if (this.FARMLISTE[farmlista].date <= caszdaj.getTime()) {
                var retry = true;
                var najdenanova = false;
                if (this.FARMLISTE[farmlista].completed) {
                    var farmlista2 = farmlista;
                    while (farmlista2 + 1 < this.FARMLISTE.length) {
                        farmlista2++;
                        if (this.FARMLISTE[farmlista2].joinwithprevious) {
                            if (this.FARMLISTE[farmlista2].completed) {
                                continue;
                            }
                            else {
                                farmlista = farmlista2;
                                najdenanova = true;
                                break;
                            }
                        }
                        else {
                            break;
                        }
                    }
                }

                if (this.FARMLISTE[farmlista].troopshome + "" == "undefined") {
                    this.FARMLISTE[farmlista].troopshome = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                }
                if (this.FARMLISTE[farmlista].completedtime + "" == "undefined") {
                    this.FARMLISTE[farmlista].completedtime = casZdaj.getTime() - 300001;
                }
                if (!this.FARMLISTE[farmlista].completed) {
                    this.FARMLISTE[farmlista].completed = false;
                }
                if (this.FARMLISTE[farmlista].joinwithprevious) {
                    retry = false;
                }
                else if (farmlista + 1 < this.FARMLISTE.length) {
                    if (this.FARMLISTE[farmlista + 1].joinwithprevious) {
                        retry = false;
                    }
                }
                if (!najdenanova & !retry) {//vse zdruzene farmliste so pofarmane, zacni od prve in nastavi vse compleated=false
                    var farmlista2 = farmlista;
                    this.FARMLISTE[farmlista2].completed = false;
                    while (farmlista2 + 1 < this.FARMLISTE.length) {
                        farmlista2++;
                        if (this.FARMLISTE[farmlista2].joinwithprevious) {
                            this.FARMLISTE[farmlista2].completed = false;
                        }
                        else {
                            break;
                        }

                    }
                }

                //                if (casZdaj.getTime() - this.FARMLISTE[farmlista].completedtime < 300000) {
                //                    while (farmlista > 0 & this.FARMLISTE[farmlista].joinwithprevious) {
                //                        farmlista = farmlista - 1;
                //                    }
                //                    this.FARMLISTE[farmlista].date = casZdaj.getTime() + randomXToY(this.FARMLISTE[farmlista].intervalmin * 60000, this.FARMLISTE[farmlista].intervalmax * 60000);
                //                    continue;
                //                }


                //                continue;
                this.FARMLISTE[farmlista].repeat = retry;

                if (offlinebot) {
                    
                    return this.FARMLISTE[farmlista];
                }
                else {
                    document.getElementById("farmajFarmlist").setAttribute("repeat", retry); //retry
                    document.getElementById("farmajFarmlist").value = farmlista;
                    document.getElementById("farmajFarmlist").click();
                }
                return false;
            }
        }
    }
    return true;
}
Player.prototype.PrikaziFarmlist = function () {
    var DivFarmlist = document.getElementById("DivFarmlist");
    var villages = this.villages;
    for (var a = 0; a < villages.length; a++) {
        villageid = villages[a].villageid;
        var DivToNaselje = document.createElement("div");
        DivToNaselje.setAttribute("villageid", villageid);
        DivToNaselje.setAttribute("id", "Farme" + villageid);
        DivToNaselje.setAttribute("name", villageid);

        var TabelaFarm = document.createElement("table");
        TabelaFarm.setAttribute("class", "Farme");
        TabelaFarm.id = "Farme";

        var TaFarma = document.createElement("tr");
        switch (this.tribe * 1) {
            case 0:
                Crka = "r";
                break;
            case 1:
                Crka = "t";
                break;
            case 2:
                Crka = "g";
                break;
            case 5:
                Crka = "e";
                break;
            case 6:
                Crka = "h";
                break;
            default:
                Crka = "t";

        }

        var TaLastnost = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("villageid", villageid);
        checkbox.addEventListener('click', TurnAllFarmsOnOf, true);
        checkbox.setAttribute("deliteall", "true");
        TaLastnost.appendChild(checkbox);
        TaFarma.appendChild(TaLastnost);

        var Lastnosti = [prevodi.name, "link", "<img src='" + linkislik[Crka + "1"] + "'>", "<img src='" + linkislik[Crka + "2"] + "'>", "<img src='" + linkislik[Crka + "3"] + "'>", "<img src='" + linkislik[Crka + "4"] + "'>", "<img src='" + linkislik[Crka + "5"] + "'>", "<img src='" + linkislik[Crka + "6"] + "'>", "<img src='" + linkislik[Crka + "7"] + "'>", "<img src='" + linkislik[Crka + "8"] + "'>", "<img src='" + linkislik[Crka + "9"] + "'>", "<img src='" + linkislik[Crka + "10"] + "'>", "<img src='" + linkislik["hero"] + "'>", prevodi.type];

        for (var stevilkalastnosti = 0; stevilkalastnosti < Lastnosti.length; stevilkalastnosti++) {
            VrednostLastnosti = Lastnosti[stevilkalastnosti];
            TaLastnost = document.createElement("td");
            TaLastnost.innerHTML = VrednostLastnosti;
            TaFarma.appendChild(TaLastnost);
        }

        TabelaFarm.appendChild(TaFarma);


        TaLastnost = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "button";
        checkbox.value = "x";
        checkbox.setAttribute("stnaselja", villageid);
        checkbox.addEventListener('click', DeleteAllFarms, true);
        checkbox.setAttribute("deliteall", "true");
        TaLastnost.appendChild(checkbox);

        TaFarma.appendChild(TaLastnost);

        TabelaFarm.appendChild(TaFarma);

        DivToNaselje.appendChild(TabelaFarm);

        var VklopiIzklopi = document.createElement("nekaj");
        VklopiIzklopi.id = "VklopiIzklopi" + villageid;
        DivToNaselje.appendChild(VklopiIzklopi);

        var VklopiFarmanje = document.createElement("input");
        VklopiFarmanje.name = "Novo okno";
        VklopiFarmanje.value = prevodi.turnon;
        VklopiFarmanje.type = "button";
        VklopiFarmanje.id = "VklopiFarmanje";
        VklopiFarmanje.setAttribute("villageid", villageid);
        VklopiFarmanje.addEventListener('click', VklopiFarmanjeHandler, true);
        if (!PLAYER.getVillage(villageid).FARMON) {
            VklopiFarmanje.style.display = "";
            VklopiIzklopi.innerHTML = prevodi.translate255;
        }
        else {
            VklopiFarmanje.style.display = "none";
        }

        DivToNaselje.appendChild(VklopiFarmanje);
        VklopiFarmanje = null;

        var IzklopiFarmanje = document.createElement("input");
        IzklopiFarmanje.name = "Novo okno";
        IzklopiFarmanje.value = prevodi.turnoff;
        IzklopiFarmanje.type = "button";
        IzklopiFarmanje.id = "IzklopiFarmanje";
        IzklopiFarmanje.setAttribute("villageid", villageid);
        IzklopiFarmanje.addEventListener('click', IzklopiFarmanjeHandler, true);

        if (PLAYER.getVillage(villageid).FARMON) {
            IzklopiFarmanje.style.display = "";
            VklopiIzklopi.innerHTML = prevodi.translate254;
        }
        else {
            IzklopiFarmanje.style.display = "none";
        }

        DivToNaselje.appendChild(IzklopiFarmanje);
        IzklopiFarmanje = null;

        DivToNaselje.appendChild(document.createElement("br"));

        var span = document.createElement("span");
        span.innerHTML = prevodi.translate282;
        DivToNaselje.appendChild(span);


        var VklopiFarmanje = document.createElement("input");
        VklopiFarmanje.value = PLAYER.villages[a].CASANALIZEENOTintervalMIN;
        VklopiFarmanje.type = "text";
        VklopiFarmanje.size = 1;
        VklopiFarmanje.id = "CasAnalizeEnotMin" + villageid;
        VklopiFarmanje.setAttribute("villageid", villageid);
        VklopiFarmanje.setAttribute("tip", "CasAnalizeEnotMin");
        VklopiFarmanje.addEventListener('change', EditFarmingInterval, true);
        DivToNaselje.appendChild(VklopiFarmanje);

        var span = document.createElement("span");
        span.innerHTML = " " + prevodi.translate370 + " ";
        DivToNaselje.appendChild(span);


        var VklopiFarmanje = document.createElement("input");
        VklopiFarmanje.value = PLAYER.villages[a].CASANALIZEENOTintervalMAX;
        VklopiFarmanje.type = "text";
        VklopiFarmanje.size = 1;
        VklopiFarmanje.id = "CasAnalizeEnotMax" + villageid;
        VklopiFarmanje.setAttribute("villageid", villageid);
        VklopiFarmanje.setAttribute("tip", "CasAnalizeEnotMax");
        VklopiFarmanje.addEventListener('change', EditFarmingInterval, true);
        DivToNaselje.appendChild(VklopiFarmanje);

        var span = document.createElement("span");
        span.innerHTML = prevodi.translate18;
        DivToNaselje.appendChild(span);

        DivToNaselje.appendChild(document.createElement("br"));

        var span = document.createElement("span");
        span.innerHTML = prevodi.translate283 + ": ";
        DivToNaselje.appendChild(span);

        var datum = vDatum(PLAYER.villages[a].CASANALIZEENOT);

        var span = document.createElement("span");
        span.innerHTML = datum;
        span.id = "CasAnalizeEnot" + villageid;
        DivToNaselje.appendChild(span);

        var VklopiFarmanje = document.createElement("input");
        VklopiFarmanje.value = prevodi.translate284;
        VklopiFarmanje.type = "button";
        VklopiFarmanje.size = 1;
        VklopiFarmanje.id = "ResetCasAnalizeEnot" + villageid;
        VklopiFarmanje.setAttribute("villageid", villageid);
        VklopiFarmanje.setAttribute("tip", "ResetCasAnalizeEnot");
        VklopiFarmanje.addEventListener('click', EditFarmingInterval, true);
        DivToNaselje.appendChild(VklopiFarmanje);


        DivFarmlist.appendChild(DivToNaselje);
    }

}

Player.prototype.NastaviTrenutnoNaselje = function (villageid) {

    try {
        for (var iji = 0; iji < this.villages.length; iji++) {
            var ElementiZaPrikazat = document.getElementsByName(this.villages[iji].villageid);
            for (var jij = 0; jij < ElementiZaPrikazat.length; jij++) {
                if (this.villages[iji].villageid == villageid) {
                    ElementiZaPrikazat[jij].style.display = "";
                }
                else {
                    ElementiZaPrikazat[jij].style.display = "none";
                }
            }
        }
    } catch (err) { }
}






function Village(villageid, ID, name) {
    this.wood = 0;
    this.clay = 0;
    this.iron = 0;
    this.grain = 0;
    this.woodP = 0;
    this.clayP = 0;
    this.ironP = 0;
    this.grainP = 0;
    this.grainTotal = 100;
    this.time = 0;
    this.villageid = villageid;
    this.name = name;
    this.x = this.getXfromCoord(ID);
    this.y = this.getYfromCoord(ID);
    //console.log(ID)
    //console.log(this.x)
    //console.log(this.y)
    this.ID = ID;
    this.ENOTEDOMA = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.POLJA = [];
    for (var i = 1; i < 41; i++) {
        this.POLJA.push(new Polje(i));
    }
    this.BuildingTime = 0;
    this.FieldTime = 0;
    this.warhouse = 0;
    this.granary = 0;
    this.SUROVINEPRIHAJAJOCE = [];
    this.TRGOVCI = [[0,1,0]];
    this.PONUDBETRGOVCI = 0;
    this.FARME = [];
    this.PREDNOSTNEFARME = [];
    this.FARMNUMBER = 0;
    this.FARMON = false;
    this.TASKS = [];
    this.BUILD = [];
    this.TRADE = [];
    this.TRAIN = [];
    this.DEMOLISH = [];
    this.ARMOR = [];
    this.FESTIVAL = [];
    this.TASKNUMBER = 0;
    this.TASKNUMBERFARMS = 0;
    this.CASANALIZE = 0;
    this.CASANALIZEENOT = 0;
    this.INTERVALGRADNJA = 60;
    this.INTERVALTRZNICA = 30;
    this.INTERVALURJENJE = 60;
    this.INTERVALFESTIVAL = 180;
    this.INTERVALARMOR = 60;
    this.CASANALIZEGRADNJA1 = 0;
    this.CASANALIZEGRADNJA2 = 0;
    this.CASANALIZETRZNICA = 0;
    this.CASANALIZEURJENJE = 0;
    this.CASANALIZEFESTIVAL = 0;
    this.CASANALIZEARMOR = 0;
    this.CASANALIZEENOTinterval = 15;
    this.CASANALIZEENOTintervalMIN = 20;
    this.CASANALIZEENOTintervalMAX = 60;
    this.STARTFARM = -1;
    this.checkedfarms = 0;

}

Village.prototype.setResources = function (obj) {

}

Village.prototype.testnaFunkcija = function () {
    var TrenutenCas = new Date();
    TrenutenCas = TrenutenCas.getTime();
    return this.CASANALIZETRZNICA * 1 < TrenutenCas;
}

Village.prototype.testnaFunkcija2 = function () {
    if (this.TRADE.length > 0) {
        return this.PreveriAnalizoNaselja(this.TRADE[0]);
    }
    return "ni trade taskov";
}

Village.prototype.setTimeDorf1 = function () {
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALGRADNJA); //RandomXtoY(Math.round(54000 * this.INTERVALGRADNJA), Math.round(66000 * this.INTERVALGRADNJA));
    this.CASANALIZEGRADNJA1 = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALURJENJE); // +RandomXtoY(Math.round(54000 * this.INTERVALURJENJE), Math.round(66000 * this.INTERVALURJENJE));
    this.CASANALIZEURJENJE = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALFESTIVAL); // +RandomXtoY(Math.round(54000 * this.INTERVALFESTIVAL), Math.round(66000 * this.INTERVALFESTIVAL));
    this.CASANALIZEFESTIVAL = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALARMOR); // +RandomXtoY(Math.round(54000 * this.INTERVALARMOR), Math.round(66000 * this.INTERVALARMOR));
    this.CASANALIZEARMOR = novCas;
}

Village.prototype.setTimeDorf2 = function () {
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALGRADNJA); //RandomXtoY(Math.round(54000 * this.INTERVALGRADNJA), Math.round(66000 * this.INTERVALGRADNJA));
    this.CASANALIZEGRADNJA2 = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALURJENJE); // +RandomXtoY(Math.round(54000 * this.INTERVALURJENJE), Math.round(66000 * this.INTERVALURJENJE));
    this.CASANALIZEURJENJE = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALFESTIVAL); // +RandomXtoY(Math.round(54000 * this.INTERVALFESTIVAL), Math.round(66000 * this.INTERVALFESTIVAL));
    this.CASANALIZEFESTIVAL = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALARMOR); // +RandomXtoY(Math.round(54000 * this.INTERVALARMOR), Math.round(66000 * this.INTERVALARMOR));
    this.CASANALIZEARMOR = novCas;
}

Village.prototype.setTimeTrznica = function () {
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALTRZNICA); //RandomXtoY(Math.round(54000 * this.INTERVALGRADNJA), Math.round(66000 * this.INTERVALGRADNJA));
    this.CASANALIZETRZNICA = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALURJENJE); // +RandomXtoY(Math.round(54000 * this.INTERVALURJENJE), Math.round(66000 * this.INTERVALURJENJE));
    this.CASANALIZEURJENJE = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALFESTIVAL); // +RandomXtoY(Math.round(54000 * this.INTERVALFESTIVAL), Math.round(66000 * this.INTERVALFESTIVAL));
    this.CASANALIZEFESTIVAL = novCas;
    var novCas = new Date();
    novCas = novCas.getTime() + Math.round(60000 * this.INTERVALARMOR); // +RandomXtoY(Math.round(54000 * this.INTERVALARMOR), Math.round(66000 * this.INTERVALARMOR));
    this.CASANALIZEARMOR = novCas;
}


Village.prototype.setFromObject = function (obj) {
}

Village.prototype.GetIdFromNewdid = function (newdid) {
    for (var i = 0; i < this.villages.length; i++) {
        if (this.villages[i] == newdid) {
            return this.villageIds[i];
        }
    }
}

Village.prototype.GetNewdidFromId = function (Id) {
    for (var i = 0; i < this.villageIds.length; i++) {
        if (this.villageIds[i] == Id) {
            return this.villages[i];
        }
    }
}

Village.prototype.getCoordfromXY = function (x, y) {
    return PLAYER.getCoordfromXY(x, y);
}

Village.prototype.getXfromCoord = function (z) {
    return PLAYER.getXfromCoord(z);
}

Village.prototype.getYfromCoord = function (z) {
    return PLAYER.getYfromCoord(z);
}

Village.prototype.PridobiVsePrihajajoceSurovine = function () {//

    try {
        var VseLes = 0;
        var VseGlina = 0;
        var VseZelezo = 0;
        var VseZito = 0;
        var Prejsnje2 = this.SUROVINEPRIHAJAJOCE;

        for (var u54 = 0; u54 < Prejsnje2.length; u54++) {
            var TeSurovine = Prejsnje2[u54];
            VseLes += TeSurovine.wood * 1;
            VseGlina += TeSurovine.clay * 1;
            VseZelezo += TeSurovine.iron * 1;
            VseZito += TeSurovine.grain * 1;

        }
        return { wood: VseLes, clay: VseGlina, iron: VseZelezo, grain: VseZito };
    }
    catch (Error) {
        return { wood: 0, clay: 0, iron: 0, grain: 0 };
    }
}

Village.prototype.PridobiSurovine = function () {//

    var LesVvasi1 = this.wood;
    var GlinaVvasi1 = this.clay;
    var ZelezoVvasi1 = this.iron;
    var ZitoVvasi1 = this.grain;
    var ProizvodnjaLes1 = this.woodP;
    var ProizvodnjaGlina1 = this.clayP;
    var ProizvodnjaZelezo1 = this.ironP;
    var ProizvodnjaZito1 = this.grainP;

    var Skladisce1 = this.warhouse;
    var Zitnica1 = this.granary;


    var CasShranjevanja21 = new Date(this.time*1);
    var CasZdaj = new Date();
    var RazlikaCasov1 = CasZdaj.getTime() - CasShranjevanja21.getTime();

    var SkupajLes1 = Math.floor(LesVvasi1 * 1 + Proizvedenesurovine(ProizvodnjaLes1, RazlikaCasov1));
    var SkupajGlina1 = Math.floor(GlinaVvasi1 * 1 + Proizvedenesurovine(ProizvodnjaGlina1, RazlikaCasov1));
    var SkupajZelezo1 = Math.floor(ZelezoVvasi1 * 1 + Proizvedenesurovine(ProizvodnjaZelezo1, RazlikaCasov1));
    var SkupajZito1 = Math.floor(ZitoVvasi1 * 1 + Proizvedenesurovine(ProizvodnjaZito1, RazlikaCasov1));
    return { wood: SkupajLes1, clay: SkupajGlina1, iron: SkupajZelezo1, grain: SkupajZito1 };

}

Village.prototype.KdajLahkoPoslemSurovine2 = function (task) {


    var IdVasiVKateroPosiljam = this.getCoordfromXY(task.x, task.y);
    var NewdidVasiVKateroPosiljam = PLAYER.GetNewdidFromId(IdVasiVKateroPosiljam);//pridobi naselje v katerega posiljamo
    var SkupajSurovinZaPosiljanje = this.TRGOVCI[0][0] * this.TRGOVCI[0][1];
    

    var surovine = this.PridobiSurovine();//zracuna kolko je trenutno surovin glede na zadnjo analizo in proizvodnjo
    var Skladisce1 = this.warhouse;
    var Zitnica1 = this.granary;

    var SkupajLes1 = surovine.wood;
    var SkupajGlina1 = surovine.clay;
    var SkupajZelezo1 = surovine.iron;
    var SkupajZito1 = surovine.grain;

    var PolnoLes1 = SkupajLes1 / Skladisce1;
    var PolnoGlina1 = SkupajGlina1 / Skladisce1;
    var PolnoZelezo1 = SkupajZelezo1 / Skladisce1;
    var PolnoZito1 = SkupajZito1 / Zitnica1;

    try {
        if (NewdidVasiVKateroPosiljam) {//ce je naselje najdeno, potem moramo preveriti koliko surovin lahko sprejme to naselje
            var vseSurovineKiPrihajajo = PLAYER.getVillage(NewdidVasiVKateroPosiljam).PridobiVsePrihajajoceSurovine();
            var vseSurovine = PLAYER.getVillage(NewdidVasiVKateroPosiljam).PridobiSurovine();

            var SkupajLes2 = vseSurovineKiPrihajajo.wood + vseSurovine.wood;
            var SkupajGlina2 = vseSurovineKiPrihajajo.clay + vseSurovine.clay;
            var SkupajZelezo2 = vseSurovineKiPrihajajo.iron + vseSurovine.iron;
            var SkupajZito2 = vseSurovineKiPrihajajo.grain + vseSurovine.grain;

            var Skladisce2 = PLAYER.getVillage(NewdidVasiVKateroPosiljam).warhouse;
            var Zitnica2 = PLAYER.getVillage(NewdidVasiVKateroPosiljam).granary;

            var PolnoLes2 = SkupajLes2 / Skladisce2;
            var PolnoGlina2 = SkupajGlina2 / Skladisce2;
            var PolnoZelezo2 = SkupajZelezo2 / Skladisce2;
            var PolnoZito2 = SkupajZito2 / Zitnica2;
        }
        else {//ce naselje v katero posiljamo ni nase naselje, potem lahko to naselje sprejme neomejeno stevilo surovin
            var PolnoLes2 = 0;
            var PolnoGlina2 = 0;
            var PolnoZelezo2 = 0;
            var PolnoZito2 = 0;
            var Zitnica2 = 1000000000;
            var Skladisce2 = 1000000000;
        }
    }
    catch (Error) {
        var PolnoLes2 = 0;
        var PolnoGlina2 = 0;
        var PolnoZelezo2 = 0;
        var PolnoZito2 = 0;
        var Zitnica2 = 1000000000;
        var Skladisce2 = 1000000000;
    }
    
    //izracunamo kolko surovin lahko naselja posljejo oz sprejmejo
    if ((task.woodEmpty < PolnoLes1 || task.clayEmpty < PolnoGlina1 || task.ironEmpty < PolnoZelezo1 || task.grainEmpty < PolnoZito1) && (task.woodAccept > PolnoLes2 || task.clayAccept > PolnoGlina2 || task.ironAccept > PolnoZelezo2 || task.grainAccept > PolnoZito2)) {
        if (task.woodEmpty < PolnoLes1 && task.woodAccept > PolnoLes2) {
            var LesKiGaLahkoPosljem1 = Math.floor((PolnoLes1 - task.woodEmpty) * Skladisce1);
            var LesKiGaLahkoPosljem2 = Math.floor((task.woodAccept - PolnoLes2) * Skladisce2);
            var LesKiGaLahkoPosljem = Math.min(LesKiGaLahkoPosljem1, LesKiGaLahkoPosljem2);
        }
        else {
            var LesKiGaLahkoPosljem = 0;
        }

        if (task.clayEmpty < PolnoGlina1 && task.clayAccept > PolnoGlina2) {
            var GlinaKiGaLahkoPosljem1 = Math.floor((PolnoGlina1 - task.clayEmpty) * Skladisce1);
            var GlinaKiGaLahkoPosljem2 = Math.floor((task.clayAccept - PolnoGlina2) * Skladisce2);
            var GlinaKiGaLahkoPosljem = Math.min(GlinaKiGaLahkoPosljem1, GlinaKiGaLahkoPosljem2);
        }
        else {
            var GlinaKiGaLahkoPosljem = 0;
        }

        if (task.ironEmpty < PolnoZelezo1 && task.ironAccept > PolnoZelezo2) {
            var ZelezoKiGaLahkoPosljem1 = Math.floor((PolnoZelezo1 - task.ironEmpty) * Skladisce1);
            var ZelezoKiGaLahkoPosljem2 = Math.floor((task.ironAccept - PolnoZelezo2) * Skladisce2);
            var ZelezoKiGaLahkoPosljem = Math.min(ZelezoKiGaLahkoPosljem1, ZelezoKiGaLahkoPosljem2);
        }
        else {
            var ZelezoKiGaLahkoPosljem = 0;
        }

        if (task.grainEmpty < PolnoZito1 && task.grainAccept > PolnoZito2) {
            var ZitoKiGaLahkoPosljem1 = Math.floor((PolnoZito1 - task.grainEmpty) * Zitnica1);
            var ZitoKiGaLahkoPosljem2 = Math.floor((task.grainAccept - PolnoZito2) * Zitnica2);
            var ZitoKiGaLahkoPosljem = Math.min(ZitoKiGaLahkoPosljem1, ZitoKiGaLahkoPosljem2);
        }
        else {
            var ZitoKiGaLahkoPosljem = 0;
        }

        
        var vsotaSurovin = LesKiGaLahkoPosljem + GlinaKiGaLahkoPosljem + ZelezoKiGaLahkoPosljem + ZitoKiGaLahkoPosljem;
        var ProcentiLes = LesKiGaLahkoPosljem / vsotaSurovin;//izracunaj procentualno koliko posamezne surovine se posilja. 
        var ProcentiGlina = GlinaKiGaLahkoPosljem / vsotaSurovin;
        var ProcentiZelezo = ZelezoKiGaLahkoPosljem / vsotaSurovin;
        var ProcentiZito = ZitoKiGaLahkoPosljem / vsotaSurovin;
        var vsotaSurovin = Math.min(vsotaSurovin, SkupajSurovinZaPosiljanje);//ce je vsota surovin vecja od skupaj surovin ki jih lahko vsi trgovci nosijo, potem moramo upoštevat koliko lahko trgovci nesejo
        if (vsotaSurovin == 0) {
            return false;
        }
        if (true) {
        //zdaj zelimo surovine zaokrozit in pnapolnit trgovce
            var surovine = [Math.floor(ProcentiLes * vsotaSurovin), Math.floor(ProcentiGlina * vsotaSurovin), Math.floor(ProcentiZelezo * vsotaSurovin), Math.floor(ProcentiZito * vsotaSurovin)];
            var maxsurovin = [LesKiGaLahkoPosljem, GlinaKiGaLahkoPosljem, ZelezoKiGaLahkoPosljem, ZitoKiGaLahkoPosljem];
            
            var zaokrozene = ZaokroziVse(surovine, maxsurovin, this.TRGOVCI[0], task.optionValue * 1, task.round, task.fullmerchants);
            //return zaokrozene;
            if (zaokrozene.toString().toLowerCase() != "false") {
                //return zaokrozene.join(",");
                /*var nekaj = {
                    type: "trade",
                    villageid: task.villageid,
                    x: task.x,
                    y: task.y,
                    wood: zaokrozene[0],
                    clay: zaokrozene[1],
                    iron: zaokrozene[2],
                    grain: zaokrozene[3]
                }
                return nekaj;
                */
                return { type: "trade", villageid: task.villageid, x: task.x, y: task.y, wood: zaokrozene[0], clay: zaokrozene[1], iron: zaokrozene[2], grain: zaokrozene[3] };

            }
            else {
                //return 555;
                return false;
            }
        }
        //alert(vsotaSurovin+"="+LesKiGaLahkoPosljem+"+"+GlinaKiGaLahkoPosljem+"+"+ZelezoKiGaLahkoPosljem+"+"+ZitoKiGaLahkoPosljem)
        if (vsotaSurovin >= task.optionValue * 1 && vsotaSurovin > 0) {
            //return 444;
            return { type: "trade", villageid: task.villageid, x: task.x, y: task.y, wood: Math.floor(ProcentiLes * vsotaSurovin), clay: Math.floor(ProcentiGlina * vsotaSurovin), iron: Math.floor(ProcentiZelezo * vsotaSurovin), grain: Math.floor(ProcentiZito * vsotaSurovin) };
        }
        else {
            //return 333;
            return false;
        }

    }
    else {
        //return 222;
        return false;
    }

    //return 111;
}


////////////////// funkcije za zaokrozevanje surovin

function Zaokrozi(stevilka, natancnost) {
    return Math.floor(stevilka / natancnost) * natancnost;//floor - zaokrozi navzdol
}

function ZaokroziVse(surovine, maxsurovine, trgovci,minsurovin, zaokrozitev, polnitrgovci) {//surovine - polje surovin, ki bi jih drugace posslali; max surovin- polje max kolicine surovin, ki jih lahko posljemo glede na procentualno omejitev; minsurovin- minimalno koliko surovin je lahko posslano (nastavi uporabnik); zaokrozitev: na koliko zaokrozi surovine npr 100; polnitrgovci: true cezelimo da posiljamo samo polne trgovce, false ce ne
    var wood = surovine[0];
    var clay = surovine[1];
    var iron = surovine[2];
    var crop = surovine[3];
    //var trgovci = [9, 1000];
    var maxvsotasurovin = trgovci[0] * trgovci[1];
    //var minsurovin = minsurovin;

    var vsota1 = wood + clay + iron + crop
    var procentwood = wood / vsota1;
    var procentclay = clay / vsota1;
    var procentiron = iron / vsota1;
    var procentcrop = crop / vsota1;

    var maxwood = maxsurovine[0];
    var maxclay = maxsurovine[1];
    var maxiron = maxsurovine[2];
    var maxcrop = maxsurovine[3];
   
    var procentiarry = [procentwood, procentclay, procentiron, procentcrop];
    if (!offlinebot) {
        procentiarry.sort();//razvrsti od najmajnsega proti najvecjemu
        procentiarry.reverse();//obrne,da je od najvecjega proti najmajnsemu
    }
    //return 1;
    wood = Zaokrozi(wood, zaokrozitev);//zaokrozi navzdol glede na parameter zaokrozitev
    clay = Zaokrozi(clay, zaokrozitev);
    iron = Zaokrozi(iron, zaokrozitev);
    crop = Zaokrozi(crop, zaokrozitev);
    var vsota2 = wood + clay + iron + crop;
   
    if (polnitrgovci) {//ce je omogocena moznost, da trgovci morajo biti polni
        //preveri ce so polni trgovci. Ce niso, poskrbi da so
        var surovine = [wood, clay, iron, crop];
        var testsurovin = PreveriPolni(surovine, trgovci);//preveri ce so ze polni
        //console.log(testsurovin);
        var wood2 = wood;
        var clay2 = clay;
        var iron2 = iron;
        var crop2 = crop;
        if (!testsurovin) {//pri tako razporejenih surovinah trgovci niso polni, zato jih moramo nekako napolnit
            //najprej poskusimo dodajat surovine da napolnimo trgovce, pri tem ne smemo presečt max surovin
            

            zankastposkusov: for (var j = 0; j < 200; j++) {//max 200x povecaj, v realnih primerih zanka ne gre več kot 10x skozi
                //procentiarry:imamo polje s procenti kolik delez vseh surovin pripada posamezni surovini. Razvrsceni so po vrsti. 
                //Najprej bomo poskusali dodatsurovine tistim, ki imajo najvecji procent, potem naslednjim...

                var woodpreverjen = false;
                var claypreverjen = false;
                var ironpreverjen = false;
                var croppreverjen = false;
                var surovine2 = [wood2, clay2, iron2, crop2];
                vsotaprej = Vsota(surovine2);
                //console.log("zacetek");
                //console.log(surovine2);
                zankasur: for (var i = 0; i < procentiarry.length; i++) {//gre skozi vse 4 procente, vsak pripada enemu tipu surovine. Vsakic doda tistemu tipu surovine  ki je na vrsti, ce ne preseze max surovin
                    //torej ce nobena surovina ne preseze max surovin in je zaokrozitev=100, potem bo vsakemu tipu surovine dodalo 100 resorsov.
                    if (procentiarry[i] == procentwood && !woodpreverjen) {//trenuten procent pripada lesu, poskusaj dodat les
                        woodpreverjen = true;//ce bi imeli dve surovini enak procent, bi lahko eni dodalo 2x namesto vsaki enkrat
                        if (wood2 + zaokrozitev <= maxwood) {
                            wood2 += zaokrozitev;//lahko dodam wood
                        }
                        surovine2 = [wood2, clay2, iron2, crop2];
                        testsurovin = PreveriPolni(surovine2, trgovci);//preveri ce so zdaj, ko smo dodali wood, trgovci polni
                        if (testsurovin) {//ce so, zapusti zunanjo zanko, drugace nadaljuj notranjo zanko
                            break zankastposkusov;
                        }
                        else {
                            continue zankasur;
                        }
                    }
                    if (procentiarry[i] == procentclay && !claypreverjen) {//trenuten procent pripada glini, poskusaj dodat glino
                        claypreverjen = true;
                        if (clay2 + zaokrozitev <= maxclay) {
                            clay2 += zaokrozitev; //lahko se dodam clay
                        }
                        surovine2 = [wood2, clay2, iron2, crop2];
                        testsurovin = PreveriPolni(surovine2, trgovci);
                        if (testsurovin) {
                            break zankastposkusov;
                        }
                        else {
                            continue zankasur;
                        }
                    }
                    if (procentiarry[i] == procentiron && !ironpreverjen) {//trenuten procent pripada zelezu, poskusaj dodat zelezo
                        ironpreverjen = true;
                        if (iron2 + zaokrozitev <= maxiron) {
                            iron2 += zaokrozitev; //lahko se dodam iron
                        }
                        var surovine2 = [wood2, clay2, iron2, crop2];
                        testsurovin = PreveriPolni(surovine2, trgovci);
                        if (testsurovin) {
                            break zankastposkusov;
                        }
                        else {
                            continue zankasur;
                        }
                    }
                    if (procentiarry[i] == procentcrop && !croppreverjen) {//trenuten procent pripada zitu, poskusaj dodat zito
                        croppreverjen = true;
                        if (crop2 + zaokrozitev <= maxcrop) {
                            crop2 += zaokrozitev; //lahko se dodam crop
                        }
                        surovine2 = [wood2, clay2, iron2, crop2];
                        testsurovin = PreveriPolni(surovine2, trgovci);
                        if (testsurovin) {
                            break zankastposkusov;
                        }
                        else {
                            continue zankasur;
                        }
                    }
                }

                //prislo je cez celo zanko in trgovci se niso polni(ce bi bili, bi se zanka ze prej prekinila), zato vse skupaj ponovi, razen ce se v zadnji iteraciji surovine niso povečale
                var vsotapotem = Vsota(surovine2);
                //console.log("konec");
                //console.log(surovine2);
                //console.log(vsotapotem);
                if (vsotaprej == vsotapotem || vsotapotem > maxvsotasurovin) {
                    //v zadnji iteraciji ni dodalo nic surovin. Trgovci se vedno niso polni, zato bo potrebno praznit surovine- odstevat surovine dokler trgovci nebojo polni
                    //console.log("ni spremembe");
                    break zankastposkusov;
                } //drugace nadaljuj z iteracijami
            }

            //preveri ce je z povecevanjem surovin uspesno napolnilo trgovca
            surovine2 = [wood2, clay2, iron2, crop2];
            testsurovin = PreveriPolni(surovine2, trgovci);
            if (!testsurovin) {//ni uspesno napolnilo, zato bomo poskusili z zmanjsevanjem surovin, da izpraznimo zadnjega trgovca
                //console.log("zacenjam zmanjsevat");
                //
                zankastposkusov: for (var j = 0; j < 200; j++) {//max 200x zmanjsaj, realno je obicajno majn kot 10x
                    //enako kot pri prejsnji zanki, samo da zmanjsujemo surovine tako dolgo, dokler so vecje od 0 (prej smo povecevali dokler ne presezejo max surovin)
                    //ce vsota surovin pade pod min surovin za posiljanje, prav tako prekini to zanko

                    var woodpreverjen = false;
                    var claypreverjen = false;
                    var ironpreverjen = false;
                    var croppreverjen = false;
                    var surovine2 = [wood2, clay2, iron2, crop2];
                    vsotaprej = Vsota(surovine2);
                    //console.log("zacetek");
                    //console.log(surovine2);
                    zankasur: for (var i = 0; i < 4; i++) {

                        if (procentiarry[i] == procentwood && !woodpreverjen) {
                            woodpreverjen = true;;
                            if (wood2 - zaokrozitev >= 0) {
                                wood2 -= zaokrozitev; //lahko se odvzamem wood
                            }
                            surovine2 = [wood2, clay2, iron2, crop2];
                            testsurovin = PreveriPolni(surovine2, trgovci);
                            if (testsurovin) {
                                break zankastposkusov;
                            }
                            else {
                                continue zankasur;
                            }
                        }
                        if (procentiarry[i] == procentclay && !claypreverjen) {
                            claypreverjen = true;
                            if (clay2 - zaokrozitev >= 0) {
                                clay2 -= zaokrozitev; //lahko se odvzamem clay
                            }
                            surovine2 = [wood2, clay2, iron2, crop2];
                            testsurovin = PreveriPolni(surovine2, trgovci);
                            if (testsurovin) {
                                break zankastposkusov;
                            }
                            else {
                                continue zankasur;
                            }
                        }
                        if (procentiarry[i] == procentiron && !ironpreverjen) {
                            ironpreverjen = true;
                            if (iron2 - zaokrozitev >= 0) {
                                iron2 -= zaokrozitev; //lahko se odvzamem iron
                            }
                            var surovine2 = [wood2, clay2, iron2, crop2];
                            testsurovin = PreveriPolni(surovine2, trgovci);
                            if (testsurovin) {
                                break zankastposkusov;
                            }
                            else {
                                continue zankasur;
                            }
                        }
                        if (procentiarry[i] == procentcrop && !croppreverjen) {
                            croppreverjen = true;
                            if (crop2 - zaokrozitev >= 0) {
                                crop2 -= zaokrozitev; //lahko se odvzamem crop
                            }
                            surovine2 = [wood2, clay2, iron2, crop2];
                            testsurovin = PreveriPolni(surovine2, trgovci);
                            if (testsurovin) {
                                break zankastposkusov;
                            }
                            else {
                                continue zankasur;
                            }
                        }
                    }

                    //prislo je cez celo zanko in trgovci se niso polni
                    var vsotapotem = Vsota(surovine2);
                    //console.log("konec");
                    //console.log(surovine2);
                    //console.log(vsotapotem);
                    if (vsotapotem < minsurovin) {//ce vsota ssurovin pade pod min surovin koncaj
                        //console.log(vsotapotem+" je majn kot min surovin:"+minsurovin+", koncujem");
                        break zankastposkusov;
                    }
                    if (vsotaprej == vsotapotem) {
                        //v zadnji iteraciji ni odvzelo nic surovin. Praznjenje je torej neuspesno
                        //console.log("ni spremembe");
                        break zankastposkusov;
                    } //drugace nadaljuj z iteracijami
                }



            }
        }
        //po koncu dodeli spremenjene vrednosti prvotnim
        wood = wood2;
        clay = clay2;
        iron = iron2;
        crop = crop2;
        vsota2 = wood + clay + iron + crop;
        //console.log("vsota:" + vsota2);
        surovine = [wood, clay, iron, crop];
        testsurovin = PreveriPolni(surovine, trgovci);//se zadnjic preveri, ce so polni trgovci
        if (!testsurovin) {//niso polni, ne trguj
            //console.log("po koncu trgovci se vedno niso polni");
            return false;
        }//drugacce so polni, nadaljuj
    } //konec polni trgovci

    if (vsota2 > 0 & vsota2 > minsurovin) {
        return [wood, clay, iron, crop]
    }
    else {
        return false;
    }
}


function PreveriPolni(surovine, trgovci) {//preveri ce dane surovine napolnijo trgovce; surovine majo obliko [les,glina,zelezo,zito], trgovci [stprostihtrgovcev,nosilnostenegatrgovca]
    var vsota = Vsota(surovine);
    var sttrgovcev = Math.ceil(vsota / trgovci[1]);//ceil - zaokrozi navzgor
    if (vsota / trgovci[1] == sttrgovcev) {
        return true;
    }
    else {
        return false;
    }
}
function Vsota(polje) {
    var vsota = 0;
    for (var i = 0; i < polje.length; i++) {
        vsota += polje[i] * 1;
    }
    return vsota;
}

function PridobiStTrgovcev(surovine, trgovci) {
    var vsota = Vsota(surovine);
    return Math.ceil(vsota / trgovci[1]);
}

//////////////////konec funkcij za zaokrozevanje surovin



Village.prototype.KdajLahkoPoslemSurovine = function (task) {
    var SkupajSurovinZaPosiljanje = task.wood * 1 + task.clay * 1 + task.iron * 1 + task.grain * 1;
    if (SkupajSurovinZaPosiljanje > this.TRGOVCI[0][0] * this.TRGOVCI[0][1]) {
        return false;
    }
    var surovine = this.PridobiSurovine();

    var SkupajLes = surovine.wood;
    var SkupajGlina = surovine.clay;
    var SkupajZelezo = surovine.iron;
    var SkupajZito = surovine.grain;

    var PremaloLes = SkupajLes - task.wood * 1;
    var PremaloGlina = SkupajGlina - task.clay * 1;
    var PremaloZelezo = SkupajZelezo - task.iron * 1;
    var PremaloZito = SkupajZito - task.grain * 1;

    if (PremaloLes >= 0 && PremaloGlina >= 0 && PremaloZelezo >= 0 && PremaloZito >= 0) {
        return true;
    }
    else {
        return false
    }

}
Village.prototype.NadgradiNajnizjaPolja = function (task) {
    var MinSt = 21;
    var PoljaZaNadgradnjo = [];
    var DoStopnje = task.level * 1;
    
    for (var ii = 1; ii < 19; ii++) {

        var polje = this.POLJA[ii];

        var id = polje.id * 1;
        var StopnjaTegaPolja = polje.level * 1;
        if (polje.underconstruction) {
            StopnjaTegaPolja++
        }
        if (!((polje.name == 1 && task.fields.wood) || (polje.name == 2 && task.fields.clay) || (polje.name == 3 && task.fields.iron) || (polje.name == 4 && task.fields.crop))) {
            continue;
        }

        if (StopnjaTegaPolja < MinSt * 1 && StopnjaTegaPolja + 1 <= DoStopnje * 1) {
            MinSt = StopnjaTegaPolja;
            PoljaZaNadgradnjo = [];
            PoljaZaNadgradnjo.push(polje);
        }
        else if (StopnjaTegaPolja == MinSt * 1 && StopnjaTegaPolja + 1 <= DoStopnje * 1) {
            MinSt = StopnjaTegaPolja;
            PoljaZaNadgradnjo.push(polje);
        }
        else {
        }

    }
    //return 1;
    if (PoljaZaNadgradnjo.length == 0) {
        PLAYER.getVillage(task.villageid).IzbrisiTask(task);
        //izbrisi
    }
    return PoljaZaNadgradnjo;
}

Village.prototype.KdajLahkoUrim = function (task) {
    var dodatnast = 0;
    if (PLAYER.tribe * 1 == 0) {
    }
    else if (PLAYER.tribe * 1 == 1) {
        dodatnast = 10;
    }
    else if (PLAYER.tribe * 1 == 2) {
        dodatnast = 20;
    }
    else if (PLAYER.tribe == 5) {
        //galci
        vdodatnast = 50;
    }
    else if (PLAYER.tribe == 6) {
        //galci
        dodatnast = 60;
    }
    var PotrebenLes = 0;
    var PotrebenGlina = 0;
    var PotrebenZelezo = 0;
    var PotrebenZito = 0;
    var dodatek2 = 0;
    var mnozitelj = 1;
    
    if (task.gid * 1 == 29 || task.gid * 1 == 30) {
        mnozitelj = 3;
    }
    for (var gfsd = 1; gfsd < 11; gfsd++) {
        
        if ((TravianServer == 3) && gfsd == 10) {
            console.log(dodatnast)
            console.log(gfsd)
            console.log(dodatek2)
            console.log(uc[dodatnast + gfsd + dodatek2])
            var CenaLes = uc2[PLAYER.tribe][1] * mnozitelj;
            var CenaGlina = uc2[PLAYER.tribe][2] * mnozitelj;
            var CenaZelezo = uc2[PLAYER.tribe][3] * mnozitelj;
            var CenaZito = uc2[PLAYER.tribe][4] * mnozitelj;
        }
        else {
            var CenaLes = uc[dodatnast + gfsd + dodatek2][1] * mnozitelj;
            var CenaGlina = uc[dodatnast + gfsd + dodatek2][2] * mnozitelj;
            var CenaZelezo = uc[dodatnast + gfsd + dodatek2][3] * mnozitelj;
            var CenaZito = uc[dodatnast + gfsd + dodatek2][4] * mnozitelj;
        }
        
        var troop = gfsd - 1;
        
        PotrebenLes += task.units[troop] * CenaLes;
        PotrebenGlina += task.units[troop] * CenaGlina;
        PotrebenZelezo += task.units[troop] * CenaZelezo;
        PotrebenZito += task.units[troop] * CenaZito;

        //return PotrebenZito;
        //eval("PotrebenGlina+=task.units[" + troop + "]*CenaGlina");
        //eval("PotrebenZelezo+=task.units[" + troop + "]*CenaZelezo");
       // eval("PotrebenZito+=task.units[" + troop + "]*CenaZito");
    }
    
    var surovine = this.PridobiSurovine();

    SkupajLes = surovine.wood * 1;
    SkupajGlina = surovine.clay * 1;
    SkupajZelezo = surovine.iron * 1;
    SkupajZito = surovine.grain * 1;

    PremaloLes = SkupajLes - PotrebenLes * 1;
    PremaloGlina = SkupajGlina - PotrebenGlina * 1;
    PremaloZelezo = SkupajZelezo - PotrebenZelezo * 1;
    PremaloZito = SkupajZito - PotrebenZito * 1;
    
    if (PremaloLes >= 0 && PremaloGlina >= 0 && PremaloZelezo >= 0 && PremaloZito >= 0) {
        return true;
    }
    else {
        return false
    }


}
Village.prototype.PosodobiTrgovce = function () {
    var TrenutniCas = new Date()
    TrenutniCas = TrenutniCas.getTime();
    for (var stevilkavracanja = 1; stevilkavracanja < this.TRGOVCI.length; stevilkavracanja++) {
        if (this.TRGOVCI[stevilkavracanja].time * 1 < TrenutniCas) {
            this.TRGOVCI[0][0] = this.TRGOVCI[0][0] + this.TRGOVCI[stevilkavracanja].trgovci * 1;
            this.TRGOVCI.splice(stevilkavracanja, 1);
            stevilkavracanja--;
        }
    }
}

Village.prototype.PosodobiSurovine = function () {
    var NovaTrgovanja = [];
    var Prejsnje2 = this.SUROVINEPRIHAJAJOCE;
    for (var u54 = 0; u54 < Prejsnje2.length; u54++) {
        Casi22 = Prejsnje2[u54].time;
        //GM_log(Casi22);
        StarCas = new Date(Casi22*1);
        NoviCas = new Date();
        if (StarCas.getTime() < NoviCas.getTime()) {
            this.wood = this.wood * 1 + Prejsnje2[u54].wood * 1;
            this.clay = this.clay * 1 + Prejsnje2[u54].clay * 1;
            this.iron = this.iron * 1 + Prejsnje2[u54].iron * 1;
            this.grain = this.grain * 1 + Prejsnje2[u54].grain * 1;
            this.SUROVINEPRIHAJAJOCE.splice(u54, 1);
            u54--;
        }

    }
}

Village.prototype.NAJNIZJEZITNOPOLJE = function () {
    var MinSt = 25;
    var polje = false;
    for (var i = 0; i < this.POLJA.length; i++) {
        if (this.POLJA[i].name * 1 == 4) {
            var stpolja = this.POLJA[i].level;
            if (this.POLJA[i].underconstruction) {
                stpolja++;
            }
            if (stpolja < MinSt) {
                MinSt = stpolja;
                polje = this.POLJA[i];
            }
        }
    }

    if (polje.toString().toLowerCase() != "false") {
        var stopnja = MinSt + 1;
        if (this.KdajLahkoZgradim(polje)) {
            polje = { type: "building", "villageid": this.villageid, "building": polje.name, "level": stopnja, "id": polje.id };
        }
        else {
            polje = false;
        }
    }
    return polje
}

Village.prototype.PreveriAnalizoNaselja = function (task) {

    if (!PLAYER.SMARTANALIZA) {
        return true;
    }

    var TrenutenCas2 = new Date();
    TrenutenCas = TrenutenCas2.getTime();

    if (task.type == "building") {
        if (task.id < 19 || this.POLJA[1].name == 0) {
            if (this.CASANALIZEGRADNJA1*1 < TrenutenCas*1 || this.POLJA[1].name == 0) {
                //analiziraj dorf1
                if (offlinebot) {
                    return "analiziranje.dorf1(" + task.villageid + ");";
                }
                SpremeniStatus("Analysing dorf1 " + this.name + " (" + this.x + "|" + this.y + ")");
                document.getElementById("Analiza").setAttribute("tip", "custom");
                document.getElementById("Analiza").setAttribute("villageid", "");
                document.getElementById("Analiza").setAttribute("taski", "analiziranje.dorf1(" + task.villageid + ");");
                var nadaljevalnaskripta = "setTimeoutStart(1000,3000);";
                document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
                document.getElementById("Analiza").click();
                return false;
            }
            else {
                return true;
            }
        }
        else {
            if (this.CASANALIZEGRADNJA2*1 < TrenutenCas*1) {
                //analiziraj dorf2
                if (offlinebot) {
                    return "analiziranje.dorf2(" + task.villageid + ");";
                }
                SpremeniStatus("Analysing dorf2 " + this.name + " (" + this.x + "|" + this.y + ")");
                document.getElementById("Analiza").setAttribute("tip", "custom");
                document.getElementById("Analiza").setAttribute("villageid", "");
                document.getElementById("Analiza").setAttribute("taski", "analiziranje.dorf2(" + task.villageid + ");");
                var nadaljevalnaskripta = "setTimeoutStart(1000,3000);";
                document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
                document.getElementById("Analiza").click();
                return false;
            }
            else {
                return true;
            }
        }
    }

    if (task.type == "trade") {
        var test2 = true;
        var dodatek = "";
        if (task.option * 1 == 3) {
            var IdVasiVKateroPosiljam = this.getCoordfromXY(task.x, task.y);
            var didnaselja = PLAYER.GetNewdidFromId(IdVasiVKateroPosiljam);
            if (didnaselja) {
                dodatek = "analiziranje.trznica2(" + didnaselja + ");";
                var naseljeeee = PLAYER.getVillage(didnaselja);
                if (naseljeeee.CASANALIZETRZNICA*1 < TrenutenCas*1) {
                    test2 = false;
                }
            }

        }
        if (this.CASANALIZETRZNICA*1 < TrenutenCas*1 || !test2) {
            //analiziraj trznico
            if (!offlinebot) {
                document.getElementById("Analiza").setAttribute("tip", "custom");
                document.getElementById("Analiza").setAttribute("villageid", "");
            }
            
            var dodatek1 = "";
            if (this.CASANALIZETRZNICA*1 < TrenutenCas*1) {
                dodatek1 = "analiziranje.trznica2(" + task.villageid + ");";
                if (!test2) {
                    dodatek1 += "," + dodatek;
                    if (!offlinebot) {
                        SpremeniStatus("Analysing marketplace " + this.name + " (" + this.x + "|" + this.y + ") and " + naseljeeee.name + " (" + naseljeeee.x + "|" + naseljeeee.y + ")");
                    }
                }
                else {
                    if (!offlinebot) {
                        SpremeniStatus("Analysing marketplace " + this.name + " (" + this.x + "|" + this.y + ")");
                    }
                }
            }
            else {
                dodatek1 = dodatek;
                if (!offlinebot) {
                    SpremeniStatus("Analysing marketplace " + naseljeeee.name + " (" + naseljeeee.x + "|" + naseljeeee.y + ")");
                }
            }
            if (offlinebot) {
                return dodatek1.split(",").join("");
            }
            document.getElementById("Analiza").setAttribute("taski", dodatek1);
            var nadaljevalnaskripta = "setTimeoutStart(1000,3000);";
            document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
            document.getElementById("Analiza").click();
            return false;
        }
        else {
            return true;
        }
    }

    if (task.type == "Train") {
        if (this.CASANALIZEURJENJE*1 < TrenutenCas*1) {
            //analiziraj trznico
            if (offlinebot) {
                return "analiziranje.dorf1(" + task.villageid + ");";
            }
            SpremeniStatus("Analysing dorf1 " + this.name + " (" + this.x + "|" + this.y + ")");
            document.getElementById("Analiza").setAttribute("tip", "custom");
            document.getElementById("Analiza").setAttribute("villageid", "");
            document.getElementById("Analiza").setAttribute("taski", "analiziranje.dorf1(" + task.villageid + ");");
            var nadaljevalnaskripta = "setTimeoutStart(1000,3000);";
            document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
            document.getElementById("Analiza").click();
            return false;
        }
        else {
            return true;
        }
    }

    if (task.type == "Party") {
        if (this.CASANALIZEFESTIVAL*1 < TrenutenCas*1) {
            //analiziraj trznico
            if (offlinebot) {
                return "analiziranje.dorf1(" + task.villageid + ");";
            }
            SpremeniStatus("Analysing dorf1" + this.name + " (" + this.x + "|" + this.y + ")");
            document.getElementById("Analiza").setAttribute("tip", "custom");
            document.getElementById("Analiza").setAttribute("villageid", "");
            document.getElementById("Analiza").setAttribute("taski", "analiziranje.dorf1(" + task.villageid + ");");
            var nadaljevalnaskripta = "setTimeoutStart(1000,3000);";
            document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
            document.getElementById("Analiza").click();
            return false;
        }
        else {
            return true;
        }
    }



    if (task.type == "ArmorUpgrade") {


        if (this.CASANALIZEARMOR*1 < TrenutenCas*1) {
            //analiziraj trznico
            if (offlinebot) {
                return "analiziranje.dorf1(" + task.villageid + ");";
            }
            SpremeniStatus("Analysing dorf1" + this.name + " (" + this.x + "|" + this.y + ")");
            document.getElementById("Analiza").setAttribute("tip", "custom");
            document.getElementById("Analiza").setAttribute("villageid", "");
            document.getElementById("Analiza").setAttribute("taski", "analiziranje.dorf1(" + task.villageid + ");");
            var nadaljevalnaskripta = "setTimeoutStart(1000,3000);";
            document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
            document.getElementById("Analiza").click();
            return false;
        }
        else {
            return true;
        }
    }

    if (task.type == "demolish") {
        return true;
    }

}


Village.prototype.PREVERIZITO = function (task) {
    try {
        if (task.type == "building" && task.building * 1 != 4 && this.grainTotal * 1 <= Stavbe[task.building][task.level][4]*1) {
            var LahkoZgradimPolje = true;
            if (task.building * 1 > 4) {//pri rimljanih se polje lahko že gradi, zato je treba preverit ce lahko zgradimo polje
                var CasZdaj2 = new Date();
                CasZdaj2.setMilliseconds(0);
                var CasGradnje1 = new Date(this.FieldTime * 1);
                var RazlikaCasov1 = CasGradnje1.getTime() - CasZdaj2.getTime();
                if (RazlikaCasov1 > 0) {
                    LahkoZgradimPolje = false;
                }
            }
            if (LahkoZgradimPolje) {
                task = this.NAJNIZJEZITNOPOLJE();
            }
            else {
                task = false;
            }
        }
    } catch (err) { task = false; }
    return task;
}


Village.prototype.PREVERIGRADNJO = function () {

    this.PosodobiTrgovce(); //shranjene imamo prihajajoce trgovce. ce se je kateri ze vrnil, to posodobi 
    this.PosodobiSurovine(); //shranjene imamo prihajajoce surovine. Ce so kaksne surovine prispele, posodobi koliko surovin imamo v naselju
    var CasZdaj = new Date()

    CasZdaj = CasZdaj.getTime();
    if (this.CASANALIZEARMOR*1 > CasZdaj * 2) {
        this.CASANALIZEARMOR = 0;
    }
    var preverjentask = false;
    var task = this.BUILD; //gradbeni taski
    for (var k = 0; k < task.length; k++) {

        if (task[k] == null || task[k] == undefined) {
            try {
                task.splice(k, 1);
                k--;
            }
            catch (err) { }
            continue;
        }


        if (preverjentask.toString().toLowerCase() == "true" && task[k].joinwithprevious.toString().toLowerCase() != "true") {
            break; //poskribi da ne preverjamo taskov, ki niso joinani s prvim taskom
        }
        if (task[k].active.toString().toLowerCase() != "true") {//to bo v novi verziji, taske bos lahko dal na pavzo
            //console.log("Task:");
            //console.log(task[k]);
            //console.log("na pavzi");
            continue;
        }
        preverjentask = true;

        var analizasns = this.PreveriAnalizoNaselja(task[k]);
        if (analizasns.toString().toLowerCase() != "true") {//najprej se more analizirat naselje, funkcija sama požene analizo, zato moramo to nit samo ustavit
            if (offlinebot.toString().toLowerCase() == "true") {
                if (offlineanaliza.toString().toLowerCase() == "true") {
                    return analizasns;
                }
            }
            else {
                return "stop";
            }
        }

        if (task[k].id * 1 == 0 && task[k].building * 1 == 0) {//nadgradnja vseh polj
            //return 1;
            var PoljaZaNadgradnjo = this.NadgradiNajnizjaPolja(task[k]); //pridobi vsa polja ki so najnizje stopnje
            //return PoljaZaNadgradnjo;
            if (PoljaZaNadgradnjo.length == 0) {
                k--; //task je bil zbrisan
            }
            for (var hh = 0; hh < PoljaZaNadgradnjo.length; hh++) {//preveri po vrsti katero polje lahko zgradimo
                var DovoljSurovin = this.KdajLahkoZgradim(PoljaZaNadgradnjo[hh]);
                var DovoljCasGradnje = this.PreveriCasGradnje(PoljaZaNadgradnjo[hh]);
                if (DovoljSurovin.toString().toLowerCase() == "true" && DovoljCasGradnje.toString().toLowerCase() == "true") {
                    var stopnja = PoljaZaNadgradnjo[hh].level * 1 + 1;
                    if (PoljaZaNadgradnjo[hh].underconstruction.toString().toLowerCase() == "true") {
                        stopnja++;
                    }
                    //gradi!
                    var task222 = { type: "building", villageid: this.villageid, building: PoljaZaNadgradnjo[hh].name, level: stopnja, id: PoljaZaNadgradnjo[hh].id };
                    var novtask=this.PREVERIZITO(task222);
					if(novtask.toString().toLowerCase() != "false")
					{
					return novtask;
					}
                }
            }
        }
        else {//navadna gradnja stavbe

            if (this.POLJA[task[k].id] == undefined || this.POLJA[task[k].id] == null) {//da nebo errorov preverimo ce je polje primerno shranjeno
                this.POLJA[task[k].id] = { id: task[k].id, level: 0, name: 0, underconstruction: false };
            }
            var polje = this.POLJA[task[k].id];
            if (polje.level * 1 >= task[k].level * 1) {
                PLAYER.getVillage(task[k].villageid).IzbrisiTask(task[k]); //izbrisi task ce je polje ze na zeljeni stopnji
                continue;
            }

            var DovoljSurovin = this.KdajLahkoZgradim(task[k]);
            var DovoljCasGradnje = this.PreveriCasGradnje(task[k]);
            if (DovoljSurovin.toString().toLowerCase() == "true" && DovoljCasGradnje.toString().toLowerCase() == "true") {
                //task = { type: "building", villageid: this.villageid, building: PoljaZaNadgradnjo[hh].name, level: stopnja, id: PoljaZaNadgradnjo[hh].id };
				//return this.PREVERIZITO(task[k]);;
				var novtask=this.PREVERIZITO(task[k]);
					if(novtask.toString().toLowerCase() != "false")
					{
					return novtask;
					}
                //return ;
                //gradi!
            }
        }
    }

    preverjentask = false;
    task = this.TRADE; //trgovski taski
    for (var k = 0; k < task.length; k++) {
        if (task[k] == null || task[k] == undefined) {
            try {
                task.splice(k, 1);
                k--;
            }
            catch (err) { }
            continue;
        }

        if (preverjentask.toString().toLowerCase() == "true" && task[k].joinwithprevious.toString().toLowerCase() != "true") {
            break; //poskribi da ne preverjamo taskov, ki niso joinani s prvim taskom
        }
        if (task[k].active.toString().toLowerCase() != "true") {
            //console.log("Task:");
            //console.log(task[k]);
            //console.log("na pavzi");
            continue;
        }
        preverjentask = true;
        var analizasns = this.PreveriAnalizoNaselja(task[k]);
        if (analizasns.toString().toLowerCase() != "true" ) {//najprej se more analizirat naselje, funkcija sama požene analizo, zato moramo to nit samo ustavit
            if (offlinebot.toString().toLowerCase() == "true") {
                if (offlineanaliza.toString().toLowerCase() == "true") {
                    return analizasns;
                }
            }
            else {
                return "stop";
            }
        }

        if (task[k].option * 1 == 3) {//procentualno posiljanje 
            var LahkoPosljemSurovine = this.KdajLahkoPoslemSurovine2(task[k]); //pridobi surovine ki jih lahko posljemo
            //var fgsd = LahkoPosljemSurovine == false
            //return true.toString() ;
            //return LahkoPosljemSurovine +"!= false && "+task[k].time +"<= "+CasZdaj;
            if (LahkoPosljemSurovine.toString().toLowerCase() != "false" && task[k].time * 1 <= CasZdaj) {
                return LahkoPosljemSurovine;
            }
        }
        else {//noramlno posiljanje surovin
            var LahkoPosljemSurovine = this.KdajLahkoPoslemSurovine(task[k]);
            if (LahkoPosljemSurovine.toString().toLowerCase() == "true" && task[k].time * 1 <= CasZdaj) {
                return task[k];
            }
        }
    }

    preverjentask = false;
    task = this.TRAIN;
    for (var k = 0; k < task.length; k++) {
        if (task[k] == null || task[k] == undefined) {
            try {
                task.splice(k, 1);
                k--;
            }
            catch (err) { }
            continue;
        }
        if (preverjentask.toString().toLowerCase() == "true" && task[k].joinwithprevious.toString().toLowerCase() != "true") {
            break; //poskribi da ne preverjamo taskov, ki niso joinani s prvim taskom
        }
        if (task[k].active.toString().toLowerCase() != "true") {
            //console.log("Task:");
            //console.log(task[k]);
            //console.log("na pavzi");
            continue;
        }
        preverjentask = true;
        var analizasns = this.PreveriAnalizoNaselja(task[k]);
        if (analizasns.toString().toLowerCase() != "true" ) {//najprej se more analizirat naselje, funkcija sama požene analizo, zato moramo to nit samo ustavit
            if (offlinebot.toString().toLowerCase() == "true") {
                if (offlineanaliza.toString().toLowerCase() == "true") {
                    return analizasns;
                }
            }
            else {
                return "stop";
            }
        }

        var LahkoUrimEnote = this.KdajLahkoUrim(task[k]); //preveri urjenje
        //return LahkoUrimEnote;
        if (LahkoUrimEnote.toString().toLowerCase() == "true" && task[k].time * 1 <= CasZdaj) {
            return task[k];
        }
    }

    preverjentask = false;
    task = this.FESTIVAL;
    for (var k = 0; k < task.length; k++) {
        if (task[k] == null || task[k] == undefined) {
            try {
                task.splice(k, 1);
                k--;
            }
            catch (err) { }
            continue;
        }
        if (preverjentask.toString().toLowerCase() == "true" && task[k].joinwithprevious.toString().toLowerCase() != "true") {
            break; //poskribi da ne preverjamo taskov, ki niso joinani s prvim taskom
        }
        if (!task[k].active) {
            //console.log("Task:");
            //console.log(task[k]);
            //console.log("na pavzi");
            continue;
        }
        preverjentask = true;
        var analizasns = this.PreveriAnalizoNaselja(task[k]);
        if (analizasns.toString().toLowerCase() != "true") {//najprej se more analizirat naselje, funkcija sama požene analizo, zato moramo to nit samo ustavit
            if (offlinebot.toString().toLowerCase() == "true") {
                if (offlineanaliza.toString().toLowerCase() == "true") {
                    return analizasns;
                }
            }
            else {
                return "stop";
            }
        }
        if (task[k].time*1 <= CasZdaj && this.wood * 1 >= task[k].r1 * 1 && this.clay * 1 >= task[k].r2 * 1 && this.iron * 1 >= task[k].r3 * 1 && this.grain * 1 >= task[k].r4 * 1) {
            return task[k];
        }
    }

    preverjentask = false;
    task = this.ARMOR;
    for (var k = 0; k < task.length; k++) {
        if (task[k] == null || task[k] == undefined) {
            try {
                task.splice(k, 1);
                k--;
            }
            catch (err) { }
            continue;
        }
        if (preverjentask.toString().toLowerCase() == "true" &&  task[k].joinwithprevious.toString().toLowerCase() != "true") {
            break; //poskribi da ne preverjamo taskov, ki niso joinani s prvim taskom
        }
        if (task[k].active.toString().toLowerCase() != "true") {
            //console.log("Task:");
            //console.log(task[k]);
            //console.log("na pavzi");
            continue;
        }

        preverjentask = true;
        var analizasns = this.PreveriAnalizoNaselja(task[k]);
        if (analizasns.toString().toLowerCase() != "true") {//najprej se more analizirat naselje, funkcija sama požene analizo, zato moramo to nit samo ustavit
            if (offlinebot.toString().toLowerCase() == "true") {
                if (offlineanaliza.toString().toLowerCase() == "true") {
                    return analizasns;
                }
            }
            else {
                return "stop";
            }
        }
        if (task[k].time*1 <= CasZdaj) {
            return task[k];
        }
    }
    return false; //tu naprej je stara koda, ki je še nisem zbrisal. ignoriraj to. Ce koda pride do sem, se noben task ne more izvest
    task = this.TASKS;
    for (var k = 0; k < task.length; k++) {
        if (task[k].type == "building" && task[k].id * 1 == 0 && task[k].building * 1 == 0) {
            var PoljaZaNadgradnjo = this.NadgradiNajnizjaPolja(task[k]);
            if (PoljaZaNadgradnjo.length == 0) {
                k--; //task je bil zbrisan
            }

            for (var hh = 0; hh < PoljaZaNadgradnjo.length; hh++) {
                var DovoljSurovin = this.KdajLahkoZgradim(PoljaZaNadgradnjo[hh]);
                var DovoljCasGradnje = this.PreveriCasGradnje(PoljaZaNadgradnjo[hh]);
                if (DovoljSurovin && DovoljCasGradnje && task[k].priority == NajnizjaPrioriteta) {
                    var stopnja = PoljaZaNadgradnjo[hh].level * 1 + 1;
                    if (PoljaZaNadgradnjo[hh].underconstruction) {
                        stopnja++;
                    }
                    return { type: "building", villageid: this.villageid, building: PoljaZaNadgradnjo[hh].name, level: stopnja, id: PoljaZaNadgradnjo[hh].id };
                }
            }
        }
        else if (task[k].type == "trade") {
            if (task[k].option * 1 == 3) {
                var LahkoPosljemSurovine = this.KdajLahkoPoslemSurovine2(task[k]);
                if (LahkoPosljemSurovine.toString().toLowerCase() != "false" && task[k].time * 1 <= CasZdaj && task[k].priority == NajnizjaPrioriteta) {

                    return LahkoPosljemSurovine;
                }
            }
            else {
                var LahkoPosljemSurovine = this.KdajLahkoPoslemSurovine(task[k]);
                if (LahkoPosljemSurovine && task[k].time * 1 <= CasZdaj && task[k].priority == NajnizjaPrioriteta) {
                    return task[k];
                }
            }

        }
        else if (task[k].type == "Train") {
            var LahkoUrimEnote = this.KdajLahkoUrim(task[k]);
            if (LahkoUrimEnote && task[k].time * 1 <= CasZdaj && task[k].priority == NajnizjaPrioriteta) {
                return task[k];
            }
        }
        else if (task[k].type == "building") {
            var DovoljSurovin = this.KdajLahkoZgradim(task[k]);
            var DovoljCasGradnje = this.PreveriCasGradnje(task[k]);
            if (DovoljSurovin && DovoljCasGradnje && task[k].priority == NajnizjaPrioriteta) {
                return task[k];
            }
        }
        else if (task[k].type == "ArmorUpgrade") {
            if (task[k].time <= CasZdaj && task[k].priority == NajnizjaPrioriteta) {
                return task[k];
            }
        }
        else if (task[k].type == "Party") {
            if (task[k].time <= CasZdaj && task[k].priority == NajnizjaPrioriteta && this.wood * 1 >= task[k].r1 * 1 && this.clay * 1 >= task[k].r2 * 1 && this.iron * 1 >= task[k].r3 * 1 && this.grain * 1 >= task[k].r4 * 1) {
                return task[k];
            }
        }

    }
    return false;
}


Village.prototype.KdajLahkoZgradim = function (stavba) {

    var TaStavba
    var StevilkaZgradbe;
    var StopnjaZgradbe;
    try {
        TaStavba = this.POLJA[stavba.id];

        StevilkaZgradbe = TaStavba.name;
        StopnjaZgradbe = TaStavba.level;

        if (StevilkaZgradbe == undefined || StopnjaZgradbe == undefined) {
            return false;
        }
    }
    catch (err) {
        if (stavba.id * 1 == 40) {
            TaStavba = new Polje();
            TaStavba.name = stavba.building;
            TaStavba.level = 0;
            TaStavba.underconstruction = false;
            StevilkaZgradbe = TaStavba.name;
            StopnjaZgradbe = TaStavba.level;
        }

    }


    var stopnja2 = StopnjaZgradbe * 1 + 1;
    if (TaStavba.underconstruction) {
        stopnja2++;
    }


    var Stavba;
    var PotrebenLes;
    var PotrebenGlina;
    var PotrebenZelezo;
    var PotrebenZito;
    if (StevilkaZgradbe == 0) {
        StevilkaZgradbe = stavba.building;
    }
    try {


        Stavba = Stavbe[StevilkaZgradbe][stopnja2];
        if (StevilkaZgradbe * 1 == 13 && (TravianServer == 4 || TravianServer == 4.2)) { Stavba = Forge[stopnja2] }
        PotrebenLes = Stavba[0];
        PotrebenGlina = Stavba[1];
        PotrebenZelezo = Stavba[2];
        PotrebenZito = Stavba[3];

    }
    catch (err) {
        return false;
    }


    var surovine = this.PridobiSurovine();

    var SkupajLes = surovine.wood;
    var SkupajGlina = surovine.clay;
    var SkupajZelezo = surovine.iron;
    var SkupajZito = surovine.grain;

    var PremaloLes = SkupajLes - PotrebenLes * 1;
    var PremaloGlina = SkupajGlina - PotrebenGlina * 1;
    var PremaloZelezo = SkupajZelezo - PotrebenZelezo * 1;
    var PremaloZito = SkupajZito - PotrebenZito * 1;

    if (PremaloLes >= 0 && PremaloGlina >= 0 && PremaloZelezo >= 0 && PremaloZito >= 0) {
        return true;
    }
    else {
        return false
    }

}
Village.prototype.PreveriCasGradnje = function (stavba) {
    var Gradnja = stavba;
    var CasZdaj2 = new Date();
    CasZdaj2.setMilliseconds(0);
    var CasGradnje1 = new Date(this.FieldTime*1);
    var CasGradnje2 = new Date(this.BuildingTime*1);


    var RazlikaCasov1 = CasGradnje1.getTime() - CasZdaj2.getTime();
    var RazlikaCasov2 = CasGradnje2.getTime() - CasZdaj2.getTime();

    var LahkoZgradimPolje = true;
    var LahkoZgradimMestno = true;

    if (RazlikaCasov1 > 0) {
        LahkoZgradimPolje = false;
    }

    if (RazlikaCasov2 * 1 > 0) {
        LahkoZgradimMestno = false;
    }

    if (stavba.name * 1 <= 4 || stavba.building * 1 <= 4) {
        TipTeGradnje = LahkoZgradimPolje;
    }
    else {
        TipTeGradnje = LahkoZgradimMestno;
    }

    if ((LahkoZgradimPolje && LahkoZgradimMestno) || (TipTeGradnje && PLAYER.tribe == 0))//lahko zgradim
    {
        return true;
    }
    else//ne morem zgradit
    {
        return false;
    }
}



Village.prototype.AnalizirajNaselje = function () {
    document.getElementById("Analiza").setAttribute("villageid", this.villageid);
    document.getElementById("Analiza").setAttribute("tip", "");
    var nadaljevalnaskripta = "";
    //nadaljevalnaskripta += "unsafeWindow.Stopped=false;";
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus(\"" + prevodi.translate273 + "\");"
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZE=NovCas.getTime()+DodatenCas;";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOT=NovCas.getTime()+RandomXtoY(unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOTintervalMIN*60000,unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOTintervalMAX*60000);";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").UpdateCasAnalizeEnot();";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate275 + "\",'Analysing'," + this.villageid + "));";
    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();
}






Village.prototype.setVillage = function (obj) {
    for (var key in obj) {
        this[key] = obj[key];
    }
}




function PreurediTaske(taski) {
    var novi = [];

    if (taski.length > 0) {
        for (var pri = 0; pri < 6; pri++) {
            var prvi = true;
            for (var k = 0; k < taski.length; k++) {
                if (taski[k].priority == pri) {
                    if (prvi) {
                        taski[k].joinwithprevious = false;
                        prvi = false;
                    }
                    else {
                        taski[k].joinwithprevious = true; ;
                    }
                    delete taski[k].priority;
                    novi.push(taski[k]);
                }
            }
        }
    }
    return novi;
}

Village.prototype.UpdateCasAnalizeEnot = function () {
    var nov = new Date(this.CASANALIZEENOT*1);
    document.getElementById("CasAnalizeEnot" + this.villageid).innerHTML = vDatum(nov.getTime());
}
Village.prototype.UpdateFarmDisplay = function () {
    try {
        var vrstica = document.getElementById("Farme" + this.villageid).getElementsByTagName("tr");
        for (var i = 0; i < vrstica.length; i++) {
            if (vrstica[i].getAttribute("tasknumber") * 1 == this.FARMNUMBER && vrstica[i].getAttribute("tasknumber") * 1 != 0) {
                vrstica[i].setAttribute("class", "trenutnafarma");
            }
            else {
                vrstica[i].setAttribute("class", "ostalefarme");
            }
        }
    }
    catch (err) { }
}

Village.prototype.AnalizirajNaseljeInZacni = function () {
    document.getElementById("Analiza").setAttribute("villageid", this.villageid);
    document.getElementById("Analiza").setAttribute("tip", "");
    var nadaljevalnaskripta = "";
    //nadaljevalnaskripta += "unsafeWindow.Stopped=false;";
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus('Finished with analysing');";
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOT=NovCas.getTime()+RandomXtoY(unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOTintervalMIN*60000,unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOTintervalMAX*60000);";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").UpdateCasAnalizeEnot();";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZE=NovCas.getTime()+DodatenCas;";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate275 + "\",'Analysing'," + this.villageid + "));";
    nadaljevalnaskripta += "if (unsafeWindow.Stopped == false) {setTimeout(function(){if(unsafeWindow.Stopped == false){unsafeWindow.StartEvent()}}, 2200);}";
    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();
}

Village.prototype.AnalizirajZbiralisceInZacni = function () {
    document.getElementById("Analiza").setAttribute("villageid", this.villageid);
    document.getElementById("Analiza").setAttribute("tip", "zbiralisce");
    var nadaljevalnaskripta = "";
    //nadaljevalnaskripta += "unsafeWindow.Stopped=false;";
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus('Finished with analysing');";
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOT=NovCas.getTime()+RandomXtoY(unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOTintervalMIN*60000,unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZEENOTintervalMAX*60000);";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").UpdateCasAnalizeEnot();";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZE=NovCas.getTime()+DodatenCas;";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate288 + "\",'Analysing'," + this.villageid + "));";
    nadaljevalnaskripta += "if (unsafeWindow.Stopped == false) {setTimeout(function(){if(unsafeWindow.Stopped == false){unsafeWindow.StartEvent()}}, 2200);}";
    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();
}

Village.prototype.AnalizirajDorf1InZacni = function () {
    document.getElementById("Analiza").setAttribute("villageid", this.villageid);
    document.getElementById("Analiza").setAttribute("tip", "dorf1");
    var nadaljevalnaskripta = "";
    //nadaljevalnaskripta += "unsafeWindow.Stopped=false;";
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus('Finished with analysing');";
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZE=NovCas.getTime()+DodatenCas;";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate289 + "\",'Analysing'," + this.villageid + "));";
    nadaljevalnaskripta += "if (unsafeWindow.Stopped == false) {setTimeout(function(){if(unsafeWindow.Stopped == false){unsafeWindow.StartEvent()}}, 2200);}";
    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();
}

Village.prototype.AnalizirajDorf2InZacni = function () {
    document.getElementById("Analiza").setAttribute("villageid", this.villageid);
    document.getElementById("Analiza").setAttribute("tip", "dorf2");
    var nadaljevalnaskripta = "";
    //nadaljevalnaskripta += "unsafeWindow.Stopped=false;";
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus('Finished with analysing');";
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZE=NovCas.getTime()+DodatenCas;";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate290 + "\",'Analysing'," + this.villageid + "));";
    nadaljevalnaskripta += "if (unsafeWindow.Stopped == false) {setTimeout(function(){if(unsafeWindow.Stopped == false){unsafeWindow.StartEvent()}}, 2200);}";
    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();
}

Village.prototype.AnalizirajTrznicoInZacni = function () {
    document.getElementById("Analiza").setAttribute("villageid", this.villageid);
    document.getElementById("Analiza").setAttribute("tip", "trznica");
    var nadaljevalnaskripta = "";
    //nadaljevalnaskripta += "unsafeWindow.Stopped=false;";
    nadaljevalnaskripta += "unsafeWindow.SpremeniStatus('Finished with analysing');";
    nadaljevalnaskripta += "var NovCas=new Date();";
    nadaljevalnaskripta += "var DodatenCas=RandomXtoY(unsafeWindow.PLAYER.intervalanalizeMin*60000,unsafeWindow.PLAYER.intervalanalizeMax);";
    //nadaljevalnaskripta += "unsafeWindow.PLAYER.getVillage(" + this.villageid + ").CASANALIZE=NovCas.getTime()+DodatenCas;";
    nadaljevalnaskripta += "unsafeWindow.PLAYER.logs.push(new unsafeWindow.LogData(\"" + prevodi.translate291 + "\",'Analysing'," + this.villageid + "));";
    nadaljevalnaskripta += "if (unsafeWindow.Stopped == false) {setTimeout(function(){if(unsafeWindow.Stopped == false){unsafeWindow.StartEvent()}}, 2200);}";
    document.getElementById("Analiza").setAttribute("nadaljuj", nadaljevalnaskripta);
    document.getElementById("Analiza").click();
}


function PridobiTipTaska(tip) {
    switch (tip) {
        case "building":
            return "BUILD";
        case "trade":
            return "TRADE";
        case "Party":
            return "FESTIVAL";
        case "ArmorUpgrade":
            return "ARMOR";
        case "Train":
            return "TRAIN";
        case "demolish":
            return "DEMOLISH";
        case "farm":
            return "FARME";
    }
}

Village.prototype.IzbrisiTask = function (task) {
    if (task.tasknumber)
        var tasknumber = task.tasknumber;
    else
        var tasknumber = task;

    if (offlinebot) {
        var tipTaska = PridobiTipTaska(task.type);
        var taski = this[tipTaska];

        for (var i = 0; i < taski.length; i++) {
            if (taski[i].tasknumber == tasknumber) {
                taski.splice(i, 1);
                break;
            }
        }
        return;
    }

    var TaskZaIzbris = document.evaluate(".//input[@villageid='" + this.villageid + "'][@tasknumber='" + tasknumber + "'][@tip='task']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (TaskZaIzbris.snapshotLength) {
        var notranji = TaskZaIzbris.snapshotItem(0).parentNode;
        var prejsnji = notranji.previousSibling;
        var naslednji = notranji.nextSibling;
        var zunanji = notranji.parentNode;
        zunanji.removeChild(notranji);
        var zunanjizunanji = zunanji.parentNode;
        var tipTaska = zunanjizunanji.getAttribute("class");
        if (zunanji.childNodes.length > 0) {
            try {
                zunanji.removeChild(prejsnji);
            }
            catch (err) {
                try {
                    zunanji.removeChild(naslednji);
                }
                catch (err) {
                }
            }
        }
        else {
            zunanjizunanji.removeChild(zunanji);
        }
        PrikazCheckboxov(zunanjizunanji);
        var taski = this[tipTaska];
        for (var i = 0; i < taski.length; i++) {
            if (taski[i].tasknumber == tasknumber) {
                taski.splice(i, 1);
                break;
            }
        }


        return;
        TaskZaIzbris.snapshotItem(0).click();

        TaskZaIzbris.snapshotItem(0).parentNode.parentNode.removeChild(TaskZaIzbris.snapshotItem(0).parentNode);
        for (var qwq = 0; qwq < this.TASKS.length; qwq++) {
            if (this.TASKS[qwq].tasknumber * 1 == tasknumber * 1) {
                this.TASKS.splice(qwq, 1);
                break;
            }
        }
    }
}

Village.prototype.PovecajCasUrjenja = function (tasknumber) {
    var cas = new Date();
    for (var qwq = 0; qwq < this.TRAIN.length; qwq++) {
        if (this.TRAIN[qwq].tasknumber * 1 == tasknumber * 1) {
            if (this.TRAIN[qwq].option == 1) {
                this.TRAIN[qwq].time = cas.getTime() + this.TRAIN[qwq].optionValue * 60000;
            }
        }
    }
}

Village.prototype.PovecajCasTrgovanja = function (task) {
    var cas = new Date(); 
    for (var qwq = 0; qwq < this.TRADE.length; qwq++) {
        if (this.TRADE[qwq].tasknumber * 1 == task.tasknumber * 1) {

            if (this.TRADE[qwq].option * 1 == 2) {
                this.TRADE[qwq].time = cas.getTime() + this.TRADE[qwq].optionValue * 60000;
            }
            if (this.TRADE[qwq].option * 1 == 1) {
                var HitrostTehTrgovcev = Hitrosttrgovcev[PLAYER.tribe * 1];
                var Razdalja = PridobiRazdaljo(parseFloat(task.x ), parseFloat(task.y), parseFloat(this.x), parseFloat(this.y));
                var CasPotovanja = Math.ceil(Razdalja * 7200000 / (HitrostTehTrgovcev * PLAYER.speed));
                this.TRADE[qwq].time = cas.getTime() + CasPotovanja;
            }

        }
    }
}

Village.prototype.IzbrisiFarmo = function (tasknumber) {
    var jestartfarm = false;
    var FarmaZaIzbris = document.evaluate(".//input[@villageid='" + this.villageid + "'][@tasknumberfarm='" + tasknumber + "']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (FarmaZaIzbris.snapshotLength) {
        FarmaZaIzbris.snapshotItem(0).parentNode.parentNode.parentNode.removeChild(FarmaZaIzbris.snapshotItem(0).parentNode.parentNode);
        for (var ff = 0; ff < this.FARME.length; ff++) {
            if (this.FARME[ff].tasknumber * 1 == tasknumber * 1) {
                this.FARME.splice(ff, 1);
                if (tasknumber * 1 == this.FARMNUMBER) {
                    if (this.FARME[ff] != undefined) {
                        this.FARMNUMBER = this.FARME[ff].tasknumber;
                    }
                    else if (this.FARME[0] != undefined) {
                        this.FARMNUMBER = this.FARME[0].tasknumber;
                    }
                }
                /*
                if (tasknumber * 1 == this.STARTFARM) {
                    if (this.FARME[ff] != undefined) {
                        this.STARTFARM = this.FARME[ff].tasknumber;
                    }
                    else if (this.FARME[0] != undefined) {
                        this.STARTFARM = this.FARME[0].tasknumber;
                    }
                }*/
                break;
            }
        }
    }
    this.UpdateFarmDisplay();
}

Village.prototype.PreveriFarmo = function (TaFarma) {
    this.checkedfarms = this.checkedfarms+1;
    var ImeFarme = TaFarma.name;
    var IdFarme = TaFarma.link; //.split("&")[0];
    var Enota1 = TaFarma.troops[0] * 1;
    var Enota2 = TaFarma.troops[1] * 1;
    var Enota3 = TaFarma.troops[2] * 1;
    var Enota4 = TaFarma.troops[3] * 1;
    var Enota5 = TaFarma.troops[4] * 1;
    var Enota6 = TaFarma.troops[5] * 1;
    var Enota7 = TaFarma.troops[6] * 1;
    var Enota8 = TaFarma.troops[7] * 1;
    var Enota9 = TaFarma.troops[8] * 1;
    var Enota10 = TaFarma.troops[9] * 1;
    var Enota11 = TaFarma.troops[10] * 1;
    var TipNapada = TaFarma.att * 1;
    var Aktivna = TaFarma.work;
    var Naselje = TaFarma.village;
    if (Enota1 != 0 || Enota2 != 0 || Enota3 != 0 || Enota4 != 0 || Enota5 != 0 || Enota6 != 0 || Enota7 != 0 || Enota8 != 0 || Enota9 != 0 || Enota10 != 0 || Enota11 != 0) {//vsaj ena enota je razlica od nic
        if (Aktivna == "true" || Aktivna == true) {
                return true; //"Lahko posljem enote";
        }
    }
    return false
}



Village.prototype.Farmaj = function () {
    if (this.FARMON) {
        this.UpdateFarmDisplay();
        var NovCas = new Date();
        var Trenutencas = new Date();
        var StFarme = this.FARMNUMBER;
        var Enote = [];
        for (var znj = 0; znj < this.ENOTEDOMA.length; znj++) {
            Enote.push(this.ENOTEDOMA[znj]);
        }
        var Farme = this.FARME;
        //        this.PreveriStartFarmo();
        //        if (this.FARMNUMBER == Farme[Farme.length-1].tasknumber) {
        //            this.FARMNUMBER = 0;
        //        }

        if (this.STARTFARM == -1 && this.CASANALIZEENOT * 1 <= NovCas.getTime()) {
            /*for (i = 0; i < Farme.length; i++)
            {
                if (this.FARMNUMBER == Farme[i].tasknumber) {
                    this.STARTFARM = i;
                }
                
            }
            if (this.STARTFARM == -1)
            {*/
                this.STARTFARM = 0;
            //}
            this.checkedfarms = 0;
            /*console.log("farming time")
            this.STARTFARM = Math.min(this.FARMNUMBER, Farme.length-1);
            if (this.STARTFARM == 0)
            {
                this.STARTFARM = Farme.length;
            }
            console.log(Farme)
            console.log(Farme.length)
            console.log(this.STARTFARM)*/

        }
        else if (this.STARTFARM == -1) {
            return false;
        }
        
        var zacetnafarma = 0;
        for (i = 0; i < Farme.length; i++) {
            if (this.FARMNUMBER == Farme[i].tasknumber) {
                zacetnafarma = i+1;
            }
        }
        console.log("zacetnafarma:" + zacetnafarma)
        var nadaljujpreverjanje = true;
        for (var i = zacetnafarma; i < Farme.length; i++)
        {

            var lahkoposljem = this.PreveriFarmo(Farme[i])
            console.log("checkedfarms:" + this.checkedfarms)
            if (this.checkedfarms > Farme.length) {
                nadaljujpreverjanje = false;
                break
            }
            if (lahkoposljem)
            {
                return Farme[i]
            }
        }
        console.log("STARTFARM:" + this.STARTFARM)
        console.log("nadaljujpreverjanje:" + nadaljujpreverjanje)
        if (nadaljujpreverjanje) {
            for (var i = 0; i < Farme.length; i++) {
                var lahkoposljem = this.PreveriFarmo(Farme[i])
                console.log("checkedfarms:" + this.checkedfarms)
                if (this.checkedfarms > Farme.length) {
                    break
                }
                if (lahkoposljem) {
                    return Farme[i]
                }
            }
        }
        this.CASANALIZEENOT = NovCas.getTime() + randomXToY(this.CASANALIZEENOTintervalMIN * 60000, this.CASANALIZEENOTintervalMAX * 60000);
        this.STARTFARM = -1;
        this.checkedfarms = 0;
        this.UpdateCasAnalizeEnot();
        return false;

    }
    else {
        return false;
    }
    return false;
}

Village.prototype.DodajFarmo = function (Farma) {
    var ErrorTukaj = false;
    try {
        div2 = document.getElementById("Farme" + Farma.villageid);
    }
    catch (err) {
        ErrorTukaj = true;
        return;
    }

    var ex123 = ".//div[@id='Farme" + Farma.villageid + "'][@name='" + Farma.villageid + "']";
    DivFarmlistToNaselje = document.evaluate(ex123, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    if (DivFarmlistToNaselje.snapshotLength) {
        TabelaFarm = DivFarmlistToNaselje.snapshotItem(0).childNodes[0];

        TaFarma = document.createElement("tr");
        TaFarma.setAttribute("tasknumber", Farma.tasknumber);
        TaFarma.setAttribute("villageid", Farma.villageid);
        LastnostActive = document.createElement("td");
        CheckBox = document.createElement("input");
        CheckBox.type = "checkbox";
        CheckBox.id = "farma-4";
        CheckBox.setAttribute("tasknumberfarm", Farma.tasknumber);
        CheckBox.setAttribute("villageid", Farma.villageid);
        try {
            CheckBox.setAttribute("name", Farma.link.split("&")[0]);
        }
        catch (err) {
            CheckBox.setAttribute("name", Farma.link);
        }
        if (Farma.work == "true" || Farma.work == true) {
            CheckBox.checked = true;
        }

        CheckBox.addEventListener('click', posodobiFarmo, true);
        LastnostActive.appendChild(CheckBox);
        CheckBox = null;
        TaFarma.appendChild(LastnostActive);

        TaLastnost = document.createElement("td");
        TaLastnost.innerHTML = Farma.name;
        TaLastnost.id = "farma-1";
        TaLastnost.title = prevodi.edit;
        TaLastnost.setAttribute("vrednost", "name");
        TaLastnost.setAttribute("tasknumberfarm", Farma.tasknumber);
        TaLastnost.setAttribute("villageid", Farma.villageid);
        TaLastnost.addEventListener('dblclick', posodobiFarmo, true);
        TaFarma.appendChild(TaLastnost);
        TaLastnost = null;

        LastnostLink = document.createElement("td");
        var crka = "d";
        if (TravianServer == 3) {
            crka = "z";
        }
        console.log(Farma)
        var farmvilid = Farma.link+""
        var farmvilid = farmvilid.split("amp;").join("")
        var koordX = PLAYER.getXfromCoord(farmvilid);
        var koordY = PLAYER.getYfromCoord(farmvilid);
        try {
            TaLink = "position_details.php?x=" + koordX + "&y=" +koordY;
        }
        catch (err) {
            TaLink = "karte.php?" + crka + "=" + Farma.link;
        }
        MojLink = document.createElement("div");
        MojLink.setAttribute("link", TaLink);
        MojLink.setAttribute("vrednost", "link");
        MojLink.setAttribute("style", "color:blue; cursor:pointer;");
        MojLink.innerHTML = "link";
        MojLink.setAttribute("villageid", Farma.villageid);
        MojLink.setAttribute("tasknumberfarm", Farma.tasknumber);
        MojLink.addEventListener('click', posodobiFarmo, true);

        LastnostLink.appendChild(MojLink);
        MojLink = null;
        TaFarma.appendChild(LastnostLink);

        for (var stevilkalastnosti = 0; stevilkalastnosti < Farma.troops.length; stevilkalastnosti++) {
            VrednostLastnosti = Farma.troops[stevilkalastnosti];
            TaLastnost = document.createElement("td");
            TaLastnost.title = prevodi.edit;
            TaLastnost.innerHTML = VrednostLastnosti;
            TaLastnost.id = "farma-" + stevilkalastnosti;
            TaLastnost.setAttribute("vrednost", "t" + stevilkalastnosti);
            TaLastnost.setAttribute("troop", stevilkalastnosti);
            TaLastnost.addEventListener('dblclick', posodobiFarmo, true);
            TaLastnost.setAttribute("tasknumberfarm", Farma.tasknumber);
            TaLastnost.setAttribute("villageid", Farma.villageid);
            TaFarma.appendChild(TaLastnost);
            TaLastnost = null;
        }

        TaLastnost = document.createElement("td");
        TaLastnost.title = prevodi.edit;
        TaLastnost.innerHTML = Farma.att;
        TaLastnost.id = "farma-3";
        TaLastnost.setAttribute("vrednost", "att");
        TaLastnost.addEventListener('dblclick', posodobiFarmo, true);
        TaLastnost.setAttribute("tasknumberfarm", Farma.tasknumber);
        TaLastnost.setAttribute("villageid", Farma.villageid);
        TaFarma.appendChild(TaLastnost);
        TaLastnost = null;

        ElementOdstrani = document.createElement("td");
        GumbOdstrani = document.createElement("input");
        GumbOdstrani.type = "button";
        GumbOdstrani.value = "x";
        GumbOdstrani.setAttribute("class", "Mali");
        GumbOdstrani.setAttribute("tasknumberfarm", Farma.tasknumber);
        GumbOdstrani.setAttribute("villageid", Farma.villageid);
        GumbOdstrani.addEventListener('click', posodobiFarmo, true);

        ElementOdstrani.appendChild(GumbOdstrani);
        GumbOdstrani = null;
        TaFarma.appendChild(ElementOdstrani);

        TabelaFarm.appendChild(TaFarma);


    }
    else {
        //alert("ne najdem");
    }
}

Village.prototype.DodajTrgovanje = function (TaVredsnost) {
    var ErrorTukaj = false;
    try {
        div2 = document.getElementById("Naselje" + TaVredsnost.villageid);
    }
    catch (err) {
        ErrorTukaj = true;
        return;
    }

    var villageid = TaVredsnost.villageid;
    var PrioritetaTrgovanje = TaVredsnost.priority;
    var koordinataX = TaVredsnost.x;
    var koordinataY = TaVredsnost.y;
    var VrednostOpcije = TaVredsnost.option;
    var PrikazBoxa = TaVredsnost.optionValue;


    if (PodatkiNalozeni && !ErrorTukaj) {
        var KoncniDodatek = "";

        if (VrednostOpcije * 1 == 2) {
            KoncniDodatek = ", " + prevodi.repetevery + " " + PrikazBoxa + " " + prevodi.minutes;
        }
        else if (VrednostOpcije * 1 == 1) {
            KoncniDodatek = ", " + prevodi.sendonreturn;
        }
        else if (VrednostOpcije * 1 == 3) {
            KoncniDodatek = ", Min res: " + TaVredsnost.optionValue;
        }
        DivNaselje = document.createElement("div");

        X1 = document.createElement("input");
        X1.value = "x";
        X1.type = "button";
        X1.setAttribute("villageid", villageid);
        X1.setAttribute("tasknumber", TaVredsnost.tasknumber);
        X1.setAttribute("prioriteta", PrioritetaTrgovanje);
        X1.addEventListener('click', IzbrisiGradnjoHandler, true);

        if (VrednostOpcije * 1 == 3) {
            var LesZaDodat = TaVredsnost.woodEmpty * 100;
            var GlinaZaDodat = TaVredsnost.clayEmpty * 100;
            var ZelezoZaDodat = TaVredsnost.ironEmpty * 100;
            var ZitoZaDodat = TaVredsnost.grainEmpty * 100;
            var LesZaSprejet = TaVredsnost.woodAccept * 100;
            var GlinaZaSprejet = TaVredsnost.clayAccept * 100;
            var ZelezoZaSprejet = TaVredsnost.ironAccept * 100;
            var ZitoZaSprejet = TaVredsnost.grainAccept * 100;
            ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + prevodi.empty + " [" + LesZaDodat + "," + GlinaZaDodat + "," + ZelezoZaDodat + "," + ZitoZaDodat + "]% " + prevodi.fill + ": [" + LesZaSprejet + "," + GlinaZaSprejet + "," + ZelezoZaSprejet + "," + ZitoZaSprejet + "]% " + prevodi.priority + ": " + Priority[PrioritetaTrgovanje] + KoncniDodatek;

        }
        else {
            ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + "[" + TaVredsnost.wood + "," + TaVredsnost.clay + "," + TaVredsnost.iron + "," + TaVredsnost.grain + "] " + prevodi.priority + ": " + Priority[PrioritetaTrgovanje] + KoncniDodatek;
        }
        DivNaselje.appendChild(X1);
        X1 = null;
        var Nal1 = document.createElement("j");

        Nal1.innerHTML = ImeStavbe + '<br>';
        DivNaselje.appendChild(Nal1);
        DivNaselje.style.display = "none";
        div2.appendChild(DivNaselje);
        $(DivNaselje).slideDown(500, function () {
        });


    }


}





Village.prototype.DodajVCakalnoVrsto = function (TaVredsnost) {
    var ErrorTukaj = false;
    try {
        var div2 = document.getElementById(TaVredsnost.type + TaVredsnost.villageid);
    }
    catch (err) {
        ErrorTukaj = true;
        return;
    }

    if (PodatkiNalozeni && !ErrorTukaj) {
        var DivNaselje = document.createElement("div");
        DivNaselje.setAttribute("class", "column1");
        DivNaselje.setAttribute("draggable", "true");
        DivNaselje.setAttribute("villageid", TaVredsnost.villageid);
        var pausevalue = "ᐅ";

        if (TaVredsnost.active + "" == "undefined") {
            TaVredsnost.active = true;
        }

        if (TaVredsnost.active) {
            pausevalue = "| |";
        }
        var pausegumb = '<input type="button" value="' + pausevalue + '" tip="pause" tasknumber="' + TaVredsnost.tasknumber + '" villageid="' + TaVredsnost.villageid + '" class="ureditask">';

        var vsebina = '<div style="overflow:hidden;"><input type="button" id="' + TaVredsnost.type + TaVredsnost.tasknumber + '" tip="task" value="X" tasknumber="' + TaVredsnost.tasknumber + '" villageid="' + TaVredsnost.villageid + '">' + pausegumb + '<span>';
        /*
        var input = document.createElement("input");
        if (PLAYER.FARMLISTE[farmlista].active) {
        input.value = "| |";
        }
        else {
        input.value = "ᐅ";
        }
        input.setAttribute("class", "editfarmlist");
        input.addEventListener('mouseout', hideddrivetip, true);
        input.addEventListener('mouseover', PauseFarmlistTip, true);


        input.type = "button";
        input.setAttribute("lid", PLAYER.FARMLISTE[farmlista].lid);
        input.setAttribute("FARMLISTEtasknumber", PLAYER.FARMLISTE[farmlista].tasknumber);
        //input.setAttribute("id", "FARMLISTEtasknumber" + PLAYER.FARMLISTE[farmlista].tasknumber);
        input.style.cursor = "pointer";
        input.addEventListener('click', OmogociFarmlistoHandler, true);
        gumbPridobiLink3.appendChild(input);
        */

        switch (TaVredsnost.type) {
            case "building":
                if (TaVredsnost.building * 1 == 0 && TaVredsnost.id * 1 == 0) {
                    var ImeStavbe2 = prevodi.allfields + ":";
                    if (!TaVredsnost.fields) {
                        TaVredsnost.fields = {
                            wood: true,
                            clay: true,
                            iron: true,
                            crop: true
                        }
                    }
                    ImeStavbe2 += "  <input type='checkbox' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' polje='wood' tip='vsapolja'";
                    if (TaVredsnost.fields.wood) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> wood";

                    ImeStavbe2 += "  <input type='checkbox' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' polje='clay' tip='vsapolja'";
                    if (TaVredsnost.fields.clay) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> clay ";


                    ImeStavbe2 += "  <input type='checkbox' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' polje='iron' tip='vsapolja'";
                    if (TaVredsnost.fields.iron) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> iron ";

                    ImeStavbe2 += "  <input type='checkbox' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' polje='crop' tip='vsapolja'";
                    if (TaVredsnost.fields.crop) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> crop; ";

                    var stopnja = "<select villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "' class='ureditask' tip='level'>";
                    for (var kkj = 1; kkj < 21; kkj++) {
                        stopnja += "<option value='" + kkj + "'>" + kkj + "</option>";
                    }
                    stopnja += "</select>";
                    vsebina += prevodi.translate1 + ":" + ImeStavbe2 + " " + prevodi.translate158 + " " + stopnja;
                }
                else {
                    var stopnja = "<select villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "' class='ureditask' tip='level'>";
                    for (var kkj = 1; kkj < Stavbe[TaVredsnost.building].length; kkj++) {
                        stopnja += "<option value='" + kkj + "'>" + kkj + "</option>";
                    }
                    stopnja += "</select>";
                    var ImeStavbe2 = prevodi.buldings[TaVredsnost.building];
                    vsebina += prevodi.translate1 + ': ID: ' + TaVredsnost.id + "; " + ImeStavbe2 + " " + stopnja;
                }
                break;
            case "trade":
                var koordinataX = TaVredsnost.x;
                var koordinataY = TaVredsnost.y;
                var VrednostOpcije = TaVredsnost.option;
                var PrikazBoxa = TaVredsnost.optionValue;

                var KoncniDodatek = "";

                if (TaVredsnost.option * 1 == 2) {
                    KoncniDodatek = ", " + prevodi.repetevery + " " + PrikazBoxa + " " + prevodi.minutes;
                }
                else if (TaVredsnost.option * 1 == 1) {
                    KoncniDodatek = ", " + prevodi.sendonreturn;
                }
                else if (TaVredsnost.option * 1 == 3) {

                    if (typeof TaVredsnost.round === 'undefined') {
                        TaVredsnost.round = 100;
                    }
                    if (typeof TaVredsnost.fullmerchants === 'undefined') {
                        TaVredsnost.fullmerchants = false;
                    }
                    var optionvalueselect = "<input type='text' size='1' value='" + TaVredsnost.optionValue + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='optionValue'>";
                    KoncniDodatek = ", " + prevodi.translate156 + ": " + optionvalueselect + "; ";
                }
                var nselje11 = PLAYER.getVillageFromXY(koordinataX, koordinataY)
                var naseljeselect = "";
                if (nselje11.toString().toLowerCase() != "false") {
                    naseljeselect = "<select villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "' class='ureditask' tip='izberinaselje'>";
                    for (var kkj = 0; kkj < PLAYER.villages.length; kkj++) {
                        naseljeselect += "<option value='" + PLAYER.villages[kkj].ID + "'>" + PLAYER.villages[kkj].name + " (" + PLAYER.villages[kkj].x + "|" + PLAYER.villages[kkj].y + ")</option>";
                    }
                    naseljeselect += "</select>";
                }
                else {

                    naseljeselect = "<input type='text' size='1' value='" + koordinataX + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='x'>" + "|" + "<input type='text' size='1' value='" + koordinataY + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='y'>";
                }

                if (TaVredsnost.option * 1 == 3) {
                    var LesZaDodat = TaVredsnost.woodEmpty * 100;
                    var GlinaZaDodat = TaVredsnost.clayEmpty * 100;
                    var ZelezoZaDodat = TaVredsnost.ironEmpty * 100;
                    var ZitoZaDodat = TaVredsnost.grainEmpty * 100;
                    var LesZaSprejet = TaVredsnost.woodAccept * 100;
                    var GlinaZaSprejet = TaVredsnost.clayAccept * 100;
                    var ZelezoZaSprejet = TaVredsnost.ironAccept * 100;
                    var ZitoZaSprejet = TaVredsnost.grainAccept * 100;
                    var selectround = "Round to:<select villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "' class='ureditask' tip='zaokrozevanje'><option value='50'>50</option><option value='100'>100</option><option value='250'>250</option><option value='500'>500</option><option value='1000'>1000</option></select>";
                    var polnitrgovci = "Send only full merchants<input type='checkbox' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='polnitrgovci'";
                    if (TaVredsnost.fullmerchants) {
                        polnitrgovci += " checked";
                    }
                    polnitrgovci += ">";
                    var inputles = "<input type='text' size='1' value='" + LesZaDodat + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='woodEmpty'>";
                    var inputglina = "<input type='text' size='1' value='" + GlinaZaDodat + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='clayEmpty'>";
                    var inputzelezo = "<input type='text' size='1' value='" + ZelezoZaDodat + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='ironEmpty'>";
                    var inputzito = "<input type='text' size='1' value='" + ZitoZaDodat + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='grainEmpty'>";

                    var inputles2 = "<input type='text' size='1' value='" + LesZaSprejet + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='woodAccept'>";
                    var inputglina2 = "<input type='text' size='1' value='" + GlinaZaSprejet + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='clayAccept'>";
                    var inputzelezo2 = "<input type='text' size='1' value='" + ZelezoZaSprejet + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='ironAccept'>";
                    var inputzito2 = "<input type='text' size='1' value='" + ZitoZaSprejet + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='grainAccept'>";

                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + naseljeselect + " " + prevodi.empty + " [" + inputles + "," + inputglina + "," + inputzelezo + "," + inputzito + "]% " + prevodi.fill + ": [" + inputles2 + "," + inputglina2 + "," + inputzelezo2 + "," + inputzito2 + "]% " + KoncniDodatek + selectround + polnitrgovci;

                }
                else {
                    var inputles = "<input type='text' size='1' value='" + TaVredsnost.wood + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='wood'>";
                    var inputglina = "<input type='text' size='1' value='" + TaVredsnost.clay + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='clay'>";
                    var inputzelezo = "<input type='text' size='1' value='" + TaVredsnost.iron + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='iron'>";
                    var inputzito = "<input type='text' size='1' value='" + TaVredsnost.grain + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='grain'>";
                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + naseljeselect + " " + "[" + inputles + "," + inputglina + "," + inputzelezo + "," + inputzito + "] " + KoncniDodatek;
                }

                vsebina += ImeStavbe;
                break;
            case "Party":
                var inputrepeat = "<input type='text' size='1' value='" + TaVredsnost.repeat + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='repeat'>";
                ImeStavbe = prevodi.translate5 + ": " + PartyType[TaVredsnost.festival] + "  " + prevodi.translate154 + ": " + inputrepeat + " " + prevodi.translate18 + ".";
                vsebina += ImeStavbe;
                break;
            case "ArmorUpgrade":
                var stopnja = "<select villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "' class='ureditask' tip='level'>";
                for (var kkj = 1; kkj < 21; kkj++) {
                    stopnja += "<option value='" + kkj + "'>" + kkj + "</option>";
                }
                stopnja += "</select>";

                ImeStavbe = prevodi.translate6 + ": [" + TaVredsnost.unit + "]; " + prevodi.translate158 + " " + stopnja;
                vsebina += ImeStavbe;
                break;
            case "Train":
                var KoncniDodatek = "";
                var optionvalueselect = "<input type='text' size='1' value='" + TaVredsnost.optionValue + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='optionValue'>";
                if (TaVredsnost.option * 1 == 1) {
                    KoncniDodatek = ", " + prevodi.repetevery + " " + optionvalueselect + " " + prevodi.minutes;
                }

                var inputenote = "";
                for (var ww = 0; ww < TaVredsnost.units.length; ww++) {
                    inputenote += "<input type='text' size='1' value='" + TaVredsnost.units[ww] + "' villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "'  class='ureditask' tip='units' unit=" + ww + ">";

                }

                ImeStavbe = prevodi.train + ": [" + inputenote + "] " + KoncniDodatek;
                vsebina += ImeStavbe;
                break;
            case "demolish":
                var stopnja = "<select villageid='" + this.villageid + "' tasknumber='" + TaVredsnost.tasknumber + "' class='ureditask' tip='level'>";
                for (var kkj = 0; kkj < Stavbe[TaVredsnost.building].length; kkj++) {
                    stopnja += "<option value='" + kkj + "'>" + kkj + "</option>";
                }
                stopnja += "</select>";
                vsebina += prevodi.translate7 + ": ID: " + TaVredsnost.building;
                vsebina += " " + prevodi.translate166 + ": " + TaVredsnost.name;
                vsebina += " " + prevodi.translate158 + ": " + stopnja;
                break;
        }
        vsebina += '</span><span style="float:right;clear:inherit;"><input type="checkbox" tip="checkboxzdruzi" tasknumber="' + TaVredsnost.tasknumber + '">' + prevodi.translate159 + '</span><span></span></div>'
        DivNaselje.innerHTML = vsebina;

        var trgovanjedodajhand = DivNaselje.getElementsByClassName("ureditask");
        for (var elem1 = 0; elem1 < trgovanjedodajhand.length; elem1++) {
            tipeventa: switch (trgovanjedodajhand[elem1].getAttribute("tip")) {
                case "zaokrozevanje":
                    trgovanjedodajhand[elem1].addEventListener('change', SpremeniTrgovanje, false);
                    trgovanjedodajhand[elem1].value = TaVredsnost.round * 1;
                    break tipeventa;
                case "izberinaselje":
                    trgovanjedodajhand[elem1].addEventListener('change', SpremeniTrgovanje, false);
                    trgovanjedodajhand[elem1].value = PLAYER.getCoordfromXY(koordinataX, koordinataY) * 1;
                    break tipeventa;
                case "level":
                    trgovanjedodajhand[elem1].addEventListener('change', SpremeniTrgovanje, false);
                    trgovanjedodajhand[elem1].value = TaVredsnost.level * 1;
                    break tipeventa;
                case "woodAccept":
                case "clayAccept":
                case "ironAccept":
                case "grainAccept":
                case "woodEmpty":
                case "clayEmpty":
                case "ironEmpty":
                case "grainEmpty":
                case "wood":
                case "clay":
                case "iron":
                case "grain":
                case "x":
                case "y":
                case "optionValue":
                case "repeat":
                case "units":
                    PosodobiSirino(trgovanjedodajhand[elem1]);
                    trgovanjedodajhand[elem1].addEventListener('change', SpremeniTrgovanje, false);
                    trgovanjedodajhand[elem1].addEventListener('keyup', SirinaHandler, false);
                    break tipeventa;
                case "polnitrgovci":
                case "vsapolja":
                    trgovanjedodajhand[elem1].addEventListener('click', SpremeniTrgovanje, false);
                    break tipeventa;
                case "pause":
                    trgovanjedodajhand[elem1].addEventListener('click', OmogociTaskHandler, false);
                    trgovanjedodajhand[elem1].addEventListener('mouseout', hideddrivetip, true);
                    trgovanjedodajhand[elem1].addEventListener('mouseover', PauseTip, true);
                    break tipeventa;

            }
        }

        div2.appendChild(DivNaselje);
        var TaskZaIzbris = document.evaluate(".//input[@id='" + TaVredsnost.type + TaVredsnost.tasknumber + "']", DivNaselje, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var i = 0; i < TaskZaIzbris.snapshotLength; i++) {
            TaskZaIzbris.snapshotItem(i).addEventListener('click', izbrisiTask, true);
        }

        DivNaselje.addEventListener('dragstart', handleDragStart, false);
        DivNaselje.addEventListener('dragenter', handleDragEnter, false)
        DivNaselje.addEventListener('dragover', handleDragOver, false);
        DivNaselje.addEventListener('dragleave', handleDragLeave, false);
        DivNaselje.addEventListener('drop', handleDrop, false);
        DivNaselje.addEventListener('dragend', handleDragEnd, false);
        for (var i = 0; i < DivNaselje.childNodes.length; i++) {
            DivNaselje.childNodes[i].addEventListener('dragover', EventVstopMiske, false);
            DivNaselje.childNodes[i].addEventListener('dragleave', EventIztopMiske, false);
            DivNaselje.childNodes[i].addEventListener('drop', EventIztopMiske, false);
        }

        var TaskZaIzbris = document.evaluate(".//input[@tip='checkboxzdruzi']", DivNaselje, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var i = 0; i < TaskZaIzbris.snapshotLength; i++) {
            TaskZaIzbris.snapshotItem(i).addEventListener('click', zdruziCheckboxHandler, false);
            if (TaVredsnost.joinwithprevious) {
                TaskZaIzbris.snapshotItem(i).click();
            }
        }


        PrikazCheckboxov(div2);

    }
}

function PosodobiSirino(element) {
    var dolzina = element.value.length;
    var sirina = 8 + 7 * dolzina;
    element.style.width = sirina + "px";
    //console.log("spremenjena sirina");
}

function SirinaHandler() {
    PosodobiSirino(this);
}


function OmogociTaskHandler() {
    var villageid = this.getAttribute("villageid");
    var tasknumber = this.getAttribute("tasknumber");
    var naselje = PLAYER.getVillage(villageid);
    var task = naselje.getTask(tasknumber);

    if (this.value == "| |") {
        task.active = false;
        this.value = "ᐅ"
    }
    else {
        task.active = true;
        this.value = "| |"
    }

}


function SpremeniTrgovanje() {
    //console.log("spreminjam");
    var villageid = this.getAttribute("villageid");
    var tasknumber = this.getAttribute("tasknumber");
    var naselje = PLAYER.getVillage(villageid);
    var task = naselje.getTask(tasknumber);
    var tip=this.getAttribute("tip");
    if (task == false) {
        alert("unable to find task");
        return;
    }
    switch (tip) {
        case "zaokrozevanje":
            //console.log(this.value);
            task.round = this.value * 1;
            break;
        case "polnitrgovci":
            task.fullmerchants = this.checked;
            break;
        case "vsapolja":
            task.fields[this.getAttribute("polje")] = this.checked;
            break;
        case "zaokrozevanje":
        case "woodAccept":
        case "clayAccept":
        case "ironAccept":
        case "grainAccept":
        case "woodEmpty":
        case "clayEmpty":
        case "ironEmpty":
        case "grainEmpty":
            if (!isNumber(this.value)) {
                alert("You need to input number!");
                this.value = task[tip] * 100;
                PosodobiSirino(this);
                return;
            }
            if (this.value < 0) {
                alert("Value must be greater or equal to 0!");
                this.value = task[tip] * 100;
                PosodobiSirino(this);
                return;
            }
            if (this.value > 100) {
                alert("Value be lower or equal to 100");
                this.value = task[tip] * 100;
                PosodobiSirino(this);
                return;
            }
            task[tip] = this.value / 100;
            PosodobiSirino(this);
            //console.log("updated");
            break;
        case "wood":
        case "clay":
        case "iron":
        case "grain":
        case "x":
        case "y":
            if (!isNumber(this.value)) {
                alert("You need to input number!");
                this.value = task[tip];
                PosodobiSirino(this);
                return;
            }
            task[tip] = this.value*1;
            PosodobiSirino(this);
            //console.log("updated");
            break;

        case "optionValue":
        case "repeat":
            if (!isNumber(this.value)) {
                alert("You need to input number!");
                this.value = task[tip];
                PosodobiSirino(this);
                return;
            }
            if (this.value <= 0) {
                alert("Value must be greater of 0!");
                this.value = task[tip] * 100;
                PosodobiSirino(this);
                return;
            }
            task[tip] = this.value * 1;
            PosodobiSirino(this);
            //console.log("updated");
            break;
        case "level":
            task.level = this.value * 1;
            break;
        case "izberinaselje":
            var koordX = PLAYER.getXfromCoord(this.value);
            var koordY = PLAYER.getYfromCoord(this.value);
            task.x = koordX;
            task.y = koordY;
            break;
        case "units":
            if (!isNumber(this.value)) {
                alert("You need to input number!");
                this.value = task.units[this.getAttribute("unit")];
                PosodobiSirino(this);
                return;
            }
            if (this.value < 0) {
                alert("Value must be greater or equal to 0!");
                this.value = task.units[this.getAttribute("unit")];
                PosodobiSirino(this);
                return;
            }
            task.units[this.getAttribute("unit")] = this.value * 1;
            PosodobiSirino(this);
            //console.log("updated");
            break;
    }
}

Village.prototype.getTask = function (tasknumber) {
    for (var i = 0; i < this.BUILD.length; i++) {
        if (this.BUILD[i].tasknumber == tasknumber) {
            return this.BUILD[i];
        }
    }
    for (var i = 0; i < this.TRADE.length; i++) {
        if (this.TRADE[i].tasknumber == tasknumber) {
            return this.TRADE[i];
        }
    }
    for (var i = 0; i < this.ARMOR.length; i++) {
        if (this.ARMOR[i].tasknumber == tasknumber) {
            return this.ARMOR[i];
        }
    }
    for (var i = 0; i < this.TRAIN.length; i++) {
        if (this.TRAIN[i].tasknumber == tasknumber) {
            return this.TRAIN[i];
        }
    }
    for (var i = 0; i < this.FESTIVAL.length; i++) {
        if (this.FESTIVAL[i].tasknumber == tasknumber) {
            return this.FESTIVAL[i];
        }
    }
    for (var i = 0; i < this.DEMOLISH.length; i++) {
        if (this.DEMOLISH[i].tasknumber == tasknumber) {
            return this.DEMOLISH[i];
        }
    }
    return false;//ne najdem taska
}

Village.prototype.PreveriStartFarmo = function () {
    if (this.STARTFARM == -1) {
        return
    }
    if (this.STARTFARM * 1 > this.FARME.length) {
        this.STARTFARM = 0;
    }
    return;
    for (var i = 0; i < this.FARME.length; i++) {
        if (this.STARTFARM * 1 >= this.FARME.length) {
            this.STARTFARM = 0;
        }

        if (!this.FARME[this.STARTFARM].work) {
            this.STARTFARM++;
        }
        else {
            for (var j = 0; j < this.FARME[this.STARTFARM].troops.length; j++) {
                if (this.FARME[this.STARTFARM].troops[j] * 1 != 0) {
                    return;
                }
            }
            this.STARTFARM++;
        }
    }
}

Village.prototype.PreveriNaslednjo = function () {
    var zacetnifarmnumber = this.FARMNUMBER;

    this.FARMNUMBER++;
    if (this.FARMNUMBER * 1 >= this.FARME.length) {
        this.FARMNUMBER = 0;
    }
    return;
    for (var i = 0; i < this.FARME.length; i++) {
        if (this.FARMNUMBER * 1 >= this.FARME.length) {
            this.FARMNUMBER = 0;
        }

        if (!this.FARME[this.FARMNUMBER].work) {
            this.FARMNUMBER++;
        }
        else {
            for (var j = 0; j < this.FARME[this.FARMNUMBER].troops.length; j++) {
                if (this.FARME[this.FARMNUMBER].troops[j] * 1 != 0) {
                    var zavrnit = this.FARMNUMBER;
                    this.FARMNUMBER = zacetnifarmnumber;
                    return zavrnit;
                }
            }
            this.FARMNUMBER++;
        }
    }
    var zavrnit = this.FARMNUMBER;
    this.FARMNUMBER = zacetnifarmnumber;
    return zavrnit;
}

Village.prototype.NaslednjaFarma = function () {
    this.FARMNUMBER++;
    if (this.FARMNUMBER * 1 >= this.FARME.length) {
        this.FARMNUMBER = 0;
    }
    return;
    for (var i = 0; i < this.FARME.length; i++) {
        if (this.FARMNUMBER * 1 >= this.FARME.length) {
            this.FARMNUMBER = 0;
        }

        if (!this.FARME[this.FARMNUMBER].work) {
            this.FARMNUMBER++;
        }
        else {
            for (var j = 0; j < this.FARME[this.FARMNUMBER].troops.length; j++) {
                if (this.FARME[this.FARMNUMBER].troops[j] * 1 != 0) {
                    return;
                }
            }
            this.FARMNUMBER++;
        }
    }
}

Village.prototype.DisableFarm = function (tasknumber) {
    for (var i = 0; i < this.FARME.length; i++) {
        if (this.FARME[i].tasknumber * 1 == tasknumber * 1) {
            this.FARME[i].work = false;
            break;
        }
    }
}


Village.prototype.PridobiPolozajFarme = function (tasknumber) {
    for (var ff = 0; ff < this.FARME.length; ff++) {
        if (this.FARME[ff].tasknumber * 1 == tasknumber * 1) {
            return ff;
        }
    }
    return -1;
}

Village.prototype.DodajParty = function (TaVredsnost) {
    var ErrorTukaj = false;
    try {
        var div2 = document.getElementById("Naselje" + TaVredsnost.villageid);
    }
    catch (err) {
        ErrorTukaj = true;
        return;
    }
    var villageid = TaVredsnost.villageid;
    var PrioritetaUrjenje = TaVredsnost.priority;

    if (PodatkiNalozeni && !ErrorTukaj) {
        DivNaselje = document.createElement("div");


        X1 = document.createElement("input");
        X1.value = "x";
        X1.type = "button";
        X1.setAttribute("tasknumber", TaVredsnost.tasknumber);
        X1.setAttribute("villageid", TaVredsnost.villageid);
        X1.addEventListener('click', IzbrisiGradnjoHandler, true);
        DivNaselje.appendChild(X1);
        X1 = null;
        var Nal1 = document.createElement("j");
        ImeStavbe = "Party: " + PartyType[TaVredsnost.festival] + "; " + prevodi.priority + ": " + Priority[PrioritetaUrjenje] + "; " + prevodi.translate154 + ": " + TaVredsnost.repeat + " " + prevodi.translate18 + ".";
        Nal1.innerHTML = ImeStavbe + '<br>';
        DivNaselje.appendChild(Nal1);
        DivNaselje.style.display = "none";
        div2.appendChild(DivNaselje);
        $(DivNaselje).slideDown(500, function () {
        });

    }


}

Village.prototype.DodajArmorUpgrade = function (TaVredsnost) {
    var ErrorTukaj = false;
    try {
        var div2 = document.getElementById("Naselje" + TaVredsnost.villageid);
    }
    catch (err) {
        ErrorTukaj = true;
        return;
    }
    var villageid = TaVredsnost.villageid;
    var PrioritetaUrjenje = TaVredsnost.priority;
    var cas = TaVredsnost.time;
    var gid = TaVredsnost.gid;
    var EnoteZaUrjenje = TaVredsnost.unit;

    if (PodatkiNalozeni && !ErrorTukaj) {
        DivNaselje = document.createElement("div");


        X1 = document.createElement("input");
        X1.value = "x";
        X1.type = "button";
        X1.setAttribute("tasknumber", TaVredsnost.tasknumber);
        X1.setAttribute("villageid", TaVredsnost.villageid);
        X1.addEventListener('click', IzbrisiGradnjoHandler, true);
        DivNaselje.appendChild(X1);
        X1 = null;
        var Nal1 = document.createElement("j");
        ImeStavbe = "Upgrade armor: [" + EnoteZaUrjenje + "]; " + prevodi.priority + ": " + Priority[PrioritetaUrjenje] + "; to level " + TaVredsnost.level;
        Nal1.innerHTML = ImeStavbe + '<br>';
        DivNaselje.appendChild(Nal1);
        DivNaselje.style.display = "none";
        div2.appendChild(DivNaselje);
        $(DivNaselje).slideDown(500, function () {
        });

    }


}

Village.prototype.DodajUrjenje = function (TaVredsnost) {
    var ErrorTukaj = false;
    try {
        div2 = document.getElementById("Naselje" + TaVredsnost.villageid);
    }
    catch (err) {
        ErrorTukaj = true;
        return;
    }
    var villageid = TaVredsnost.villageid;
    var PrioritetaUrjenje = TaVredsnost.priority;
    var tipNaloge = TaVredsnost.villageid;
    var VrednostOpcije = TaVredsnost.option;
    var PrikazBoxa = TaVredsnost.optionValue;
    var cas = TaVredsnost.time;
    var gid = TaVredsnost.gid;
    var EnoteZaUrjenje = TaVredsnost.units;


    if (PodatkiNalozeni && !ErrorTukaj) {
        var KoncniDodatek = "";

        if (VrednostOpcije * 1 == 1) {
            KoncniDodatek = ", " + prevodi.repetevery + " " + PrikazBoxa + " " + prevodi.minutes;
        }

        DivNaselje = document.createElement("div");


        X1 = document.createElement("input");
        X1.value = "x";
        X1.type = "button";
        X1.setAttribute("t1", EnoteZaUrjenje[0]);
        X1.setAttribute("t2", EnoteZaUrjenje[1]);
        X1.setAttribute("t3", EnoteZaUrjenje[2]);
        X1.setAttribute("t4", EnoteZaUrjenje[3]);
        X1.setAttribute("t5", EnoteZaUrjenje[4]);
        X1.setAttribute("t6", EnoteZaUrjenje[5]);
        X1.setAttribute("t7", EnoteZaUrjenje[6]);
        X1.setAttribute("t8", EnoteZaUrjenje[7]);
        X1.setAttribute("t9", EnoteZaUrjenje[8]);
        X1.setAttribute("t10", EnoteZaUrjenje[9]);
        X1.setAttribute("t11", EnoteZaUrjenje[10]);
        X1.setAttribute("cas", cas);
        X1.setAttribute("gid", gid);
        X1.setAttribute("opcija", VrednostOpcije);
        X1.setAttribute("minute", PrikazBoxa);
        X1.setAttribute("naselje", villageid);
        X1.setAttribute("prioriteta", PrioritetaUrjenje);
        X1.setAttribute("tasknumber", TaVredsnost.tasknumber);
        X1.setAttribute("villageid", TaVredsnost.villageid);
        X1.setAttribute("tasknumber", TaVredsnost.tasknumber);
        X1.addEventListener('click', IzbrisiGradnjoHandler, true);
        DivNaselje.appendChild(X1);
        X1 = null;
        var Nal1 = document.createElement("j");
        ImeStavbe = prevodi.train + ": [" + EnoteZaUrjenje + "] " + prevodi.priority + ": " + Priority[PrioritetaUrjenje] + KoncniDodatek;
        Nal1.innerHTML = ImeStavbe + '<br>';
        DivNaselje.appendChild(Nal1);
        DivNaselje.style.display = "none";
        div2.appendChild(DivNaselje);
        $(DivNaselje).slideDown(500, function () {
        });


    }


}

Village.prototype.ShraniPolja = function (polja) {
    for (var i = 0; i < polja.length; i++) {
        polja[i].id = polja[i].id * 1;
        polja[i].name = polja[i].name * 1;
        polja[i].level = polja[i].level * 1;
        this.POLJA[polja[i].id] = polja[i];
    }
}

Village.prototype.ShraniTrgovanje = function (task) {
    try {
        task.x = parseFloat(task.x);
        task.y = parseFloat(task.y);
		this.x = parseFloat(this.x);
        this.y = parseFloat(this.y);
        var Razdalja = PridobiRazdaljo(task.x, task.y, this.x, this.y);
        var HitrostTehTrgovcev = Hitrosttrgovcev[PLAYER.tribe];
        var CasPotovanja = Math.ceil(Razdalja * 3600000 / (HitrostTehTrgovcev * PLAYER.speed));
        var cas = new Date();
        cas = cas.getTime() + CasPotovanja;
        var ID = PLAYER.getCoordfromXY(task.x, task.y);
        var villageID = PLAYER.GetNewdidFromId(ID);//task.villageid; // 

        if (villageID.toString().toLowerCase()!="false") {
            var prihajajocesurovine = {
                wood: task.wood,
                clay: task.clay,
                iron: task.iron,
                grain: task.grain,
                time: cas
            }
            var naseljeee = PLAYER.getVillage(villageID);
            //console.log(naseljeee.SUROVINEPRIHAJAJOCE);
            //console.log(prihajajocesurovine);
            naseljeee.SUROVINEPRIHAJAJOCE.push(prihajajocesurovine);
        }
        else {
        }
    } catch (err) { return err }
	return "nekaj"
}

Village.prototype.PridobiTask = function (tasknumber, tasktype) {
    var tipp = "";
    switch (tasktype) {
        case "building":
            tipp = "BUILD";
            break;
        case "trade":
            tipp = "TRADE";
            break;
        case "Party":
            tipp = "FESTIVAL";
            break;
        case "ArmorUpgrade":
            tipp = "ARMOR";
            break;
        case "demolish":
            tipp = "DEMOLISH";
            break;
        case "Train":
            tipp = "TRAIN";
            break;
    }
    for (var i = 0; i < this[tipp].length; i++) {
        if (this[tipp][i].tasknumber == tasknumber) {
            return this[tipp][i];
        }
    }
}













function CustomWorkingTime(obj) {
    this.id = obj.id;
    this.type = obj.type;
    this.day = obj.day;
    this.customDate = obj.customDate;
    this.minTime = obj.minTime;
    this.maxTime = obj.maxTime;
}

function WorkingTime() {
    this.lastid = 1;
    this.workingtimeMin = 120;
    this.workingtimeMax = 240;
    this.pausetimeMin = 0;
    this.pausetimeMax = 0;
    this.pausetime = 0;
    this.worktime = 0;
    this.logout = false;
    this.custom = [];
}

WorkingTime.prototype.setFromObject = function (obj) {
    for (var key in obj) {
        if (key == "custom") {
        }
        else {
            this[key] = obj[key];
        }
    }
    for (var i = 0; i < obj.custom.length; i++) {
        this.addCustomWorkingTime(obj.custom[i]);
    }
}

WorkingTime.prototype.set = function (options) {
    for (var key in options) {
        this[key] = options[key];
    }
}

WorkingTime.prototype.addCustomWorkingTime = function (options) {
    this.custom.push(new CustomWorkingTime(options));
}

WorkingTime.prototype.getCustomWorkingTime = function (id) {
    for (var i = 0; i < this.custom.length; i++) {
        if (this.custom[i].id == id) {
            return this.custom[i];
        }
    }
    return false;
}
WorkingTime.prototype.deleteCustomWorkingTime = function (id) {
    for (var i = 0; i < this.custom.length; i++) {
        if (this.custom[i].id == id) {
            this.custom.splice(i, 1);
            return true;
        }
    }
    return false;
}

WorkingTime.prototype.check = function () {
    var cas = new Date()
    var caszdaj = cas.getTime();
    for (var i = 0; i < this.custom.length; i++) {
        var castaskamin = ParseTime(this.custom[i].minTime);
        var castaskamax = ParseTime(this.custom[i].maxTime);
        var Lahko = false;
        if (this.custom[i].day == "everyday") {
            Lahko = true;
        }
        else if (this.custom[i].day.indexOf("week") > -1) {
            if (cas.getDay() == this.custom[i].day.match(/[\d\.]+/g)[0] * 1) {
                Lahko = true;
            }
        }
        else if (this.custom[i].day == "customdate") {
            castaskamin.setFullYear(this.custom[0].customDate.split("/")[2]);
            castaskamin.setMonth(this.custom[0].customDate.split("/")[1]);
            castaskamin.setDate(this.custom[0].customDate.split("/")[0]);
            castaskamax.setFullYear(this.custom[0].customDate.split("/")[2]);
            castaskamax.setMonth(this.custom[0].customDate.split("/")[1]);
            castaskamax.setDate(this.custom[0].customDate.split("/")[0]);
            Lahko = true;
        }

        if (castaskamin.getTime() < caszdaj && castaskamax.getTime() > caszdaj && Lahko) {//v intervalu
            if (this.worktime < caszdaj && this.custom[i].type == "working") {//se ni v obdobju delovanja
                this.worktime = castaskamax.getTime() + 2000;
                PLAYER.logs.push(new LogData(prevodi.translate388 + ': ' + vDatum(this.worktime), prevodi.translate313, 0));
                return true;
            }
            else if (this.pausetime < caszdaj && this.custom[i].type == "paused") {//se ni v obdobju pavze
                this.pausetime = castaskamax.getTime() + 2000;
                PLAYER.logs.push(new LogData(prevodi.translate389 + ': ' + vDatum(this.pausetime), prevodi.translate313, 0));
                if (this.logout) {
                    LogOut();
                }
                return this.nastaviNovCas();
            }
        }
    }


    if (this.worktime > caszdaj) {//obdobje delovanja
        return true;
    }
    else if (this.pausetime > caszdaj) {//obdobje pavze
        return this.nastaviNovCas();
    }
    else if (this.worktime <= this.pausetime) {//nazadnje je bila pavza, zdaj je na vrsti delovanje
        if (this.workingtimeMax == 0) {
            this.povecajPauseTime();
            PLAYER.logs.push(new LogData(prevodi.translate389 + ': ' + vDatum(this.pausetime), prevodi.translate313, 0));
            if (this.logout) {
                LogOut();
            }
            return this.nastaviNovCas()
        }
        this.povecajWorkTime();
        PLAYER.logs.push(new LogData(prevodi.translate388 + ': ' + vDatum(this.worktime), prevodi.translate313, 0));
        return true;
    }
    else if (this.worktime > this.pausetime) {//nazadnje je bilo delovanje, zdaj je na vrsti pavza
        if (this.pausetimeMax == 0) {
            this.povecajWorkTime();
            PLAYER.logs.push(new LogData(prevodi.translate388 + ': ' + vDatum(this.worktime), prevodi.translate313, 0));
            return true;
        }
        this.povecajPauseTime();
        PLAYER.logs.push(new LogData(prevodi.translate389 + ': ' + vDatum(this.pausetime), prevodi.translate313, 0));
        if (this.logout) {
            LogOut();
        }
        return this.nastaviNovCas()
    }
    return "Error";
}

WorkingTime.prototype.povecajWorkTime = function () {
    var cas = new Date()
    var caszdaj = cas.getTime();
    this.worktime = caszdaj + randomXToY(this.workingtimeMin * 60000, this.workingtimeMax * 60000);
    var sekunde = this.nastaviNovCas("working");
    this.worktime = caszdaj + sekunde * 1000;
}

WorkingTime.prototype.povecajPauseTime = function () {
    var cas = new Date()
    var caszdaj = cas.getTime();
    this.pausetime = caszdaj + randomXToY(this.pausetimeMin * 60000, this.pausetimeMax * 60000);
    var sekunde = this.nastaviNovCas("pause");
    this.pausetime = caszdaj + sekunde * 1000;
}

WorkingTime.prototype.nastaviNovCas = function (tip) {
    if (!tip) {
        tip = "pause";
    }
    var tip2;
    if (tip == "working") {
        tip2 = "pause";
    }
    else {
        tip2 = "working";
    }
    var cas = new Date()
    var caszdaj = cas.getTime();
    var sekunde1
    if (tip == "pause") {
        sekunde1 = Math.round((this.pausetime - caszdaj) / 1000);
    }
    else {
        sekunde1 = Math.round((this.worktime - caszdaj) / 1000);
    }
    for (var i = 0; i < this.custom.length; i++) {
        var castaskamin = ParseTime(this.custom[i].minTime);
        var sekunde2 = Math.round((castaskamin.getTime() - caszdaj) / 1000);
        if (sekunde2 < 0) {
            castaskamin.setDate(castaskamin.getDate() + 1);
            sekunde2 = Math.round((castaskamin.getTime() - caszdaj) / 1000);
        }

        if (sekunde2 < sekunde1) {
            if (this.custom[i].type == tip2) {
                if (this.custom[i].day == "everyday") {
                    sekunde1 = sekunde2;
                    continue;
                }
                else if (this.custom[0].day.indexOf("week") > -1) {
                    if (cas.getDay() == this.custom[i].day.match(/[\d\.]+/g)[0] * 1 && sekunde2 > 0) {
                        sekunde1 = sekunde2;
                        continue;
                    }
                }
                else if (this.custom[0].day == "customdate") {
                    castaskamin.setFullYear(this.custom[0].customDate.split("/")[2]);
                    castaskamin.setMonth(this.custom[0].customDate.split("/")[1]);
                    castaskamin.setDate(this.custom[0].customDate.split("/")[0]);
                    sekunde2 = Math.round((castaskamin.getTime() - caszdaj) / 1000);
                    if (sekunde2 > 0 && sekunde2 < sekunde1) {
                        sekunde1 = sekunde2;
                        continue;
                    }
                }
            }
        }
    }
    return sekunde1;
}




function Polje(id) {
    this.id = 0;
    this.name = 0;
    this.level = 0;
}




var PLAYERFINDER =
{
    villages: {},
    players: {},
    clear: function () {
        this.villages = {};
        this.players = {};
    },
    add: function (dataArray) {
        var villageid = dataArray[0] * 1;
        var x = dataArray[1] * 1;
        var y = dataArray[2] * 1;
        var tribe = dataArray[3] * 1;
        var villagenewdid = dataArray[4] * 1;
        var villagename = dataArray[5];
        var uid = dataArray[6] * 1;
        var playername = dataArray[7];
        var ally = dataArray[9];
        var allyid=dataArray[8];
        var pop = dataArray[10] * 1;
        this.villages["V" + villageid] =
        {
            x: x,
            y: y,
            villageid: villageid,
            tribe: tribe,
            villagename: villagename,
            uid: uid,
            playername: playername,
            ally: ally,
            allyid: allyid,
            pop: pop
        }

        if (this.players["P" + uid]) {
            this.players["P" + uid].villages.push(villageid);
            this.players["P" + uid].pop = this.players["P" + uid].pop + pop;
        }
        else {
            this.players["P" + uid] =
            {
                villages: [villageid],
                pop: pop,
                uid: uid,
                playername: playername
            }
        }
    }

}

var PLAYER = new Player();

////////////
//Slots
//////////

function Slots(lid) {
//    if (typeof lid === 'object') {
//        for (var key in lid) {
//            this[key] = lid[key];
//        }
//        return this;
//    }

    if (lid) {
        this.lid = lid;
    }
}

Player.prototype.getFarmlist = function (lid) {
    for (var i = 0; i < this.FARMLISTE.length; i++) {
        if (this.FARMLISTE[i].lid == lid) {
            return this.FARMLISTE[i];
        }
    }
    return false;
}

Player.prototype.nextFarmlist = function (lid) {
    for (var i = 0; i < this.FARMLISTE.length; i++) {
        if (this.FARMLISTE[i].lid == lid) {
            if (typeof this.FARMLISTE[i + 1] == 'undefined') {
                return false;
            }
            return this.FARMLISTE[i + 1];
        }
    }
    return false;
}

Player.prototype.previousFarmlist = function (lid) {
    for (var i = 0; i < this.FARMLISTE.length; i++) {
        if (this.FARMLISTE[i].lid == lid) {
            if (typeof this.FARMLISTE[i - 1] == 'undefined') {
                return false;
            }
            return this.FARMLISTE[i - 1];
        }
    }
    return false;
}

Slots.prototype.pridobiSlot = function (slotid) {
    if (this["s" + slotid] == undefined) {
        this["s" + slotid] = new Slot(slotid);
    }
    return this["s" + slotid];

}

Slots.prototype.pridobiReporteZaAnalizo = function () {
    var reporti = [];
    for (var key in this) {
        if (isFunction(this[key]) || key.substring(0, 1) != "s") {
            continue;
        }
        for (var i = 0; i < this[key].reports.length; i++) {
            if (!this[key].reports[i].analysed && this[key].reports[i].reporttype*1 == 2) {
                reporti.push({ slot: key, link: this[key].reports[i].link, lid:this.lid });
            }

        }
    }
    return reporti;
}

Slots.prototype.preveriAnalizoReportov = function () {
    var reporti = this.pridobiReporteZaAnalizo()
    if (reporti.length > 0) {
        var objzaposlat = {
            type: "analizirajreporte",
            reports: reporti
        }
        return objzaposlat;
    }
    return false;

}

function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

function Slot(slotid) {
    if (typeof slotid === 'object') {
        for (var key in slotid) {
            this[key] = slotid[key];
        }
        return this;
    }

    if (slotid) {
        this.slotid = slotid;
    }

    this.reports = [];
}

Slot.prototype.nastaviZadnjiReport = function (report, reporttype) {

    if (this.reports.length == 0) {
        this.reports.push(new Report(report, reporttype));
    }
    else {
        if (this.reports[0].link != report) {
            this.reports.splice(0, 0, new Report(report, reporttype));
            if (this.reports.length > 5) {
                this.reports.splice(5, this.reports.length-5);
            }
        }
    }
}

Slot.prototype.pridobiReport = function (reportlink) {

    for (var i = 0; i < this.reports.length; i++) {
        if (this.reports[i].link == reportlink) {
            return this.reports[i];
        }
    }
    return false;
}

Slot.prototype.reportIzgubeMajnseOdPlena = function (reportlink) {
    var report = this.pridobiReport(reportlink);
    if (report.analysed) {
        if (report.attackerstroskiskupaj * 1 <= report.plenskupaj * 1) {
            return true;
        }
    }
    return false;
}

Slot.prototype.reportSkupneIzgubeMajnseOdPlena = function (reportlink) {
    var skupneizgube = 0;
    var skupenplen = 0;
    for (var i = 0; i < this.reports.length; i++) {
        if (this.reports[i].analysed) {
            skupneizgube += this.reports[i].attackerstroskiskupaj * 1;
            skupenplen += this.reports[i].plenskupaj * 1;
        }
    }

    if (skupneizgube * 1 <= skupenplen * 1) {
        return true;
    }

    return false;
}

function Report(link, reporttype) {
    if (typeof link === 'object' ) {
        for (var key in link) {
            this[key] = link[key];
        }
        return this;
    }

    if (link) {
        this.link = link;
    }
    if (reporttype) {
        this.reporttype = reporttype;
    }
    this.analysed = false;
}
