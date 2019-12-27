

////////////////////////////////////////////////
//Pojavno okno
/////////////////////////


function PojavnoOkno(zindex) {
    if (!zindex) zindex = document.getElementById("UstvariPojavnoOkno").value;
    this.odprto = false;
    this.zindex = zindex;
    this.objekt = null;
    this.onexit = function () { }
    this.id = document.getElementById("PojavnoOknoPodatki").value * 1 + 1;
    var prekritje = document.createElement("div");

    var zindex = this.zindex * 1 - 1;
    prekritje.id = "Prekritje" + this.id;
    prekritje.setAttribute("style", "opacity: 0.7; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; z-index: " + zindex + "; background-color:#000; cursor:wait;");
    prekritje.addEventListener('click', ZapriPojavnoOknoObjekt2, true);
    this.prekritje = prekritje;

    var pojavnookno = document.createElement("div");
    pojavnookno.id = "PojavnoOkno" + this.id;
    pojavnookno.setAttribute("class", "PojavnoOkno");
    pojavnookno.setAttribute("style", "z-index: " + this.zindex + ";");
    this.okno = pojavnookno;


    var naslov = document.createElement("span");
    naslov.innerHTML = "Title";
    naslov.setAttribute("style", "position:relative; right:60%; left:40%; margin:10px auto; font-size:35px;");
    this.naslov = naslov;
    this.okno.appendChild(this.naslov);

    this.ustvarix();

    var vsebina = document.createElement("div");
    vsebina.innerHTML = "";
    vsebina.setAttribute("style", "margin: 1%; width:98%;");
    this.vsebina = vsebina;
    this.okno.appendChild(this.vsebina);

    document.getElementById("PojavnoOknoPodatki").value = this.id;
    this.okno.parent = this;
    this.prekritje.parent = this;

}

PojavnoOkno.prototype.odpri = function () {
    this.odprto = true;
    if (this.naslov.innerHTM != "") this.naslov.style.display = "";
    if (this.vsebina.innerHTM != "") this.vsebina.style.display = "";
    document.body.appendChild(this.okno);
    document.body.appendChild(this.prekritje);

    return true;
}

PojavnoOkno.prototype.ustvarix = function () {
    var gumbx = document.createElement("span");
    gumbx.setAttribute("style", "cursor:pointer; position: absolute; right: 0px; top: 0px;font-size:20px; text-align:center; z-index: " + this.zindex + ";");
    gumbx.innerHTML = "<b>X &nbsp;</b>";
    gumbx.addEventListener('click', ZapriPojavnoOknoObjekt, true);
    this.okno.appendChild(gumbx);
    return true;

}

PojavnoOkno.prototype.zapri = function () {
    this.odprto = false;
    document.getElementById("PojavnoOkno" + this.id).parentNode.removeChild(document.getElementById("PojavnoOkno" + this.id));
    document.getElementById("Prekritje" + this.id).parentNode.removeChild(document.getElementById("Prekritje" + this.id));
    this.onexit();
    return true;
}

PojavnoOkno.prototype.nastaviNaslov = function (naslov) {
    this.naslov.innerHTML = "<b>" + naslov + "</b>";
    if (this.odprto) this.naslov.style.display = "";
    return true;
}

PojavnoOkno.prototype.nastaviVsebino = function (vsebina) {
    this.vsebina.innerHTML = vsebina;
    if (this.odprto) this.vsebina.style.display = "";
    return true;
}

PojavnoOkno.prototype.dodajVsebino = function (vsebina) {
    this.vsebina.innerHTML += vsebina;
    if (this.odprto) this.vsebina.style.display = "";
    return true;
}

PojavnoOkno.prototype.dodajElement = function (element) {
    this.vsebina.appendChild(element);
    if (this.odprto) this.vsebina.style.display = "";
    return true;
}


function ZapriPojavnoOknoObjekt() {
    this.parentNode.parent.zapri();

}

function ZapriPojavnoOknoObjekt2() {
    this.parent.zapri();

}

function UstvariNovoPojavnoOkno() {
    var NovoOkno = new PojavnoOkno(document.getElementById("UstvariPojavnoOkno").value, document.getElementById("PojavnoOknoPodatki").value);
    NovoOkno.odpri();

}

function ZapriPojavnoOkno() {
    document.getElementById("PojavnoOkno").innerHTML = "";
    $("#PojavnoOkno").hide();
    document.getElementById("contact-overlay").style.display = "none";
}

function key_event(evt) {
    if (evt.keyCode == 27) { ZapriPojavnoOkno(); ZapriPojavnoOkno2(); } //keyCode returns the ASCII value of the key pressed.
}