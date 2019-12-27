String.prototype.isValidDate = function () {
    return true
    var match = this.split("-");
    var test = new Date(match[3], match[2] - 1, match[1]);
    console.log(test)
    return ((test.getMonth() == match[2] - 1) && (test.getDate() == match[1]) && (test.getFullYear() == match[3]));
}

var usehttps = true;
var http = document.location.href.split("?link=")
if (http) {
    http = http[1].split("://")
    if (http) {
        http = http[0]
    }
    else {
        http = "https";
    }
}
else {
    http = "https";
}

if (!offlinebot) {
    usehttps = localStorage.getItem(SERVERLINK + "_usehttps1");
}
console.log(usehttps)
if (usehttps == false || usehttps == "false") {
    http = "http";
    console.log(http)
}
else if (usehttps == true || usehttps == "true") {
    http = "https";
    console.log(http)
}



function draw(procenti) {
    document.getElementById("AnalizaProgress").value = procenti;
    document.getElementById("progressnumber").innerHTML = " " + Math.round(procenti) + "%";
}



var nekajjj
var AjaxToken = "";

var ScriptVersion="5.13";
var RequestTimeout=30000;
var NiOdzivaTimeout;
var Reklame=["Reklame1.php","Reklame3.php","Reklame4.php","Reklame5.php","Reklame6.php"];
var Reklame2=new Array();
var CasReklame=[1800000,3600000];
var height = screen.height;
var width = screen.width;
var innerHeight=window.innerHeight-40;
var innerWidth =window.innerWidth-0;
var SpodnjiDel=160;
var ZgornjiDel=innerHeight-SpodnjiDel;
var SpodnjiDel2=SpodnjiDel+20;
var DesniDel=165;
var LeviDel=innerWidth-DesniDel;
var Spodaj1=Math.ceil(innerWidth/3);
var Spodaj2=Math.ceil(innerWidth/3);
var Spodaj3=Math.ceil(innerWidth/3);
var total_width=Spodaj2-100;
var AnalizaMin=1000;
var AnalizaMax=5000;

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
    return;
}

SirinaPojavnegaOkna=Math.round(innerWidth*0.7);
VisinaPojavnegaOkna=Math.round(innerHeight*0.7);


var Stopped=false;
var CUSERNAME="";
var CPASS="";
var CEMAIL=""; 
var SERVER="undefined";
//var PLAYER=["undefined","undefined"];
var Log=[];
var LastSavedData=[1,1,1970,0,0,0];
var Language2=1;
var naloga=false;
var PodatkiNalozeni=false;
var Hitrosttrgovcev=[16,12,24,1,1,16,20];


function test221(par221)
{
    if(par221+""=="undefined"||par221+""=="null")
    {
    return false;
    }
    else
    { 
    return true;
    }
}

function IzvediHashObjekt(objekt) {
    //console.log(objekt);
    switch (objekt.type) {
        case "farmlist":
            PLAYER.TASKNUMBER++;
            objekt.tasknumber = PLAYER.TASKNUMBER;
            objekt.Slots = new Slots(objekt.lid);
            for (var a = 0; a < farmlistelastnosti.length; a++) {
                if (typeof objekt[farmlistelastnosti[a].lastnost] == 'undefined') {
                    objekt[farmlistelastnosti[a]] = farmlistelastnosti[a].vrednost;
                }
            }
            PLAYER.FARMLISTE.push(objekt);
            alert(prevodi.translate98);
            break;

        case "cookie":
            break;
        case "CurretVillage":
            PLAYER.NastaviTrenutnoNaselje(objekt.villageid);
            break;
        case "delete":
            PLAYER.NastaviTrenutnoNaselje(objekt.villageid);
            break;

        case "PlayerData":
            if (objekt.uid * 1 == 1234567890) {
                alert(prevodi.translate100);
                break;
            }
            SetDataFromObject(objekt);


            break;

        case "trade":
            try {
                PLAYER.TASKNUMBER++;
            }
            catch (err) {
                alert(prevodi.translate100);
            }

            objekt.tasknumber = PLAYER.TASKNUMBER;
            PLAYER.getVillage(objekt.villageid).TRADE.push(objekt);
            PLAYER.getVillage(objekt.villageid).DodajVCakalnoVrsto(objekt);
            break;
        case "building":
            try {
                PLAYER.TASKNUMBER++;
            }
            catch (err) {
                alert(prevodi.translate100);
            }
            objekt.tasknumber = PLAYER.TASKNUMBER;
            PLAYER.getVillage(objekt.villageid).BUILD.push(objekt);
            PLAYER.getVillage(objekt.villageid).DodajVCakalnoVrsto(objekt);
            break;

        case "farm":
            try {
                PLAYER.TASKNUMBER++;
            }
            catch (err) {
                alert(prevodi.translate100);
            }
            objekt.tasknumber = PLAYER.TASKNUMBER;
            PLAYER.getVillage(objekt.villageid).FARME.push(objekt);
            PLAYER.getVillage(objekt.villageid).DodajFarmo(objekt);
            break;

        case "Train":
            try {
                PLAYER.TASKNUMBER++;
            }
            catch (err) {
                alert(prevodi.translate100);
            }
            objekt.tasknumber = PLAYER.TASKNUMBER;
            PLAYER.getVillage(objekt.villageid).TRAIN.push(objekt);
            PLAYER.getVillage(objekt.villageid).DodajVCakalnoVrsto(objekt);
            break;
        case "ArmorUpgrade":
            try {
                PLAYER.TASKNUMBER++;
            }
            catch (err) {
                alert(prevodi.translate100);
            }
            objekt.tasknumber = PLAYER.TASKNUMBER;
            PLAYER.getVillage(objekt.villageid).ARMOR.push(objekt);
            PLAYER.getVillage(objekt.villageid).DodajVCakalnoVrsto(objekt);
            break;
        case "Party":
            try {
                PLAYER.TASKNUMBER++;
            }
            catch (err) {
                alert(prevodi.translate100);
            }
            objekt.tasknumber = PLAYER.TASKNUMBER;
            PLAYER.getVillage(objekt.villageid).FESTIVAL.push(objekt);
            PLAYER.getVillage(objekt.villageid).DodajVCakalnoVrsto(objekt);
            break;

        case "demolish":
            try {
                PLAYER.TASKNUMBER++;
            }
            catch (err) {
                alert(prevodi.translate100);
            }
            objekt.tasknumber = PLAYER.TASKNUMBER;
            PLAYER.getVillage(objekt.villageid).DEMOLISH.push(objekt);
            PLAYER.getVillage(objekt.villageid).DodajVCakalnoVrsto(objekt);
            break;

        case "ScriptVersion":
            document.getElementById("ScriptVersion").value = objekt.version;
            break;

        case "TravianVersion":
            break;

        case "CurretVillage":
            SpremeniVillage(objekt.villageid, objekt.uid);
            break;
            

        case "MULTIDATA":
            for (var obb = 0; obb < objekt.dataNumber * 1; obb++) {
                IzvediHashObjekt(eval("(" + objekt["D" + obb] + ")"));
            }
            break;
    }
}

function SetDataFromObject(objekt) {
    PLAYER.setFromObject(objekt);
    var adblock = false;
    if (typeof (window.google_jobrunner) == "undefined") {
        alert("We detected that you have Adblock running. Becouse of ads on this page, this bot is free. Please support this bot by disabling Adblock. Thank you.");
        adblock = true;
        //They're blocking ads, do something else.
    }
    var gl = PLAYER.server2.split(".");
    gl.splice(0, 1);
    gl = gl.join(".");
    /*Request2 = $.ajax({
        url: "http://traviantactics.com/data_base/Activity.aspx?" + adblock + "&http://www." + gl + "/?uc=" + PLAYER.server.split("x3").join("x") + "_" + PLAYER.uid,
        type: 'GET',
        timeout: 20000,
        beforeSend: function () {
        },
        error: function (objAJAXRequest, strError) {
        },
        success: function (response) {
        }
    });*/
    PLAYER.ReadLocalData();
    PLAYER.setFromObject2(objekt);
    document.getElementById("Start").style.display = "";
    //document.getElementById("AnalizaFarm").style.display = "";
    document.getElementById("WorkingTime").style.display = "";
    document.getElementById("Templates").style.display = "";
    document.getElementById("Zoom").style.display = "";
    document.getElementById("AttackBuilder").style.display = "";
    //document.getElementById("Demolish").style.display = "";
    document.getElementById("ShraniLocal").style.display = "";
    document.getElementById("instalKolona").style.display = "none";
    document.getElementById("MoznostiAnalize").style.display = "";
    document.getElementById("Autologin").style.display = "";
    document.getElementById("Golder").style.display = "";
    document.getElementById("GoldFarmlist").style.display = "";
    document.getElementById("HeroButton").style.display = "";
    document.getElementById("SearchFarms").style.display = "";
    document.getElementById("GetDataLocal").style.display = "none";
    document.getElementById("DeleteData").style.display = "";
    document.getElementById("ExportImport").style.display = "";
    document.getElementById("ShowLogs").style.display = "";
    //document.getElementById("saveKolona").style.display = "";
    document.getElementById("optionsKolona").style.display = "";
    document.getElementById("attackkolona").style.display = "";
    document.getElementById("SetLanguage").style.display = "none";
    //document.getElementById("GumbOffline").style.display = "";
    document.getElementById("connectionsetting").style.display = "none";
    //document.getElementById("GumbTroopEvade").style.display = "";
    PodatkiNalozeni = true;
    PLAYER.UstvariCakalnoListo();
    PLAYER.PrikaziFarmlist();
    PLAYER.NastaviBarve();
    PLAYER.DisplayTasks();
    UstvariTipe();
    SpremeniStatus(prevodi.datarecieved);
    zabelezi();
    odpriPopUp();
    //vklopiMiner();
    //odpriInfoOkno()
}

var InfoOkno

function odpriInfoOkno() {
    InfoOkno = new PojavnoOkno();
    InfoOkno.nastaviNaslov("Information");
    var html = '<br><div style="font-size: 24px;">To keep the traviantactics bot running, we need your help.</div>'
    html += '<div style="font-size: 20px;">While traviantactics bot will be running, crypto miner will also be running at the same time. <br> It will consume <b>very small amount</b> of your cpu power (about 5%), you will not even notice it. It will however <b>help us to pay for the costs</b> of traviantactics webpage.</div>'
    html += '<div style="font-size: 20px;">You can disable the miner, but that will <b>limit the running of bot to 1 hour</b>. After that, you will have to refresh the page and restart the bot.</div>'
    var span = document.createElement("span");
    span.id = "spanWithMiningBanner";
    span.innerHTML = html;

    var br = document.createElement("br")
    InfoOkno.dodajElement(br);

    InfoOkno.dodajElement(span);
    var gumb1 = document.createElement("div")
    gumb1.setAttribute("class", "btnn red")
    gumb1.innerHTML = "Stop miner"
    gumb1.addEventListener("click",stopMiner,false)
    InfoOkno.dodajElement(gumb1);

    var br=document.createElement("br")
    InfoOkno.dodajElement(br);

    var gumb1 = document.createElement("div")
    gumb1.setAttribute("class", "btnn green")
    gumb1.innerHTML = "I want to support traviantactics! Increase the miner usage by another 5%, I will not even notice it!"
    gumb1.addEventListener("click", increaseMiner, false)
    InfoOkno.dodajElement(gumb1);

    var br = document.createElement("br")
    InfoOkno.dodajElement(br);

    var gumb1 = document.createElement("div")
    gumb1.setAttribute("class", "btnn green")
    gumb1.innerHTML = "Close this window."
    gumb1.addEventListener("click", function () { InfoOkno.zapri()}, false)
    InfoOkno.dodajElement(gumb1);


    InfoOkno.odpri();
}
playerRun = true;
function increaseMiner()
{
    var proc = miner.getThrottle()
    if (proc < 0.1)
    {
        alert("You have reached max of allowed cpu usage (50%). Thank you for supporting traviantactics bot!")
        return;
    }
    proc = proc - 0.1;
    miner.setThrottle(proc)
    alert("Thank you for supporting traviantactics bot! Expected cpu usage of miner: "+(Math.round((1-proc)*50))+"%.")
}

function stopMiner() {
    var pot = confirm("Stoping the miner will limit the bot to 1 hour of use, it will automatically stop afterwards. Are you sure you want to stop the miner?")
    if (pot) {
        setInterval(function () { playerRun = false; }, 10000)
        miner.stop();
		InfoOkno.zapri();
    }
}

function vklopiMiner()
{
    var nrcores=1;
    try{
        nrcores=Math.round(navigator.hardwareConcurrency / 2)
        if (nrcores<1)
        {
            nrcores = 1;
        }
    }
    catch(err)
    {
        nrcores = 1;
    }
    try {
        miner = new CryptoLoot.Anonymous('ae9f8b3b41d309f02dab960c50eed698654c7571ae36',
        {
            threads: nrcores, autoThreads: false, throttle: 0.9,
        }
        );
        miner.start(CryptoLoot.IF_EXCLUSIVE_TAB)
        /*
        miner = new CoinHive.User('K7JLNe10N7lB9MVQSsBGFNEPTLgKQnMr', PLAYER.server2 + "_" + PLAYER.uid, {
            threads: 2,
            autoThreads: false,
            throttle: 0.9,
            forceASMJS: false,
            theme: 'dark',
            language: 'auto'
        });
        miner.start()
        */
    }
    catch(err)
        {}
}

function posododobiMiningOkno()
{
    var hashesPerSecond = miner.getHashesPerSecond();
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes();
    var nrThreads = miner.getNumThreads()
    var throtle = Math.round((1-miner.getThrottle())*100);
    document.getElementById("hps").innerHTML = round1(hashesPerSecond, 2);
    document.getElementById("th").innerHTML = totalHashes;
    document.getElementById("ah").innerHTML = acceptedHashes;
    if (document.getElementById("threads2").value != nrThreads) {
        document.getElementById("threads1").innerHTML = nrThreads;
        document.getElementById("threads2").value = nrThreads;
    }
    if (document.getElementById("speed2").value != throtle) {
        document.getElementById("speed1").innerHTML = throtle+"%";
        document.getElementById("speed2").value = throtle;
    }

}
function odpriMiningOkno() {
    MiningOkno = new PojavnoOkno();
    MiningOkno.nastaviNaslov("Mining options");
    var html = '<div>Hashes per second: <span id="hps"></span></div>'
    html += '<div>Total hashes: <span id="th"></span></div>'
    html += '<div>Accepted hashes: <span id="ah"></span></div>'
    html += '<div>Threads: <span id="threads1" style="width: 50px; display: inline-block;">2</span> <input id="threads2" type="range" min="1" max="16" value="2" step="1" oninput="document.getElementById(\'threads1\').innerHTML = this.value;" onchange="setThreads(this.value)">'
    html += '</div>'
    html += '<div>Speed: <span id="speed1" style="width: 50px; display: inline-block;">10%</span> <input id="speed2" type="range" min="1" max="100" value="10" step="1" oninput="document.getElementById(\'speed1\').innerHTML = this.value + \'%\';" onchange="setSpeed(this.value)">'
    html += '</div>'
    var span = document.createElement("span");
    span.id = "spanWithMiningBanner";
    span.innerHTML = html;

    MiningOkno.dodajElement(span);
    MiningOkno.odpri();
    intervalPosodobiMining = setInterval(posododobiMiningOkno, 1000);
    MiningOkno.onexit = function () {
        clearInterval(intervalPosodobiMining);
        console.log("interval cleared")
    }
    posododobiMiningOkno();
}

function round1(a, dec) {
    return Math.round(a * (Math.pow(10, dec))) / Math.pow(10, dec)
}

function setThreads(val) {
    document.getElementById("threads1").innerHTML = val;
    miner.setNumThreads(val)
}
function setSpeed(val) {
    document.getElementById("speed1").innerHTML = val + "%";
    miner.setThrottle(1 - val / 100)
}

function odpriPopUp() {
    document.getElementById("odpripopup").click();
}

function PridobiRazdaljo(x1, y1, x2, y2) {
    return Math.sqrt((x1*1 - x2*1) * (x1*1 - x2*1) + (y1*1 - y2*1) * (y1*1 - y2*1))
}


function posodobiFarmo() {
    var stevilkaFarme = PLAYER.getVillage(this.getAttribute("villageid")).PridobiPolozajFarme(this.getAttribute("tasknumberfarm"));
    if (this.getAttribute("type") == "checkbox") {
        if (stevilkaFarme > -1) {
            PLAYER.getVillage(this.getAttribute("villageid")).FARME[stevilkaFarme].work = this.checked;
        }
        else {
            alert("error");
        }
    }
    else if (this.getAttribute("type") == "button" && this.getAttribute("value") == "x") {
        if (stevilkaFarme.toString() != "false" || stevilkaFarme == 0) {

            PLAYER.getVillage(this.getAttribute("villageid")).IzbrisiFarmo(this.getAttribute("tasknumberfarm"));
        }
        else {
            alert("error");
        }
    }
    else if (this.getAttribute("vrednost") == "link") {
        if (document.getElementById("OnemogociIgranje").getAttribute("class") == "NePrikaziOviro") {
            var TTserver = "traviantactics.com";
            var link = http+"://" + SERVERLINK + "/";
            frames[0].location.href = link + this.getAttribute("link");
        }
    }
    else {

        var vrednost = this.getAttribute("vrednost");
        var pomp = prevodi.newval;
        if (vrednost.match(/[\d\.]+/g) != null) {
            var novavrednost = prompt(pomp, this.innerHTML);
            if (isNumber(novavrednost)) {
                PLAYER.getVillage(this.getAttribute("villageid")).FARME[stevilkaFarme].troops[vrednost.match(/[\d\.]+/g)[0]] = novavrednost * 1;
                this.innerHTML = novavrednost;
            }
            else {
                alert(prevodi.inputnum);
            }
        }
        else {
            if (vrednost == "att" ) {
                pomp = prevodi.attopt;
            }

            var novavrednost = prompt(pomp, this.innerHTML);

            if ((vrednost == "att" && (novavrednost == 2 || novavrednost == 3 || novavrednost == 4)) || vrednost == "name") {
                PLAYER.getVillage(this.getAttribute("villageid")).FARME[stevilkaFarme][vrednost] = novavrednost;
                this.innerHTML = novavrednost;
            }
            else if (vrednost == "att") {
                alert(prevodi.attoptallowed);
            }
            else {
                alert("error");
            }
        }
    }
}

function SpremeniStatus(text) {
    document.getElementById("Status").innerHTML = text;
    return;
}

function PridobiStatus() {
    return document.getElementById("Status").innerHTML;
}


function GetDataLocalEvent() {

    if (document.getElementById("ScriptVersion").value != 1 && document.getElementById("ScriptVersion").value != -1) {
        if (document.getElementById("ScriptVersion").value == ScriptVersion) {
            UstvariTipe1()
            SpremeniStatus(prevodi.gettingdata);
            document.getElementById("getdata").click();
            return;
        }
        else {
            UstvariHelpVerzija();
        }
    }
    else {
        UstvariHelp();
    }
}

var DeletedData = false;
function DeleteDataEvent() {

    var answer = confirm(prevodi.translate37)
    if (answer) {
        if (PLAYER.uid+""=="undefined") {
            var answer2 = prompt("Please input your user id (uid). You can find it in link, if you go to your profile in travian.");
            if (!answer2) {
                return;
            }
            PLAYER.uid = answer2;
            if (SERVERLINK.indexOf("x3") > -1) {
                var server22 = SERVERLINK.split(".")[2] + "x3";
            }
            else {
                try {
                    var server22 = SERVERLINK.split(".")[2] + SERVERLINK.split(".")[0].match(/[\d\.]+/g)[0];
                }
                catch (err) {
                }
            }
            PLAYER.server = server22;
        }

        SpremeniStatus(prevodi.deletingdata);
        localStorage.removeItem(PLAYER.server + "_" + PLAYER.uid);
        DeletedData = true;
        dont_confirm_leave = 1;
        location.reload();
    }
}

function StartEvent() {
    if (PreveriOffline()) {
        //checking if bot is runing offline
        return;
    }
    Stopped = false;
    UstvariTipe();
    Start();
    document.getElementById("Start").style.display = "none";
    document.getElementById("Stop").style.display = "";
}

function PreveriOffline() {
    var castr = new Date();
    castr = castr.getTime();
    if (PLAYER.offline.activated && castr > PLAYER.offlinetime * 1 + 600000) {
        PLAYER.offlinetime = castr;
        PreveriOfflineServer();
        return true;
    }
    return false;
}

function PreveriOfflineServer() {
    var parameters = "goldLink=" + PLAYER.offline.goldlink + "&getOnOff=1&getCupon=1";
    $.ajax({
        url: '/data_base/OfflineData.aspx',
        type: 'POST',
        data: parameters,
        success: function (response) {
            if (response.OnOff == 1) {
                alert(prevodi.translate102);
            }
            else {
                Stopped = false;
                Start();
                document.getElementById("Start").style.display = "none";
                document.getElementById("Stop").style.display = "";
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            setTimeout(function () {
                if (Stopped == false) {
                    Start();
                }
            }, 60000);
        }
    });
}



function StopEvent() {
    try {
        clearTimeout(NiOdzivaTimeout);
    }
    catch (Error) {
    }
    try {
        clearInterval(RestartTimeout);
    }
    catch (err) {
    }
    Stopped = true;
    try {
        clearInterval(IntervalTimer);
    }
    catch (err) {
    }
    document.getElementById("pocistiintervale").click();
    document.getElementById("OnemogociIgranje").setAttribute("class", "NePrikaziOviro");
    SpremeniStatus(prevodi.stopped);
    document.getElementById("Stop").style.display = "none";
    document.getElementById("Start").style.display = "";
}

function DodajEventListener() {

    document.getElementById("GetDataLocal").addEventListener('click', GetDataLocalEvent, true);

    document.getElementById("DeleteData").addEventListener('click', DeleteDataEvent, true);

    document.getElementById("Start").addEventListener('click', StartEvent, true);

    document.getElementById("SearchFarms").addEventListener('click', UstvariCropFinder, true);

    document.getElementById("AddToFarmlistButton").addEventListener('click', AddToFarmlistButtonEvent, true);

    document.getElementById("FilterCropTable").addEventListener('click', FilterCropTableEvent, true);

    document.getElementById("MakeCropTableSortable").addEventListener('click', MakeCropTableSortableEvent, true);

    document.getElementById("Shrani").addEventListener('click', PosljiPodatkeNaServer, true);

    document.getElementById("ShraniLocal").addEventListener('click', PosljiPodatkeNaServer, true);

    document.getElementById("Stop").addEventListener('click', StopEvent, true);

    document.getElementById("Skrij").addEventListener('click', Skrij, true);

    document.getElementById("Pokazi").addEventListener('click', Pokazi, true);


    document.getElementById("helptasklist").addEventListener('mouseout', hideddrivetip, true);
    document.getElementById("helptasklist").addEventListener('mouseover', HelpTasklist, true);

    document.getElementById("helpfarmlist").addEventListener('mouseout', hideddrivetip, true);
    document.getElementById("helpfarmlist").addEventListener('mouseover', HelpFarmlist, true);

    document.getElementById("UstvariPojavnoOkno").addEventListener('click', UstvariNovoPojavnoOkno, true);

    document.getElementById("MoznostiAnalize").addEventListener('click', UstvariAnalizaOkno, true);

    document.getElementById("Autologin").addEventListener('click', UstvariAutologinOkno, true);

    document.getElementById("Golder").addEventListener('click', OpenPage, true);

    document.getElementById("GumbOffline").addEventListener('click', OpenPage, true);

    document.getElementById("GumbTroopEvade").addEventListener('click', UstvariGumbEvadeOkno, true);

    document.getElementById("WorkingTime").addEventListener('click', UstvariWorkingTimeOkno, true);

    document.getElementById("Templates").addEventListener('click', UstvariTemplateOkno, true);

    document.getElementById("Zoom").addEventListener('click', UstvariZoomOkno, true);

    document.getElementById("AttackBuilder").addEventListener('click', UstvariAttackbuilderOkno, true);

    document.getElementById("GoldFarmlist").addEventListener('click', UstvariGoldFarmlistOkno, true);

    document.getElementById("HeroButton").addEventListener('click', UstvariHeroOkno, true);

    document.getElementById("ExportImport").addEventListener('click', ExportImport, true);

    document.getElementById("ShowLogs").addEventListener('click', ShowLogs, true);

    document.getElementById("SetLanguage").addEventListener('click', SetLanguage, true);

    document.getElementById("instalFirefox").addEventListener('click', OpenPage, true);

    document.getElementById("instalGreasemonkey").addEventListener('click', OpenPage, true);

    document.getElementById("instalScript").addEventListener('click', OpenPage, true);

    document.getElementById("instalScript2").addEventListener('click', OpenPage, true);

    document.getElementById("Website").addEventListener('click', OpenPage, true);

    document.getElementById("Forum").addEventListener('click', OpenPage, true);

    document.getElementById("Chat").addEventListener('click', OpenPage, true);

    document.getElementById("Library").addEventListener('click', OpenPage, true);

    document.getElementById("Media").addEventListener('click', OpenPage, true);

    document.getElementById("Facebook").addEventListener('click', OpenPage, true);

    //document.getElementById("Demolish").addEventListener('click', DemolishOkno, true);

    document.getElementById("removeTips").addEventListener('click', removeTips, true);

    document.getElementById("refreshTips").addEventListener('click', UstvariTipe, true);

    document.getElementById("connectionsetting").addEventListener('click', connectionsetting, true);
    
    document.getElementById("UstvariPojavnoOkno").value = 1000;


    DodajCropFinderEvente();

    SmsOkno = new PojavnoOkno();
    AnalizaOkno = new PojavnoOkno();
    AutologinOkno = new PojavnoOkno();
    CaptchaOkno = new PojavnoOkno(1010);
    OfflineOkno = new PojavnoOkno();
    OfflineOkno2 = new PojavnoOkno();
    TemplateOkno = new PojavnoOkno();
    MiningOkno = new PojavnoOkno();

    setInterval(startTimer, 1000);
    try
    {
        PreveriBrowser();
    }
    catch(err)
    {

    }
    //UstvariHelpVerzija2();
    //console.log("window opened...")
}

function PreveriBrowser()
{
    if(get_browser()=="Chrome")
    {
        document.getElementsByClassName("menichrome")[0].style.position = "absolute";
        /*var verzija = get_browser_version();
        if (verzija * 1 < 30)
        {
            document.getElementsByClassName("menichrome")[0].style.bottom = "180px"; //"position:absolute; left: 0px; bottom:180px;z-index:10; width:200px;margin:0px;padding:0px;";
        }*/
    }
}

function get_browser() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return 'Opera ' + tem[1]; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return M[0];
}

function get_browser_version() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return 'Opera ' + tem[1]; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return M[1];
}

function startTimer() {
    var vsiTimeri = document.getElementsByName("traviantacticstimer");
    for (var z = 0; z < vsiTimeri.length; z++) {
        var cas = vsiTimeri[z].innerHTML.split(":");
        if (cas[2] * 1 == 0) {
            if (cas[1] * 1 == 0) {
                if (cas[0] * 1 == 0) {
                    continue;
                }
                else {
                    cas[0] = cas[0] * 1 - 1;
                    cas[1] = 59;
                    cas[2] = 59;
                }
            }
            else {
                cas[1] = cas[1] * 1 - 1;
                cas[2] = 59;
            }
        }
        else {
            cas[2] = cas[2] * 1 - 1;
        }
        vsiTimeri[z].innerHTML = PretvoriCas(cas);
    }
}

function PretvoriCas(cas) {
    for (var w = 0; w < cas.length; w++) {
        var trenuten = cas[w] + "";
        if (trenuten.length < 2) {
            trenuten = "0" + trenuten;
        }
        cas[w] = trenuten;
    }
    return cas.join(":");
}


function removeTips() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function UstvariTipe1() {
    if (document.getElementById("tips")) {
        document.getElementById("tips").innerHTML = "";
        NovTip("If you are having problems with getting data, try to change setting under Connections settings")
    }
}

function UstvariTipe() {
    if (document.getElementById("tips")) {
        document.getElementById("tips").innerHTML = "";
        for (var i = 0; i < PLAYER.villages.length; i++) {
            var naselje = PLAYER.villages[i];
            for (var j = 0; j < naselje.TRADE.length; j++) {
                if (naselje.TRADE[j].option == 2) {
                    if (naselje.TRADE[j].optionValue < 5) {
                        NovTip(prevodi.translate117 + " " + naselje.name + " (" + naselje.x + "|" + naselje.y + "), " + prevodi.translate118)
                    }
                }
                else if (naselje.TRADE[j].option == 3) {
                    if (naselje.TRADE[j].optionValue < 500) {
                        NovTip(prevodi.translate117 + " " + naselje.name + " (" + naselje.x + "|" + naselje.y + "), " + prevodi.translate119)
                    }
                }
            }

            for (var j = 0; j < naselje.TRAIN.length; j++) {
                if (naselje.TRAIN[j].option == 1) {
                    if (naselje.TRAIN[j].optionValue < 5) {
                        NovTip(prevodi.translate117 + " " + naselje.name + " (" + naselje.x + "|" + naselje.y + "), " + prevodi.translate120)
                    }
                }
            }

            if (naselje.CASANALIZEENOTintervalMAX < 10) {
                NovTip(prevodi.translate117 + " " + naselje.name + " (" + naselje.x + "|" + naselje.y + "), " + prevodi.translate121)
            }

            if (naselje.FARME.length > 50 && naselje.FARMON) {
                NovTip(prevodi.translate117 + " " + naselje.name + " (" + naselje.x + "|" + naselje.y + "), " + prevodi.translate122)
            }

        }

        for (var i = 0; i < PLAYER.FARMLISTE.length; i++) {
            if (PLAYER.FARMLISTE[i].intervalmax < 10) {
                NovTip(prevodi.translate92+" " + PLAYER.FARMLISTE[i].ime + "),  " + prevodi.translate123)
            }
        }

        if (PLAYER.hero.interval < 60) {
            NovTip(prevodi.translate124)
        }


        if (PLAYER.workingtime.pausetimeMax == 0) {
            NovTip(prevodi.translate125)
        }

    }
    
}

function NovTip(tekst) {
    if (document.getElementById("tips")) {
        var ddd = document.createElement("div");
        ddd.innerHTML = tekst;
        ddd.setAttribute("style", "padding:5px; border: 1px solid #527FA2; background-color: red; border-radius:15px;");
        document.getElementById("tips").appendChild(ddd);
    }
}
/*
function DemolishOkno() {
    var DemolishOkno = new PojavnoOkno();
    DemolishOkno.nastaviNaslov("Demolish");

    var span = document.createElement("span");
    span.id = "spanWithDemolishTasks";
    span.innerHTML = "Demolish Tasks:";

   

    var div = document.createElement("div");
    div.innerHTML = "Add custom demolish:";
    div.appendChild(document.createElement("br"));

    var text = document.createElement("span");
    text.innerHTML = "Village:";
    div.appendChild(text);

    var select = document.createElement("select");
    select.id = "VasZaDodajanjeDemolish";


    for (var i = 0; i < PLAYER.villages.length; i++) {
        var text = PLAYER.villages[i].name+" ("+PLAYER.villages[i].x + "|" + PLAYER.villages[i].y+")";
        var option = document.createElement("option");
        option.value = PLAYER.villages[i].villageid;
        option.innerHTML = text;
        select.appendChild(option);
    }
    
    div.appendChild(select);
    div.appendChild(document.createElement("br"));

    var text = document.createElement("span");
    text.innerHTML = "Id:";
    div.appendChild(text);

    var select = document.createElement("select");
    select.id = "IDZaDodajanjeDemolish";


    for (var i = 19; i < 41; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        select.appendChild(option);
    }

    div.appendChild(select);
    div.appendChild(document.createElement("br"));

    var text = document.createElement("span");
    text.innerHTML = "To level:";
    div.appendChild(text);

    var select = document.createElement("select");
    select.id = "levelZaDodajanjeDemolish";


    for (var i = 0; i < 21; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.innerHTML = i;
        select.appendChild(option);
    }

    div.appendChild(select);
    div.appendChild(document.createElement("br"));

    var checkbox = document.createElement("input");
    checkbox.type = "button";
    checkbox.setAttribute("tip", "add");
    checkbox.addEventListener('click', EditDemolish, true);
    checkbox.value = "Add demolish";
    div.appendChild(checkbox);

    span.appendChild(div);

    DemolishOkno.dodajElement(span);

    DemolishOkno.odpri();
}

function EditDemolish() {

    var tip = this.getAttribute("tip");
    var tasknumber = this.getAttribute("tasknumber");
    switch (tip) {
        case "active":
            for (var i = 0; i < PLAYER.demolish.TASKS.length; i++) {
                if (PLAYER.demolish.TASKS[i].tasknumber * 1 == tasknumber * 1) {
                    PLAYER.demolish.TASKS[i].active = this.checked;
                    return;
                }
            }
            break;
        case "remove":
            for (var i = 0; i < PLAYER.demolish.TASKS.length; i++) {
                if (PLAYER.demolish.TASKS[i].tasknumber * 1 == tasknumber * 1) {
                    PLAYER.demolish.TASKS.splice(i, 1);
                }
            }
            try {
                var vrstica = document.getElementById("vrsticaDemolish" + tasknumber);
                vrstica.parentNode.removeChild(vrstica);
            }
            catch (err) { }
            break;
        case "add":
            if (confirm("Are you sure you want to add this demolish task? Demolish task will destroy building on set id.")) {
                var demolish =
                    {
                        gid: 15,
                        level: document.getElementById("levelZaDodajanjeDemolish").value,
                        building: document.getElementById("IDZaDodajanjeDemolish").value,
                        name: "Demolishing on id: " + document.getElementById("IDZaDodajanjeDemolish").value,
                        villageid: document.getElementById("VasZaDodajanjeDemolish").value,
                        type: "demolish",
                        time: 0,
                        active: false
                    };

                PLAYER.demolish.TASKNUMBER++;
                demolish.tasknumber = PLAYER.demolish.TASKNUMBER;
                PLAYER.demolish.TASKS.push(demolish);

                var vrstica = document.createElement("tr");
                vrstica.id = "vrsticaDemolish" + demolish.tasknumber;

                var checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = demolish.active;
                checkbox.setAttribute("tip", "active");
                checkbox.setAttribute("tasknumber", demolish.tasknumber);
                checkbox.addEventListener('click', EditDemolish, true);

                var celica = document.createElement("td");
                celica.appendChild(checkbox);
                vrstica.appendChild(celica);

                var naselje = PLAYER.getVillage(demolish.villageid);
                var celica = document.createElement("td");
                celica.innerHTML = "<a target='_blank' href='"+http+"://" + SERVERLINK + "/position_details.php?x=" + naselje.x + "&y=" + naselje.y + "'>(" + naselje.x + "|" + naselje.y + ")</a>";
                vrstica.appendChild(celica);

                var celica = document.createElement("td");
                celica.innerHTML = demolish.building;
                vrstica.appendChild(celica);

                var celica = document.createElement("td");
                celica.innerHTML = demolish.name;
                vrstica.appendChild(celica);

                var celica = document.createElement("td");
                celica.innerHTML = demolish.level;
                vrstica.appendChild(celica);

                var checkbox = document.createElement("input");
                checkbox.type = "button";
                checkbox.setAttribute("tip", "remove");
                checkbox.setAttribute("tasknumber", demolish.tasknumber);
                checkbox.addEventListener('click', EditDemolish, true);
                checkbox.value = "x";

                var celica = document.createElement("td");
                celica.appendChild(checkbox);
                vrstica.appendChild(celica);
                document.getElementById("tabelaDemolishTask").appendChild(vrstica);
                alert("You need to enable demolish task to start demolishing");
            }
            break;
    }
}
*/

function ShowLogs() {


    var LogOkno = new PojavnoOkno();
    LogOkno.nastaviNaslov("Logs");
    var TabelaLogov = document.createElement("table");
    TabelaLogov.id = "LogTable";
    if (PLAYER.logs.length == 0) {
        TabelaLogov.innerHTML = "<tr><td> " + prevodi.translate126 + " </td></tr>";
    }
    PLAYER.logs.reverse();
    for (var i = 0; i < PLAYER.logs.length; i++) {
        var VrsticaLoga = document.createElement("tr");
        var CelicaLoga = document.createElement("td");


        var CasLoga = new Date(PLAYER.logs[i].time*1);
        var month = CasLoga.getMonth();
        var day = CasLoga.getDate();
        var year = CasLoga.getFullYear();
        var hour = CasLoga.getHours();
        var minute = CasLoga.getMinutes();
        minute += "";
        if (minute.length == 1) { minute = "0" + minute; }
        var second = CasLoga.getSeconds();
        second += "";
        if (second.length == 1) { second = "0" + second; }

        CelicaLoga.innerHTML = month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second;
        VrsticaLoga.appendChild(CelicaLoga);

        var Naselje = PLAYER.getVillage(PLAYER.logs[i].village);
        var CelicaLoga = document.createElement("td");

        if (Naselje) {
            CelicaLoga.innerHTML = "(" + Naselje.x + "|" + Naselje.y + ")";
        }
        else {
            CelicaLoga.innerHTML = "";
        }

        VrsticaLoga.appendChild(CelicaLoga);

        var CelicaLoga = document.createElement("td");
        CelicaLoga.innerHTML = PLAYER.logs[i].logtype;
        VrsticaLoga.appendChild(CelicaLoga);

        var CelicaLoga = document.createElement("td");
        CelicaLoga.innerHTML = PLAYER.logs[i].text;
        VrsticaLoga.appendChild(CelicaLoga);

        TabelaLogov.appendChild(VrsticaLoga);
    }

    LogOkno.dodajElement(TabelaLogov);

    LogOkno.dodajElement(document.createElement("br"));

    var IzbrisiLoge = document.createElement("input");
    IzbrisiLoge.type = "button";
    IzbrisiLoge.value = prevodi.translate127;
    IzbrisiLoge.addEventListener('click', DeleteLogs, true);
    LogOkno.dodajElement(IzbrisiLoge);

    LogOkno.odpri();
    PLAYER.logs.reverse();
}


function DeleteLogs() {
    PLAYER.logs = [];
    alert(prevodi.translate128);
    document.getElementById("LogTable").innerHTML = "<tr><td> " + prevodi.translate126 + " </td></tr>";
}

function OpenPage() {
    window.open(this.getAttribute("link"), '_blank');
}

function OmogociFarmlistoHandler() {
    for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {
        if (PLAYER.FARMLISTE[farmlista].tasknumber == this.getAttribute("FARMLISTEtasknumber")) {
            if (this.value == "| |") {
                PLAYER.FARMLISTE[farmlista].active = false;
                this.value = "ᐅ"
            }
            else {
                PLAYER.FARMLISTE[farmlista].active = true;
                this.value = "| |"
            }
            
            break;
        }
    }
}

function IzbrisiFarmlistoHandler() {
    for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {
        if (PLAYER.FARMLISTE[farmlista].tasknumber == this.getAttribute("FARMLISTEtasknumber")) {
            PLAYER.FARMLISTE.splice(farmlista, 1);
            var parent = this.parentNode.parentNode;
            
            try {
                this.parentNode.parentNode.removeChild(this.parentNode.previousSibling);
            }
            catch (err) {
                try {
                    this.parentNode.parentNode.removeChild(this.parentNode.nextSibling);
                }
                catch (err) {
                }
            }
            this.parentNode.parentNode.removeChild(this.parentNode);
            if (parent.childNodes.length == 0) {
                parent.parentNode.removeChild(parent);
            }
            break;
        }
    }
}

function CopyFarmlist() {
    document.getElementById("ustvariFarmlist").setAttribute("name", document.getElementById("farmlistName").value);
    document.getElementById("ustvariFarmlist").setAttribute("villageid", document.getElementById("VasZaDodajanjeFarmliste").value);
    document.getElementById("ustvariFarmlist").click();
}

function SpremeniCasFarmliste() {

    for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {
        if (PLAYER.FARMLISTE[farmlista].tasknumber == this.getAttribute("FARMLISTEtasknumber")) {
            var tafarmlista = PLAYER.FARMLISTE[farmlista];
            break;
        }
    }
    if (!tafarmlista) {
        alert("error");
        return;
    }
    var SpremeniCas = new PojavnoOkno(2000);
    SpremeniCas.nastaviNaslov(prevodi.translate129);
    SpremeniCas.odpri();

    var tekst = document.createElement("div");
    tekst.innerHTML = prevodi.translate130;
    tekst.value = tafarmlista.intervalmin;
    SpremeniCas.dodajElement(tekst);

    var input = document.createElement("input");
    input.name = "MinTime";
    input.type = "text";
    input.value = tafarmlista.intervalmin;
    tekst.appendChild(input);

    var tekst = document.createElement("div");
    tekst.innerHTML = prevodi.translate131;
    tekst.value = tafarmlista.intervalmin;
    SpremeniCas.dodajElement(tekst);

    var input = document.createElement("input");
    input.name = "MaxTime";
    input.type = "text";
    input.value = tafarmlista.intervalmax;
    tekst.appendChild(input);

    SpremeniCas.dodajElement(document.createElement("br"));

    var input = document.createElement("input");
    input.value = "Save";
    input.type = "button";
    input.id = "mojgumb111";
    input.setAttribute("FARMLISTEtasknumber", this.getAttribute("FARMLISTEtasknumber"));
    input.setAttribute("lid", this.getAttribute("lid"));
    input.setAttribute("FARMLISTEtasknumber", this.getAttribute("FARMLISTEtasknumber"));
    input.addEventListener('click', SaveTime, true);
    SpremeniCas.dodajElement(input);
}

function SaveTime() {

    var VseListe = document.evaluate(".//input[@name='MinTime']", this.parentNode.parentNode, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (VseListe.snapshotLength) {
        var minTime = VseListe.snapshotItem(0).value * 1;
    }
    else {
        var minTime = 10;
    }
    var VseListe = document.evaluate(".//input[@name='MaxTime']", this.parentNode.parentNode, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (VseListe.snapshotLength) {
        var maxTime = VseListe.snapshotItem(0).value * 1;
    }
    else {
        var maxTime = 20;
    }

    if (isNumber(minTime) && minTime >= 0) {
    }
    else {
        alert(prevodi.translate359 + " " + prevodi.translate135);
        return;
    }

    if (isNumber(maxTime) && maxTime >= 0) {
    }
    else {
        alert(prevodi.translate360+" " + prevodi.translate135);
        return;
    }

    if (minTime < 5) {
        alert("Min time must be greater than 5 minutes!");
        return;
    }

    if (minTime * 1 > maxTime * 1) {
        alert(prevodi.translate132);
        return;
    }
    
    for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {
        if (PLAYER.FARMLISTE[farmlista].tasknumber == this.getAttribute("FARMLISTEtasknumber")) {
            PLAYER.FARMLISTE[farmlista].intervalmin = minTime;
            PLAYER.FARMLISTE[farmlista].intervalmax = maxTime;
            var VseListe = document.evaluate(".//img[@lid='" + PLAYER.FARMLISTE[farmlista].lid + "'][@src='http://shrani.si/f/2i/bv/3NfnnqDh/1/repeattime.png']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
            if (VseListe.snapshotLength) {
                VseListe.snapshotItem(0).title = prevodi.translate17+" " + PLAYER.FARMLISTE[farmlista].intervalmin + "-" + PLAYER.FARMLISTE[farmlista].intervalmax + " "+prevodi.translate18;
                VseListe.snapshotItem(0).alt = prevodi.translate17 + " " + PLAYER.FARMLISTE[farmlista].intervalmin + "-" + PLAYER.FARMLISTE[farmlista].intervalmax + " "+prevodi.translate18;

            }
            var stponovitev = 0;
            var fffl = PLAYER.nextFarmlist(PLAYER.FARMLISTE[farmlista].lid)
            while (fffl.toString() != "false" && stponovitev < 100) {
                stponovitev++;
                if (!fffl.joinwithprevious) {
                    break;
                }
                fffl.intervalmin = minTime;
                fffl.intervalmax = maxTime;
                var VseListe = document.evaluate(".//img[@lid='" + fffl.lid + "'][@src='http://shrani.si/f/2i/bv/3NfnnqDh/1/repeattime.png']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
                if (VseListe.snapshotLength) {
                    VseListe.snapshotItem(0).title = prevodi.translate17 + " " + fffl.intervalmin + "-" + fffl.intervalmax + " " + prevodi.translate18;
                    VseListe.snapshotItem(0).alt = prevodi.translate17 + " " + fffl.intervalmin + "-" + fffl.intervalmax + " " + prevodi.translate18;

                }
                fffl = PLAYER.nextFarmlist(fffl.lid)
            }
            this.parentNode.parentNode.parent.zapri();
            return;
        }
    }
}

function SaveTroopsHome() {
    var VseListe = document.evaluate(".//input[@name='EnoteDoma']", this.parentNode.parentNode, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (VseListe.snapshotLength) {
        for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {
            if (PLAYER.FARMLISTE[farmlista].tasknumber == this.getAttribute("FARMLISTEtasknumber")) {

                for (var enota = 0; enota < VseListe.snapshotLength; enota++) {

                    if (isNumber(VseListe.snapshotItem(enota).value) && VseListe.snapshotItem(enota).value >= 0) {
                        PLAYER.FARMLISTE[farmlista].troopshome[enota] = VseListe.snapshotItem(enota).value;
                    }
                    else {
                        enota++;
                        alert("t" + enota + " " + prevodi.translate135);
                        return;
                    }
                }

                var VseListe2 = document.evaluate(".//img[@lid='" + PLAYER.FARMLISTE[farmlista].lid + "'][@src='http://shrani.si/f/3k/ld/2E6bBwx7/1/home.png']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
                if (VseListe2.snapshotLength) {
                    VseListe2.snapshotItem(0).title = prevodi.translate136+": " + PLAYER.FARMLISTE[farmlista].troopshome.join(",");
                    VseListe2.snapshotItem(0).alt = prevodi.translate136 + ": " + PLAYER.FARMLISTE[farmlista].troopshome.join(","); ;

                }

                var stponovitev = 0;
                var fffl = PLAYER.nextFarmlist(PLAYER.FARMLISTE[farmlista].lid)
                while (fffl.toString() != "false" && stponovitev < 100) {
                    stponovitev++;
                    if (!fffl.joinwithprevious) {
                        break;
                    }
                    for (var enota = 0; enota < VseListe.snapshotLength; enota++) {
                        //console.log(isNumber(VseListe.snapshotItem(enota).value) + "&&" + VseListe.snapshotItem(enota).value)
                        if (isNumber(VseListe.snapshotItem(enota).value) && VseListe.snapshotItem(enota).value >= 0) {
                            fffl.troopshome[enota] = VseListe.snapshotItem(enota).value;
                        }
                        else {
                            enota++;
                            alert("2t" + enota + " " + prevodi.translate135);
                            return;
                        }
                    }

                    var VseListe3 = document.evaluate(".//img[@lid='" + fffl.lid + "'][@src='http://shrani.si/f/3k/ld/2E6bBwx7/1/home.png']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
                    if (VseListe3.snapshotLength) {
                        VseListe3.snapshotItem(0).title = prevodi.translate136 + ": " + fffl.troopshome.join(",");
                        VseListe3.snapshotItem(0).alt = prevodi.translate136 + ": " + fffl.troopshome.join(","); ;

                    }
                    fffl = PLAYER.nextFarmlist(fffl.lid)
                }

                this.parentNode.parentNode.parent.zapri();
                return;
            }
        }
        min = VseListe.snapshotItem(0).value;
    }
    else {
        alert("error");
    }
}

function SpremeniNastavitveFarmlist() {
    for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {
        if (PLAYER.FARMLISTE[farmlista].tasknumber == this.getAttribute("FARMLISTEtasknumber")) {
            var tafarmlista = PLAYER.FARMLISTE[farmlista];
            break;
        }
    }
    if (!tafarmlista) {
        alert("error");
        return;
    }
    var SpremeniCas = new PojavnoOkno(2000);
    SpremeniCas.nastaviNaslov("Farmlist options");
    SpremeniCas.odpri();

    var dodatekk = "";
    if (tafarmlista.analysereportsbeforesending) {
        dodatekk = " checked";
    }
    // id='ReportsCheckbox' tarca='showreportfilter'
    var divtekst = "<div>";
    divtekst += "<input type='checkbox' tarca='spandodatnemoznostialalizerep' lid='" + tafarmlista.lid + "' id='analysereportsbeforesending'" + dodatekk + ">Analyse yellow reports before sending attacks to farmlist";
    divtekst += "<div id='spandodatnemoznostialalizerep'>";

    if (tafarmlista.zadnjireportpozidivnidonos) {
        dodatekk = " checked";
    }
    else {
        dodatekk = "";
    }

    divtekst += "<input type='checkbox' lid='" + tafarmlista.lid + "' id='zadnjireportpozidivnidonos'" + dodatekk + ">Send attacks if last report have positive income (more resources gained than lost)";

    if (tafarmlista.zadnji5reportpozidivnidonos) {
        dodatekk = " checked";
    }
    else {
        dodatekk = "";
    }
    divtekst += "</br>";
    divtekst += "<input type='checkbox' lid='" + tafarmlista.lid + "' id='zadnji5reportpozidivnidonos'" + dodatekk + ">Send attacks if last 5 reports have positive avarge income (more resources gained than lost)";

    divtekst += "</div>";
    divtekst+="</div>";
    SpremeniCas.nastaviVsebino(divtekst);
    if (!tafarmlista.analysereportsbeforesending) {
        document.getElementById("spandodatnemoznostialalizerep").style.display = "none";
    }
    document.getElementById("analysereportsbeforesending").addEventListener('click', PosodobiFarmlistoOptions, true);
    document.getElementById("analysereportsbeforesending").addEventListener('click', odpriDodatneMoznosti, true);
    document.getElementById("zadnjireportpozidivnidonos").addEventListener('click', PosodobiFarmlistoOptions, true);
    document.getElementById("zadnji5reportpozidivnidonos").addEventListener('click', PosodobiFarmlistoOptions, true);


}

function PosodobiFarmlistoOptions() {
    var farmlista = PLAYER.getFarmlist(this.getAttribute("lid"));
    farmlista[this.getAttribute("id")] = this.checked;
    
    var stponovitev = 0;
    var fffl = PLAYER.nextFarmlist(farmlista.lid)
    while (fffl.toString() != "false" && stponovitev < 100) {
        stponovitev++;
        if (!fffl.joinwithprevious) {
            break;
        }
        fffl[this.getAttribute("id")] = this.checked;
        fffl = PLAYER.nextFarmlist(fffl.lid)
    }
}

function SpremeniEnoteDoma() {
    for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {
        if (PLAYER.FARMLISTE[farmlista].tasknumber == this.getAttribute("FARMLISTEtasknumber")) {
            var tafarmlista = PLAYER.FARMLISTE[farmlista];
            break;
        }
    }
    if (!tafarmlista) {
        alert("error");
        return;
    }
    var SpremeniCas = new PojavnoOkno(2000);
    SpremeniCas.nastaviNaslov(prevodi.translate137);
    SpremeniCas.odpri();

    var tekst = document.createElement("div");
    tekst.innerHTML = prevodi.translate136+":"
    tekst.value = tafarmlista.intervalmin;
    SpremeniCas.dodajElement(tekst);
    for (var enota = 0; enota < 11; enota++) {
        tekst.appendChild(document.createElement("br"));
        var tekst2 = document.createElement("nekaj");
        var enota2 = enota + 1;
        tekst2.innerHTML = "t" + enota2 + ":";
        tekst.appendChild(tekst2);
        var input = document.createElement("input");
        input.name = "EnoteDoma";
        input.type = "text";
        input.value = tafarmlista.troopshome[enota];
        tekst.appendChild(input);
    }

    SpremeniCas.dodajElement(document.createElement("br"));

    var input = document.createElement("input");
    input.value = prevodi.translate238;
    input.type = "button";
    input.id = "mojgumb111";
    input.setAttribute("FARMLISTEtasknumber", this.getAttribute("FARMLISTEtasknumber"));
    input.setAttribute("lid", this.getAttribute("lid"));
    input.setAttribute("FARMLISTEtasknumber", this.getAttribute("FARMLISTEtasknumber"));
    input.addEventListener('click', SaveTroopsHome, true);
    SpremeniCas.dodajElement(input);


}

function UstvariHeroOkno() {

    var GolderOkno = new PojavnoOkno();
    GolderOkno.nastaviNaslov("Hero");


    var gumbPridobiLink = document.createElement("span");
    gumbPridobiLink.id = "spanWithHero";
    gumbPridobiLink.innerHTML = "<input type='checkbox' id='TurnOnHero'>" + prevodi.translate138 + "<br><input type='checkbox' id='heroAdvantures'>" + prevodi.translate139 + ".<br>";
    gumbPridobiLink.innerHTML += "<span style='display:none;'><input type='checkbox' id='HeroClearOases'>Clear oases from my goldclub farmlists<br><span id='HeroSpan' style='display:none;'>Send attack if defense in oases is lower then <input type='text' size='3' id='oasesDefense' value='1000'><br></span></span>";
    gumbPridobiLink.innerHTML += prevodi.translate140 + "<input type='text' size='2' id='heroInterval' value='60'>" + prevodi.translate18 + "<br>";
    gumbPridobiLink.innerHTML += prevodi.translate141 + "<input type='text' size='2' id='heroHealth' value='50'>% " + prevodi.translate142 + "<br>";

    GolderOkno.dodajElement(gumbPridobiLink);

    GolderOkno.odpri();
    document.getElementById("TurnOnHero").checked = PLAYER.hero.on;
    document.getElementById("HeroClearOases").checked = PLAYER.hero.oases
    document.getElementById("heroAdvantures").checked = PLAYER.hero.advanture;
    document.getElementById("oasesDefense").value = PLAYER.hero.oasesdef;
    document.getElementById("heroInterval").value = PLAYER.hero.interval;
    document.getElementById("heroHealth").value = PLAYER.hero.minhealth;
    if (document.getElementById("HeroClearOases").checked) {
        document.getElementById("HeroSpan").style.display = "";
    }
    document.getElementById("TurnOnHero").addEventListener('click', HeroHandler, true);
    document.getElementById("HeroClearOases").addEventListener('click', HeroHandler, true);
    document.getElementById("heroAdvantures").addEventListener('click', HeroHandler, true);
    document.getElementById("oasesDefense").addEventListener('change', HeroHandler, true);
    document.getElementById("heroInterval").addEventListener('change', HeroHandler, true);
    document.getElementById("heroHealth").addEventListener('change', HeroHandler, true);

}

function HeroHandler() {
    switch (this.id) {
        case "TurnOnHero":
            PLAYER.hero.on = this.checked;
            break;
        case "HeroClearOases":
            PLAYER.hero.onoases = this.checked;
            if (this.checked) {
                document.getElementById("HeroSpan").style.display = "";
            }
            else {
                document.getElementById("HeroSpan").style.display = "none";
            }
            break;
        case "heroAdvantures":
            PLAYER.hero.advanture = this.checked;
            break;
        case "oasesDefense":
            PLAYER.hero.oasesdef = this.value;
            break;
        case "heroInterval":
            PLAYER.hero.interval = this.value;
            break;
        case "heroHealth":
            PLAYER.hero.minhealth = this.value;
            break;

    }
}
skupajgombov = 4;
function UstvariGoldFarmlistOkno() {

    var GolderOkno = new PojavnoOkno();
    GolderOkno.nastaviNaslov(prevodi.translate317);


    var gumbPridobiLink = document.createElement("span");
    gumbPridobiLink.id = "spanWithFarmlists";
    gumbPridobiLink.innerHTML = "<h3>" + prevodi.translate317 + ":</h3>";


    var div2 = gumbPridobiLink;
    var span = document.createElement("span");
    div2.appendChild(span);

    var vsebina = '<div style="border-radius:15px; text-align:center;" class="village1darkdark">';
    vsebina += '<div id="Farmlistss0" class="FARMLISTS" style="text-align: justify; margin-left:0.2%">';
    vsebina += '</div>';

    vsebina += '</div>';

    span.innerHTML += vsebina;



    GolderOkno.dodajElement(gumbPridobiLink);




    GolderOkno.odpri();



    GolderOkno.dodajElement(document.createElement("br"));
    var div3 = document.getElementById("Farmlistss0");
    for (var farmlista = 0; farmlista < PLAYER.FARMLISTE.length; farmlista++) {


        var DivNaselje = document.createElement("div");
        DivNaselje.setAttribute("class", "column1");
        DivNaselje.setAttribute("draggable", "true");
        DivNaselje.setAttribute("style", "width:99%");
        var vsebina = '<div style="overflow:hidden;" id="Farmlist' + PLAYER.FARMLISTE[farmlista].tasknumber + '" class="FARMLISTS" >';
        vsebina += '<span style="float:right;clear:inherit;"><input type="checkbox" tip="checkboxzdruzi" tasknumber="' + PLAYER.FARMLISTE[farmlista].tasknumber + '" id="FARMLISTEtasknumberch' + PLAYER.FARMLISTE[farmlista].tasknumber + '">' + prevodi.translate159 + '</span></div>';
        DivNaselje.innerHTML = vsebina;
        div3.appendChild(DivNaselje);



        var gumbPridobiLink3 = document.getElementById("Farmlist" + PLAYER.FARMLISTE[farmlista].tasknumber);


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



        var div = document.createElement("span");

        var input = document.createElement("input");
        input.value = "X";
        input.type = "button";
        input.setAttribute("lid", PLAYER.FARMLISTE[farmlista].lid);
        input.setAttribute("FARMLISTEtasknumber", PLAYER.FARMLISTE[farmlista].tasknumber);
        input.setAttribute("id", "FARMLISTEtasknumber" + PLAYER.FARMLISTE[farmlista].tasknumber);
        input.style.cursor = "pointer";
        input.addEventListener('click', IzbrisiFarmlistoHandler, true);
        gumbPridobiLink3.appendChild(input);


        var input = document.createElement("input");
        if (PLAYER.FARMLISTE[farmlista].active) {
            input.value = "| |";
        }
        else {
            input.value = "ᐅ";
        }
        input.setAttribute("class", "editfarmlist");
        input.addEventListener('mouseout', hideddrivetip, true);
        input.addEventListener('mouseover', PauseTip, true);


        input.type = "button";
        input.setAttribute("lid", PLAYER.FARMLISTE[farmlista].lid);
        input.setAttribute("FARMLISTEtasknumber", PLAYER.FARMLISTE[farmlista].tasknumber);
        //input.setAttribute("id", "FARMLISTEtasknumber" + PLAYER.FARMLISTE[farmlista].tasknumber);
        input.style.cursor = "pointer";
        input.addEventListener('click', OmogociFarmlistoHandler, true);
        gumbPridobiLink3.appendChild(input);

        var span = document.createElement("span");
        span.innerHTML = PLAYER.FARMLISTE[farmlista].ime;
        span.setAttribute("style", "margin-left:5px; margin-right:5px;");
        div.appendChild(span);

        var input = document.createElement("img");
        input.src = "http://shrani.si/f/2i/bv/3NfnnqDh/1/repeattime.png";
        input.width = "16";
        input.height = "20";
        input.alt = prevodi.translate17 + " " + PLAYER.FARMLISTE[farmlista].intervalmin + "-" + PLAYER.FARMLISTE[farmlista].intervalmax + " minutes";
        input.title = prevodi.translate17 + " " + PLAYER.FARMLISTE[farmlista].intervalmin + "-" + PLAYER.FARMLISTE[farmlista].intervalmax + " minutes";
        input.setAttribute("lid", PLAYER.FARMLISTE[farmlista].lid);
        input.setAttribute("FARMLISTEtasknumber", PLAYER.FARMLISTE[farmlista].tasknumber);
        input.setAttribute("class", "editfarmlist");
        input.setAttribute("style", "margin-left:5px; margin-right:5px; width:20px; height:20px;");
        input.style.cursor = "pointer";
        input.addEventListener('click', SpremeniCasFarmliste, true);
        div.appendChild(input);

        if (PLAYER.FARMLISTE[farmlista].troopshome + "" == "undefined") {
            PLAYER.FARMLISTE[farmlista].troopshome = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        }

        var input = document.createElement("img");
        input.src = "http://shrani.si/f/3k/ld/2E6bBwx7/1/home.png";
        input.width = "16";
        input.height = "20";
        input.alt = prevodi.translate136 + ": " + PLAYER.FARMLISTE[farmlista].troopshome.join(",");
        input.title = prevodi.translate136 + ": " + PLAYER.FARMLISTE[farmlista].troopshome.join(",");
        input.setAttribute("lid", PLAYER.FARMLISTE[farmlista].lid);
        input.setAttribute("FARMLISTEtasknumber", PLAYER.FARMLISTE[farmlista].tasknumber);
        input.setAttribute("class", "editfarmlist");
        input.setAttribute("style", "margin-left:5px; margin-right:5px; width:20px; height:20px;");
        input.style.cursor = "pointer";
        input.addEventListener('click', SpremeniEnoteDoma, true);
        div.appendChild(input);

        var input = document.createElement("img");
        input.src = "http://shrani.si/f/29/Lm/2GTizsiE/1/settings.png";
        input.width = "16";
        input.height = "20";
        input.alt = "Other settings";
        input.title ="Other settings";
        input.setAttribute("lid", PLAYER.FARMLISTE[farmlista].lid);
        input.setAttribute("FARMLISTEtasknumber", PLAYER.FARMLISTE[farmlista].tasknumber);
        input.setAttribute("class", "editfarmlist");
        input.setAttribute("style", "margin-left:5px; margin-right:5px; width:20px; height:20px;");
        input.style.cursor = "pointer";
        input.addEventListener('click', SpremeniNastavitveFarmlist, true);
        div.appendChild(input);

        gumbPridobiLink3.appendChild(div);

        var TaskZaIzbris = document.evaluate(".//input[@tip='checkboxzdruzi']", DivNaselje, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
        for (var i = 0; i < TaskZaIzbris.snapshotLength; i++) {
            TaskZaIzbris.snapshotItem(i).addEventListener('click', zdruziCheckboxHandler, false);
            if (PLAYER.FARMLISTE[farmlista].joinwithprevious) {
                TaskZaIzbris.snapshotItem(i).click();
            }
        }
    }
    PrikazCheckboxov(div3);

    if (PLAYER.FARMLISTE.length == 0) {
        var gumbPridobiLink1 = document.createElement("span");
        gumbPridobiLink1.id = "spanCopyFarmlists";
        gumbPridobiLink1.innerHTML = prevodi.translate361 + " <br>";
        gumbPridobiLink.appendChild(gumbPridobiLink1);

    }

    GolderOkno.dodajElement(gumbPridobiLink);
    var fieldset = document.createElement("fieldset");
    fieldset.setAttribute("style", "border:3px solid #0066FF; border-radius: 10px 10px 10px 10px;");
    var legend = document.createElement("legend");
    legend.innerHTML = "<h2>" + prevodi.translate362 + "</h2>";
    fieldset.appendChild(legend);

    var div = document.createElement("div");

    var gumbPridobiLink = document.createElement("span");
    gumbPridobiLink.id = "spanCopyFarmlists";
    gumbPridobiLink.innerHTML = prevodi.translate363 + ":";
    div.appendChild(gumbPridobiLink);



    var gumbPridobiLink = document.createElement("input");
    gumbPridobiLink.type = "text";
    gumbPridobiLink.id = "farmlistName";
    gumbPridobiLink.value = "farmlistName";
    gumbPridobiLink.setAttribute("tip", prevodi.translate364);
    gumbPridobiLink.setAttribute("style", "border:2px solid #0066FF; border-radius: 5px;");
    gumbPridobiLink.addEventListener('mouseout', hideddrivetip, true);
    gumbPridobiLink.addEventListener('mouseover', function () { ddrivetip(document.getElementById("farmlistName").getAttribute("tip"), 'green') }, true);
    div.appendChild(gumbPridobiLink);


    div.appendChild(document.createElement("br"));

    var gumbPridobiLink = document.createElement("span");
    gumbPridobiLink.id = "spanCopyFarmlists";
    gumbPridobiLink.innerHTML = prevodi.translate205 + ":";
    div.appendChild(gumbPridobiLink);
    var select = document.createElement("select");
    select.id = "VasZaDodajanjeFarmliste";
    select.setAttribute("style", "border:2px solid #0066FF; border-radius: 5px;");

    for (var i = 0; i < PLAYER.villages.length; i++) {
        var text = PLAYER.villages[i].name + " (" + PLAYER.villages[i].x + "|" + PLAYER.villages[i].y + ")";
        var option = document.createElement("option");
        option.value = PLAYER.villages[i].villageid;
        option.innerHTML = text;
        select.appendChild(option);
    }
    div.appendChild(select);

    div.appendChild(document.createElement("br"));
    var gumbPridobiLink = document.createElement("input");
    gumbPridobiLink.type = "button";
    gumbPridobiLink.id = "copyFarmlist";
    gumbPridobiLink.value = prevodi.translate144 + "!";
    gumbPridobiLink.setAttribute("tip", prevodi.translate365);
    gumbPridobiLink.setAttribute("style", "border:2px solid #0066FF; border-radius: 5px;");
    gumbPridobiLink.addEventListener('mouseout', hideddrivetip, true);
    gumbPridobiLink.addEventListener('mouseover', function () { ddrivetip(document.getElementById("copyFarmlist").getAttribute("tip"), 'green') }, true);
    gumbPridobiLink.addEventListener('click', CopyFarmlist, true);
    div.appendChild(gumbPridobiLink);

    GolderOkno.dodajElement(div);

    var gumbPridobiLink = document.createElement("div");
    gumbPridobiLink.id = "copyProgress";
    div.appendChild(gumbPridobiLink);

    fieldset.appendChild(div);
    GolderOkno.dodajElement(fieldset);

    GolderOkno.odpri();
}

function ImportData() {
    var answer = confirm(prevodi.translate145)
    if (answer) {
        var data = document.getElementById("textareaPLAYER").value;
        try {
            var data2 = eval("(" + data + ")");
        }
        catch (err) {
            alert(prevodi.translate366);
        }
        if (PLAYER.uid == data2.uid) {
            PLAYER.Import(data);
            PLAYER.SaveDataLocaly();
            dont_confirm_leave = 1;
            location.reload();
        }
        else {
            alert(prevodi.translate146 + ":" + data2.uid + ". " + prevodi.translate147 + " " + PLAYER.uid + ". " + prevodi.translate148 + ".");

        }
    }


}

function PauseTip() {

    if (this.value == "| |") {
        ddrivetip("Click here to pause this task. If task is paused, it will be ignored by bot.", 'green')
    }
    else {
        ddrivetip("Click here to resume this task. Task will no longer be ignored by bot.", 'green')
    }
}


function ExportImport() {

    var ImportOkno = new PojavnoOkno();
    ImportOkno.nastaviNaslov(prevodi.translate149);

    var gumbPridobiLink = document.createElement("span");
    gumbPridobiLink.innerHTML = prevodi.translate150+":";
    ImportOkno.dodajElement(gumbPridobiLink);

    ImportOkno.dodajElement(document.createElement("br"));

    var data = JSON.stringify(PLAYER, null, 4);

    var textarea = document.createElement("textarea");
    textarea.setAttribute("style", "width:100%; height:80%");
    textarea.id = "textareaPLAYER";
    textarea.innerHTML = data;
    ImportOkno.dodajElement(textarea);
    ImportOkno.dodajElement(document.createElement("br"));


    var input = document.createElement("input");
    input.type = "button";
    input.id = "farmlistName";
    input.value = prevodi.translate367;
    input.addEventListener('click', ImportData, true);
    ImportOkno.dodajElement(input);

    ImportOkno.odpri();
}

var GoldLink="";
var GoldServerLink="";

function SpremeniSlider() {
    if (!isNumber(this.value) || this.value * 1 < 0) {
        this.value = 50;
    }

    var tip = this.getAttribute("id");
    if (tip == "workingtimeslider" || tip == "workingtimesliderBox") {
        if (tip == "workingtimeslider") {
            document.getElementById("workingtimesliderBox").value = this.value;
        } else {
            if (this.value * 1 > 100) {
                this.value = 100;
            }
            if (this.value * 1 < 0) {
                this.value = 0;
            }
            document.getElementById("workingtimeslider").value = this.value;
        }
        var pavza = 100 - this.value * 1;
        if (document.getElementById("workingtimeFix").checked && document.getElementById("pausetimeFix").checked) {
            var skupajWorking = (document.getElementById("workingtimeMax").value * 1 + document.getElementById("workingtimeMin").value * 1) / 2;
            var skupajPause = (document.getElementById("pausetimeMax").value * 1 + document.getElementById("pausetimeMin").value * 1) / 2;
            var ProcentWorking = Math.round(skupajWorking / (skupajWorking + skupajPause) * 100);
            var ProcentiPause = 100 - ProcentWorking;
            document.getElementById("workingtimesliderBox").value = ProcentWorking;
            document.getElementById("workingtimeslider").value = ProcentWorking;
        }
        else if (document.getElementById("workingtimeFix").checked) {
            if (document.getElementById("workingtimeMax").value == 0) {
                document.getElementById("workingtimeMax").value = 240;
                document.getElementById("workingtimeMin").value = 120;
            }
            if (pavza == 100) {
                document.getElementById("workingtimeMin").value = 0;
                document.getElementById("workingtimeMax").value = 0;
            }
            else {
                pavza = pavza / this.value;
                document.getElementById("pausetimeMax").value = Math.ceil(pavza * document.getElementById("workingtimeMax").value);
                document.getElementById("pausetimeMin").value = Math.round(pavza * document.getElementById("workingtimeMin").value);
            }
        }
        else if (document.getElementById("pausetimeFix").checked) {

            if (document.getElementById("pausetimeMax").value == 0) {
                document.getElementById("pausetimeMax").value = 240;
                document.getElementById("pausetimeMin").value = 120;
            }
            if (pavza == 0) {
                document.getElementById("pausetimeMax").value = 0;
                document.getElementById("pausetimeMin").value = 0;
            }
            else {
                pavza = this.value / pavza;
                document.getElementById("workingtimeMax").value = Math.ceil(pavza * document.getElementById("pausetimeMax").value);
                document.getElementById("workingtimeMin").value = Math.round(pavza * document.getElementById("pausetimeMin").value);
            }
        }
        else {
            if (document.getElementById("workingtimeMax").value == 0) {
                document.getElementById("workingtimeMax").value = 240;
                document.getElementById("workingtimeMin").value = 120;
            }
            if (pavza == 100) {
                document.getElementById("workingtimeMax").value = 0;
                document.getElementById("workingtimeMin").value = 0;
            }
            else {
                pavza = pavza / this.value;
                document.getElementById("pausetimeMax").value = Math.ceil(pavza * document.getElementById("workingtimeMax").value);
                document.getElementById("pausetimeMin").value = Math.round(pavza * document.getElementById("workingtimeMin").value);
            }
        }
    }
    else if (tip == "workingtimeMin") {
        if (document.getElementById("workingtimeMax").value * 1 < this.value * 1) {
            this.value = document.getElementById("workingtimeMax").value;
        }
        var delovanje = 100;
        if (document.getElementById("pausetimeMax").value * 1 > 0) {
            var skupajWorking = (document.getElementById("workingtimeMax").value * 1 + document.getElementById("workingtimeMin").value * 1) / 2;
            var skupajPause = (document.getElementById("pausetimeMax").value * 1 + document.getElementById("pausetimeMin").value * 1) / 2;
            var ProcentWorking = Math.round(skupajWorking / (skupajWorking + skupajPause) * 100);
            var ProcentiPause = 100 - ProcentWorking;
            document.getElementById("workingtimesliderBox").value = ProcentWorking;
            document.getElementById("workingtimeslider").value = ProcentWorking;
        }
    }
    else if (tip == "workingtimeMax") {
        if (document.getElementById("workingtimeMin").value * 1 > this.value * 1) {
            this.value = document.getElementById("workingtimeMin").value;
        }
        var delovanje = 100;
        if (document.getElementById("pausetimeMax").value * 1 > 0) {
            var skupajWorking = (document.getElementById("workingtimeMax").value * 1 + document.getElementById("workingtimeMin").value * 1) / 2;
            var skupajPause = (document.getElementById("pausetimeMax").value * 1 + document.getElementById("pausetimeMin").value * 1) / 2;
            var ProcentWorking = Math.round(skupajWorking / (skupajWorking + skupajPause) * 100);
            var ProcentiPause = 100 - ProcentWorking;
            document.getElementById("workingtimesliderBox").value = ProcentWorking;
            document.getElementById("workingtimeslider").value = ProcentWorking;
        }
    }
    else if (tip == "pausetimeMin") {
        if (document.getElementById("pausetimeMax").value * 1 < this.value * 1) {
            this.value = document.getElementById("pausetimeMax").value;
        }
        var delovanje = 100;
        if (document.getElementById("pausetimeMax").value * 1 > 0) {
            var skupajWorking = (document.getElementById("workingtimeMax").value * 1 + document.getElementById("workingtimeMin").value * 1) / 2;
            var skupajPause = (document.getElementById("pausetimeMax").value * 1 + document.getElementById("pausetimeMin").value * 1) / 2;
            var ProcentWorking = Math.round(skupajWorking / (skupajWorking + skupajPause) * 100);
            var ProcentiPause = 100 - ProcentWorking;
            document.getElementById("workingtimesliderBox").value = ProcentWorking;
            document.getElementById("workingtimeslider").value = ProcentWorking;
        }
    }
    else if (tip == "pausetimeMax") {
        if (document.getElementById("pausetimeMin").value * 1 > this.value * 1) {
            this.value = document.getElementById("pausetimeMin").value;
        }
        var delovanje = 100;
        if (document.getElementById("pausetimeMax").value * 1 > 0) {
            var skupajWorking = (document.getElementById("workingtimeMax").value * 1 + document.getElementById("workingtimeMin").value * 1) / 2;
            var skupajPause = (document.getElementById("pausetimeMax").value * 1 + document.getElementById("pausetimeMin").value * 1) / 2;
            var ProcentWorking = Math.round(skupajWorking / (skupajWorking + skupajPause) * 100);
            var ProcentiPause = 100 - ProcentWorking;
            document.getElementById("workingtimesliderBox").value = ProcentWorking;
            document.getElementById("workingtimeslider").value = ProcentWorking;
        }
    }

    var Nastavitve = {
        workingtimeMin: document.getElementById("workingtimeMin").value * 1,
        workingtimeMax: document.getElementById("workingtimeMax").value * 1,
        pausetimeMin: document.getElementById("pausetimeMin").value * 1,
        pausetimeMax: document.getElementById("pausetimeMax").value * 1
    }
    PLAYER.workingtime.set(Nastavitve);
}

function KopirajObjekt(obj) {
    var novObj= new Object();
    for (var propertyName in obj) {
        novObj[propertyName] = obj[propertyName];
    }
    return novObj;
}

function DodajTemplate() {
    var naselje = PLAYER.getVillage(document.getElementById("newTemplateVillage").value);
    var taski = naselje[document.getElementById("newTemplateType").value];
    var noviTaski = new Array();
    for (var j = 0; j < taski.length; j++) {
        noviTaski.push(KopirajObjekt(taski[j]));
    }

    PLAYER.TASKNUMBER++;

    var novObj = {
        type: document.getElementById("newTemplateType").value,
        TASKS: noviTaski,
        tasknumber: PLAYER.TASKNUMBER,
        name: document.getElementById("newTemplateName").value,
        village: document.getElementById("newTemplateVillage").value
    }
    PLAYER.template.templates.push(novObj);
    TemplateOkno.zapri();
    UstvariTemplateOkno();
}

function IzbrisiTemplate() {
    for (var i = 0; i < PLAYER.template.templates.length; i++) {
        if (this.getAttribute("tasknumber") == PLAYER.template.templates[i].tasknumber) {
            tasks = PLAYER.template.templates.splice(i, 1);
            break;
        }
    }
    TemplateOkno.zapri();
    UstvariTemplateOkno();
}
var UseTemplateOkno;
function UporabiTemplate() {
    UseTemplateOkno = new PojavnoOkno();
    UseTemplateOkno.nastaviNaslov(prevodi.translate151);
    var tasks = [];
    for (var i = 0; i < PLAYER.template.templates.length; i++) {
        if (this.getAttribute("tasknumber") == PLAYER.template.templates[i].tasknumber) {
            tasks = PLAYER.template.templates[i].TASKS;
            break;
        }
    }


    //var naselje = PLAYER.getVillage(document.getElementById("newTemplateVillage").value);
    //var tasks = naselje[document.getElementById("newTemplateType").value];
    var vsebina = prevodi.translate152;
    for (var i = 0; i < tasks.length; i++) {
        vsebina += '<div style="overflow:hidden;"><span>';
        var TaVredsnost = tasks[i];
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
                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.wood) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> wood";

                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.clay) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> clay ";

                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.iron) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> iron";

                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.crop) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> crop";

                    vsebina += prevodi.translate1 + ":" + ImeStavbe2 + " " + TaVredsnost.level;
                }
                else {
                    var ImeStavbe2 = prevodi.buldings[TaVredsnost.building];
                    vsebina += prevodi.translate1 + ': ID: ' + TaVredsnost.id + "; " + ImeStavbe2 + " " + TaVredsnost.level;
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
                    KoncniDodatek = ", " + prevodi.translate156 + ": " + TaVredsnost.optionValue + "; ";
                    if (!TaVredsnost.round) {
                        TaVredsnost.round = 100;
                    }
                    if (!TaVredsnost.fullmerchants) {
                        TaVredsnost.fullmerchants = false;
                    }
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
                    var selectround = "Round to:<select disabled><option value='" + TaVredsnost.round + "'>" + TaVredsnost.round + "</option></select>";
                    var polnitrgovci = "Send only full merchants<input type='checkbox' disabled ";
                    if (TaVredsnost.fullmerchants) {
                        polnitrgovci += " checked";
                    }
                    polnitrgovci += ">";
                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + prevodi.empty + " [" + LesZaDodat + "," + GlinaZaDodat + "," + ZelezoZaDodat + "," + ZitoZaDodat + "]% " + prevodi.fill + ": [" + LesZaSprejet + "," + GlinaZaSprejet + "," + ZelezoZaSprejet + "," + ZitoZaSprejet + "]% " + KoncniDodatek + selectround + polnitrgovci;

                }
                else {
                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + "[" + TaVredsnost.wood + "," + TaVredsnost.clay + "," + TaVredsnost.iron + "," + TaVredsnost.grain + "] " + KoncniDodatek;
                }

                vsebina += ImeStavbe;
                break;
            case "Party":
                ImeStavbe = prevodi.translate5 + ": " + PartyType[TaVredsnost.festival] + "  "+prevodi.translate154+": " + TaVredsnost.repeat + " " + prevodi.translate18 + ".";
                vsebina += ImeStavbe;
                break;
            case "ArmorUpgrade":
                ImeStavbe = prevodi.translate6 + ": [" + TaVredsnost.unit + "]; " + prevodi.translate158 + " " + TaVredsnost.level;
                vsebina += ImeStavbe;
                break;
            case "Train":
                var KoncniDodatek = "";

                if (TaVredsnost.option * 1 == 1) {
                    KoncniDodatek = ", " + prevodi.repetevery + " " + TaVredsnost.optionValue + " " + prevodi.minutes;
                }
                ImeStavbe = prevodi.train + ": [" + TaVredsnost.units + "] " + KoncniDodatek;
                vsebina += ImeStavbe;
                break;
            case "demolish":
                vsebina += prevodi.translate7 + ": ID: " + TaVredsnost.building;
                vsebina += " " + prevodi.translate166 + ": " + TaVredsnost.name;
                vsebina += " " + prevodi.translate158 + ": " + TaVredsnost.level;
                break;
        }
        var dodatek = "";
        if (TaVredsnost.joinwithprevious) {
            dodatek = 'checked'
        }
        vsebina += '</span><span style="float:right;clear:inherit;"><input type="checkbox" disabled ' + dodatek + '>' + prevodi.translate159 + '</span><span></span></div>';
    }
    if (tasks.length == 0) {
        vsebina = prevodi.translate160;
    }
    var div = document.createElement("div");
    div.innerHTML = vsebina;
    UseTemplateOkno.dodajElement(div);



    var tekst = "<br>" + prevodi.translate205 + ":<select id='useTemplateVillage'>";
    for (var i = 0; i < PLAYER.villages.length; i++) {
        tekst += "<option value='" + PLAYER.villages[i].villageid + "'>" + PLAYER.villages[i].name + " (" + PLAYER.villages[i].x + "|" + PLAYER.villages[i].y + ")</option>";
    }
    tekst += "</select>"

    var div = document.createElement("div");
    div.innerHTML = tekst;
    div.setAttribute("style","width:auto;")
    UseTemplateOkno.dodajElement(div);
    UseTemplateOkno.dodajElement(document.createElement("br"));

    var sliderbox = document.createElement("input");
    sliderbox.type = "button";
    sliderbox.value = prevodi.translate161;
    sliderbox.setAttribute("tasknumber", this.getAttribute("tasknumber"));
    sliderbox.addEventListener('click', UporabiTemplate2, true);
    UseTemplateOkno.dodajElement(sliderbox);

    UseTemplateOkno.odpri();
}

function UporabiTemplate2() {
//    UseTemplateOkno = new PojavnoOkno();
//    UseTemplateOkno.nastaviNaslov("Use template");
    var tasks = [];
    var typeoftask
    for (var i = 0; i < PLAYER.template.templates.length; i++) {
        if (this.getAttribute("tasknumber") == PLAYER.template.templates[i].tasknumber) {
            tasks = PLAYER.template.templates[i].TASKS;
            typeoftask = PLAYER.template.templates[i].type;
            break;
        }
    }

    var naselje = PLAYER.getVillage(document.getElementById("useTemplateVillage").value);
    for (var i = 0; i < tasks.length; i++) {
        PLAYER.TASKNUMBER++;
        tasks[i].tasknumber = PLAYER.TASKNUMBER;
        tasks[i].villageid = naselje.villageid;
        naselje[typeoftask][naselje[typeoftask].length]=tasks[i];
        naselje.DodajVCakalnoVrsto(tasks[i]);
    }

    UseTemplateOkno.zapri();
    alert(prevodi.translate162);
}

function ExampleTemplate() {
    var naselje = PLAYER.getVillage(document.getElementById("newTemplateVillage").value);
    var tasks = naselje[document.getElementById("newTemplateType").value];
    var vsebina = "";
    for (var i = 0; i < tasks.length; i++) {
        vsebina += '<div style="overflow:hidden;"><span>';
        var TaVredsnost = tasks[i];
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
                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.wood) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> wood ";

                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.clay) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> clay ";

                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.iron) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> iron ";

                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.crop) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> crop ";
                    vsebina += prevodi.translate1 + ":" + ImeStavbe2 + " " + TaVredsnost.level;
                }
                else {
                    var ImeStavbe2 = prevodi.buldings[TaVredsnost.building];
                    vsebina += prevodi.translate1 + ': ID: ' + TaVredsnost.id + "; " + ImeStavbe2 + " " + TaVredsnost.level;
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
                    KoncniDodatek = ", " + prevodi.translate156 + ": " + TaVredsnost.optionValue + "; ";
                    if (!TaVredsnost.round) {
                        TaVredsnost.round = 100;
                    }
                    if (!TaVredsnost.fullmerchants) {
                        TaVredsnost.fullmerchants = false;
                    }
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
                    var selectround = "Round to:<select disabled><option value='" + TaVredsnost.round + "'>" + TaVredsnost.round + "</option></select>";
                    var polnitrgovci = "Send only full merchants<input type='checkbox' disabled ";
                    if (TaVredsnost.fullmerchants) {
                        polnitrgovci += " checked";
                    }
                    polnitrgovci += ">";
                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + prevodi.empty + " [" + LesZaDodat + "," + GlinaZaDodat + "," + ZelezoZaDodat + "," + ZitoZaDodat + "]% " + prevodi.fill + ": [" + LesZaSprejet + "," + GlinaZaSprejet + "," + ZelezoZaSprejet + "," + ZitoZaSprejet + "]% " + KoncniDodatek + selectround + polnitrgovci;

                }
                else {
                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + "[" + TaVredsnost.wood + "," + TaVredsnost.clay + "," + TaVredsnost.iron + "," + TaVredsnost.grain + "] " + KoncniDodatek;
                }

                vsebina += ImeStavbe;
                break;
            case "Party":
                ImeStavbe = prevodi.translate5 + ": " + PartyType[TaVredsnost.festival] + "  " + prevodi.translate154 + ": " + TaVredsnost.repeat + " " + prevodi.translate18 + ".";
                vsebina += ImeStavbe;
                break;
            case "ArmorUpgrade":
                ImeStavbe = prevodi.translate154 + ": [" + TaVredsnost.unit + "]; " + prevodi.translate158 + " " + TaVredsnost.level;
                vsebina += ImeStavbe;
                break;
            case "Train":
                var KoncniDodatek = "";

                if (TaVredsnost.option * 1 == 1) {
                    KoncniDodatek = ", " + prevodi.repetevery + " " + TaVredsnost.optionValue + " " + prevodi.minutes;
                }
                ImeStavbe = prevodi.train + ": [" + TaVredsnost.units + "] " + KoncniDodatek;
                vsebina += ImeStavbe;
                break;
            case "demolish":
                vsebina += prevodi.translate7 + ": ID: " + TaVredsnost.building;
                vsebina += " " + prevodi.translate166 + ": " + TaVredsnost.name;
                vsebina += " " + prevodi.translate158 + ": " + TaVredsnost.level;
                break;
        }
        var dodatek = "";
        if (TaVredsnost.joinwithprevious) {
            dodatek = 'checked'
        }
        vsebina += '</span><span style="float:right;clear:inherit;"><input type="checkbox" ' + dodatek + '>' + prevodi.translate159 + '</span><span></span></div>';
    }
    if (tasks.length == 0) {
        vsebina = prevodi.translate160;
    }
    //DivNaselje.innerHTML = vsebina;
    ddrivetip(vsebina, 'yellow')
}

function uniciTooltip(e) {

    try {
        var id = "mojtooltip" + e.target.id;
        var ttata = document.getElementById(id);
        ttata.innerHTML = "";
        //ttata.parentNode.removeChild(ttata);
    }
    catch (err) {
    }
}
var reportid = 10;
//alert(navigator.userAgent.toLowerCase());
function nastaviTooltip(text, element) {
    var elementid = element.getAttribute("id");
    if (!document.getElementById("mojtooltip" + elementid)) {
        var didd = document.createElement("div");
        didd.setAttribute("class", "tooltip");
        didd.setAttribute("id", "mojtooltip" + elementid);
        document.getElementById("mojtooltip").appendChild(didd);
    }
    document.getElementById("mojtooltip" + elementid).innerHTML = text;
    //$(element).after(document.getElementById("mojtooltip"));
    //element.setAttribute("id", "report" + reportid);
    /*
    $("#"+elementid).tooltip({
        tip: '#mojtooltip' + elementid,
        effect: 'slide',
        position: "left",
        offset: [100, -400]
    });*/
    //reportid++;
}
function ustvariReportTooltp(e) {
    var element = this;
    var taid = element.getAttribute("id");
    var data=element.getAttribute("data");
    if (data == null) {
        nastaviTooltip("<span style='color:red;'>Report not analysed. Click me to open report (this also works  for analysed reports)</span>", element);
        //ddrivetip("Report not analysed", 'white')
    }
    else {
        var data = eval("(" + data + ")");
        var dataaaa = ["attackerTroops", "defenderTroops1", "defenderTroops2", "defenderTroops3", "defenderTroops4", "defenderTroops5"];
        var dataaaa2 = ["Attacker", "Defender", "Defender", "Defender", "Defender", "Defender"];
        var skupaj = "<table style='width:100%; border:2px solid #CCCCCC;'><tr><td>Title</td><td>" + data.tema + "</td></tr><tr><td>Time</td><td>" + data.time + "</td></tr>";

//        var stroski = {
//            wood: 0,
//            clay: 0,
//            iron: 0,
//            crop: 0
//        }
//        for (var i = 0; i < data.attackerTroops.length; i++) {
//            stroski.wood += data.attackerTroops[i].
        //        }
        var skupajplen = data.plen.wood * 1 + data.plen.clay * 1 + data.plen.iron * 1 + data.plen.crop * 1;
        var skupajizgube = data.attackerstroski.wood * 1 + data.attackerstroski.clay * 1 + data.attackerstroski.iron * 1 + data.attackerstroski.crop * 1;
        var dobicekwood = data.plen.wood - data.attackerstroski.wood;
        var dobicekclay = data.plen.clay - data.attackerstroski.clay;
        var dobicekiron = data.plen.iron - data.attackerstroski.iron;
        var dobicekcrop = data.plen.crop - data.attackerstroski.crop;
        var skupajdobicek = dobicekwood * 1 + dobicekclay * 1 + dobicekiron * 1 + dobicekcrop * 1;
        var tabelaplen = "<table style='width:100%; border:2px solid #CCCCCC;' class='reporttabela'><tr><td rowspan='2'>Bounty</td><td><canvas name='reportplenwood" + taid + "' width='18' height='18'></canvas>" + data.plen.wood + "</td><td><canvas name='reportplenclay" + taid + "' width='18' height='18'></canvas>" + data.plen.clay + "</td><td><canvas name='reportpleniron" + taid + "' width='18' height='18'></canvas>" + data.plen.iron + "</td><td><canvas name='reportplencrop" + taid + "' width='18' height='18'></canvas>" + data.plen.crop + "</td><td>Total: " + skupajplen + "</td></tr>";
        tabelaplen += "<tr><td colspan='5'><canvas name='reportplenizkupicek"+taid+"' width='19' height='19'></canvas>" + data.nosilnost[0] + "/" + data.nosilnost[1] + "</td></tr>"
        tabelaplen += "<tr><td>Losses attacker</td><td><canvas name='reportplenwood" + taid + "' width='18' height='18'></canvas>" + data.attackerstroski.wood + "</td><td><canvas name='reportplenclay" + taid + "' width='18' height='18'></canvas>" + data.attackerstroski.clay + "</td><td><canvas name='reportpleniron" + taid + "' width='18' height='18'></canvas>" + data.attackerstroski.iron + "</td><td><canvas name='reportplencrop" + taid + "' width='18' height='18'></canvas>" + data.attackerstroski.crop + "</td><td>Total: " + skupajizgube + "</td></tr>"
        tabelaplen += "<tr><td>Income attacker</td><td><canvas name='reportplenwood" + taid + "' width='18' height='18'></canvas>" + dobicekwood + "</td><td><canvas name='reportplenclay" + taid + "' width='18' height='18'></canvas>" + dobicekclay + "</td><td><canvas name='reportpleniron" + taid + "' width='18' height='18'></canvas>" + dobicekiron + "</td><td><canvas name='reportplencrop" + taid + "' width='18' height='18'></canvas>" + dobicekcrop + "</td><td>Total: " + skupajdobicek + "</td></tr></table>"
        //tabelabranilec += "<tr><td>Units</td><td>" + data.defenderTroops1[0].units + "</td><td>" + data.defenderTroops1[1].units + "</td><td>" + data.defenderTroops1[2].units + "</td><td>" + data.defenderTroops1[3].units + "</td><td>" + data.defenderTroops1[4].units + "</td><td>" + data.defenderTroops1[5].units + "</td><td>" + data.defenderTroops1[6].units + "</td><td>" + data.defenderTroops1[7].units + "</td><td>" + data.defenderTroops1[8].units + "</td><td>" + data.defenderTroops1[9].units + "</td></tr>";
        //tabelabranilec += "<tr><td>Zrtve</td><td>" + data.defenderTroops1[0].lostunits + "</td><td>" + data.defenderTroops1[1].lostunits + "</td><td>" + data.defenderTroops1[2].lostunits + "</td><td>" + data.defenderTroops1[3].lostunits + "</td><td>" + data.defenderTroops1[4].lostunits + "</td><td>" + data.defenderTroops1[5].lostunits + "</td><td>" + data.defenderTroops1[6].lostunits + "</td><td>" + data.defenderTroops1[7].lostunits + "</td><td>" + data.defenderTroops1[8].lostunits + "</td><td>" + data.defenderTroops1[9].lostunits + "</td></tr></table>";


        for (var j = 0; j < dataaaa.length; j++) {
            if (data[dataaaa[j]].length == 0) {
                break;
            }
            var tabelanapadalec = "<div>" + dataaaa2[j] + "</div><table style='width:100%; border:1px solid #CCCCCC;' class='reporttabela'><th><td><canvas id='" + dataaaa[j] + "t1" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t2" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t3" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t4" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t5" + taid + "' width='16' height='16'></td><td><canvas id='" + dataaaa[j] + "t6" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t7" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t8" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t9" + taid + "' width='16' height='16'></canvas></td><td><canvas id='" + dataaaa[j] + "t10" + taid + "' width='16' height='16'></canvas></td></th>"
            tabelanapadalec += "<tr><td>Troops</td><td>" + data[dataaaa[j]][0].units + "</td><td>" + data[dataaaa[j]][1].units + "</td><td>" + data[dataaaa[j]][2].units + "</td><td>" + data[dataaaa[j]][3].units + "</td><td>" + data[dataaaa[j]][4].units + "</td><td>" + data[dataaaa[j]][5].units + "</td><td>" + data[dataaaa[j]][6].units + "</td><td>" + data[dataaaa[j]][7].units + "</td><td>" + data[dataaaa[j]][8].units + "</td><td>" + data[dataaaa[j]][9].units + "</td></tr>";
            tabelanapadalec += "<tr><td>Casualties</td><td>" + data[dataaaa[j]][0].lostunits + "</td><td>" + data[dataaaa[j]][1].lostunits + "</td><td>" + data[dataaaa[j]][2].lostunits + "</td><td>" + data[dataaaa[j]][3].lostunits + "</td><td>" + data[dataaaa[j]][4].lostunits + "</td><td>" + data[dataaaa[j]][5].lostunits + "</td><td>" + data[dataaaa[j]][6].lostunits + "</td><td>" + data[dataaaa[j]][7].lostunits + "</td><td>" + data[dataaaa[j]][8].lostunits + "</td><td>" + data[dataaaa[j]][9].lostunits + "</td></tr></table>";
            skupaj += "<tr><td colspan='2'>" + tabelanapadalec + "</td></tr>";
            if (j == 0) {
                skupaj += "<tr><td colspan='2'>" + tabelaplen + "</td></tr>";
            }
        }
        var skupajizgube = data.defenderstroski.wood * 1 + data.defenderstroski.clay * 1 + data.defenderstroski.iron * 1 + data.defenderstroski.crop * 1;
        var tabelaplen = "<table style='width:100%; border:1px solid #CCCCCC;' class='reporttabela'><tr><td>Losses defender</td><td><canvas name='reportplenwood" + taid + "' width='18' height='18'></canvas>" + data.defenderstroski.wood + "</td><td><canvas name='reportplenclay" + taid + "' width='18' height='18'></canvas>" + data.defenderstroski.clay + "</td><td><canvas name='reportpleniron" + taid + "' width='18' height='18'></canvas>" + data.defenderstroski.iron + "</td><td><canvas name='reportplencrop" + taid + "' width='18' height='18'></canvas>" + data.defenderstroski.crop + "</td><td>Total: " + skupajizgube + "</td></tr></table>"
        skupaj += "<tr><td colspan='2'>" + tabelaplen + "</td></tr>";
        /*
        var tabelabranilec = "<div>Branilec</div><table border='1'><th><td><canvas id='reportdef11' width='16' height='16'></td><td><canvas id='reportdef12' width='16' height='16'></td><td><canvas id='reportdef13' width='16' height='16'></td><td><canvas id='reportdef14' width='16' height='16'></td><td><canvas id='reportdef15' width='16' height='16'></td><td><canvas id='reportdef16' width='16' height='16'></td><td><canvas id='reportdef17' width='16' height='16'></td><td><canvas id='reportdef18' width='16' height='16'></td><td><canvas id='reportdef19' width='16' height='16'></td><td><canvas id='reportdef110' width='16' height='16'></td></th>"
        tabelabranilec += "<tr><td>Units</td><td>" + data.defenderTroops1[0].units + "</td><td>" + data.defenderTroops1[1].units + "</td><td>" + data.defenderTroops1[2].units + "</td><td>" + data.defenderTroops1[3].units + "</td><td>" + data.defenderTroops1[4].units + "</td><td>" + data.defenderTroops1[5].units + "</td><td>" + data.defenderTroops1[6].units + "</td><td>" + data.defenderTroops1[7].units + "</td><td>" + data.defenderTroops1[8].units + "</td><td>" + data.defenderTroops1[9].units + "</td></tr>";
        tabelabranilec += "<tr><td>Zrtve</td><td>" + data.defenderTroops1[0].lostunits + "</td><td>" + data.defenderTroops1[1].lostunits + "</td><td>" + data.defenderTroops1[2].lostunits + "</td><td>" + data.defenderTroops1[3].lostunits + "</td><td>" + data.defenderTroops1[4].lostunits + "</td><td>" + data.defenderTroops1[5].lostunits + "</td><td>" + data.defenderTroops1[6].lostunits + "</td><td>" + data.defenderTroops1[7].lostunits + "</td><td>" + data.defenderTroops1[8].lostunits + "</td><td>" + data.defenderTroops1[9].lostunits + "</td></tr></table>";

                if (data.defenderTroops2.length > 0) {
            var tabelabranilec = "<div>Branilec</div><table border='1'><th><td><canvas id='reportdef11' width='16' height='16'></td><td><canvas id='reportdef12' width='16' height='16'></td><td><canvas id='reportdef13' width='16' height='16'></td><td><canvas id='reportdef14' width='16' height='16'></td><td><canvas id='reportdef15' width='16' height='16'></td><td><canvas id='reportdef16' width='16' height='16'></td><td><canvas id='reportdef17' width='16' height='16'></td><td><canvas id='reportdef18' width='16' height='16'></td><td><canvas id='reportdef19' width='16' height='16'></td><td><canvas id='reportdef110' width='16' height='16'></td></th>"
            tabelabranilec += "<tr><td>Units</td><td>" + data.defenderTroops2[0].units + "</td><td>" + data.defenderTroops2[1].units + "</td><td>" + data.defenderTroops2[2].units + "</td><td>" + data.defenderTroops2[3].units + "</td><td>" + data.defenderTroops2[4].units + "</td><td>" + data.defenderTroops2[5].units + "</td><td>" + data.defenderTroops2[6].units + "</td><td>" + data.defenderTroops2[7].units + "</td><td>" + data.defenderTroops2[8].units + "</td><td>" + data.defenderTroops2[9].units + "</td></tr>";
            tabelabranilec += "<tr><td>Zrtve</td><td>" + data.defenderTroops2[0].lostunits + "</td><td>" + data.defenderTroops2[1].lostunits + "</td><td>" + data.defenderTroops2[2].lostunits + "</td><td>" + data.defenderTroops2[3].lostunits + "</td><td>" + data.defenderTroops2[4].lostunits + "</td><td>" + data.defenderTroops2[5].lostunits + "</td><td>" + data.defenderTroops2[6].lostunits + "</td><td>" + data.defenderTroops2[7].lostunits + "</td><td>" + data.defenderTroops2[8].lostunits + "</td><td>" + data.defenderTroops2[9].lostunits + "</td></tr></table>";
            skupaj += "<tr><td colspan='2'>" + tabelabranilec + "</td></tr>";
        }

        if (data.defenderTroops3.length > 0) {
            var tabelabranilec = "<div>Branilec</div><table border='1'><th><td><canvas id='reportdef11' width='16' height='16'></td><td><canvas id='reportdef12' width='16' height='16'></td><td><canvas id='reportdef13' width='16' height='16'></td><td><canvas id='reportdef14' width='16' height='16'></td><td><canvas id='reportdef15' width='16' height='16'></td><td><canvas id='reportdef16' width='16' height='16'></td><td><canvas id='reportdef17' width='16' height='16'></td><td><canvas id='reportdef18' width='16' height='16'></td><td><canvas id='reportdef19' width='16' height='16'></td><td><canvas id='reportdef110' width='16' height='16'></td></th>"
            tabelabranilec += "<tr><td>Units</td><td>" + data.defenderTroops3[0].units + "</td><td>" + data.defenderTroops3[1].units + "</td><td>" + data.defenderTroops3[2].units + "</td><td>" + data.defenderTroops3[3].units + "</td><td>" + data.defenderTroops3[4].units + "</td><td>" + data.defenderTroops3[5].units + "</td><td>" + data.defenderTroops3[6].units + "</td><td>" + data.defenderTroops3[7].units + "</td><td>" + data.defenderTroops3[8].units + "</td><td>" + data.defenderTroops3[9].units + "</td></tr>";
            tabelabranilec += "<tr><td>Zrtve</td><td>" + data.defenderTroops3[0].lostunits + "</td><td>" + data.defenderTroops3[1].lostunits + "</td><td>" + data.defenderTroops3[2].lostunits + "</td><td>" + data.defenderTroops3[3].lostunits + "</td><td>" + data.defenderTroops3[4].lostunits + "</td><td>" + data.defenderTroops3[5].lostunits + "</td><td>" + data.defenderTroops3[6].lostunits + "</td><td>" + data.defenderTroops3[7].lostunits + "</td><td>" + data.defenderTroops3[8].lostunits + "</td><td>" + data.defenderTroops3[9].lostunits + "</td></tr></table>";
            skupaj += "<tr><td colspan='2'>" + tabelabranilec + "</td></tr>";
        }
        */
        skupaj += "</table>";

        //position: 'center right',
        nastaviTooltip(skupaj, element);
        //ddrivetip(skupaj, 'white')
        var dataaaa = ["attackerTroops", "defenderTroops1", "defenderTroops2", "defenderTroops3", "defenderTroops4", "defenderTroops5"];
        for (var j = 0; j < dataaaa.length; j++) {
            var slikanpapadalec;
            if (data[dataaaa[j]].length == 0) {
                break;
            }
            switch (data[dataaaa[j]][0].type*1) {
                case 1:
                    slikanapadalec = reportimgrimljan;
                    break;
                case 11:
                    slikanapadalec = reportimgtevton;
                    break;
                case 21:
                    slikanapadalec = reportimggalec;
                    break;
                case 31:
                    slikanapadalec = reportimgnarava;
                    break;
                default:
                    slikanapadalec = reportimgrimljan;
                    break;
            }
            for (var i = 1; i < 10; i++) {
                var canv = document.getElementById(dataaaa[j] + "t" + i + taid);
                var ctx = canv.getContext('2d');
                ctx.drawImage(slikanapadalec, 19 * (i - 1), 0, 16, 16, 0, 0, 16, 16);
            }
            var canv = document.getElementById(dataaaa[j] + "t10" + taid);
            var ctx = canv.getContext('2d');
            ctx.drawImage(reportimgheroj, 19 * (2), 0, 16, 16, 0, 0, 16, 16);
        }

        var dataaaa = ["reportplenwood", "reportplenclay", "reportpleniron", "reportplencrop","reportplenizkupicek"];
        for (var j = 0; j < dataaaa.length; j++) {
            var slikanpapadalec;
            var razdalja = 0;
            var sirina = 18;
            var visisna = 0;
            if (j <= 3) {
                slikanapadalec = reportimgsurovine;
                razdalja = j * 26;
                sirina = 18;
                visisna = 0;
            }
            else {
                slikanapadalec = reportimgnosilnost;
                sirina = 13;
                visisna = 3;
                if (data.nosilnost[0] == 0) {
                    razdalja = 30;
                }
                else if (data.nosilnost[0] == data.nosilnost[1]) {
                    razdalja = 0;
                }
                else {
                    razdalja = 15;
                }
            }

            var canv = document.getElementsByName(dataaaa[j] + taid);
            for (var i = 0; i < canv.length; i++) {
                canv[i].width = sirina;
                canv[i].height = sirina;
                var ctx = canv[i].getContext('2d');
                ctx.drawImage(slikanapadalec, 0, razdalja, sirina, sirina, 0, 0, sirina, sirina);
            }
        }

    }
}

function UstvariTooltipTabela() {
    var tasks = [];
    for (var i = 0; i < PLAYER.template.templates.length; i++) {
        if (this.parentNode.getAttribute("tasknumber") == PLAYER.template.templates[i].tasknumber) {
            tasks = PLAYER.template.templates[i].TASKS;
            break;
        }
    }

    var vsebina = "";
    for (var i = 0; i < tasks.length; i++) {
        vsebina += '<div style="overflow:hidden;"><span>';
        var TaVredsnost = tasks[i];
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
                    ImeStavbe2 += " <input type='checkbox' disabled";
                    if (TaVredsnost.fields.wood) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> wood ";

                    ImeStavbe2 += " <input type='checkbox' disabled";
                    if (TaVredsnost.fields.clay) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> clay ";

                    ImeStavbe2 += " <input type='checkbox' disabled";
                    if (TaVredsnost.fields.iron) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> iron ";

                    ImeStavbe2 += "  <input type='checkbox' disabled";
                    if (TaVredsnost.fields.crop) {
                        ImeStavbe2 += " checked";
                    }
                    ImeStavbe2 += "> crop";
                    vsebina += prevodi.translate1 + ":" + ImeStavbe2 + " " + TaVredsnost.level;
                }
                else {
                    var ImeStavbe2 = prevodi.buldings[TaVredsnost.building];
                    vsebina += prevodi.translate1 + ': ID: ' + TaVredsnost.id + "; " + ImeStavbe2 + " " + TaVredsnost.level;
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
                    KoncniDodatek = ", " + prevodi.translate156 + ": " + TaVredsnost.optionValue;
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
                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + prevodi.empty + " [" + LesZaDodat + "," + GlinaZaDodat + "," + ZelezoZaDodat + "," + ZitoZaDodat + "]% " + prevodi.fill + ": [" + LesZaSprejet + "," + GlinaZaSprejet + "," + ZelezoZaSprejet + "," + ZitoZaSprejet + "]% " + KoncniDodatek;

                }
                else {
                    ImeStavbe = prevodi.trade + ": " + prevodi.to + ": " + koordinataX + "|" + koordinataY + " " + "[" + TaVredsnost.wood + "," + TaVredsnost.clay + "," + TaVredsnost.iron + "," + TaVredsnost.grain + "] " + KoncniDodatek;
                }

                vsebina += ImeStavbe;
                break;
            case "Party":
                ImeStavbe = prevodi.translate5 + ": " + PartyType[TaVredsnost.festival] + "  " + prevodi.translate154 + ": " + TaVredsnost.repeat + " " + prevodi.translate18 + ".";
                vsebina += ImeStavbe;
                break;
            case "ArmorUpgrade":
                ImeStavbe = prevodi.translate6 + ": [" + TaVredsnost.unit + "]; " + prevodi.translate158 + " " + TaVredsnost.level;
                vsebina += ImeStavbe;
                break;
            case "Train":
                var KoncniDodatek = "";

                if (TaVredsnost.option * 1 == 1) {
                    KoncniDodatek = ", " + prevodi.repetevery + " " + TaVredsnost.optionValue + " " + prevodi.minutes;
                }
                ImeStavbe = prevodi.train + ": [" + TaVredsnost.units + "] " + KoncniDodatek;
                vsebina += ImeStavbe;
                break;
            case "demolish":
                vsebina += prevodi.translate7 + ": ID: " + TaVredsnost.building;
                vsebina += " " + prevodi.translate166 + ": " + TaVredsnost.name;
                vsebina += " " + prevodi.translate158 + ": " + TaVredsnost.level;
                break;
        }
        var dodatek = "";
        if (TaVredsnost.joinwithprevious) {
        dodatek='checked'
        }
        vsebina += '</span><span style="float:right;clear:inherit;"><input type="checkbox" ' + dodatek + '>' + prevodi.translate159 + '</span><span></span></div>';
    }
    if (tasks.length == 0) {
        vsebina = prevodi.translate160;
    }
    //DivNaselje.innerHTML = vsebina;
    ddrivetip(vsebina, 'yellow')
}



var zoom = 1;

function UstvariZoomOkno() {
    var ZoomOkno = new PojavnoOkno();
    TemplateOkno.nastaviVsebino("");
    ZoomOkno.nastaviNaslov("Zoom");

    var prikazdiv = document.createElement("div");
    prikazdiv.innerHTML = "Zoom travian window: ";

    var slider = document.createElement("input");
    slider.type = "range";
    slider.id = "zoomslider";
    slider.setAttribute("min", 50);
    slider.setAttribute("max", 150);
    slider.setAttribute("value", zoom*100);
    slider.addEventListener('change', ustvariZoom, true);
    prikazdiv.appendChild(slider);
    var span = document.createElement("span");
    span.id = "spanzoom";
    span.innerHTML = " " + zoom * 100 + "%.";
    prikazdiv.appendChild(span);
    ZoomOkno.dodajElement(prikazdiv);

    ZoomOkno.odpri();
}

function ustvariZoom() {
    zoom = document.getElementById("zoomslider").value / 100;
    var sirina = 100 / zoom;
    document.getElementById("spanzoom").innerHTML = document.getElementById("zoomslider").value + "%.";
    document.getElementById("travianframe").setAttribute("style", "width: " + sirina + "%; height: " + sirina + "%;    overflow-x: hidden;      transform: scale(" + zoom + ");    transform-origin: 0 0;    -o-transform: scale(" + zoom + ");    -o-transform-origin: 0 0;    -webkit-transform: scale(" + zoom + ");    -webkit-transform-origin: 0 50%;")
//transform: scale(0.8);    transform-origin: 0 0;
}

function UstvariTemplateOkno() {
    TemplateOkno.nastaviVsebino("");
    TemplateOkno.nastaviNaslov("Templates");
    var prikazdiv = document.createElement("div");
    if(PLAYER.template.templates.length==0)
    {
        prikazdiv.innerHTML = prevodi.translate164 + ".<br>";
    }
    else
    {
        prikazdiv.innerHTML = prevodi.translate165 + ":<br>";
        var tabela = document.createElement("table");
        tabela.border = "1";
        tabela.setAttribute("style", "text-align:center;");
        tabela.innerHTML = "<tr><td>" + prevodi.translate166 + "</td><td>" + prevodi.translate167 + "</td><td>" + prevodi.translate152 + "</td><td>" + prevodi.translate169 + "</td><td>" + prevodi.translate170 + "</td></tr>";
        for (var i = 0; i < PLAYER.template.templates.length; i++) {
            var vrstica = document.createElement("tr");
            vrstica.setAttribute("tasknumber", PLAYER.template.templates[i].tasknumber);
            var nsss=PLAYER.getVillage(PLAYER.template.templates[i].village);
            vrstica.innerHTML = "<td>" + PLAYER.template.templates[i].name + "</td><td>" + PLAYER.template.templates[i].type + "</td>";
            
            var celica = document.createElement("td");
            celica.innerHTML = PLAYER.template.templates[i].TASKS.length;
            celica.addEventListener('mouseout', hideddrivetip, true);
            celica.addEventListener('mouseover', UstvariTooltipTabela, true);
            celica.setAttribute("style", "cursor:pointer;");
            vrstica.appendChild(celica);
            
            var celica = document.createElement("td");

            var slider = document.createElement("input");
            slider.type = "button";
            slider.setAttribute("tasknumber", PLAYER.template.templates[i].tasknumber);
            slider.setAttribute("value", "Use");
            slider.addEventListener('click', UporabiTemplate, true);
            celica.appendChild(slider);
            vrstica.appendChild(celica);
            var celica = document.createElement("td");

            var slider = document.createElement("input");
            slider.type = "button";
            slider.setAttribute("tasknumber", PLAYER.template.templates[i].tasknumber);
            slider.setAttribute("value", "X");
            slider.addEventListener('click', IzbrisiTemplate, true);
            celica.appendChild(slider);
            vrstica.appendChild(celica);
            tabela.appendChild(vrstica);
        }
        prikazdiv.appendChild(tabela);
    }

    TemplateOkno.dodajElement(prikazdiv);


    var prikazdiv = document.createElement("div");
    prikazdiv.innerHTML = prevodi.translate171 + ":<br>" + prevodi.translate166+ ":<input type='text' value='New Template' id='newTemplateName'>";
    var tekst = "<br>" + prevodi.translate205 + ":<select id='newTemplateVillage'>";
    for (var i = 0; i < PLAYER.villages.length; i++) {
        tekst += "<option value='" + PLAYER.villages[i].villageid + "'>" + PLAYER.villages[i].name + " (" + PLAYER.villages[i].x + "|" + PLAYER.villages[i].y + ")</option>";
    }
    tekst += "</select>"
    prikazdiv.innerHTML += tekst;
    prikazdiv.innerHTML += "<br>Type: <select id='newTemplateType'><option value='BUILD'>" + prevodi.translate1 + "</option><option value='TRADE'>" + prevodi.translate2 + "</option><option value='TRAIN'>" + prevodi.translate3 + "</option><option value='FESTIVAL'>" + prevodi.translate5 + "</option><option value='ARMOR'>" + prevodi.translate6 + "</option><option value='DEMOLISH'>" + prevodi.translate7 + "</option></select>";
    prikazdiv.appendChild(document.createElement("br"));

    var sliderbox = document.createElement("p");
    sliderbox.innerHTML = prevodi.translate368;
    sliderbox.addEventListener('mouseout', hideddrivetip, true);
    sliderbox.addEventListener('mouseover', ExampleTemplate, true);
    sliderbox.setAttribute("style", "background-color:#33CC66; width:100px; text-align:center; cursor:pointer;");
    prikazdiv.appendChild(sliderbox);

    
    var sliderbox = document.createElement("input");
    sliderbox.type = "button";
    sliderbox.addEventListener('click', DodajTemplate, true);
    sliderbox.value = prevodi.translate369;
    prikazdiv.appendChild(sliderbox);

    TemplateOkno.dodajElement(prikazdiv);

    TemplateOkno.odpri();

    return;

}

function UstvariWorkingTimeOkno() {
    var WorkingTimeOkno = new PojavnoOkno();
    WorkingTimeOkno.nastaviNaslov(prevodi.translate313);

    var divCustom1 = document.createElement("div");
    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = prevodi.translate172;
    divCustom1.appendChild(sliderbox);
    var workingMin = PLAYER.workingtime.workingtimeMin;
    var workingMax = PLAYER.workingtime.workingtimeMax;
    var pauseMin = PLAYER.workingtime.pausetimeMin;
    var pauseMax = PLAYER.workingtime.pausetimeMax;
    var skupajWorking = (workingMin + workingMax) / 2;
    var skupajPause = (pauseMin + pauseMax) / 2;
    var ProcentWorking = Math.round(skupajWorking / (skupajWorking + skupajPause) * 100);

    var slider = document.createElement("input");
    slider.type = "range";
    slider.id = "workingtimeslider";
    slider.setAttribute("min", 0);
    slider.setAttribute("max", 100);
    slider.setAttribute("value", ProcentWorking);
    slider.addEventListener('change', SpremeniSlider, true);
    divCustom1.appendChild(slider);



    var sliderbox = document.createElement("input");
    sliderbox.id = "workingtimesliderBox";
    sliderbox.addEventListener('change', SpremeniSlider, true);
    sliderbox.value = ProcentWorking;
    sliderbox.size = 1;
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = prevodi.translate173;
    divCustom1.appendChild(sliderbox);

    divCustom1.appendChild(document.createElement("br"));
    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = prevodi.translate174 + " ";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.id = "workingtimeMin";
    sliderbox.addEventListener('change', SpremeniSlider, true);
    sliderbox.value = workingMin;
    sliderbox.size = 1;
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = " " + prevodi.translate370+ " ";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.id = "workingtimeMax";
    sliderbox.addEventListener('change', SpremeniSlider, true);
    sliderbox.value = workingMax;
    sliderbox.size = 1;
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = " " + prevodi.translate18 + ". " + prevodi.translate175 + ":";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.id = "workingtimeFix";
    sliderbox.type = "checkbox";
    divCustom1.appendChild(sliderbox);

    divCustom1.appendChild(document.createElement("br"));
    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = prevodi.translate176 + " ";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.id = "pausetimeMin";
    sliderbox.addEventListener('change', SpremeniSlider, true);
    sliderbox.value = pauseMin;
    sliderbox.size = 1;
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = " and ";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.id = "pausetimeMax";
    sliderbox.addEventListener('change', SpremeniSlider, true);
    sliderbox.value = pauseMax;
    sliderbox.size = 1;
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = " " + prevodi.translate18 + ". " + prevodi.translate175 + ":";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.id = "pausetimeFix";
    sliderbox.type = "checkbox";
    divCustom1.appendChild(sliderbox);

    divCustom1.appendChild(document.createElement("br"));

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = prevodi.translate177 + ": ";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.id = "pausetimeLogOut";
    sliderbox.addEventListener('change', pausetimeLogOut, true);
    sliderbox.checked = PLAYER.workingtime.logout;
    sliderbox.type = "checkbox";
    divCustom1.appendChild(sliderbox);

    divCustom1.appendChild(document.createElement("br"));

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = prevodi.translate178 + ": " + vDatum(PLAYER.workingtime.worktime) + " ";
    sliderbox.id = "workingtimedisplay";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.value = prevodi.translate179;
    sliderbox.addEventListener('click', ResetWorkingTime, true);
    sliderbox.type = "button";
    divCustom1.appendChild(sliderbox);

    divCustom1.appendChild(document.createElement("br"));

    var sliderbox = document.createElement("span");
    sliderbox.innerHTML = prevodi.translate180 + ": " + vDatum(PLAYER.workingtime.pausetime) + " ";
    sliderbox.id = "pausetimedisplay";
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("input");
    sliderbox.value = prevodi.translate181;
    sliderbox.addEventListener('click', ResetPauseTime, true);
    sliderbox.type = "button";
    divCustom1.appendChild(sliderbox);

    divCustom1.appendChild(document.createElement("br"));

    var sliderbox = document.createElement("input");
    sliderbox.id = "pausetimeFix";
    sliderbox.type = "button";
    sliderbox.value = prevodi.translate182;
    sliderbox.addEventListener('click', DodajMoznostCas, true);
    divCustom1.appendChild(sliderbox);

    var sliderbox = document.createElement("div");
    sliderbox.id = "divCasi";
    divCustom1.appendChild(sliderbox);
    divCustom1.appendChild(document.createElement("br"));
    divCustom1.appendChild(document.createElement("br"));
    divCustom1.appendChild(document.createElement("br"));
    divCustom1.appendChild(document.createElement("br"));
    divCustom1.appendChild(document.createElement("br"));
    WorkingTimeOkno.dodajElement(divCustom1);

    WorkingTimeOkno.odpri();

    for (var i = 0; i < PLAYER.workingtime.custom.length; i++) {
        DodajMoznostCas(PLAYER.workingtime.custom[i]);
    }
}

function pausetimeLogOut() {
    PLAYER.workingtime.logout = this.checked;
}

function ResetWorkingTime() {
    PLAYER.workingtime.worktime = 0;
    document.getElementById("workingtimedisplay").innerHTML = prevodi.translate178 + ": " + vDatum(PLAYER.workingtime.worktime) + " ";
}

function ResetPauseTime() {
    PLAYER.workingtime.pausetime = 0;
    document.getElementById("pausetimedisplay").innerHTML = prevodi.translate180 + ": " + vDatum(PLAYER.workingtime.pausetime) + " ";
}

function vDatum(datetime) {
    var CasLoga = new Date(datetime*1);
    var month = CasLoga.getMonth()+1;
    var day = CasLoga.getDate();
    var year = CasLoga.getFullYear();
    var hour = CasLoga.getHours();
    var minute = CasLoga.getMinutes();
    minute += "";
    if (minute.length == 1) { minute = "0" + minute; }
    var second = CasLoga.getSeconds();
    second += "";
    if (second.length == 1) { second = "0" + second; }
    return day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
}

function DodajMoznostCas(nastavitve) {
    var id;
    var datum = new Date();
    var dan = datum.getDate() + "";
    if (dan.length == 1) {
        dan = "0" + dan;
    }
    var mesec = datum.getMonth() + "";
    if (mesec.length == 1) {
        mesec = "0" + mesec;
    }
    var leto = datum.getFullYear();
    if (!nastavitve.minTime) {
        id = PLAYER.workingtime.lastid;
        PLAYER.workingtime.lastid++;
        nastavitve = {
            id: id,
            type: "working",
            day: "everyday",
            customDate: dan + "/" + mesec + "/" + leto,
            minTime: "12:00 PM",
            maxTime: "11:59 PM"
        }
        PLAYER.workingtime.addCustomWorkingTime(nastavitve);
    }
    id = nastavitve.id;
    var div = document.createElement("div");
    div.setAttribute("moznostcasiID", id);

    var iks = document.createElement("input");
    iks.value = "x";
    iks.type = "button";
    iks.addEventListener('click', IzbrisiMoznostCas, true);
    div.appendChild(iks);

    var span = document.createElement("span");
    span.innerHTML = prevodi.translate183 + " ";
    div.appendChild(span);

    var select = document.createElement("select");
    select.id = "timeselect" + id;
    select.addEventListener('change', NastaviTipCasa, true);
    div.appendChild(select);

    var option = document.createElement("option");
    option.innerHTML = prevodi.translate184;
    option.value = "working";
    select.appendChild(option);

    var option = document.createElement("option");
    option.innerHTML = prevodi.translate185;
    option.value = "paused";

    select.appendChild(option);
    select.value = nastavitve.type;

    var select = document.createElement("select");
    select.id = "dayselect" + id;
    select.addEventListener('change', NastaviDan, true);
    div.appendChild(select);

    var option = document.createElement("option");
    option.innerHTML = prevodi.translate186;
    option.value = "everyday";
    select.appendChild(option);

    var option = document.createElement("option");
    option.innerHTML = prevodi.translate187;
    option.value = "week1";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML = prevodi.translate188;
    option.value = "week2";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML = prevodi.translate189;
    option.value = "week3";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML = prevodi.translate190;
    option.value = "week4";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML = prevodi.translate191;
    option.value = "week5";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML = prevodi.translate192;
    option.value = "week6";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML = prevodi.translate193;
    option.value = "week0";
    select.appendChild(option);
    var option = document.createElement("option");
    option.innerHTML = prevodi.translate194;
    option.value = "customdate";
    select.appendChild(option);
    select.value = nastavitve.day;

    var dateinput = document.createElement("input");
    dateinput.type = "date";
    dateinput.id = "customdate" + id;
    dateinput.addEventListener('change', PreveriDatum, false);
    if (nastavitve.day != "customdate") {
        dateinput.style.display = "none";
    }
    dateinput.size = 9;
    dateinput.value = nastavitve.customDate;
    div.appendChild(dateinput);

    var span = document.createElement("span");
    span.innerHTML = " " + prevodi.translate195+ " ";
    div.appendChild(span);

    var sliderbox = document.createElement("input");
    sliderbox.id = "Min" + id;
    sliderbox.size = 7;
    sliderbox.value = nastavitve.minTime;
    div.appendChild(sliderbox);

    var span = document.createElement("span");
    span.innerHTML = " " + prevodi.translate157+ " ";
    div.appendChild(span);

    var sliderbox = document.createElement("input");
    sliderbox.id = "Max" + id;
    sliderbox.size = 7;
    sliderbox.value = nastavitve.maxTime;
    div.appendChild(sliderbox);

    document.getElementById("divCasi").appendChild(div);

    $('#Min' + id).ptTimeSelect({
        onClose: PreveriCas,
        node: $('#Min' + id)[0],
        def: "12:00 PM"
    });

    $('#Max' + id).ptTimeSelect({
        onClose: PreveriCas,
        node: $('#Max' + id)[0],
        def: "12:00 PM"
    });

    $('#customdate' + id).datepicker({
        dateFormat: 'dd/mm/yy',
        onClose: PreveriDatum,
        node: $('#customdate' + id)
        // defaultDate: +5
        //maxDate: +3
    });


}



function NastaviTipCasa() {
    PLAYER.workingtime.getCustomWorkingTime(this.id.match(/[\d\.]+/g)[0]).type = this.value;
}

function IzbrisiMoznostCas() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    var id = this.parentNode.getAttribute("moznostcasiID") * 1;
    if (!PLAYER.workingtime.deleteCustomWorkingTime(id)) {
        alert(prevodi.translate197);
    }
}

function NastaviDan() {
    if (this.value.indexOf("week") > -1) {
        document.getElementById("customdate" + this.id.match(/[\d\.]+/g)[0]).style.display = "none";
    }
    else if (this.value == "everyday") {
        document.getElementById("customdate" + this.id.match(/[\d\.]+/g)[0]).style.display = "none";
    }
    else {
        document.getElementById("customdate" + this.id.match(/[\d\.]+/g)[0]).style.display = "";
    }
    PLAYER.workingtime.getCustomWorkingTime(this.id.match(/[\d\.]+/g)[0]).day = this.value;
}

function PreveriCas2() {
    var vrednost = this.value.split(":");
    if (vrednost.length < 3) {
        alert(prevodi.translate198);
        this.value = "00:00:00";
    }
    var ura = vrednost[0];
    var minuta = vrednost[1];
    var sekunda = vrednost[2];
    var spremeni = false;
    if (ura * 1 > 23 || ura * 1 < 0) {
        spremeni = true;
        ura = "00";
    }
    else if (ura.length < 2) {
        spremeni = true;
        ura = "0" + ura;
    }
    else if (ura.length > 2) {
        spremeni = true;
        ura = ura * 1;
    }

    if (minuta * 1 > 59 || minuta * 1 < 0) {
        spremeni = true;
        minuta = "00";
    }
    else if (minuta.length < 2) {
        spremeni = true;
        minuta = "0" + minuta;
    }
    else if (minuta.length > 2) {
        spremeni = true;
        minuta = minuta * 1;
    }

    if (sekunda * 1 > 59 || sekunda * 1 < 0) {
        spremeni = true;
        sekunda = "00";
    }
    else if (sekunda.length < 2) {
        spremeni = true;
        sekunda = "0" + sekunda;
    }
    else if (sekunda.length > 2) {
        spremeni = true;
        sekunda = sekunda * 1;
    }

    if (spremeni) {
        this.value = ura + ":" + minuta + ":" + sekunda;
    }
}

function PreveriDatum() {
    try {
        var zadnjepreverjendatum = this.getAttribute("datum");
        if (this.value == zadnjepreverjendatum) {
            return;
        }
    }
    catch (err) {
    }

    try {

        if (!this.value.isValidDate()) {
            this.setAttribute("datum", this.value)
            alert(prevodi.translate199);
            var datum = new Date();
            var dan = datum.getDate() + "";
            if (dan.length == 1) {
                dan = "0" + dan;
            }
            var mesec = datum.getMonth() + "";
            if (mesec.length == 1) {
                mesec = "0" + mesec;
            }
            var leto = datum.getFullYear();
            this.value = dan + "-" + mesec + "-" + leto;
            PLAYER.workingtime.getCustomWorkingTime(this.id.match(/[\d\.]+/g)[0]).customDate = this.value;
            return;
        }
    }
    catch (err) {
        console.log(err)
        this.setAttribute("datum", this.value)
        //alert(prevodi.translate199);
        var datum = new Date();
        var dan = datum.getDate() + "";
        if (dan.length == 1) {
            dan = "0" + dan;
        }
        var mesec = datum.getMonth() + "";
        if (mesec.length == 1) {
            mesec = "0" + mesec;
        }
        var leto = datum.getFullYear();
        this.value = dan + "-" + mesec + "-" + leto;
        PLAYER.workingtime.getCustomWorkingTime(this.id.match(/[\d\.]+/g)[0]).customDate = this.value;
        return;
    }
    this.setAttribute("datum", this.value);
    PLAYER.workingtime.getCustomWorkingTime(this.id.match(/[\d\.]+/g)[0]).customDate = this.value;
}

function zabelezi() {
    return;
    Request2 = $.ajax({
        url: "zabelezi.php?server=" + PLAYER.server2 + "&uid=" + PLAYER.uid + "&name=" + PLAYER.name,
        //url: 'DeletePlayer.php',
        type: 'GET',
        timeout: 20000,
        beforeSend: function () {
        },
        error: function (objAJAXRequest, strError) {
        },
        success: function (response) {
        }
    });

}

function PreveriCas() {
    var node = this.node;
    var polje = node.value.split(" ");
    var minute = 0;
    var def = "12:00 PM";
    var key;
    if (node.id.indexOf("Min") > -1) {
        def = document.getElementById("Max" + node.id.match(/[\d\.]+/g)[0]).value;
        key = "minTime";
    }
    else if (node.id.indexOf("Max") > -1) {
        def = document.getElementById("Min" + node.id.match(/[\d\.]+/g)[0]).value;
        key = "maxTime";
    }



    if (polje.length == 2) {
        var ura = 0;
        var cas = polje[0].split(":");
        if (cas.length != 2) {
            alert(prevodi.translate198);
            node.value = this.def;
            PLAYER.workingtime.getCustomWorkingTime(node.id.match(/[\d\.]+/g)[0])[key] = node.value;
            return;
        }
        else {
            if (!isNumber(cas[0]) || !isNumber(cas[1]) || cas[0] * 1 < 0 || cas[1] * 1 < 0 || cas[0] * 1 > 12 || cas[1] * 1 > 59 || cas[1].length > 2) {
                alert(prevodi.translate198);
                node.value = def;
                PLAYER.workingtime.getCustomWorkingTime(node.id.match(/[\d\.]+/g)[0])[key] = node.value;
                return;
            }
        }
        if (polje[1] == "AM") {
            ura = cas[0] * 1;
        }
        else if (polje[1] == "PM") {
            if (cas[0] * 1 == 12) {
                ura = 0;
            }
            else {
                ura = 12 + cas[0] * 1;
            }
        }
        minute = 60 * ura + cas[1] * 1;
        node.setAttribute("time", ura + ":" + cas[1]);
    }
    else {
        alert(prevodi.translate198);
        node.value = def;
        PLAYER.workingtime.getCustomWorkingTime(node.id.match(/[\d\.]+/g)[0])[key] = node.value;
        return;
    }

    if (node.id.indexOf("Min") > -1) {
        var vrednost = document.getElementById("Max" + node.id.match(/[\d\.]+/g)[0]).value.split(" ")[0].split(":");
        if (document.getElementById("Max" + node.id.match(/[\d\.]+/g)[0]).value.split(" ")[1] == "PM") {
            if (vrednost[0] == 12) {
                vrednost[0] = 0;
            }
            else {
                vrednost[0] = vrednost[0] * 1 + 12;
            }
        }
        if (minute > vrednost[0] * 60 + vrednost[1] * 1) {
            alert(prevodi.translate200);
            document.getElementById("Min" + node.id.match(/[\d\.]+/g)[0]).value = document.getElementById("Max" + node.id.match(/[\d\.]+/g)[0]).value;
        }
    }
    else if (node.id.indexOf("Max") > -1) {
        var vrednost = document.getElementById("Min" + node.id.match(/[\d\.]+/g)[0]).value.split(" ")[0].split(":");
        if (document.getElementById("Min" + node.id.match(/[\d\.]+/g)[0]).value.split(" ")[1] == "PM") {
            if (vrednost[0] == 12) {
                vrednost[0] = 0;
            }
            else {
                vrednost[0] = vrednost[0] * 1 + 12;
            }
        }
        if (minute < vrednost[0] * 60 + vrednost[1] * 1) {
            alert(prevodi.translate201);
            document.getElementById("Max" + node.id.match(/[\d\.]+/g)[0]).value = document.getElementById("Min" + node.id.match(/[\d\.]+/g)[0]).value;
        }
    }
    PLAYER.workingtime.getCustomWorkingTime(node.id.match(/[\d\.]+/g)[0])[key] = node.value;
}

function attackBuilderNastaviActive() {
    var active = this.checked;
    var tasknumber = this.getAttribute("tasknumber");
    for (var j = 0; j < PLAYER.attackbuilder.TASKS.length; j++) {
        if (PLAYER.attackbuilder.TASKS[j].tasknumber * 1 == tasknumber * 1) {
            PLAYER.attackbuilder.TASKS[j].active = active;
            if (active) {
                PLAYER.attackbuilder.TASKS[j].status = prevodi.translate202;
                document.getElementById("attbuildStat" + tasknumber).innerHTML = prevodi.translate202;
            }
            break;
        }
    }
}

var AttackBuilderGlavnoOkno
function UstvariAttackbuilderOkno() {
    AttackBuilderGlavnoOkno = new PojavnoOkno();
    AttackBuilderGlavnoOkno.nastaviNaslov(prevodi.translate63);


    var divCustom1 = document.createElement("div");

    var tabela = document.createElement("table");
    tabela.border = 1;
    var vrstica = document.createElement("tr");
    tabela.appendChild(vrstica);
    vrstica.innerHTML = "<td>" + prevodi.translate217 + "</td><td>" + prevodi.translate166 + "</td><td>" + prevodi.translate205 + "</td><td>" + prevodi.translate206 + "</td><td>" + prevodi.translate207 + "</td><td>" + prevodi.translate208 + "</td><td>" + prevodi.translate393 + "</td><td>" + prevodi.translate209 + "</td><td>" + prevodi.translate210 + "</td><td>" + prevodi.translate211 + "</td><td>" + prevodi.translate170 + "</td>";


    for (var j = 0; j < PLAYER.attackbuilder.TASKS.length; j++) {
        var vrstica = document.createElement("tr");
        var celica = document.createElement("td");

        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener('click', attackBuilderNastaviActive, false);
        checkbox.setAttribute("tasknumber", PLAYER.attackbuilder.TASKS[j].tasknumber);
        checkbox.checked = PLAYER.attackbuilder.TASKS[j].active;
        celica.appendChild(checkbox);
        vrstica.appendChild(celica);

        var celica = document.createElement("td");
        celica.innerHTML = PLAYER.attackbuilder.TASKS[j].name;
        vrstica.appendChild(celica);

        var naselje = PLAYER.getVillage(PLAYER.attackbuilder.TASKS[j].villageid);

        var celica = document.createElement("td");
        celica.innerHTML = naselje.name + " (" + naselje.x + "|" + naselje.y + ")";
        vrstica.appendChild(celica);

        var celica = document.createElement("td");
        celica.innerHTML = "(" + PLAYER.attackbuilder.TASKS[j].x + "|" + PLAYER.attackbuilder.TASKS[j].y + ")";
        vrstica.appendChild(celica);

        var celica = document.createElement("td");
        celica.innerHTML = PLAYER.attackbuilder.TASKS[j].attacks.length;
        vrstica.appendChild(celica);

        var datum = new Date(PLAYER.attackbuilder.TASKS[j].time*1);
        var dan = datum.getDate() + "";
        if (dan.length == 1) {
            dan = "0" + dan;
        }
        var mesec = datum.getMonth() + 1;
        mesec += "";
        if (mesec.length == 1) {
            mesec = "0" + mesec;
        }
        var leto = datum.getFullYear();

        var ura = datum.getHours() + "";
        if (ura.length == 1) {
            ura = "0" + ura;
        }
        var minuta = datum.getMinutes() + "";
        if (minuta.length == 1) {
            minuta = "0" + minuta;
        }
        var sekunda = datum.getSeconds() + "";
        if (sekunda.length == 1) {
            sekunda = "0" + sekunda;
        }
        var skupaj = dan + "/" + mesec + "/" + leto + " " + ura + ":" + minuta + ":" + sekunda;

        var celica = document.createElement("td");
        celica.innerHTML = skupaj;
        vrstica.appendChild(celica);

        var cas = PLAYER.attackbuilder.TASKS[j].time - PLAYER.attackbuilder.TASKS[j].triptime;

        var datum = new Date(cas*1);
        var dan = datum.getDate() + "";
        if (dan.length == 1) {
            dan = "0" + dan;
        }
        var mesec = datum.getMonth() + 1;
        mesec += "";
        if (mesec.length == 1) {
            mesec = "0" + mesec;
        }
        var leto = datum.getFullYear();

        var ura = datum.getHours() + "";
        if (ura.length == 1) {
            ura = "0" + ura;
        }
        var minuta = datum.getMinutes() + "";
        if (minuta.length == 1) {
            minuta = "0" + minuta;
        }
        var sekunda = datum.getSeconds() + "";
        if (sekunda.length == 1) {
            sekunda = "0" + sekunda;
        }
        var skupaj = dan + "/" + mesec + "/" + leto + " " + ura + ":" + minuta + ":" + sekunda;

        var celica = document.createElement("td");
        celica.innerHTML = skupaj;
        vrstica.appendChild(celica);

        var caszdaj = new Date();
        var cas = PLAYER.attackbuilder.TASKS[j].time - caszdaj.getTime() - PLAYER.timedif - PLAYER.attackbuilder.TASKS[j].triptime;

        if (cas < 0) {
            cas = 0;
        }
        var ur1 = cas / 3600000;
        var ur = Math.floor(ur1);
        var minut1 = (ur1 - ur) * 60;
        var minut = Math.floor(minut1);
        var sekund = Math.floor((minut1 - minut) * 60);

        var ura = ur + "";
        if (ura.length == 1) {
            ura = "0" + ura;
        }
        var minuta = minut + "";
        if (minuta.length == 1) {
            minuta = "0" + minuta;
        }
        var sekunda = sekund + "";
        if (sekunda.length == 1) {
            sekunda = "0" + sekunda;
        }
        var skupaj = ura + ":" + minuta + ":" + sekunda;

        var celica = document.createElement("td");
        celica.innerHTML = skupaj;
        celica.setAttribute("name","traviantacticstimer");
        vrstica.appendChild(celica);

        var celica = document.createElement("td");
        celica.id = "attbuildStat" + PLAYER.attackbuilder.TASKS[j].tasknumber;
        celica.innerHTML = PLAYER.attackbuilder.TASKS[j].status;
        vrstica.appendChild(celica);

        var celica = document.createElement("td");

        var GumbDodajNapad = document.createElement("input");
        GumbDodajNapad.value = prevodi.translate211;
        GumbDodajNapad.type = "button";
        GumbDodajNapad.setAttribute("tasknumber", PLAYER.attackbuilder.TASKS[j].tasknumber);
        GumbDodajNapad.addEventListener('click', NovNapad, false);

        celica.appendChild(GumbDodajNapad);
        vrstica.appendChild(celica);

        var celica = document.createElement("td");

        var GumbDodajNapad = document.createElement("input");
        GumbDodajNapad.value = "X";
        GumbDodajNapad.type = "button";
        GumbDodajNapad.setAttribute("tasknumber", PLAYER.attackbuilder.TASKS[j].tasknumber);
        GumbDodajNapad.addEventListener('click', izbrisiNapad, false);
        celica.appendChild(GumbDodajNapad);
        vrstica.appendChild(celica);

        tabela.appendChild(vrstica);
    }

    divCustom1.appendChild(tabela);

    var divDodajAttack = document.createElement("div");
    var GumbDodajNapad = document.createElement("input");
    GumbDodajNapad.value = prevodi.translate213;
    GumbDodajNapad.type = "button";
    GumbDodajNapad.setAttribute("tasknumber", "-1");
    GumbDodajNapad.addEventListener('click', NovNapad, false);
    divDodajAttack.appendChild(GumbDodajNapad);

    divCustom1.appendChild(divDodajAttack);

    AttackBuilderGlavnoOkno.dodajElement(divCustom1);

    AttackBuilderGlavnoOkno.odpri();
}

function izbrisiNapad() {
    var tasknum = this.getAttribute("tasknumber");
    for (var j = 0; j < PLAYER.attackbuilder.TASKS.length; j++) {
        if (PLAYER.attackbuilder.TASKS[j].tasknumber * 1 == tasknum * 1) {
            PLAYER.attackbuilder.TASKS.splice(j, 1);
            break;
        }
    }
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function odstraniVrsticoNapad() {
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}

function dodajVrsticoNapad(attacks) {


    if (attacks.clientX) {
        var defatt = {
            cata1: "99",
            cata2: "0",
            hero: false,
            nrAttacks: "1",
            troops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            delay: 0
        }
        if (attacks.target)
        {
            console.log(attacks.target.getAttribute("vrstica"))
            if(attacks.target.getAttribute("vrstica")!=null)
            {
                var stevilkavrstice = attacks.target.getAttribute("vrstica")
                defatt.troops[0] = document.getElementById("t1-" + stevilkavrstice).value
                defatt.troops[1] = document.getElementById("t2-" + stevilkavrstice).value
                defatt.troops[2] = document.getElementById("t3-" + stevilkavrstice).value
                defatt.troops[3] = document.getElementById("t4-" + stevilkavrstice).value
                defatt.troops[4] = document.getElementById("t5-" + stevilkavrstice).value
                defatt.troops[5] = document.getElementById("t6-" + stevilkavrstice).value
                defatt.troops[6] = document.getElementById("t7-" + stevilkavrstice).value
                defatt.troops[7] = document.getElementById("t8-" + stevilkavrstice).value
                defatt.troops[8] = document.getElementById("t9-" + stevilkavrstice).value
                defatt.troops[9] = document.getElementById("t10-" + stevilkavrstice).value

                defatt.cata1 = document.getElementById("cata1-" + stevilkavrstice).value + ""
                defatt.cata2 = document.getElementById("cata2-" + stevilkavrstice).value + ""

                //defatt.hero = document.getElementById("hero-" + stevilkavrstice).value + ""
                if (document.getElementById("delay-" + stevilkavrstice))
                {
                    defatt.delay = document.getElementById("delay-" + stevilkavrstice).value + ""
                }
            }
        }
        attacks = [defatt];
    }
    attackBuilderID++;
    var tabela = document.getElementById("tabelaAttackBuilder");

    var vrstica = document.createElement("tr");
    tabela.appendChild(vrstica);

    var celica = document.createElement("td");
    celica.innerHTML = "<input id='removeAttack" + attackBuilderID + "' value='x' type='button'>";
    vrstica.appendChild(celica);




    var celica = document.createElement("td");
    celica.innerHTML = "<input class='nrAttacks' id='nr-" + attackBuilderID + "' value='1' size='1' disabled>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t1' id='t1-" + attackBuilderID + "' value='" + attacks[0].troops[0] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t2' id='t2-" + attackBuilderID + "' value='" + attacks[0].troops[1] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t3' id='t3-" + attackBuilderID + "' value='" + attacks[0].troops[2] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t4' id='t4-" + attackBuilderID + "' value='" + attacks[0].troops[3] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t5' id='t5-" + attackBuilderID + "' value='" + attacks[0].troops[4] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t6' id='t6-" + attackBuilderID + "' value='" + attacks[0].troops[5] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t7' id='t7-" + attackBuilderID + "' value='" + attacks[0].troops[6] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t8' id='t8-" + attackBuilderID + "' value='" + attacks[0].troops[7] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t9' id='t9-" + attackBuilderID + "' value='" + attacks[0].troops[8] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t10' id='t10-" + attackBuilderID + "' value='" + attacks[0].troops[9] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    var tekst = "<input class='hero' type='checkbox' id='hero-" + attackBuilderID + "'";
    if (attacks[0].hero) {
        tekst += "checked";
    }
    tekst += ">";
    celica.innerHTML = tekst;
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    var objekt = buildingNames["com"];
    var sel1 = document.createElement("select");
    sel1.setAttribute("class", "cata1");
    sel1.id = "cata1-" + attackBuilderID;
    var sel2 = document.createElement("select");
    sel2.setAttribute("class", "cata2");
    sel2.id = "cata2-" + attackBuilderID;
    for (var propertyName in objekt) {
        var option = document.createElement("option");
        option.value = propertyName;
        option.innerHTML = objekt[propertyName];
        sel2.appendChild(option);
        if (propertyName * 1 != 0) {
            var option = document.createElement("option");
            option.value = propertyName;
            option.innerHTML = objekt[propertyName];
            sel1.appendChild(option); ;
        }
    }
    sel1.value = attacks[0].cata1;
    sel2.value = attacks[0].cata2;
    celica.appendChild(sel1);
    celica.appendChild(sel2);

    vrstica.appendChild(celica);

    var celica = document.createElement("td");
    celica.innerHTML = prevodi.translate214 + ":";

    var dateinput = document.createElement("input");
    dateinput.type = "text";
    dateinput.setAttribute("class", "delay");
    dateinput.id = "delay-" + attackBuilderID;
    dateinput.size = 3;
    dateinput.value = attacks[0].delay;
    celica.appendChild(dateinput);


    var dateinput = document.createElement("input");
    dateinput.type = "button";
    dateinput.setAttribute("vrstica", attackBuilderID);
    //dateinput.setAttribute("type", "button");
    dateinput.id = "addAttack-" + attackBuilderID;
    dateinput.value = "duplicate";
    dateinput.addEventListener('click', dodajVrsticoNapad, false)
    celica.appendChild(dateinput);

    //celica.innerHTML = "<input id='addAttack' value='+' type='button' vrstica='" + attackBuilderID + "'>";
    vrstica.appendChild(celica);

    document.getElementById("removeAttack" + attackBuilderID).addEventListener('click', odstraniVrsticoNapad, false);
    attacks.splice(0, 1);
    if (attacks.length > 0) {
        dodajVrsticoNapad(attacks);
    }
}

var attackBuilderID = 0;
var NovNapadOkno;


function NovNapad() {
    attackBuilderID = 0;
    NovNapadOkno = new PojavnoOkno();
    NovNapadOkno.nastaviNaslov(prevodi.translate63);
    var cassss = new Date();
    var xx = 0;
    var yy = 0;
    var villageid = PLAYER.villages[0].villageid;
    var time = cassss.getTime();
    var active = true;
    var attackName = prevodi.translate215;
    var status = prevodi.translate202;
    var attackType = 3;
    var calibrateTime = false;
    var defatt = {
        cata1: "99",
        cata2: "0",
        hero: false,
        nrAttacks: "1",
        troops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        name: attackName,
        status: status
    }
    var attacks = [defatt];
    var tmsquare = 0;

    var tasknumb = this.getAttribute("tasknumber");
    if (tasknumb * 1 != -1) {
        for (var j = 0; j < PLAYER.attackbuilder.TASKS.length; j++) {
            if (PLAYER.attackbuilder.TASKS[j].tasknumber == tasknumb * 1) {
                var xx = PLAYER.attackbuilder.TASKS[j].x;
                var yy = PLAYER.attackbuilder.TASKS[j].y;
                var villageid = PLAYER.attackbuilder.TASKS[j].villageid;
                var time = PLAYER.attackbuilder.TASKS[j].time;
                var active = PLAYER.attackbuilder.TASKS[j].active;
                var attacks = new Array();
                for (var l = 0; l < PLAYER.attackbuilder.TASKS[j].attacks.length; l++) {
                    attacks.push(PLAYER.attackbuilder.TASKS[j].attacks[l]);
                }
                var tmsquare = PLAYER.attackbuilder.TASKS[j].tSquare;
                var attackName = PLAYER.attackbuilder.TASKS[j].name;
                var status = PLAYER.attackbuilder.TASKS[j].status;
                attackType = PLAYER.attackbuilder.TASKS[j].attackType;
                calibrateTime = PLAYER.attackbuilder.TASKS[j].calibrateTime;
                break;
            }
        }
    }

    var tarca = document.createElement("tarca");
    var tekst = prevodi.translate217 + ": <input type='checkbox' size='2' id='activeAttackBuilder' ";
    if (active) {
        tekst += "checked";
    }
    tekst += ">";
    tekst += "<br>" + prevodi.translate167 + ":<select id='AttackBuilderType'><option value='3'>" + prevodi.translate218 + "</option><option value='4'>" + prevodi.translate219 + "</option><option value='2'>" + prevodi.translate220 + "</option></select><br>" + prevodi.translate221 + ": <input type='checkbox' id='CalibrateTime'><br>" + prevodi.translate205 + ":";
    tarca.innerHTML = tekst;
    NovNapadOkno.dodajElement(tarca);

    var SeznamOpcij = document.createElement("select");
    SeznamOpcij.setAttribute("class", "dropdown");
    SeznamOpcij.id = "AttackBuilderNaselje";
    SeznamOpcij.addEventListener('change', PridobiVadbisce, false);

    for (var StevilkaVasi = 0; StevilkaVasi < PLAYER.villages.length; StevilkaVasi++) {
        var Opcija = document.createElement("option");
        Opcija.value = PLAYER.villages[StevilkaVasi].villageid;
        var tekstzaprikaz = PLAYER.villages[StevilkaVasi].name +" (" + PLAYER.villages[StevilkaVasi].x + "|" + PLAYER.villages[StevilkaVasi].y + ")";
        Opcija.innerHTML = tekstzaprikaz; //VILLAGES[StevilkaVasi];
        SeznamOpcij.appendChild(Opcija);
    }
    SeznamOpcij.value = villageid;
    NovNapadOkno.dodajElement(SeznamOpcij);
    var tarca = document.createElement("tarca");
    tarca.innerHTML = "<br>" + prevodi.translate206+ ": <input type='text' size='2' id='targetX' value='" + xx + "'> |  <input type='text' size='2' id='targetY' value='" + yy + "'>";
    NovNapadOkno.dodajElement(tarca);
    var tarca = document.createElement("tarca");
    tarca.innerHTML = "<br>" + prevodi.translate224+ ": <input type='text' size='2' id='tSquare' value='" + tmsquare + "'>";
    NovNapadOkno.dodajElement(tarca);
    var tarca = document.createElement("tarca");
    tarca.innerHTML = "<br>" + prevodi.translate225+ ": <input type='text' size='10' id='attackName' value='" + attackName + "'>";
    NovNapadOkno.dodajElement(tarca);
    var tarca = document.createElement("tarca");
    tarca.innerHTML = "<br>" + prevodi.translate226 + ": <span id='attackBuilderStatus'>" + status + "</span>";
    NovNapadOkno.dodajElement(tarca);

    var Crka = "t";
    switch (PLAYER.tribe * 1) {
        case 0:
            Crka = "r";
            break;
        case 1:
            Crka = "t";
            break;
        case 2:
            Crka = "g";
            break;
        default:
            Crka = "t";

    }

    

    var divCustom1 = document.createElement("div");

    var tabela = document.createElement("table");
    tabela.id = "tabelaAttackBuilder";
    tabela.border = "1";
    var vrstica = document.createElement("tr");
    tabela.appendChild(vrstica);

    var celica = document.createElement("td");
    celica.innerHTML = "<input id='addAttack' value='+' type='button'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "#Nr";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "1"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "2"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "3"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "4"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "5"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "6"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "7"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "8"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "9"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<img src='" + linkislik[Crka + "10"] + "'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = prevodi.translate227;
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = prevodi.translate228;
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = prevodi.translate208;

    var gumb = document.createElement("a");
    //gumb.type = "button";
    //gumb.value = "Send attack in <input type='text'>1 minute";
    gumb.innerHTML = prevodi.translate209 + " <input type='text' size='1' id='sendattackinminute' value='1'> " + prevodi.translate18;
    gumb.setAttribute("class", "buttonlink");
    gumb.addEventListener('click', SendNowButton, false);
    celica.appendChild(gumb);
    vrstica.appendChild(celica);

    var vrstica = document.createElement("tr");
    tabela.appendChild(vrstica);

    var celica = document.createElement("td");
    celica.innerHTML = "/";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='nrAttacks' id='nr-" + attackBuilderID + "' value='1' size='1' disabled>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t1' id='t1-" + attackBuilderID + "' value='" + attacks[0].troops[0] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t2' id='t2-" + attackBuilderID + "' value='" + attacks[0].troops[1] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t3' id='t3-" + attackBuilderID + "' value='" + attacks[0].troops[2] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t4' id='t4-" + attackBuilderID + "' value='" + attacks[0].troops[3] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t5' id='t5-" + attackBuilderID + "' value='" + attacks[0].troops[4] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t6' id='t6-" + attackBuilderID + "' value='" + attacks[0].troops[5] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t7' id='t7-" + attackBuilderID + "' value='" + attacks[0].troops[6] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t8' id='t8-" + attackBuilderID + "' value='" + attacks[0].troops[7] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t9' id='t9-" + attackBuilderID + "' value='" + attacks[0].troops[8] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    celica.innerHTML = "<input class='t10' id='t10-" + attackBuilderID + "' value='" + attacks[0].troops[9] + "' size='3'>";
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    var tekst = "<input class='hero' type='checkbox' id='hero-" + attackBuilderID + "'";
    if (attacks[0].hero) {
        tekst += "checked";
    }
    tekst += ">";
    celica.innerHTML = tekst;
    vrstica.appendChild(celica);
    var celica = document.createElement("td");
    var objekt = buildingNames["com"];
    var sel1 = document.createElement("select");
    sel1.setAttribute("class", "cata1");
    sel1.id = "cata1-" + attackBuilderID;
    var sel2 = document.createElement("select");
    sel2.setAttribute("class", "cata2");
    sel2.id = "cata2-" + attackBuilderID;
    for (var propertyName in objekt) {
        var option = document.createElement("option");
        option.value = propertyName;
        option.innerHTML = objekt[propertyName];
        sel2.appendChild(option);
        if (propertyName * 1 != 0) {
            var option = document.createElement("option");
            option.value = propertyName;
            option.innerHTML = objekt[propertyName];
            sel1.appendChild(option); ;
        }
    }
    sel1.value = attacks[0].cata1;
    sel2.value = attacks[0].cata2;
    celica.appendChild(sel1);
    celica.appendChild(sel2);

    vrstica.appendChild(celica);
    var celica = document.createElement("td");

    var datum = new Date(time*1);
    var dan = datum.getDate() + "";
    if (dan.length == 1) {
        dan = "0" + dan;
    }
    var mesec = datum.getMonth() + 1;
    mesec += "";
    if (mesec.length == 1) {
        mesec = "0" + mesec;
    }
    var leto = datum.getFullYear();
    var skupaj = leto + "-" + mesec + "-" + dan;

    var dateinput = document.createElement("input");
    dateinput.type = "date";
    dateinput.setAttribute("class", "date1");
    dateinput.id = "customdate-" + attackBuilderID + "";
    dateinput.addEventListener('change', PreveriDatum, false);
    dateinput.size = 9;
    dateinput.value = skupaj;
    celica.appendChild(dateinput);

    var ura = datum.getHours() + "";
    if (ura.length == 1) {
        ura = "0" + ura;
    }
    var minuta = datum.getMinutes() + "";
    if (minuta.length == 1) {
        minuta = "0" + minuta;
    }
    var sekunda = datum.getSeconds() + "";
    if (sekunda.length == 1) {
        sekunda = "0" + sekunda;
    }
    var skupaj = ura + ":" + minuta + ":" + sekunda;

    var dateinput = document.createElement("input");
    dateinput.type = "text";
    dateinput.setAttribute("class", "time1");
    dateinput.id = "customtime-" + attackBuilderID + "";
    dateinput.addEventListener('change', PreveriCas2, false);
    dateinput.size = 9;
    dateinput.value = skupaj;
    celica.appendChild(dateinput);

    var dateinput = document.createElement("input");
    dateinput.type = "button";
    dateinput.setAttribute("vrstica", attackBuilderID);
    //dateinput.setAttribute("type", "button");
    dateinput.id = "addAttack-" + attackBuilderID;
    dateinput.value = "duplicate";
    dateinput.addEventListener('click', dodajVrsticoNapad, false)
    celica.appendChild(dateinput);

    vrstica.appendChild(celica);

    divCustom1.appendChild(tabela);

    var dodajVTask = document.createElement("input");
    dodajVTask.type = "button";
    dodajVTask.addEventListener('click', DodajVTaskAttackBuilder, false);
    dodajVTask.value = prevodi.translate371;
    if (tasknumb * 1 != -1) {
        dodajVTask.value = prevodi.translate238;
    }
    dodajVTask.setAttribute("tasknumber", tasknumb);
    divCustom1.appendChild(dodajVTask);

    NovNapadOkno.dodajElement(divCustom1);

    NovNapadOkno.odpri();
    document.getElementById("addAttack").addEventListener('click', dodajVrsticoNapad, false);
    document.getElementById("AttackBuilderType").value = attackType;
    document.getElementById("CalibrateTime").checked = calibrateTime;
    if (tasknumb * 1 == -1) {
        PridobiVadbisce();
    }
    attacks.splice(0, 1);
    if (attacks.length > 0) {
        dodajVrsticoNapad(attacks);
    }

}

function SendNowButton(e) {
    try {
        if (e.explicitOriginalTarget.getAttribute("id") == "sendattackinminute") {
            return;
        }
    }
    catch (err) { }
    var stminut=document.getElementById("sendattackinminute").value;
    if (!isNumber(stminut)) {
        alert(prevodi.translate286);
        return;
    }

    var tabela = document.getElementById("tabelaAttackBuilder");
    var vrstice = tabela.getElementsByTagName("tr");
    if (document.getElementById("activeAttackBuilder").checked) {
        var status = prevodi.translate202;
    }
    else {
        var status = document.getElementById("attackBuilderStatus").innerHTML;
    }

    var TaskAttack =
            {
                type: "AttackBuilder",
                numberOfAttacks: vrstice.length - 1,
                attacks: [],
                x: document.getElementById("targetX").value,
                y: document.getElementById("targetY").value,
                villageid: document.getElementById("AttackBuilderNaselje").value,
                tSquare: document.getElementById("tSquare").value,
                active: document.getElementById("activeAttackBuilder").checked,
                name: document.getElementById("attackName").value,
                attackType: document.getElementById("AttackBuilderType").value,
                calibrateTime: document.getElementById("CalibrateTime").checked,
                status: status
            }
    for (var i = 1; i < vrstice.length; i++) {
        var napad =
                {
                    troops: [vrstice[i].getElementsByClassName("t1")[0].value, vrstice[i].getElementsByClassName("t2")[0].value, vrstice[i].getElementsByClassName("t3")[0].value, vrstice[i].getElementsByClassName("t4")[0].value, vrstice[i].getElementsByClassName("t5")[0].value, vrstice[i].getElementsByClassName("t6")[0].value, vrstice[i].getElementsByClassName("t7")[0].value, vrstice[i].getElementsByClassName("t8")[0].value, vrstice[i].getElementsByClassName("t9")[0].value, vrstice[i].getElementsByClassName("t10")[0].value],
                    cata1: vrstice[i].getElementsByClassName("cata1")[0].value,
                    cata2: vrstice[i].getElementsByClassName("cata2")[0].value,
                    hero: vrstice[i].getElementsByClassName("hero")[0].checked,
                    nrAttacks: vrstice[i].getElementsByClassName("nrAttacks")[0].value
                }
        if (i == 1) {
            var dat = vrstice[i].getElementsByClassName("date1")[0].value.split("-");
            dat[1] = dat[1] * 1 - 1;
            var tim = vrstice[i].getElementsByClassName("time1")[0].value.split(":");
            var datum = new Date();
            datum.setFullYear(dat[0], dat[1], dat[2]);
            datum.setHours(tim[0], tim[1], tim[2], 0);
            TaskAttack.time = datum.getTime();
        }
        else {
            napad.delay = vrstice[i].getElementsByClassName("delay")[0].value;
        }
        TaskAttack.attacks.push(napad);
    }




    var naselje = PLAYER.getVillage(TaskAttack.villageid);
    var razdalja = PridobiRazdaljo(TaskAttack.x, TaskAttack.y, naselje.x, naselje.y);
    var dodatnahitrost = 1;
    if (PLAYER.speed == 3 || PLAYER.speed == 2 || PLAYER.speed == 5) {
        dodatnahitrost = 2;
    }
    if (PLAYER.tribe == 0) {
        //rimljani
        var dodatek24 = 1;
    }
    else if (PLAYER.tribe == 1) {
        //tevtoni
        var dodatek24 = 11;
    }
    else if (PLAYER.tribe == 2) {
        //galci
        var dodatek24 = 21;
    }
    else if (PLAYER.tribe == 5) {
        //galci
        var dodatek24 = 51;
    }
    else if (PLAYER.tribe == 6) {
        //galci
        var dodatek24 = 61;
    }
    else {
    }

    var MinHitrost = 100;
    var enote = TaskAttack.attacks[0].troops;
    for (var k = 0; k < enote.length; k++) {
        var HitrostTeEnote = uc[k + dodatek24][9];
        var StEnot = enote[k];
        if (HitrostTeEnote < MinHitrost && StEnot > 0) {
            MinHitrost = HitrostTeEnote;
        }

    }

    var hitrost = MinHitrost * dodatnahitrost;
    var hero = 0;
    var razdaljaturnament = 20;
    if (TravianServer == 3) {
        razdaljaturnament = 30;
    }
    if (razdalja <= razdaljaturnament) {
        var cas = Math.round(razdalja / hitrost * 3600000);
    }
    else {
        var cas1 = razdaljaturnament / hitrost * 3600000;
        var xhitrost = 1 + TaskAttack.tSquare / 10 + hero / 100;
        var hitrost2 = hitrost * xhitrost;
        var cas2 = (razdalja - razdaljaturnament) / hitrost2 * 3600000;;
        var cas = Math.round(cas1 + cas2);
    }
    TaskAttack.triptime = cas;

    var NovCas = new Date();
    NovCas.setMilliseconds(cas + 60000 * stminut + PLAYER.timedif);
    var dan = NovCas.getDate();
    dan = dan + "";
    if (dan.length < 2) {
        dan = "0" + dan;
    }
    var mesec = NovCas.getMonth() + 1;
    mesec = mesec + "";
    if (mesec.length < 2) {
        mesec = "0" + mesec;
    }
    var leto = NovCas.getFullYear();
    var ura = NovCas.getHours();
    ura = ura + "";
    if (ura.length < 2) {
        ura = "0" + ura;
    }
    var minuta = NovCas.getMinutes();
    minuta = minuta + "";
    if (minuta.length < 2) {
        minuta = "0" + minuta;
    }
    var sekunda = NovCas.getSeconds();
    sekunda = sekunda + "";
    if (sekunda.length < 2) {
        sekunda = "0" + sekunda;
    }
    document.getElementById("customdate-0").value = leto + "-" + mesec + "-" + dan;
    document.getElementById("customtime-0").value = ura + ":" + minuta + ":" + sekunda;

}

function PridobiVadbisce() {
    var villageId = document.getElementById("AttackBuilderNaselje").value;
    var naselje = PLAYER.getVillage(villageId);
    for (var k = 19; k < naselje.POLJA.length; k++) {
        if (naselje.POLJA[k].name * 1 == 14) {
            document.getElementById("tSquare").value = naselje.POLJA[k].level;
            return;
        }
    }
    document.getElementById("tSquare").value = 0;
}

function DodajVTaskAttackBuilder() {

    var tabela = document.getElementById("tabelaAttackBuilder");
    var vrstice = tabela.getElementsByTagName("tr");
    if (document.getElementById("activeAttackBuilder").checked) {
        var status = prevodi.translate202;
    }
    else {
        var status = document.getElementById("attackBuilderStatus").innerHTML;
    }
    var totaltroop = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    var TaskAttack =
            {
                type: "AttackBuilder",
                numberOfAttacks: vrstice.length - 1,
                attacks: [],
                x: document.getElementById("targetX").value,
                y: document.getElementById("targetY").value,
                villageid: document.getElementById("AttackBuilderNaselje").value,
                tSquare: document.getElementById("tSquare").value,
                active: document.getElementById("activeAttackBuilder").checked,
                name: document.getElementById("attackName").value,
                attackType: document.getElementById("AttackBuilderType").value,
                calibrateTime: document.getElementById("CalibrateTime").checked,
                status: status
            }
            for (var i = 1; i < vrstice.length; i++) {
                totaltroop[0] += vrstice[i].getElementsByClassName("t1")[0].value * 1;
                totaltroop[1] += vrstice[i].getElementsByClassName("t2")[0].value * 1;
                totaltroop[2] += vrstice[i].getElementsByClassName("t3")[0].value * 1;
                totaltroop[3] += vrstice[i].getElementsByClassName("t4")[0].value * 1;
                totaltroop[4] += vrstice[i].getElementsByClassName("t5")[0].value * 1;
                totaltroop[5] += vrstice[i].getElementsByClassName("t6")[0].value * 1;
                totaltroop[6] += vrstice[i].getElementsByClassName("t7")[0].value * 1;
                totaltroop[7] += vrstice[i].getElementsByClassName("t8")[0].value * 1;
                totaltroop[8] += vrstice[i].getElementsByClassName("t9")[0].value * 1;
                totaltroop[9] += vrstice[i].getElementsByClassName("t10")[0].value * 1;

                var napad = {
                    troops: [vrstice[i].getElementsByClassName("t1")[0].value, vrstice[i].getElementsByClassName("t2")[0].value, vrstice[i].getElementsByClassName("t3")[0].value, vrstice[i].getElementsByClassName("t4")[0].value, vrstice[i].getElementsByClassName("t5")[0].value, vrstice[i].getElementsByClassName("t6")[0].value, vrstice[i].getElementsByClassName("t7")[0].value, vrstice[i].getElementsByClassName("t8")[0].value, vrstice[i].getElementsByClassName("t9")[0].value, vrstice[i].getElementsByClassName("t10")[0].value],
                    cata1: vrstice[i].getElementsByClassName("cata1")[0].value,
                    cata2: vrstice[i].getElementsByClassName("cata2")[0].value,
                    hero: vrstice[i].getElementsByClassName("hero")[0].checked,
                    nrAttacks: vrstice[i].getElementsByClassName("nrAttacks")[0].value
                }
        if (i == 1) {
            var dat = vrstice[i].getElementsByClassName("date1")[0].value.split("-");
            dat[1] = dat[1] * 1 - 1;
            var tim = vrstice[i].getElementsByClassName("time1")[0].value.split(":");
            var datum = new Date();
            datum.setFullYear(dat[0], dat[1], dat[2]);
            datum.setHours(tim[0], tim[1], tim[2], 0);
            TaskAttack.time = datum.getTime();
        }
        else {
            napad.delay = vrstice[i].getElementsByClassName("delay")[0].value;
        }
        TaskAttack.attacks.push(napad);
    }

    TaskAttack.totaltroop = totaltroop;


    var naselje = PLAYER.getVillage(TaskAttack.villageid);
    var razdalja = PridobiRazdaljo(TaskAttack.x, TaskAttack.y, naselje.x, naselje.y);
    var dodatnahitrost = 1;
    if (PLAYER.speed == 3 || PLAYER.speed == 2 || PLAYER.speed == 5) {
        dodatnahitrost = 2;
    }
    if (PLAYER.tribe == 0) {
        //rimljani
        var dodatek24 = 1;
    }
    else if (PLAYER.tribe == 1) {
        //tevtoni
        var dodatek24 = 11;
    }
    else if (PLAYER.tribe == 2) {
        //galci
        var dodatek24 = 21;
    }
    else if (PLAYER.tribe == 5) {
        //galci
        var dodatek24 = 51;
    }
    else if (PLAYER.tribe == 6) {
        //galci
        var dodatek24 = 61;
    }
    else {
    }

    var MinHitrost = 100;
    var enote = TaskAttack.attacks[0].troops;
    for (var k = 0; k < enote.length; k++) {
        var HitrostTeEnote = uc[k + dodatek24][9];
        var StEnot = enote[k];
        if (HitrostTeEnote < MinHitrost && StEnot > 0) {
            MinHitrost = HitrostTeEnote;
        }

    }

    var hitrost = MinHitrost * dodatnahitrost;
    var hero = 0;

    var razdaljaturnament = 20;
    if (TravianServer == 3) {
        razdaljaturnament = 30;
    }
    if (razdalja <= razdaljaturnament) {
        var cas = Math.round(razdalja / hitrost * 3600000);
    }
    else {
        var cas1 = razdaljaturnament / hitrost * 3600000;
        var xhitrost = 1 + TaskAttack.tSquare / 10 + hero / 100;
        var hitrost2 = hitrost * xhitrost;
        var cas2 = (razdalja - razdaljaturnament) / hitrost2 * 3600000;;
        var cas = Math.round(cas1 + cas2);
    }
    TaskAttack.triptime = cas;

    var tasknum = this.getAttribute("tasknumber") * 1;
    if (tasknum == -1) {
        PLAYER.TASKNUMBER++;
        TaskAttack.tasknumber = PLAYER.TASKNUMBER;
        PLAYER.attackbuilder.TASKS.push(TaskAttack);
        
    }
    else {
        for (var j = 0; j < PLAYER.attackbuilder.TASKS.length; j++) {
            if (PLAYER.attackbuilder.TASKS[j].tasknumber == tasknum * 1) {
                TaskAttack.tasknumber = tasknum;
                PLAYER.attackbuilder.TASKS[j] = TaskAttack;
                break;
            }
        }
    }
    NovNapadOkno.zapri();
    AttackBuilderGlavnoOkno.zapri();
    UstvariAttackbuilderOkno();
}

function OdstevajGolder() {
    try {
        var trenutna = document.getElementById("spanGoldCountdown1").innerHTML * 1;
        if (trenutna <= 0) {
            //document.getElementById("spanGoldCountdown0").innerHTML = prevodi.translate230;
            //document.getElementById("spanGoldCountdown1").innerHTML = "";
            //PridobiGoldLink();
            /*golderdata = {
                goldlink: "mojgoldlink",
                credits: 50,
                goldaccs: [{
                    id: 1,
                    name: "goldacc1",
                    server: "http://tx3.travian.com",
                    progress: "79%",
                    registered: "1.1.2014",
                    status: "Working",
                    captcha: ""
                },
                {
                    id: 2,
                    name: "goldacc2",
                    server: "http://tx3.travian.com",
                    progress: "0%",
                    registered: "2.1.2014",
                    status: "captcha",
                    captcha: "http://www.google.com/recaptcha/api/image?c=03AHJ_VuvS0Sj952H90FqVkH-UQLDKt4mQEGP9_w5IoFeGvL0cZDDiQWaxIhYimqi5zYLwSfpdd2R9jD97JXWTm96KhQ-DLt5TwG_sz0Pa1plXhIJctLgC1U8cVyiGqq8UOpV2TaLiMnvV9BUuPebzYckxRgndfnBBb5zffUAYvkglUXi-RJEn6DhrX3mguUQMGzN-msYznfWg4N3y6ZYnJm0-DXY-S3xASw"
                },
                {
                    id: 7,
                    name: "goldacc3",
                    server: "http://tx3.travian.com",
                    progress: "99%",
                    registered: "3.1.2014",
                    status: "captcha",
                    captcha: "http://www.google.com/recaptcha/api/image?c=03AHJ_VusBDoZypV1cuVVG5uGP6lW9r9XsMi1ko6eRcBCdkUYoIHNV6uCR18A_UutSqG_iuIbg5I9XHOiUo4bq9VnKJxpOy7o96RW4AtHj7cFHHL8TzMAYei5jq96vKR52C9xB0nAu8Z_FvNXQ4cj-YUDhdfpGaEVEYDHbAZlO61Lte-h43T2rvrQ_UAxfWvSeb7wC7_dKSeiWMaIV3EiGUl-lnnEVQUzA7JFj5QDqMYsMI8BvPst_mjGUdnpE2HPb8_XWfjg22Gy2"
                }]
            }*/
            document.getElementById("spanGolder").innerHTML = "";
            var golderSpan = document.getElementById("spanGolder");
            var golderdiv1 = document.createElement("div");
            golderdiv1.innerHTML = "Your goldlink: " + GoldLink;
            golderSpan.appendChild(golderdiv1);

            var golderdiv11 = document.createElement("div");
            golderdiv11.innerHTML = "Credits: <span id='credits'>" + golderdata.credits+"</span>";
            golderSpan.appendChild(golderdiv11);


            var golderdiv2 = document.createElement("div");
            var goldertabela = document.createElement("table");
            goldertabela.id="goldertabela"
            goldertabela.style = "border: 1px solid black;";
            var golderPrvaVrstica = document.createElement("tr");
            golderPrvaVrstica.style = "border: 1px solid black;";
            var golderCelica = document.createElement("td");
            golderCelica.innerHTML = "Name";
            golderCelica.style = "border: 1px solid black;";
            golderPrvaVrstica.appendChild(golderCelica);
            var golderCelica = document.createElement("td");
            golderCelica.innerHTML = "Server";
            golderCelica.style = "border: 1px solid black;";
            golderPrvaVrstica.appendChild(golderCelica);
            var golderCelica = document.createElement("td");
            golderCelica.innerHTML = "Progress";
            golderCelica.style = "border: 1px solid black;";
            golderPrvaVrstica.appendChild(golderCelica);
            var golderCelica = document.createElement("td");
            golderCelica.innerHTML = "Registered";
            golderCelica.style = "border: 1px solid black;";
            golderPrvaVrstica.appendChild(golderCelica);
            var golderCelica = document.createElement("td");
            golderCelica.innerHTML = "Status";
            golderCelica.style = "border: 1px solid black;";
            golderPrvaVrstica.appendChild(golderCelica);
            goldertabela.appendChild(golderPrvaVrstica);
            for (var i = 0; i < golderdata.goldaccs.length; i++) {
                var golderPrvaVrstica = document.createElement("tr");
                var golderCelica = document.createElement("td");
                golderCelica.innerHTML = golderdata.goldaccs[i].name;
                golderCelica.style = "border: 1px solid black;";
                golderPrvaVrstica.appendChild(golderCelica);
                var golderCelica = document.createElement("td");
                golderCelica.innerHTML = golderdata.goldaccs[i].server;
                golderCelica.style = "border: 1px solid black;";
                golderPrvaVrstica.appendChild(golderCelica);
                var golderCelica = document.createElement("td");
                golderCelica.innerHTML = golderdata.goldaccs[i].progress;
                golderCelica.style = "border: 1px solid black;";
                golderPrvaVrstica.appendChild(golderCelica);
                var golderCelica = document.createElement("td");
                golderCelica.innerHTML = golderdata.goldaccs[i].registered;
                golderCelica.style = "border: 1px solid black;";
                golderPrvaVrstica.appendChild(golderCelica);
                var golderCelica = document.createElement("td");
                golderCelica.style = "border: 1px solid black;";
                if (golderdata.goldaccs[i].status == "Register in progress" && golderdata.goldaccs[i].captcha!="") {
                    golderCelica.innerHTML = "<div>Solve folowing captcha to finish gold acc registration</div><div><img src='" + golderdata.goldaccs[i].captcha + "'></div><div><input style='width:100%;' type='text' id='captchatext"+golderdata.goldaccs[i].id+"'></div>";
                    var divzgumbomcaptcha = document.createElement("div");
                    var gumbresicaptcho = document.createElement("input");
                    gumbresicaptcho.type = "button";
                    gumbresicaptcho.value = "Solve";
                    gumbresicaptcho.setAttribute("vnos", "captchatext" + golderdata.goldaccs[i].id);
                    gumbresicaptcho.addEventListener('click', posljiCaptchaServeru, true);
                    divzgumbomcaptcha.appendChild(gumbresicaptcho);
                    golderCelica.appendChild(divzgumbomcaptcha);

                }
                else if (golderdata.goldaccs[i].status == "Register in progress") {
                    golderCelica.innerHTML = "Register in progress. If your server has captcha, come back in few minutes to solve it in order to compleate registration."
                }
                else {
                    golderCelica.innerHTML = golderdata.goldaccs[i].status;
                }
                golderPrvaVrstica.appendChild(golderCelica);
                goldertabela.appendChild(golderPrvaVrstica);
            }
            golderdiv2.appendChild(goldertabela);
            golderSpan.appendChild(golderdiv2);

            var golderdiv3 = document.createElement("div");
            var gumbNovAcc = document.createElement("input");
            gumbNovAcc.type = "button";
            gumbNovAcc.value = "Create new golder acc";
            gumbNovAcc.id = "newgolderacc";
            gumbNovAcc.addEventListener('click', novGolderAcc, true);
            golderdiv3.appendChild(gumbNovAcc);
            var gumbNovAcc = document.createElement("input");
            gumbNovAcc.type = "button";
            gumbNovAcc.value = "Input coupon";
            gumbNovAcc.addEventListener('click', novGolderCoupon, true);
            golderdiv3.appendChild(gumbNovAcc);
            golderSpan.appendChild(golderdiv3);


        }
        else {
            var zmanjsana = trenutna - 1;
            document.getElementById("spanGoldCountdown1").innerHTML = zmanjsana;
            setTimeout(OdstevajGolder, 1000);
        }

    }
    catch (err) {
    }
}


function novGolderCoupon() {
    var coupon = prompt("Enter coupon code:", "");
    if (coupon != null) {
        if (coupon.length != 15) {
            alert("Invalid coupon!");
            return;
        }

        var data = "option=10&goldLink=" + GoldLink + "&cupon=" + coupon;
        //console.log(data);
        var request = $.ajax({
            url: golderPlayer,
            type: "POST",
            data: data,
            dataType: "html"
        });

        request.done(function (response) {
            console.log(response);
            var objekt = eval("(" + response + ")");
            if(objekt.successful)
            {
                document.getElementById("credits").innerHTML=objekt.credits;
                alert("You recieved credits.");
            }
            else
            {
                alert("Invalid coupon!");
                return;
            }
        });
    }
}


function novGolderAcc() {
    document.getElementById("newgolderacc").style.display = "none";
    var data = "option=0&goldLink=" + GoldLink + "&server=" + SERVERLINK;
    //console.log(data);
    var request = $.ajax({
        url: golderPlayer,
        type: "POST",
        data: data,
        dataType: "html"
    });

    request.done(function (response) {
        console.log(response);
        //alert(response);
        document.getElementById("newgolderacc").style.display = "";
        var objekt = eval("(" + response + ")");
        if (!objekt.successful)
        {
            alert("Failed to register gold acc!")
        }
        //console.log(objekt);
        //return;
        document.getElementById("credits").innerHTML = objekt.credits;
        var goldertabela = document.getElementById("goldertabela");
        goldertabela.style = "border: 1px solid black;";
        var golderPrvaVrstica = document.createElement("tr");
        golderPrvaVrstica.style = "border: 1px solid black;";
        var golderCelica = document.createElement("td");
        golderCelica.innerHTML = objekt.name;
        golderCelica.style = "border: 1px solid black;";
        golderPrvaVrstica.appendChild(golderCelica);
        var golderCelica = document.createElement("td");
        golderCelica.innerHTML = objekt.server;
        golderCelica.style = "border: 1px solid black;";
        golderPrvaVrstica.appendChild(golderCelica);
        var golderCelica = document.createElement("td");
        golderCelica.innerHTML = objekt.progress;
        golderCelica.style = "border: 1px solid black;";
        golderPrvaVrstica.appendChild(golderCelica);
        var golderCelica = document.createElement("td");
        golderCelica.innerHTML = objekt.registered;
        golderCelica.style = "border: 1px solid black;";
        golderPrvaVrstica.appendChild(golderCelica);
        var golderCelica = document.createElement("td");
        golderCelica.innerHTML = objekt.status;
        if (objekt.status == "Register in progress") {
            golderCelica.innerHTML = "Register in progress. If your server has captcha, come back in few minutes to solve it in order to compleate registration.";
        }
        
        golderCelica.style = "border: 1px solid black;";
        golderPrvaVrstica.appendChild(golderCelica);
        goldertabela.appendChild(golderPrvaVrstica);
    });
}

function posljiCaptchaServeru() {
    var tarca = this.getAttribute("vnos");
    var tekst = document.getElementById(tarca).value;
    
    var data = "option=3&id=" + tarca.match(/[\d\.]+/g)[0] + "&CaptchaText=" + tekst
    //console.log(data);
    var request = $.ajax({
        url: golderPlayer,
        type: "POST",
        data: data,
        dataType: "html"
    });

    request.done(function (response) {
        console.log(response);
        //alert(response);
        var objekt = eval("(" + response + ")");
        console.log(objekt);
        alert("You saved this captcha to server: "+tekst+"\nIf captcha is correct, acc will be registered. Check back in few minutes (close golder and open it again).");
    });
}

var golderdata = {
    goldlink: GoldLink,
    credits: "Data was not recieved from server yet. Try to close golder window and open it again.",
    goldaccs: []
};


function pridobiGolderData() {
    
    var data = "option=7&goldLink=" + GoldLink;
    //console.log(data);
    var request = $.ajax({
        url: golderPlayer,
        type: "POST",
        data: data,
        dataType: "html"
    });

    request.done(function (response) {
        console.log(response);
        //alert(response);
        eval("(" + response + ")");
        //console.log(objekt);
    });
}

function UstvariGolderOkno() {
    PridobiGoldLink();
    //pridobiGolderData()
    var GolderOkno = new PojavnoOkno();
    GolderOkno.nastaviNaslov(prevodi.translate308);

    var spangolder = document.createElement("span");
    spangolder.id = "spanGolder";
    GolderOkno.dodajElement(spangolder);

    var gumbPridobiLink = document.createElement("span");
    gumbPridobiLink.id = "spanGoldCountdown0";
    gumbPridobiLink.innerHTML = prevodi.translate231 + ": ";
    spangolder.appendChild(gumbPridobiLink);

    var gumbPridobiLink = document.createElement("span");
    gumbPridobiLink.id = "spanGoldCountdown1";
    gumbPridobiLink.innerHTML = "15";
    spangolder.appendChild(gumbPridobiLink);
    spangolder.appendChild(document.createElement("br"));

    var gumbPridobiLink = document.createElement("iframe");
    gumbPridobiLink.src = "http://traviantactics.com/Reklame1.php";
    gumbPridobiLink.setAttribute("style", "width:160px; height:600px;");
    gumbPridobiLink.setAttribute("scrolling", "no");
    spangolder.appendChild(gumbPridobiLink);
    var gumbPridobiLink = document.createElement("iframe");
    gumbPridobiLink.src = "http://traviantactics.com/Reklame2.php";
    gumbPridobiLink.setAttribute("style", "width:160px; height:600px;");
    gumbPridobiLink.setAttribute("scrolling", "no");
    spangolder.appendChild(gumbPridobiLink);
    var gumbPridobiLink = document.createElement("iframe");
    gumbPridobiLink.src = "http://traviantactics.com/Reklame3.php";
    gumbPridobiLink.setAttribute("style", "width:160px; height:600px;");
    gumbPridobiLink.setAttribute("scrolling", "no");
    spangolder.appendChild(gumbPridobiLink);
    var gumbPridobiLink = document.createElement("iframe");
    gumbPridobiLink.src = "http://traviantactics.com/Reklame4.php";
    gumbPridobiLink.setAttribute("style", "width:160px; height:600px;");
    gumbPridobiLink.setAttribute("scrolling", "no");
    spangolder.appendChild(gumbPridobiLink);
    GolderOkno.odpri();
    setTimeout(OdstevajGolder, 1000);
    return;
}


function PridobiGoldLink() {
    document.getElementById("PridobiGoldLink").setAttribute("za", "Golder");
    document.getElementById("PridobiGoldLink").click();
}

function PridobiGoldServer() {
    document.getElementById("PridobiServere").click();
}

function registerNewGoldAcc() {
    document.getElementById("RegistrirajAcc").click();
}


function HelpTasklist() {
    ddrivetip(prevodi.helptasklist, 'yellow')
}

function HelpFarmlist() {
    ddrivetip(prevodi.helpfarmlist, 'yellow')
}


var ustavi=false;




function IzbrisiGradnjoHandler() {
    var TaStevilkaFarme = this.getAttribute("tasknumber");
    var TaVillageId = this.getAttribute("villageid");
    PLAYER.getVillage(TaVillageId).IzbrisiTask(TaStevilkaFarme);
}



function SteviloElementovPrej(node) {
    SteviloElementov = 0;
    while (node.previousSibling) {
        node = node.previousSibling;
        SteviloElementov++;
    }
    return SteviloElementov;
}

function Proizvedenesurovine(ProizvodnjNaUro, CasMiliskeunde) {
    return ProizvodnjNaUro * CasMiliskeunde / 3600000;
}

function PridobiStroskeGradnje(idstavbe, stopnja) {
    return [Stavbe[idstavbe][stopnja][0], Stavbe[idstavbe][stopnja][1], Stavbe[idstavbe][stopnja][2], Stavbe[idstavbe][stopnja][3]];
}

function PridobiCasGradnje(idstavbe, stopnja) {
    return Stavbe[idstavbe][stopnja][6];
}



function DeleteData(server, Uid) {

    parameters = "myidplayer=" + Uid + "&myserver=" + server;


    Request2 = $.ajax({
        url: 'aaa/Default3.aspx',
        //url: 'DeletePlayer.php',
        type: 'POST',
        timeout: RequestTimeout,
        data: parameters,
        beforeSend: function () {
            // this is where we append a loading image
            SpremeniStatus('<img src="http://shrani.si/f/3W/4X/MN7xbXF/loading.gif" alt="Loading..." />');
        },
        error: function (objAJAXRequest, strError) {

            SpremeniStatus("Error! Type: " + strError);
        },
        success: function (response) {
            //alert(response.indexOf("Deleted"));
            try {
                if (response.indexOf("Deleted") != -1) {
                    SpremeniStatus(prevodi.deleted);
                }
                else {
                    SpremeniStatus(prevodi.nodata);
                }


            }
            catch (et) {
                SpremeniStatus(prevodi.nodata);
            }
        }
    });
}


function preveriString(string) {
    if ((string * 1 == "NaN" && string != "true" && string != "false") || string == "")
        return true;
    else
        return false;
}


function PosodobiAnaliza() {
    switch (this.getAttribute("vrsta")) {
        case "CheckTroopsInOases":
            PLAYER.CheckTroopsInOases = this.checked;
            break;
        case "CheckLastReport":
            PLAYER.CheckLastReport = this.checked;
            break;
        case "saveaferanalysing":
            PLAYER.saveaferanalysing = this.checked;
            break;
        case "servertroopspeed":
            PLAYER.troopspeed = this.value * 1;
            alert("Changing this value may cause bot not to work properly. Becouse of that, you will have to set it again every time you refresh page and press button get data.")
            break;
        case "serverspeed":
            PLAYER.speed = this.value * 1;
            alert("Changing this value may cause bot not to work properly. Becouse of that, you will have to set it again every time you refresh page and press button get data.")
            break;
        case "analtype":
            if (this.value == 1) {
                PLAYER.ANALIZAVSEH = false;
                PLAYER.SMARTANALIZA = true;
            }
            else if (this.value == 2) {
                PLAYER.ANALIZAVSEH = true;
                PLAYER.SMARTANALIZA = false;
            }
            else if (this.value == 3) {
                PLAYER.ANALIZAVSEH = true;
                PLAYER.SMARTANALIZA = true;
            }
            break;
        case "usehttps":
            var usehttps1 = this.checked;
            var usehttps = localStorage.setItem(SERVERLINK + "_usehttps1", usehttps1);
            var httpp = document.location.href.split("?link=")
            if (httpp)
            {
                httpp = httpp[1].split("://")
                if (httpp) {
                    httpp = httpp[0]
                }
                else
                {
                    http = "https";
                }
            }
            else {
                http = "https";
            }
            if (usehttps1==true||usehttps1=="true") {
                http = "https";
            }
            else if (usehttps1 == false || usehttps1 == "false") {
                http = "http";
            }
            break;
    }
}





function AktivirajOffline() {

    PLAYER.offline.username = encodeURIComponent(document.getElementById("offlineUsername").value);
    PLAYER.offline.password = encodeURIComponent(document.getElementById("offlinePass").value);
    var parameters = "username=" + PLAYER.offline.username + "&password=" + PLAYER.offline.password + "&goldLink=" + PLAYER.offline.goldlink + "&cleanLink=" + SERVERLINK;


    if (document.getElementById("offlineCoupon")) {
        PLAYER.offline.coupon = document.getElementById("offlineCoupon").value;
        parameters += "&cupon=" + PLAYER.offline.coupon;
    }

    $.ajax({
        url: '/data_base/OfflineData.aspx',
        type: 'POST',
        data: parameters,
        success: function (response) {
            if (response.successful) {
                PLAYER.offline.activated = true;
                NaloziOffline();
            }
            else {
            }

        },
        error: function (xhr, ajaxOptions, thrownError) {
        }
    });
}


function OdpriOfflineOnOffOkno() {
    if (Stopped == false && this.getAttribute("task") * 1 == 1) {
        alert(prevodi.translate232)
    }


        var parameters = "onoff=" + this.getAttribute("task") + "&goldLink=" + PLAYER.offline.goldlink + "&cleanLink=" + SERVERLINK;


    $.ajax({
        url: '/data_base/OfflineData.aspx',
        type: 'POST',
        data: parameters,
        success: function (response) {
            NaloziOffline();
            var parameters = "goldLink=" + PLAYER.offline.goldlink + "&getOnOff=1&getCupon=1&getData=1";
            $.ajax({
                url: '/data_base/OfflineData.aspx',
                type: 'POST',
                data: parameters,
                success: function (response) {
                },
                error: function (xhr, ajaxOptions, thrownError) {
                }
            });
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.statusText + "\n" + xhr.responseText + "\n" + xhr.status + "\n" + thrownError)
        }
    });
}

function offlineSave() {
    switch (this.getAttribute("id")) {
        case "offlinesavetoserver":
            var r = confirm(prevodi.translate233);
            if (r) {
                var podatki = eval("(" + JSON.stringify(PLAYER) + ")");
                for (var i = 0; i < podatki.villages.length; i++) {
                    podatki.villages[i].FARME = [];
                }

                for (var i = 0; i < podatki.FARMLISTE.length; i++) {
                    podatki.FARMLISTE[i].Slots = [];
                    podatki.FARMLISTE[i].analysereportsbeforesending = false;
                    podatki.FARMLISTE[i].ime = i+" ";
                }
                podatki.logs = [];
                PLAYER.farmSearch.filterHistory = [];
                PLAYER.farmSearch.searchHistory = [];
                var parameters = "data=" + JSON.stringify(podatki) + "&goldLink=" + PLAYER.offline.goldlink + "&cleanLink=" + SERVERLINK;
                $.ajax({
                    url: '/data_base/OfflineData.aspx',
                    type: 'POST',
                    data: parameters,
                    success: function (response) {
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.statusText + "\n" + xhr.responseText + "\n" + xhr.status + "\n" + thrownError)
                    }
                });
            }
            break;
        case "offlinesavefromserver":
            var r = confirm(prevodi.translate234);
            if (r) {
                var parameters = "goldLink=" + PLAYER.offline.goldlink + "&getOnOff=1&getCupon=1&getData=1";
                $.ajax({
                    url: '/data_base/OfflineData.aspx',
                    type: 'POST',
                    data: parameters,
                    success: function (response) {
                        PLAYER.setPlayer(response.DATA);
                        PLAYER.SaveDataLocaly();
                        location.reload();
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.statusText + "\n" + xhr.responseText + "\n" + xhr.status + "\n" + thrownError)
                    }
                });
            }
            break;
        case "offlinedeletefromserver":
            var r = confirm(prevodi.translate233);
            if (r) {
                var parameters = "data={}&goldLink=" + PLAYER.offline.goldlink + "&cleanLink=" + SERVERLINK; ;
                $.ajax({
                    url: '/data_base/OfflineData.aspx',
                    type: 'POST',
                    data: parameters,
                    success: function (response) {
                        alert("Data deleted. Close offline window and open it again.");
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.statusText + "\n" + xhr.responseText + "\n" + xhr.status + "\n" + thrownError)
                    }
                });
            }
            break;
    }
}

/*
function NaloziOffline() {
    PLAYER.offline.goldlink = GoldLink;

    OfflineOkno.nastaviVsebino("");
    

    var divCustom1 = document.createElement("div");
    if (PLAYER.offline.activated) {

        var parameters = "goldLink=" + PLAYER.offline.goldlink + "&getOnOff=1&getCupon=1&getLog=1";

        $.ajax({
            url: '/data_base/OfflineData.aspx',
            type: 'POST',
            data: parameters,
            success: function (response) {
                var tekst = "<br>Your goldlink:<span id='offlineGoldlink'>" + PLAYER.offline.goldlink + "</span>";
                tekst += "<br>Username:<input id='offlineUsername' type='text' value='" + PLAYER.offline.username + "'>";
                tekst += "<br>Password:<input id='offlinePass' type='text' value='" + PLAYER.offline.password + "'>";
                tekst += "<br><input id='offlineactivatebutton' type='button' value='Save'>";
                tekst += "<br>Before you run bot offline, you should <input id='offlinesavetoserver' type='button' task='1' value='Save data to server'>";
                tekst += "<br>You can load data from server in your bot: <input id='offlinesavefromserver' type='button' task='1' value='Load data from server'>";
                if (response.successful) {
                    if (response.OnOff == 0) {
                        tekst += "<br><br>Offline bot is curretly turned OFF. <input id='offlineonoff' type='button' task='1' value='Turn offline ON'>";
                    }
                    else {
                        tekst += "<br><br>Offline bot is curretly turned ON.<input id='offlineonoff' type='button' task='0' value='Turn offline OFF'>";
                    }
                }
                else {
                    
                }
                tekst += "<div>Logs:" + response.log + "</div>";
                divCustom1.innerHTML = tekst
                OfflineOkno.dodajElement(divCustom1);
                document.getElementById("offlineactivatebutton").addEventListener('click', AktivirajOffline, true);
                document.getElementById("offlineonoff").addEventListener('click', OdpriOfflineOnOffOkno, true);
                document.getElementById("offlinesavetoserver").addEventListener('click', offlineSave, true);
                document.getElementById("offlinesavefromserver").addEventListener('click', offlineSave, true);

            },
            error: function (xhr, ajaxOptions, thrownError) {
                
            }
        });


        
        

        
    }
    else {
        var tekst = "We are developing offline bot!<br>Features that offline bot provide:"
        tekst += "<ul><li>Uniqe IP-addres: when bot will run on our server, every account that will run on our server will obtain unique ip address. That will mean that another IP adress will log in your account and to multihunter, it will look like 2 people are playing your account. Therefore, you will be less suspicious to multihunter.</li>"
        tekst += "<li>All features that TravianTactics script provide</li>";
        tekst += "<li>Troop evading</li></ul>";
        tekst += "<br>In near future, we will include other features that TT provides.";
        tekst += "<br><b>However, becouse we have limited unique IPs that we can give away to users of offline bot, this feature is only avaible to donators.</b>";
        tekst += "<br>Those who will donate 20 euro will:<ul>";
        tekst += "<li>recieve 1000 credits for our golder</li>";
        tekst += "<li>be able to use offline bot on one accont for whole server</li></ul>";
        tekst += "You can donate by clicking donate button under left menu. With donation, you are not buying a service, but donating money for what you get for free. Traviantactics authors can't be held liable for anything.";
        tekst += "<br><Donators will recieve coupon, which they can activate on account. Username and password is also needed.";
        tekst += "<br>Your goldlink:<span id='offlineGoldlink'>" + PLAYER.offline.goldlink + "</span>";
        tekst += "<br>Coupon:<input id='offlineCoupon' type='text' value='" + PLAYER.offline.coupon + "'>";
        tekst += "<br>Username:<input id='offlineUsername' type='text' value='" + PLAYER.offline.username + "'>";
        tekst += "<br>Password:<input id='offlinePass' type='text' value='" + PLAYER.offline.password + "'>";
        tekst += "<br><input id='offlineactivatebutton' type='button' value='Activate'>";
        divCustom1.innerHTML = tekst
        OfflineOkno.dodajElement(divCustom1);

        document.getElementById("offlineactivatebutton").addEventListener('click', AktivirajOffline, true);
    }
}
*/

function NaloziOffline() {
    PLAYER.offline.goldlink = GoldLink;

    OfflineOkno.nastaviVsebino("");


    var divCustom1 = document.createElement("div");
    if (true) {
        var parameters = "goldLink=" + PLAYER.offline.goldlink + "&getOnOff=1&getCupon=1&getLog=1";

        $.ajax({
            url: '/data_base/OfflineData.aspx',
            type: 'POST',
            data: parameters,
            success: function (response) {

                if (response.successful) {
                    var username = decodeURIComponent(PLAYER.offline.username);
                    username = username.split("~26~").join("&");
                    PLAYER.offline.username = encodeURIComponent(username);

                    var passss = decodeURIComponent(PLAYER.offline.password);
                    passss = passss.split("~26~").join("&");
                    PLAYER.offline.password = encodeURIComponent(passss);

                    var tekst = "<br>" + prevodi.translate235 + ":<span id='offlineGoldlink'>" + PLAYER.offline.goldlink + "</span>";
                    tekst += "<br>" + prevodi.translate236 + ":<input id='offlineUsername' type='text' value='" + decodeURIComponent(PLAYER.offline.username) + "'>";
                    tekst += "<br>" + prevodi.translate237 + ":<input id='offlinePass' type='text' value='" + decodeURIComponent(PLAYER.offline.password) + "'>";
                    tekst += "<br><input id='offlineactivatebutton' type='button' value='" + prevodi.translate238 + "'>";
                    tekst += "<br>" + prevodi.translate372 + " <input id='offlinesavetoserver' type='button' task='1' value='" + prevodi.translate239 + "'>";
                    tekst += "<br>" + prevodi.translate373 + ": <input id='offlinesavefromserver' type='button' task='1' value='" + prevodi.translate240 + "'>";
                    if (response.successful) {
                        if (response.OnOff == 0) {
                            tekst += "<br><br>" + prevodi.translate241 + ". <input id='offlineonoff' type='button' task='1' value='" + prevodi.translate243 + "'>";
                        }
                        else {
                            tekst += "<br><br>" + prevodi.translate242 + ".<input id='offlineonoff' type='button' task='0' value='" + prevodi.translate244 + "'>";
                        }
                    }
                    else {
                    }
                    tekst += "<div>" + prevodi.translate245 + ":" + response.log + "</div>";
                    divCustom1.innerHTML = tekst
                    OfflineOkno.dodajElement(divCustom1);
                    document.getElementById("offlineactivatebutton").addEventListener('click', AktivirajOffline, true);
                    document.getElementById("offlineonoff").addEventListener('click', OdpriOfflineOnOffOkno, true);
                    document.getElementById("offlinesavetoserver").addEventListener('click', offlineSave, true);
                    document.getElementById("offlinesavefromserver").addEventListener('click', offlineSave, true);
                }
                else {
                    var tekst = "We are developing offline bot!<br>Features that offline bot provide:"
                    tekst += "<ul><li>Uniqe IP-addres: when bot will run on our server, every account that will run on our server will obtain unique ip address. That will mean that another IP adress will log in your account and to multihunter, it will look like 2 people are playing your account. Therefore, you will be less suspicious to multihunter.</li>"
                    tekst += "<li>All features that TravianTactics script provide</li>";
                    tekst += "<li>Troop evading</li></ul>";
                    tekst += "<br>In near future, we will include other features that TT provides.";
                    tekst += "<br><b>However, becouse we have limited unique IPs that we can give away to users of offline bot, this feature is only avaible to donators.</b>";
                    tekst += "<br>Those who will donate 20 euro will:<ul>";
                    tekst += "<li>recieve 1000 credits for our golder</li>";
                    tekst += "<li>be able to use offline bot on one accont for whole server</li></ul>";
                    tekst += "You can donate by clicking donate button under left menu. With donation, you are not buying a service, but donating money for what you get for free. Traviantactics authors can't be held liable for anything.";
                    tekst += "<br><Donators will recieve coupon, which they can activate on account. Username and password is also needed.";
                    tekst += "<br>Your goldlink:<span id='offlineGoldlink'>" + PLAYER.offline.goldlink + "</span>";
                    tekst += "<br>Coupon:<input id='offlineCoupon' type='text' value='" + PLAYER.offline.coupon + "'>";
                    tekst += "<br>Username:<input id='offlineUsername' type='text' value='" + PLAYER.offline.username + "'>";
                    tekst += "<br>Password:<input id='offlinePass' type='text' value='" + PLAYER.offline.password + "'>";
                    tekst += "<br><input id='offlineactivatebutton' type='button' value='Activate'>";
                    divCustom1.innerHTML = tekst
                    OfflineOkno.dodajElement(divCustom1);

                    document.getElementById("offlineactivatebutton").addEventListener('click', AktivirajOffline, true);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                var errordiv = document.createElement("div");
                errordiv.innerHTML = "There was an error saving your data to offline. you can remove data and save it again.";
                var gumbizbrisi = document.createElement("input");
                gumbizbrisi.value = "Delete data from offline";
                gumbizbrisi.type = "button";
                gumbizbrisi.id = "offlinedeletefromserver";
                gumbizbrisi.addEventListener('click', offlineSave, true);
                errordiv.appendChild(gumbizbrisi);
                OfflineOkno.dodajElement(errordiv);
                console.log(xhr.statusText + "\n" + xhr.responseText + "\n" + xhr.status + "\n" + thrownError)
            }
        });
    }
}

function PosodobiEvasionCheckbox() {
    var naseljaev = [];
    var vsicheckboxi = document.getElementsByName("evasioncheckbox");
    for (var i = 0; i < vsicheckboxi.length; i++) {
        if (vsicheckboxi[i].checked) {
            naseljaev.push(vsicheckboxi[i].getAttribute("village"));
        }
    }
    PLAYER.evade.villages = naseljaev;
}

function NaloziTroopEvade() {
    PLAYER.offline.goldlink = GoldLink;

    OfflineOkno.nastaviVsebino("");


    var divCustom1 = document.createElement("div");
    if (true) {
        var parameters = "goldLink=" + PLAYER.offline.goldlink + "&getOnOff=1&getCupon=1&getLog=1";

        $.ajax({
            url: '/data_base/OfflineData.aspx',
            type: 'POST',
            data: parameters,
            success: function (response) {
                if (response.successful) {


                    var tekst = prevodi.translate246 + ":";
                    for (var i = 0; i < PLAYER.villages.length; i++) {
                        var checked = "";
                        for (var j = 0; j < PLAYER.evade.villages.length; j++) {
                            if (PLAYER.evade.villages[j] == PLAYER.villages[i].villageid) {
                                checked = "checked";
                                break;
                            }
                        }
                        tekst += "<br><input type='checkbox' " + checked + " name='evasioncheckbox' village='" + PLAYER.villages[i].villageid + "'>" + PLAYER.villages[i].name + " (" + PLAYER.villages[i].x + "|" + PLAYER.villages[i].y + ")";
                    }

                    divCustom1.innerHTML = tekst
                    OfflineOkno.dodajElement(divCustom1);
                    var vsicheckboxi = document.getElementsByName("evasioncheckbox");
                    for (var i = 0; i < vsicheckboxi.length; i++) {
                        vsicheckboxi[i].addEventListener('click', PosodobiEvasionCheckbox, true);
                    }
                    /*document.getElementById("offlineactivatebutton").addEventListener('click', AktivirajOffline, true);
                    document.getElementById("offlineonoff").addEventListener('click', OdpriOfflineOnOffOkno, true);
                    document.getElementById("offlinesavetoserver").addEventListener('click', offlineSave, true);
                    document.getElementById("offlinesavefromserver").addEventListener('click', offlineSave, true);*/
                }
                else {
                    var tekst = "<p style='color:red;'>Troop evasion is curretly available only in offline bot!</p><br>Features that offline bot provide:"
                    tekst += "<ul><li>Uniqe IP-addres: when bot will run on our server, every account that will run on our server will obtain unique ip address. That will mean that another IP adress will log in your account and to multihunter, it will look like 2 people are playing your account. Therefore, you will be less suspicious to multihunter.</li>"
                    tekst += "<li>All features that TravianTactics script provide</li>";
                    tekst += "<li>Troop evading</li></ul>";
                    tekst += "<br>In near future, we will include other features that TT provides.";
                    tekst += "<br><b>However, becouse we have limited unique IPs that we can give away to users of offline bot, this feature is only avaible to donators.</b>";
                    tekst += "<br>Those who will donate 20 euro will:<ul>";
                    tekst += "<li>recieve 1000 credits for our golder</li>";
                    tekst += "<li>be able to use offline bot on one accont for whole server</li></ul>";
                    tekst += "You can donate by clicking donate button under left menu. With donation, you are not buying a service, but donating money for what you get for free. Traviantactics authors can't be held liable for anything.";
                    tekst += "<br><Donators will recieve coupon, which they can activate on account. Username and password is also needed.";
                    tekst += "<br>Your goldlink:<span id='offlineGoldlink'>" + PLAYER.offline.goldlink + "</span>";
                    tekst += "<br>Coupon:<input id='offlineCoupon' type='text' value='" + PLAYER.offline.coupon + "'>";
                    tekst += "<br>Username:<input id='offlineUsername' type='text' value='" + PLAYER.offline.username + "'>";
                    tekst += "<br>Password:<input id='offlinePass' type='text' value='" + PLAYER.offline.password + "'>";
                    tekst += "<br><input id='offlineactivatebutton' type='button' value='Activate'>";
                    divCustom1.innerHTML = tekst
                    OfflineOkno.dodajElement(divCustom1);

                    document.getElementById("offlineactivatebutton").addEventListener('click', AktivirajOffline, true);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.statusText + "\n" + xhr.responseText + "\n" + xhr.status + "\n" + thrownError)
            }
        });

    }
    
}


function UstvariGumbOfflineOkno() {

    document.getElementById("PridobiGoldLink").setAttribute("za", "Offline");
    document.getElementById("PridobiGoldLink").click();
    OfflineOkno.nastaviNaslov(prevodi.translate309);
    OfflineOkno.nastaviVsebino(prevodi.translate374+"...");
    OfflineOkno.odpri();
}

function UstvariGumbEvadeOkno() {

    document.getElementById("PridobiGoldLink").setAttribute("za", "Evasion");
    document.getElementById("PridobiGoldLink").click();
    OfflineOkno.nastaviNaslov(prevodi.translate375);
    OfflineOkno.nastaviVsebino(prevodi.translate374+"...");
    OfflineOkno.odpri();
}



function connectionsetting() {
    var connectionsettingOkno = new PojavnoOkno();
    connectionsettingOkno.nastaviNaslov(prevodi.translate391);

    var uporabihttps = localStorage.getItem(SERVERLINK + "_usehttps1")

    if (uporabihttps == null)
    {
        
        var httpp = document.location.href.split("?link=")
        if (httpp) {
            httpp = httpp[1].split("://")
            if (httpp) {
                httpp = httpp[0]
                if (httpp == "http")
                {
                    uporabihttps = false;
                }
                else
                {
                    uporabihttps = true;
                }
                    
            }
            else {
                uporabihttps = true;
            }
        }
        else {
            uporabihttps = true;
        }
    }

    var tekst = document.createElement("b");
    tekst.innerHTML = prevodi.translate392;
    connectionsettingOkno.dodajElement(tekst);
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("vrsta", "usehttps");
    checkbox.addEventListener('click', PosodobiAnaliza, true);

    if (uporabihttps == "true" || uporabihttps == true) {
        checkbox.checked = uporabihttps;
    }

    connectionsettingOkno.dodajElement(checkbox);
    connectionsettingOkno.odpri();
}

function PosodobiAutologin() {
    switch (this.getAttribute("vrsta")) {
        case "autologinenabled":
            PLAYER.autologinon = this.checked;
            console.log(this.checked)
            console.log(PLAYER.autologinon)
            break;
        case "username":
            PLAYER.username = this.value;
            break;
        case "password":
            PLAYER.password = this.value;
            break;
    }
}

function UstvariAutologinOkno() {
    AutologinOkno.nastaviVsebino("");
    AutologinOkno.nastaviNaslov(prevodi.translate311);



    AutologinOkno.dodajElement(document.createElement("br"));
    var tekst = document.createElement("b");
    tekst.innerHTML = "Enable autologin";
    AutologinOkno.dodajElement(tekst);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = PLAYER.autologinon;
    checkbox.setAttribute("vrsta", "autologinenabled");
    checkbox.addEventListener('click', PosodobiAutologin, true);
    AutologinOkno.dodajElement(checkbox);

    AutologinOkno.dodajElement(document.createElement("br"));
    var tekst = document.createElement("b");
    tekst.innerHTML = "Username:";
    AutologinOkno.dodajElement(tekst);

    var checkbox = document.createElement("input");
    checkbox.type = "input";
    checkbox.size = 30;
    if (PLAYER.username)
    {
        checkbox.value = PLAYER.username;
    }
        
    checkbox.setAttribute("vrsta", "username");
    checkbox.addEventListener('blur', PosodobiAutologin, true);
    AutologinOkno.dodajElement(checkbox);

    AutologinOkno.dodajElement(document.createElement("br"));
    var tekst = document.createElement("b");
    tekst.innerHTML = "Password:";
    AutologinOkno.dodajElement(tekst);

    var checkbox = document.createElement("input");
    checkbox.type = "input";
    checkbox.size = 30;
    if (PLAYER.password) {
        checkbox.value = PLAYER.password;
    }

    checkbox.setAttribute("vrsta", "password");
    checkbox.addEventListener('blur', PosodobiAutologin, true);
    AutologinOkno.dodajElement(checkbox);

    AutologinOkno.odpri();
}

function UstvariAnalizaOkno() {
    AnalizaOkno.nastaviVsebino("");
    AnalizaOkno.nastaviNaslov(prevodi.translate311);

    var tekst = document.createElement("b");
    tekst.innerHTML = prevodi.translate311;
    AnalizaOkno.dodajElement(tekst);
    AnalizaOkno.dodajElement(document.createElement("br"));

    var tekst = document.createElement("b");
    tekst.innerHTML = prevodi.translate376+    ":";
    AnalizaOkno.dodajElement(tekst);

    var sel = document.createElement("select");
    sel.setAttribute("vrsta", "analtype");
    sel.addEventListener('change', PosodobiAnaliza, true);
    var opt = document.createElement("option");
    opt.innerHTML = prevodi.translate377;
    opt.value = 1;
    sel.appendChild(opt);
    var opt = document.createElement("option");
    opt.innerHTML = prevodi.translate378;
    opt.value = 2;
    sel.appendChild(opt);
    var opt = document.createElement("option");
    opt.innerHTML = prevodi.translate379;
    opt.value = 3;
    sel.appendChild(opt);
    AnalizaOkno.dodajElement(sel);


    if (!PLAYER.ANALIZAVSEH && PLAYER.SMARTANALIZA) {
        sel.value = 1;
    }
    else if (PLAYER.ANALIZAVSEH && !PLAYER.SMARTANALIZA) {
        sel.value = 2;
    }
    else if (PLAYER.ANALIZAVSEH && PLAYER.SMARTANALIZA) {
        sel.value = 3;
    }
    AnalizaOkno.dodajElement(document.createElement("br"));

    var tekst = document.createElement("b");
    tekst.innerHTML = prevodi.translate380;
    AnalizaOkno.dodajElement(tekst);


    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("vrsta", "CheckTroopsInOases");
    checkbox.checked = PLAYER.CheckTroopsInOases;
    checkbox.addEventListener('click', PosodobiAnaliza, true);
    AnalizaOkno.dodajElement(checkbox);
    AnalizaOkno.dodajElement(document.createElement("br"));

    var tekst = document.createElement("b");
    tekst.innerHTML = prevodi.translate381;
    AnalizaOkno.dodajElement(tekst);


    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("vrsta", "CheckLastReport");
    checkbox.checked = PLAYER.CheckLastReport;
    checkbox.addEventListener('click', PosodobiAnaliza, true);
    AnalizaOkno.dodajElement(checkbox);

    AnalizaOkno.dodajElement(document.createElement("br"));
    var tekst = document.createElement("b");
    tekst.innerHTML = prevodi.translate382;
    AnalizaOkno.dodajElement(tekst);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("vrsta", "saveaferanalysing");
    checkbox.addEventListener('click', PosodobiAnaliza, true);


    if (PLAYER.saveaferanalysing) {
        checkbox.checked = PLAYER.saveaferanalysing;
    }
    else {
        PLAYER.CheckLastReport = false;
    }
    AnalizaOkno.dodajElement(checkbox);

    AnalizaOkno.dodajElement(document.createElement("br"));
    var tekst = document.createElement("b");
    tekst.innerHTML = "Server speed (this value will reset every time you reload page and presd get data):";
    AnalizaOkno.dodajElement(tekst);

    var checkbox = document.createElement("input");
    checkbox.type = "input";
    checkbox.value = PLAYER.speed;
    checkbox.size = 1;
    checkbox.setAttribute("vrsta", "serverspeed");
    checkbox.addEventListener('blur', PosodobiAnaliza, true);
    AnalizaOkno.dodajElement(checkbox);

    AnalizaOkno.dodajElement(document.createElement("br"));
    var tekst = document.createElement("b");
    tekst.innerHTML = "Server troop speed (this value will reset every time you reload page and press get data):";
    AnalizaOkno.dodajElement(tekst);

    var checkbox = document.createElement("input");
    checkbox.type = "input";
    checkbox.size = 1;
    checkbox.value = PLAYER.troopspeed;
    checkbox.setAttribute("vrsta", "servertroopspeed");
    checkbox.addEventListener('blur', PosodobiAnaliza, true);
    AnalizaOkno.dodajElement(checkbox);

    AnalizaOkno.dodajElement(document.createElement("br"));
    var tekst = document.createElement("tekst");
    tekst.innerHTML = prevodi.translate383+    ":";
    AnalizaOkno.dodajElement(tekst);

    var select = document.createElement("select");
    select.id = "VasZaAnalizo";

    var option = document.createElement("option");
    option.value = "Vse";
    option.innerHTML = prevodi.translate384;
    select.appendChild(option);

    var intervalanalize2 = [PLAYER.intervalanalizeMin, PLAYER.intervalanalizeMin];

    for (var i = 0; i < PLAYER.villages.length; i++) {
        var koordinate = PLAYER.villages[i].ID;
        var text = PLAYER.villages[i].name + " (" + PLAYER.villages[i].x + "|" + PLAYER.villages[i].y + ")";
        var option = document.createElement("option");
        option.value = PLAYER.villages[i].villageid;
        option.innerHTML = text;
        select.appendChild(option);

    }

    AnalizaOkno.dodajElement(select);

    var checkbox = document.createElement("input");
    checkbox.type = "button";
    checkbox.value = prevodi.translate383+    "!";
    checkbox.addEventListener('click', AnalizirajNaseljaIzMoznosti, true);
    AnalizaOkno.dodajElement(checkbox);

    var checkbox = document.createElement("input");
    checkbox.type = "button";
    checkbox.value = prevodi.translate385+    "!";
    checkbox.addEventListener('click', AnalizirajNaseljaIzMoznosti2, true);
    AnalizaOkno.dodajElement(checkbox);


    AnalizaOkno.odpri();
}


function Posodobi1() {
    AnalizaReportovON = this.checked
}

function Posodobi2() {
    CasAnalizeReportov = this.value;
}

function Posodobi3() {
    SteviloAnalizeReportov = this.value;
}

function Posodobi4() {
    DodajNaPrednostno = this.value;
}

function Posodobi5() {
    OnemogociFarmo = this.value;
}

function Posodobi6() {
    PosljiSMSReport = this.checked;
}

function Posodobi7() {
    AnalizaIGMjevON = this.checked;
}

function Posodobi8() {
    CasAnalizeIGMjev = this.value;
}

function Posodobi9() {
    SteviloAnalizeIGMjev = this.value;
}

function Posodobi10() {
    PosljiSMSIGM = this.checked;
}

function Posodobi11() {
    CountryCode = this.value;
}

function Posodobi12() {
    PhoneNumber = this.value;
}

function Posodobi13() {
    if (this.value * 1 <= AnalizaMax * 1) {
        AnalizaMin = this.value * 1;
    }
    else {
        this.value = AnalizaMin;
    }
}

function Posodobi14() {

    if (this.value * 1 >= AnalizaMin * 1) {
        AnalizaMax = this.value * 1;
    }
    else {
        this.value = AnalizaMax;
    }
}

function Posodobi15() {
    var intervalanalize2 = INTERVALANALIZE[VILLAGES[0]];
    if (this.value * 1 <= intervalanalize2[1] * 1) {
        for (var hhh = 0; hhh < VILLAGES.length; hhh++) {
            INTERVALANALIZE[VILLAGES[hhh]][0] = this.value * 1;
        }
    }
    else {
        this.value = intervalanalize2[0];
    }
}

function Posodobi16() {
    var intervalanalize2 = INTERVALANALIZE[VILLAGES[0]];
    if (this.value * 1 >= intervalanalize2[0] * 1) {
        for (var hhh = 0; hhh < VILLAGES.length; hhh++) {
            INTERVALANALIZE[VILLAGES[hhh]][1] = this.value * 1;
        }
    }
    else {
        this.value = intervalanalize2[1];
    }
}

function AnalizirajNaseljaIzMoznosti() {
    StopEvent();
    document.getElementById("Start").style.display = "none";
    document.getElementById("Stop").style.display = "";
    Stopped = false;
    var naselje = document.getElementById("VasZaAnalizo").value;

    if (naselje == "Vse") {
        PLAYER.AnalizirajVsaNaselja();

    }
    else {
        PLAYER.getVillage(naselje).AnalizirajNaselje();
    }
}

function AnalizirajNaseljaIzMoznosti2() {
    StopEvent();
    document.getElementById("Start").style.display = "none";
    document.getElementById("Stop").style.display = "";
    Stopped = false;
    var naselje = document.getElementById("VasZaAnalizo").value;

    if (naselje == "Vse") {
        PLAYER.AnalizirajVsaNaseljaInZacni();
    }
    else {
        PLAYER.getVillage(naselje).AnalizirajNaseljeInZacni();
    }
}

var NazadnjeAnaliziraniIGMJI=0;
var NazadnjeAnaliziraniReporti=0;

function PreveriAnalizoIGM() {
    var trenutencas = new Date();
    if (PLAYER.AnalizaIGMjevON == true && NazadnjeAnaliziraniIGMJI + CasAnalizeIGMjev * 60000 < trenutencas.getTime() && PLAYER.SteviloAnalizeIGMjev != 0) {
        return SteviloAnalizeIGMjev;
    }
    return false;
}


function PreveriAnalizoReportov() {

    var trenutencas = new Date();
    if (PLAYER.AnalizaReportovON == true && NazadnjeAnaliziraniReporti + CasAnalizeReportov * 60000 < trenutencas.getTime() && PLAYER.SteviloAnalizeReportov != 0) {
        return SteviloAnalizeReportov;
    }


    return false;

}
var RestartTimeout;
var testnaspr = true;

function Restart() {
    StopEvent();
    StartEvent();
}

function Start() {
    try {
        clearInterval(IntervalTimer);
    }
    catch (err) {
    }
    try {
        clearInterval(RestartTimeout);
    }
    catch (err) {
    }
    if (!playerRun)
    {
        //StopEvent();
        SpremeniStatus("Because you stopped the miner, bot has stopped. To start bot again, please refresh page. We advise that you do not turn off the miner in future, since it enables us to pay for website costs and keep bot free.");
        document.getElementById("Start").style.display = "none"
		document.getElementById("Stop").style.display = "none"
        return;
    }
    SpremeniStatus(prevodi.checking);

    var playertribe = PLAYER.PreveriTribe();
    if (playertribe.toString() == "true") {
        SpremeniStatus("Analysing player tribe");
        document.getElementById("izvediTask").setAttribute("task", "{type: 'tribe'}");
        document.getElementById("izvediTask").click();
        //print("clicked")
        return;
    }

    var PreveriWorkingTime = PLAYER.workingtime.check();
    if (PreveriWorkingTime.toString() != "true" ) {
        document.getElementById("OnemogociIgranje").setAttribute("class", "NePrikaziOviro");
        SpremeniStatus(PreveriWorkingTime);
        IntervalTimer = setInterval(function () {
            SpremeniStatus(PridobiStatus() * 1 - 1);
            if (PridobiStatus() * 1 <= 0) {
                clearInterval(IntervalTimer);
                if (Stopped == false) {
                    Start();
                }
            }
        }, 1000);
        return;
    }

    RestartTimeout = setTimeout(Restart, 900000);

//    if (testnaspr) {
//        testnaspr = false;
//        SpremeniStatus("testiram zbiralisce");
//        document.getElementById("izvediTask").setAttribute("task", "{type:'testzbiralisca'}");
//        document.getElementById("izvediTask").click();
//        return;
//    }
//    else {
//        testnaspr = true;
//        SpremeniStatus(60);
//        IntervalTimer = setInterval(function () {
//            SpremeniStatus(PridobiStatus() * 1 - 1);
//            if (PridobiStatus() * 1 <= 0) {
//                clearInterval(IntervalTimer);
//                if (Stopped == false) {
//                    Start();
//                }
//            }
//        }, 1000);
//        return;
//    }

    var attbuild = PLAYER.PreveriAttackBuilder();
    if (attbuild.toString() != "false") {
        SpremeniStatus(prevodi.translate247);
        document.getElementById("izvediTask").setAttribute("task", JSON.stringify(attbuild));
        document.getElementById("izvediTask").click();
        return;
    }
    /*
    for (var kk = 0; kk < PLAYER.FARMLISTE.length; kk++) {
        if (typeof PLAYER.FARMLISTE[kk].Slots === 'undefined') {
            PLAYER.FARMLISTE[kk].Slots = new Slots(PLAYER.FARMLISTE[kk].lid);
        }
        var repanaliz = PLAYER.FARMLISTE[kk].Slots.preveriAnalizoReportov();
        console.log("farmlist" + kk + ":" + repanaliz);
        if (repanaliz != false) {
            SpremeniStatus("Analysing reports of goldclub farmlist");
            document.getElementById("izvediTask").setAttribute("task", JSON.stringify(repanaliz));
            document.getElementById("izvediTask").click();
            return;
        }
    }
    */
    var PreverjanjeIgm = PreveriAnalizoIGM()
    if (PreverjanjeIgm.toString() != "false") {
        SpremeniStatus("Analaysing IGMs");
        document.getElementById("AnalizirajIgmje").value = PreverjanjeIgm;
        document.getElementById("AnalizirajIgmje").click();
        return;
    }

    var PreverjanjeReportov = PreveriAnalizoReportov()
    if (PreverjanjeReportov.toString() != "false") {
        SpremeniStatus("Analaysing reports");
        document.getElementById("AnalizirajReport").value = PreverjanjeReportov;
        document.getElementById("AnalizirajReport").click();
        return;
    }
    AnaliziranjeVsehNaselij = PLAYER.PreveriAnalizoVsehNaselij();



    if (AnaliziranjeVsehNaselij) {
        //document.getElementById("OnemogociIgranje").setAttribute("class", "PrikaziOviro");
        SpremeniStatus(prevodi.analysingvillages);
        var trenutnonaselje = 0;
        Stopped = false;
        PLAYER.AnalizirajVsaNaseljaInZacni();
        return;
    }

    var poslanofarmlista = PLAYER.PreveriHero();
    if (!poslanofarmlista == false) {
        SpremeniStatus(prevodi.translate248);
        poslanofarmlista.type = "Hero";
        document.getElementById("izvediTask").setAttribute("task", JSON.stringify(poslanofarmlista));
        document.getElementById("izvediTask").click();
        return;
    }

    var demolish = PLAYER.PreveriDemolish();
    if (demolish.toString() != "false") {
        SpremeniStatus(prevodi.translate249);
        document.getElementById("izvediTask").setAttribute("task", JSON.stringify(demolish));
        document.getElementById("izvediTask").click();
        return;
    }

    var poslanofarmlista = PLAYER.PreveriFarmliste();
    if (!poslanofarmlista) {
        //SpremeniStatus("sending to farmlist");
        return;
    }


    var villages = PLAYER.GetAllVillages()
    for (var f = 0; f < villages.length; f++) {

        if (villages[f].TRGOVCI.length == 0)
        {
            villages[f].TRGOVCI=[[0,1]]
        }

        try
        {
            if (typeof villages[f].TRGOVCI[0][0] != "number" || typeof villages[f].TRGOVCI[0][1] != "number" || villages[f].TRGOVCI[0][0] == NaN || villages[f].TRGOVCI[0][1] == NaN) {
                villages[f].TRGOVCI = [[0, 1]]
                villages[f].CASANALIZETRZNICA = 0
                console.log("trgovci reset1")
            }
        }
        catch(err)
        {
            villages[f].TRGOVCI = [[0, 1]]
            villages[f].CASANALIZETRZNICA = 0
            console.log("trgovci reset2")
        }

        try {
            if (typeof villages[f].CASANALIZE != "number" || villages[f].CASANALIZE == NaN) {
                villages[f].CASANALIZE = 0
            }
        }
        catch (err) {
            PLAYER.villages[1].CASANALIZEARMOR = 0
        }
        try {
            if (typeof villages[f].CASANALIZEARMOR != "number" || villages[f].CASANALIZEARMOR == NaN) {
                villages[f].CASANALIZEARMOR = 0
            }
        }
        catch (err) {
            villages[f].CASANALIZEARMOR = 0
        }
        try {
            if (typeof villages[f].CASANALIZEENOT != "number" || villages[f].CASANALIZEENOT == NaN) {
                villages[f].CASANALIZEENOT = 0
            }
        }
        catch (err) {
            villages[f].CASANALIZEENOT = 0
        }
        try {
            if (typeof villages[f].CASANALIZEFESTIVAL != "number" || villages[f].CASANALIZEFESTIVAL == NaN) {
                villages[f].CASANALIZEFESTIVAL = 0
            }
        }
        catch (err) {
            villages[f].CASANALIZEFESTIVAL = 0
        }

        try {
            if (typeof villages[f].CASANALIZEGRADNJA1 != "number" || villages[f].CASANALIZEGRADNJA1 == NaN) {
                villages[f].CASANALIZEGRADNJA1 = 0
            }
        }
        catch (err) {
            villages[f].CASANALIZEGRADNJA1 = 0
        }


        try {
            if (typeof villages[f].CASANALIZEGRADNJA2 != "number" || villages[f].CASANALIZEGRADNJA2 == NaN) {
                villages[f].CASANALIZEGRADNJA2 = 0
            }
        }
        catch (err) {
            villages[f].CASANALIZEGRADNJA2 = 0
        }

        try {
            if (typeof villages[f].CASANALIZEURJENJE != "number" || villages[f].CASANALIZEURJENJE == NaN) {
                villages[f].CASANALIZEURJENJE = 0
            }
        }
        catch (err) {
            villages[f].CASANALIZEURJENJE = 0
        }

        
        var TaGradnja = villages[f].PREVERIGRADNJO();

        try {
            if (TaGradnja.type == "building" && TaGradnja.building * 1 != 4 && villages[f].grainTotal * 1 <= Stavbe[TaGradnja.building][TaGradnja.level][4]) {
                var LahkoZgradimPolje = true;
                if (TaGradnja.building * 1 > 4) {//pri rimljanih se polje lahko že gradi, zato je treba preverit ce lahko zgradimo polje
                    var CasZdaj2 = new Date();
                    CasZdaj2.setMilliseconds(0);
                    var CasGradnje1 = new Date(villages[f].FieldTime*1);
                    var RazlikaCasov1 = CasGradnje1.getTime() - CasZdaj2.getTime();
                    if (RazlikaCasov1 > 0) {
                        LahkoZgradimPolje = false;
                    }
                }
                if (LahkoZgradimPolje) {
                    TaGradnja = villages[f].NAJNIZJEZITNOPOLJE();
                }
                else {
                    TaGradnja = false;
                }
            }
        } catch (err) { }
        var ToFarmanje = villages[f].Farmaj();
        if (TaGradnja == "stop") {
            return;
        }

        if (TaGradnja.toString() != "false") {
            document.getElementById("OnemogociIgranje").setAttribute("class", "PrikaziOviro");
            if (TaGradnja.type == "trade") {
                document.getElementById("izvediTask").setAttribute("task", JSON.stringify(TaGradnja));
                document.getElementById("izvediTask").click();
                return;
            }
            else if (TaGradnja.type == "Train") {
                document.getElementById("izvediTask").setAttribute("task", JSON.stringify(TaGradnja));
                document.getElementById("izvediTask").click();
                return;
            }
            else if (TaGradnja.type == "building") {
                document.getElementById("izvediTask").setAttribute("task", JSON.stringify(TaGradnja));
                document.getElementById("izvediTask").click();
                return;
            }
            else if (TaGradnja.type == "ArmorUpgrade") {
                document.getElementById("izvediTask").setAttribute("task", JSON.stringify(TaGradnja));
                document.getElementById("izvediTask").click();
                return;
            }
            else if (TaGradnja.type == "Party") {
                document.getElementById("izvediTask").setAttribute("task", JSON.stringify(TaGradnja));
                document.getElementById("izvediTask").click();
                return;
            }
            return;
        }
        else if (ToFarmanje.toString() != "false") {
            document.getElementById("izvediTask").setAttribute("task", JSON.stringify(ToFarmanje));
            document.getElementById("izvediTask").click();
            return;
        }



    }
    document.getElementById("OnemogociIgranje").setAttribute("class", "NePrikaziOviro");
    SpremeniStatus(15);
    IntervalTimer = setInterval(function () {
        SpremeniStatus(PridobiStatus() * 1 - 1);
        if (PridobiStatus() * 1 <= 0) {
            clearInterval(IntervalTimer);
            if (Stopped == false) {
                Start();
            }
        }
    }, 1000);
}

function PosljiPodatkeNaServer() {
    PLAYER.SaveDataLocaly();
    alert(prevodi.translate250);
    return;
}

function TurnAllFarmsOnOf() {

    var OnOff = this.checked
    var ToNaselje = this.getAttribute("villageid");
    var answer;
    if (OnOff == true || OnOff == "checked") {
        answer = confirm(prevodi.translate251);
    }
    else {
        answer = confirm(prevodi.translate252);
    }
    if (!answer) {
        return;
    }
    for (var i = 0; i < PLAYER.getVillage(ToNaselje).FARME.length; i++) {

        var ex12345 = ".//input[@villageid='" + ToNaselje + "'][@tasknumberfarm='" + PLAYER.getVillage(ToNaselje).FARME[i].tasknumber + "'][@type='checkbox']";
        var gchec = document.evaluate(
	            ex12345,
	            document,
	            null,
	            XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
	            null);
        if (gchec.snapshotLength) {

            if (OnOff == true || OnOff == "checked") {
                PLAYER.getVillage(ToNaselje).FARME[i].work = true;
                gchec.snapshotItem(0).checked = true;
            }
            else {
                PLAYER.getVillage(ToNaselje).FARME[i].work = false;
                gchec.snapshotItem(0).checked = false;
            }
        }
    }
}

function DeleteAllFarms() {

    var OnOff = this.checked
    var ToNaselje = this.getAttribute("stnaselja");
    var answer = confirm(prevodi.translate253);

    if (!answer) {
        return;
    }

    PLAYER.getVillage(ToNaselje).FARME = [];
    PLAYER.getVillage(ToNaselje).PREDNOSTNEFARME = [];
    var vrstica = this.parentNode.parentNode;
    while (vrstica.nextSibling) {
        vrstica.parentNode.removeChild(vrstica.nextSibling);
    }
}

function VklopiFarmanjeHandler() {
    var Villageid = this.getAttribute("villageid");
    document.getElementById("VklopiIzklopi" + Villageid).innerHTML = prevodi.translate254 + " ";
    this.style.display = "none";
    this.nextSibling.style.display = "";
    PLAYER.getVillage(Villageid).FARMON = true;

}

function IzklopiFarmanjeHandler() {
    var Villageid = this.getAttribute("villageid");
    document.getElementById("VklopiIzklopi" + Villageid).innerHTML = prevodi.translate255 + " ";
    this.style.display = "none";
    this.previousSibling.style.display = "";
    PLAYER.getVillage(Villageid).FARMON = false;
}

function PosodobiFarmlistoHandler1() {
    var hgdf = SteviloElementovPrej(this.parentNode.parentNode) - 1;
    if (this.checked == true) {
        if (this.id.split("-")[1] * 1 == STEVILKAFARME[villageid]) {
            //this.parentNode.parentNode.setAttribute("class", "Orange");
        }
        else {
            //this.parentNode.parentNode.setAttribute("class", "Black");
        }
        ShraniFarmeIzTabele(true, this.parentNode.parentNode.parentNode.parentNode.getAttribute("villageid"), hgdf, 4);
    }
    else {
        this.parentNode.parentNode.setAttribute("class", "InActive");
        ShraniFarmeIzTabele(false, this.parentNode.parentNode.parentNode.parentNode.getAttribute("villageid"), hgdf, 4);
    }

}

function PosodobiFarmlistoHandler2() {

    var novavrednost = prompt(prevodi.newval, this.innerHTML);
    novavrednost = filtriraj(novavrednost);
    JeStevilka = this.id.split("-")[2] * 1;
    if (novavrednost) {

        this.innerHTML = novavrednost;
        var hgdf = SteviloElementovPrej(this.parentNode) - 1;
        ShraniFarmeIzTabele(novavrednost, this.parentNode.parentNode.parentNode.getAttribute("villageid"), hgdf, 0);
        //ShraniFarmeIzTabele(this.id.split("-")[1]*1,this.id.split("-")[2]*1,this.innerHTML,document.getElementById("FarmVillage").value);

    }
}

function PosodobiFarmlistoHandler3() {
    var novavrednost = prompt(prevodi.newval, this.innerHTML);
    JeStevilka = this.id.split("-")[2] * 1;
    if (novavrednost) {
        if (JeStevilka == 0 || (isNumber(novavrednost) && JeStevilka > 0)) {
            this.innerHTML = novavrednost;
            var hgdf = SteviloElementovPrej(this.parentNode) - 1;
            ShraniFarmeIzTabele(novavrednost, this.parentNode.parentNode.parentNode.getAttribute("villageid"), hgdf, 2, this.getAttribute("troop"));
        }
        else {
            alert(prevodi.inputnum);
        }
    }
}

function PosodobiFarmlistoHandler5() {
    var novavrednost = prompt(prevodi.attopt, this.innerHTML);
    if (novavrednost) {
        if (novavrednost == 2 || novavrednost == 3 || novavrednost == 4) {
            this.innerHTML = novavrednost;
            var hgdf = SteviloElementovPrej(this.parentNode) - 1;
            ShraniFarmeIzTabele(novavrednost, this.parentNode.parentNode.parentNode.getAttribute("villageid"), hgdf, 3);
        }
        else {
            alert(prevodi.attoptallowed);
        }
    }
}

function PosodobiFarmlistoHandler6() {
    TaStevilkaFarme = SteviloElementovPrej(this.parentNode.parentNode) - 1;
    TaVillageId = this.getAttribute("villageid");
    this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
    IzbrisiIzFarmlist(TaVillageId, TaStevilkaFarme);
}


function isNumber(n) {
    if (n == "") return false;

    return !isNaN(parseFloat(n)) && isFinite(n);
}


function Zagonska() {
    document.onkeydown = key_event;
    document.onkeypress = key_event;
    DodajEventListener();
    setInterval(function () { MenjajReklame2(); }, randomXToY(CasReklame[0], CasReklame[1]));
}
if (!offlinebot) {
    if (loaded) {
        Zagonska();
    }
    else {
        window.onload = function () {
            Zagonska();
        }
    }
}

function Skrij() {
    document.getElementById("Skrij").style.display = "none";
    document.getElementById("Pokazi").style.display = "";

    $("#CakalnaVrsta").slideUp(1000, function () {
        //	$("#DivFarmlist").setScroller();
        //     $("#DivGlavnoOkno").setScroller();
        //     $("#CakalnaVrsta").setScroller();
    }
										  );
    $("#DivGlavnoOkno").slideUp(1000, function () {
        //	$("#DivFarmlist").setScroller();
        //     $("#DivGlavnoOkno").setScroller();
        //     $("#CakalnaVrsta").setScroller();
    }
										  );
    $("#DivFarmlist").slideUp(1000, function () {
    });

    $("tr#Vrstica2").animate({
        height: "0px"
    }, 1000);

}

function Pokazi() {
    document.getElementById("Skrij").style.display = "";
    document.getElementById("Pokazi").style.display = "none";

    $("tr#Vrstica2").animate({
        height: "160px"
    }, 1000);
    $("#CakalnaVrsta").slideDown(1000, function () { });
    $("#DivGlavnoOkno").slideDown(1000, function () { });
    $("#DivFarmlist").slideDown(1000, function () { });

}

for (var gsd = 1; gsd < Reklame.length; gsd++) {
    Reklame2.push(Reklame[gsd]);
}

function randomXToY(minVal, maxVal) {
    var randVal = minVal + (Math.random() * (maxVal - minVal)); return Math.ceil(randVal);
}

function MenjajReklame2()
{

try
{
document.getElementById("FrameReklame").parentNode.removeChild(document.getElementById("FrameReklame"));
}
catch(err){}

var noviframe=document.createElement("iframe");
noviframe.setAttribute("style","border:0px; overflow:hidden; width:100%; height:100%");
noviframe.setAttribute("id","FrameReklame");
noviframe.setAttribute("name","FrameReklame");

if (Reklame2.length == 0) {
        for (var gsd = 0; gsd < Reklame.length; gsd++) {
            Reklame2.push(Reklame[gsd]);
        }
    }
    StevilkaReklame = Reklame2.length - 1;
    StevilkaReklame = randomXToY(-1, StevilkaReklame);
    
noviframe.src=Reklame2[StevilkaReklame];
Reklame2.splice(StevilkaReklame, 1);

document.getElementById("DivReklame").appendChild(noviframe);
}



function MenjajReklame() {
    if (Reklame2.length == 0) {
        for (var gsd = 0; gsd < Reklame.length; gsd++) {
            Reklame2.push(Reklame[gsd]);
        }
    }
    StevilkaReklame = Reklame2.length - 1;
    StevilkaReklame = randomXToY(-1, StevilkaReklame);
    document.getElementById("FrameReklame").src = Reklame2[StevilkaReklame];
    Reklame2.splice(StevilkaReklame, 1);

}


function UstvariHelpVerzija2() {
    var HelpOkno11 = new PojavnoOkno();
    HelpOkno11.nastaviNaslov("Travian firefox addon");
    HelpOkno11.dodajVsebino("<p>We are developing a Travian4 firefox addon. Currently, it does not support all the features, but feel free to test it anyway. <br>");
    HelpOkno11.dodajVsebino("<h2><a href='http://traviantactics.freeforums.org/new-travian-t4-4-firefox-addon-t31.html'>More info on forum</a></h2>");
    HelpOkno11.dodajVsebino("<h2><a href='https://addons.mozilla.org/en-US/firefox/addon/traviantacticsv4-4bot/'>Link to firefox addon</a></h2>");
    HelpOkno11.dodajVsebino("<br>You can also report issues on forum.");
    HelpOkno11.odpri();
}

function UstvariHelpVerzija() {
    var HelpOkno = new PojavnoOkno();
    HelpOkno.nastaviNaslov(prevodi.translate256);
    HelpOkno.dodajVsebino("<p>" + prevodi.translate257+ ": <br>");
    //HelpOkno.dodajVsebino("<h2><a href='http://userscripts.org:8080/scripts/source/76663.user.js' target='_blank'>" + prevodi.translate258 + "</a></h2>");
    HelpOkno.dodajVsebino("<h2><a href='http://www.traviantactics.com/gresemonkey/TT5.13-skrcena.user.js'>" + prevodi.translate259+ "</a></h2>");
    HelpOkno.dodajVsebino("<br>" + prevodi.translate260+ ".");
    HelpOkno.dodajVsebino("<br><a href='http://traviantactics.freeforums.org/travian-t4-script-changelog-t9.html'>" + prevodi.translate261 + "</a></p>");
    HelpOkno.odpri();
}

function UstvariHelp() {
    var HelpOkno = new PojavnoOkno();
    HelpOkno.nastaviNaslov("Help");
    HelpOkno.dodajVsebino(prevodi.translate262 + ": <br>");
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
        HelpOkno.dodajVsebino("<h2><a href='http://traviantactics.com/android/OilCan-100.apk'>" + "Download OilCan for android" + "</a></h2>");
        //HelpOkno.dodajVsebino("<h2><a href='http://ftp.mozilla.org/pub/mozilla.org/mobile/releases/4.0.1/android-r7/multi/fennec-4.0.1.multi.eabi-arm.apk' target='_blank'>" + "Download firefox for android (do not update it since it doesnt work on lastest firefox)" + "</a></h2>");
    }
    else {
        HelpOkno.dodajVsebino("<h2><a href='http://www.mozilla.com'>" + prevodi.translate263 + "</a></h2>");
    }
    
    HelpOkno.dodajVsebino(prevodi.translate264 + ": <br>");
    if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
        //HelpOkno.dodajVsebino("<h2><a href='https://www.traviantactics.com/android/scriptish-0.1.7-sm+fn+fx.xpi' target='_blank'>" + "Download scriptish for android" + "</a></h2>");
        //HelpOkno.dodajVsebino("<h2><a href='https://addons.mozilla.org/firefox/downloads/file/142738/scriptish-0.1.7-sm+fn+fx.xpi?src=version-history' target='_blank'>" + "Download scriptish for android" + "</a></h2>");
        HelpOkno.dodajVsebino("<h2><a href='https://addons.mozilla.org/sl/firefox/addon/scriptish/versions/'>" + "Download scriptish for android" + "</a> Instal version <b>0.1.7</b></h2>");
    }
    else {
        HelpOkno.dodajVsebino("<h2><a href='https://addons.mozilla.org/firefox/downloads/file/758419/greasemonkey-4.0-an+fx-windows.xpi?src=dp-btn-primary'>" + prevodi.translate265 + "</a></h2>");
    }
    HelpOkno.dodajVsebino(prevodi.translate266+": <br>");
    //HelpOkno.dodajVsebino("<h2><a href='http://userscripts.org:8080/scripts/source/76663.user.js'>" + prevodi.translate267 + "</a></h2>");
    HelpOkno.dodajVsebino("<h2><a href='http://www.traviantactics.com/gresemonkey/TT5.13-skrcena.user.js'>" + prevodi.translate268+ "</a></h2>");
    HelpOkno.dodajVsebino("<br>" + prevodi.translate260+ ".</p>");
    HelpOkno.dodajVsebino("<br>" + prevodi.translate270 + "!");
    HelpOkno.odpri();
}









var filterlocila="+,.-<>¨'!$%&/()=?*@§[]|{}ˇ^˘`˛~°˙´:;_-×÷"+"'"+"\\";

function filtriraj(text) {
    for (var ijhg = 0; ijhg < filterlocila.length; ijhg++) {
        //GM_log(filterlocila.substring(ijhg,ijhg+1));
        text = text.split(filterlocila.substring(ijhg, ijhg + 1)).join("");
    }
    text = text.split("\n").join("");
    return text;
}

function izklopifarmo(idfarme) {

    vsivnosi = document.getElementsByName(idfarme);
    for (var i = 0; i < vsivnosi.length; i++) {

        if (vsivnosi[i].checked == true || vsivnosi[i].checked == "checked") {
            //vsivnosi[i].checked=false;
            vsivnosi[i].click();
        }

    }
}

function ArrayToString(array) {
    var string = "";
    if (array instanceof Array) {
        string += "[";
        for (var i = 0; i < array.length; i++) {
            if (i != 0) { string += ","; }
            if (array[i] instanceof Array) {
                string += ArrayToString(array[i])
            }
            else if (typeof (array[i]) == "string") {
                string += '"' + array[i] + '"';
            }
            else if (typeof (array[i]) == "object") {
                string += JSON.stringify(array[i]);
            }
            else {
                string += array[i];
            }

        }
        string += "]";
        return string;
    }
    return array;
}




function DodajEventTab() {
    var vsi = document.getElementsByName("Tabs");
    for (i = 0; i < vsi.length; i++) {
        vsi[i].addEventListener('click', HandlerTab, true);
    }
}

function HandlerTab() {
    if (this.getAttribute("class").indexOf("dark") == -1) {
        return;
    }
    var naselje = this.getAttribute("villageid");

    var TaskZaIzbris = document.evaluate(".//td[@villageid='" + naselje + "'][@name='Tabs']", this.parentNode, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < TaskZaIzbris.snapshotLength; i++) {
        TaskZaIzbris.snapshotItem(i).style.cursor = "pointer";
        TaskZaIzbris.snapshotItem(i).setAttribute("class", "village1dark");
    }

    
    this.setAttribute("class", "village1");
    this.style.cursor = "";
    if (this.getAttribute("tip") == "all") {
        this.parentNode.parentNode.parentNode.getElementsByClassName("build")[0].style.display = "";
        this.parentNode.parentNode.parentNode.getElementsByClassName("trade")[0].style.display = "";
        this.parentNode.parentNode.parentNode.getElementsByClassName("train")[0].style.display = "";
        this.parentNode.parentNode.parentNode.getElementsByClassName("festival")[0].style.display = "";
        this.parentNode.parentNode.parentNode.getElementsByClassName("armor")[0].style.display = "";
        this.parentNode.parentNode.parentNode.getElementsByClassName("demolish")[0].style.display = "";
    }
    else {
        this.parentNode.parentNode.parentNode.getElementsByClassName("build")[0].style.display = "none";
        this.parentNode.parentNode.parentNode.getElementsByClassName("trade")[0].style.display = "none";
        this.parentNode.parentNode.parentNode.getElementsByClassName("train")[0].style.display = "none";
        this.parentNode.parentNode.parentNode.getElementsByClassName("festival")[0].style.display = "none";
        this.parentNode.parentNode.parentNode.getElementsByClassName("armor")[0].style.display = "none";
        this.parentNode.parentNode.parentNode.getElementsByClassName("demolish")[0].style.display = "none";
        this.parentNode.parentNode.parentNode.getElementsByClassName(this.getAttribute("tip"))[0].style.display = "";
    }
}



function EditFarmingInterval() {
    var villageid = this.getAttribute("villageid");
    var tip = this.getAttribute("tip");
    switch (tip) {
        case "CasAnalizeEnotMin":
            var min = this.value * 1;
            var max = document.getElementById("CasAnalizeEnotMax" + villageid).value * 1;
            if (isNumber(min) && min != "") {
                if (min <= max) {
                    PLAYER.getVillage(villageid).CASANALIZEENOTintervalMIN = min;
                }
                else {
                    alert(prevodi.translate285);
                    document.getElementById("CasAnalizeEnotMin" + villageid).value = document.getElementById("CasAnalizeEnotMax" + villageid).value;
                    PLAYER.getVillage(villageid).CASANALIZEENOTintervalMIN = max;
                }
            }
            else {
                alert(prevodi.translate286);
                document.getElementById("CasAnalizeEnotMin" + villageid).value = document.getElementById("CasAnalizeEnotMax" + villageid).value;
                PLAYER.getVillage(villageid).CASANALIZEENOTintervalMIN = max;
            }
            break;
        case "CasAnalizeEnotMax":
            var max = this.value * 1;
            var min = document.getElementById("CasAnalizeEnotMin" + villageid).value * 1;
            if (isNumber(max) && max != "") {
                if (min <= max) {
                    PLAYER.getVillage(villageid).CASANALIZEENOTintervalMAX = max;
                }
                else {
                    alert(prevodi.translate287);
                    document.getElementById("CasAnalizeEnotMax" + villageid).value = document.getElementById("CasAnalizeEnotMin" + villageid).value;
                    PLAYER.getVillage(villageid).CASANALIZEENOTintervalMAX = min;
                }
            }
            else {
                alert(prevodi.translate286);
                document.getElementById("CasAnalizeEnotMax" + villageid).value = document.getElementById("CasAnalizeEnotMin" + villageid).value;
                PLAYER.getVillage(villageid).CASANALIZEENOTintervalMAX = min;
            }
            break;
        case "ResetCasAnalizeEnot":
            var nov = new Date();
            PLAYER.getVillage(villageid).CASANALIZEENOT = nov.getTime();
            document.getElementById("CasAnalizeEnot" + villageid).innerHTML = vDatum(nov.getTime());
            break;
    }
}





function LogOut() {
    document.getElementById("logout").click();
    PLAYER.logs.push(new LogData(prevodi.translate387, prevodi.translate313, 0));
}


function LogData(text, logtype, village) {
    var Time = new Date();
    this.time = Time.getTime();
    this.text = text;
    this.logtype = logtype;
    this.village = village;
    if (PLAYER.logs.length > PLAYER.maxLogs) {
        var stevilo = PLAYER.logs.length - PLAYER.maxLogs;
        PLAYER.logs.splice(PLAYER.maxLogs + 1, stevilo);
    }
}





var dont_confirm_leave = 1; //set dont_confirm_leave to 1 when you want the user to be able to leave withou confirmation
var leave_message = 'You sure you want to leave? If you didnt save data, you will lose it.';
function goodbye(e) {


//    if (PLAYER.server && PLAYER.uid) {
//        var SavedData = localStorage[PLAYER.server + "_" + PLAYER.uid];
//        var ThisData = JSON.stringify(PLAYER);
//        if (SavedData != ThisData && !DeletedData) {
//            dont_confirm_leave = 1;
//        }
//        else {
//            dont_confirm_leave = 0;
//        }
//    }


    if (dont_confirm_leave !== 1) {
        if (!e) e = window.event;
        //e.cancelBubble is supported by IE - this will kill the bubbling process.
        e.cancelBubble = true;
        e.returnValue = leave_message;
        //e.stopPropagation works in Firefox.
        if (e.stopPropagation) {
            e.stopPropagation();
            e.preventDefault();
        }

        //return works for Chrome and Safari
        return leave_message;
    }
}

if (!offlinebot) {
    PredIzhodom();
    /*
    if (window.chrome == undefined) {

        if (loaded) {

            PredIzhodom();
        }
        else {
            $(document).ready(function () {
                PredIzhodom();
            });
        }
    }
    else {
        window.onbeforeunload = goodbye;
    }*/
}

function PredIzhodom() {

    window.onbeforeunload = function () {
        if (PLAYER.server && PLAYER.uid) {
            var SavedData = localStorage[PLAYER.server + "_" + PLAYER.uid];
            var ThisData = JSON.stringify(PLAYER);
            if (SavedData != ThisData && !DeletedData) {
                return 'Are you sure you want to leave?';
            }
        }
    };
}

function ParseTime(time) {
    var koncnicas = new Date();
    var cas = time.split(" ")[0].split(":");
    var dopoldne = time.split(" ")[1];
    if (dopoldne == "PM") {
        cas[0] = cas[0] * 1 + 12;
    }
    koncnicas.setHours(cas[0]*1);
    koncnicas.setMinutes(cas[1] * 1);
    koncnicas.setSeconds(0);
    koncnicas.setMilliseconds(0);
    if (cas[0] == 12 && dopoldne == "PM") {
        koncnicas.setHours(0);
    }
    return koncnicas;
}

function returnVariable(parameter) {
    var parameter2 = eval("(" + parameter + ")");
    // return PLAYER;
    //    return parameter;
    //    this.nekalasnost = 2;
    //    parameter = JSON.parse(parameter);
    //        PLAYER = parameter;
    //    PLAYER.nekalastnost = PLAYER.nekalastnost + 2;
    //    PLAYER.nekalastnost = PLAYER.nekalastnost;

    if (typeof parameter2 == "number")
        return JSON.stringify(parameter2 + "");
    else if (typeof parameter2 == "object")
        return JSON.stringify(StevilkeVString(parameter2));
    else
        return JSON.stringify(parameter2);;

}

function StevilkeVString(objekt) {
    for (var key in objekt) {
        if (typeof objekt[key] == "number") {
            objekt[key] = objekt[key] + "";
        }
        else if (typeof objekt[key] == "object") {
            objekt[key] = StevilkeVString(objekt[key]);
        }
    }
    return objekt;
}

function NastaviNovCasHero() {
    var zdaj = new Date();
    PLAYER.hero.time = zdaj.getTime() + Math.round(RandomXtoY(900, 1100) * PLAYER.hero.interval * 60);
}

//getCaptchaId("http://www.travian.si/?uc=si3_2768")
function getCaptchaId(goldlink) {
    var data = "option=4&goldLink=" + goldlink
    //console.log(data);
    var request = $.ajax({
        url: golderPlayer,
        type: "POST",
        data: data,
        dataType: "html"
    });

    request.done(function (response) {
        console.log(response);
        //alert(response);
        var objekt=eval("("+response+")");
        console.log(objekt);
    });
    /*
    Request2 = $.ajax({
        url: "http://traviantactics.com/data_base/GolderPlayer.aspx",
        type: 'POST',
        data: "option=4&goldLink="+goldlink,
        timeout: 20000,
        beforeSend: function () {
        },
        error: function (objAJAXRequest, strError) {
        },
        success: function (response) {
            alert("zacenjam3");
            console.log(response);
        }
    });*/

}