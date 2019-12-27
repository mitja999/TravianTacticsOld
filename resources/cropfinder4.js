
////////////
//cropfinder
//////////

var maxstrportov = 0;
function DodajCropFinderEvente() {

    document.getElementById("GetFarmsReports").addEventListener('click', CropFinderHandler, true);
    document.getElementById("CropFinderFarme").addEventListener('click', CropFinderHandler, true);
    document.getElementById("CropFinderc9c15").addEventListener('click', CropFinderHandler, true);
    document.getElementById("CropFinderOases").addEventListener('click', CropFinderHandler, true);
    document.getElementById("CropFinderEmptyOases").addEventListener('click', CropFinderHandler, true);
    document.getElementById("FindNatars").addEventListener('click', CropFinderHandler, true);
    document.getElementById("AdvancedFarm").addEventListener('click', CropFinderHandler, true);
    document.getElementById("prikaziTipReports").addEventListener('mouseout', hideddrivetip, true);
    document.getElementById("prikaziTipReportsanaliziraj").addEventListener('mouseout', hideddrivetip, true);
    document.getElementById("prikaziTipReports").addEventListener('mouseover', function () { ddrivetip(document.getElementById("prikaziTipReports").getAttribute("tip"), 'green') }, true);
    document.getElementById("prikaziTipReportsanaliziraj").addEventListener('mouseover', function () { ddrivetip(document.getElementById("prikaziTipReportsanaliziraj").getAttribute("tip"), 'green') }, true);
    document.getElementById("prikaziTipAdvanedFarm").addEventListener('mouseout', hideddrivetip, true);
    document.getElementById("prikaziTipAdvanedFarm").addEventListener('mouseover', function () { ddrivetip(document.getElementById("prikaziTipAdvanedFarm").getAttribute("tip"), 'green') }, true);
}

function CropFinderHandler() {
    var id = this.getAttribute("id");
    switch (id) {
        case "CropFinderFarme":
            if (this.checked) {
                document.getElementById("spanFindFarms").style.display = "";
            }
            else {
                document.getElementById("spanFindFarms").style.display = "none";
            }
            break;
        case "CropFinderc9c15":
            if (this.checked) {
                document.getElementById("spanc9c15").style.display = "";
            }
            else {
                document.getElementById("spanc9c15").style.display = "none";
            }
            document.getElementById("CropFinderc9").checked = this.checked;
            document.getElementById("CropFinderc15").checked = this.checked;
            break;
        case "CropFinderOases":
            if (this.checked) {
                document.getElementById("spanoases").style.display = "";
            }
            else {
                document.getElementById("spanoases").style.display = "none";
            }
            break;
        case "GetFarmsReports":
            if (this.checked) {
                document.getElementById("analizirajreportecrop").style.display = "";
            }
            else {
                document.getElementById("analizirajreportecrop").style.display = "none";
            }
            break;
        case "AdvancedFarm":
            if (this.checked) {
                document.getElementById("spanAdvancedFarmFinder").style.display = "";
            }
            else {
                document.getElementById("spanAdvancedFarmFinder").style.display = "none";
            }
            break;
        case "CropFinderEmptyOases":
            if (this.checked) {
                document.getElementById("spanemptyoases").style.display = "";
            }
            else {
                document.getElementById("spanemptyoases").style.display = "none";
            }
            document.getElementById("CropFinderEmptyOasesWood").checked = this.checked;
            document.getElementById("CropFinderEmptyOasesClay").checked = this.checked;
            document.getElementById("CropFinderEmptyOasesIron").checked = this.checked;
            document.getElementById("CropFinderEmptyOasesCrop").checked = this.checked;
            break;
        case "FindNatars":
            if (this.checked) {
                document.getElementById("spanonlynatars").style.display = "";
            }
            else {
                document.getElementById("spanonlynatars").style.display = "none";
            }
            break;
    }
}

function CropDodajSelect() {
    var span = document.getElementById("cropcoordinates");
    span.innerHTML = prevodi.translate386 + ":";

    var select = document.createElement("select");
    select.addEventListener('change', CropNastaviNaselje, true);
    span.appendChild(select);

    var option = document.createElement("option");
    option.innerHTML = "custom";
    option.value = "custom";
    select.appendChild(option);

    for (var i = 0; i < PLAYER.villages.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = PLAYER.villages[i].name + " (" + PLAYER.villages[i].x + "|" + PLAYER.villages[i].y + ")";
        option.value = PLAYER.villages[i].x + "|" + PLAYER.villages[i].y;
        select.appendChild(option);
    }

    
}

function nastaviTooltipFarm(text, element) {
    var elementid = element.getAttribute("id");
    if (!document.getElementById("mojtooltipfarm" + elementid)) {
        var didd = document.createElement("div");
        didd.setAttribute("class", "tooltip");
        didd.setAttribute("id", "mojtooltipfarm" + elementid);
        document.getElementById("mojtooltipfarm").appendChild(didd);
    }
    document.getElementById("mojtooltipfarm" + elementid).innerHTML = text;
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

function CropIskanjeFarm() {
    var tasknumber = this.getAttribute("value");
    for (var i = 0; i < PLAYER.farmSearch.searchHistory.length; i++) {
        if (PLAYER.farmSearch.searchHistory[i].tasknumber * 1 == tasknumber) {
            nastaviCropIskanjeFarm(PLAYER.farmSearch.searchHistory[i])
            break;
        }
    }
}

function nastaviCropIskanjeFarm(options) {
    document.getElementById("CropFinderX").value = options.x
    document.getElementById("CropFinderY").value = options.y
    document.getElementById("CropFinderMinDistance").value = options.mindistance;
    document.getElementById("CropFinderDistance").value = options.maxdistance;
    document.getElementById("MaxVillagePop").value = options.maxvillagepop;
    document.getElementById("MaxPlayerPop").value = options.maxplayerpop;
    document.getElementById("MaxPlayerVillages").value = options.maxnumberofvillages;
    document.getElementById("CropFinderFarme").checked = options.findfarms;
    document.getElementById("GetFarmsReports").checked = options.getreports;
    document.getElementById("AnalyseFarmsReports").checked = options.reports;
    document.getElementById("AdvancedFarm").checked = options.advancedfarmfinder;
    document.getElementById("CropFinderc9c15").checked = options.c9c15;
    document.getElementById("CropFinderc9").checked = options.c9;
    document.getElementById("CropFinderc15").checked = options.c15;
    document.getElementById("CropFinderFarme").checked = options.farme;
    document.getElementById("CropFinderOases").checked = options.oaze;
    document.getElementById("CropFinderAllOases").checked = options.vseoaze;
    document.getElementById("CropFinderElephants").checked = options.sloni;
    document.getElementById("CropFinderKrokodili").checked = options.krokodili;
    document.getElementById("CropFinderEmptyOases").checked = options.prazneoaze;
    document.getElementById("CropFinderFreeOases").checked = options.prosteoaze;
    document.getElementById("CropFinderEmptyOasesWood").checked = options.oazeles;
    document.getElementById("CropFinderEmptyOasesClay").checked = options.oazeglina;
    document.getElementById("CropFinderEmptyOasesIron").checked = options.oazezelezo;
    document.getElementById("CropFinderEmptyOasesCrop").checked = options.oazezito;
    document.getElementById("FindNatars").checked = options.natars;
    document.getElementById("OnlyNatars").checked = options.onlynatars;

    if (options.farme) {
        document.getElementById("spanFindFarms").style.display = "";
    }
    else {
        document.getElementById("spanFindFarms").style.display = "none";
    }

    if (options.getreports) {
        document.getElementById("analizirajreportecrop").style.display = "";
    }
    else {
        document.getElementById("analizirajreportecrop").style.display = "none";
    }

    if (options.advancedfarmfinder) {
        document.getElementById("spanAdvancedFarmFinder").style.display = "";
    }
    else {
        document.getElementById("spanAdvancedFarmFinder").style.display = "none";
    }

    if (options.natars) {
        document.getElementById("spanonlynatars").style.display = "";
    }
    else {
        document.getElementById("spanonlynatars").style.display = "none";
    } 

    if (options.c9c15) {
        document.getElementById("spanc9c15").style.display = "";
    }
    else {
        document.getElementById("spanc9c15").style.display = "none";
    }

    if (options.oaze) {
        document.getElementById("spanoases").style.display = "";
    }
    else {
        document.getElementById("spanoases").style.display = "none";
    }

    if (options.prazneoaze) {
        document.getElementById("spanemptyoases").style.display = "";
    }
    else {
        document.getElementById("spanemptyoases").style.display = "none";
    }
} 

function CropDodajHistorySelect() {
    if (PLAYER.farmSearch.searchHistory.length > 0) {
        var span = document.getElementById("LastFarmSearch");
        span.innerHTML = "";
        //span.innerHTML = prevodi.translate386 + ":";

        var select = document.createElement("select");

        span.appendChild(select);

        for (var i = 0; i < PLAYER.farmSearch.searchHistory.length; i++) {
            var option = document.createElement("option");
            var teksttitle="<span style='color:black'>";
            for(index in PLAYER.farmSearch.searchHistory[i]) {
                var attr = PLAYER.farmSearch.searchHistory[i][index]; 
                teksttitle+=index+":"+attr+"<br>";
             }
            teksttitle += "</span>";
            option.innerHTML = vDatum(PLAYER.farmSearch.searchHistory[i].time);
            option.value = PLAYER.farmSearch.searchHistory[i].tasknumber;
            option.setAttribute("id", "report" + reportid);
            option.addEventListener('click', CropIskanjeFarm, true);
            nastaviTooltipFarm(teksttitle, option);

            option.setAttribute("title", teksttitle);
            select.appendChild(option);
            try {
                $(option).tooltip({
                    tip: '#mojtooltipfarm' + "report" + reportid,
                    //effect: 'slide',
                    position: "center right",
                    predelay: 100,
                    offset: [0, 20]
                    //onHide: unsafeWindow.uniciTooltip//,
                    //onBeforeShow: unsafeWindow.ustvariReportTooltp
                }).dynamic({
                    //bottom: { direction: 'center' }
                    //top: { position: "center right" }
                });
            }
            catch (rtt) {
            }
            reportid++
        }
    }
}

function shraniCropFinder(options) {
    var datum = new Date();
    options.time = datum.getTime();
    options.tasknumber = PLAYER.TASKNUMBER;
    PLAYER.TASKNUMBER++;
    PLAYER.farmSearch.searchHistory.splice(0, 0, options);
    while (PLAYER.farmSearch.searchHistory.length > PLAYER.farmSearch.maxSearchSaved) {
        PLAYER.farmSearch.searchHistory.splice(PLAYER.farmSearch.searchHistory.length-1, 1);
    }

}

function CropNastaviNaselje() {

    if (this.value != "custom") {
        var x = this.value.split("|")[0];
        var y = this.value.split("|")[1];
        document.getElementById("CropFinderX").value = x;
        document.getElementById("CropFinderY").value = y;
    }
}

function UstvariCropFinder() {
    if (document.getElementById("CropFinder").getAttribute("firstTime") == "true") {
        document.getElementById("CropFinder").setAttribute("firstTime", "false")
        var checkboxi = document.getElementById("CropFinder").getElementsByTagName("input");
        for (var i = 0; i < checkboxi.length; i++) {
            if (checkboxi[i].getAttribute("type").toLowerCase() == "checkbox") {
                checkboxi[i].checked = false;
            }
            else if (checkboxi[i].getAttribute("type").toLowerCase() == "input") {
                switch (checkboxi[i].getAttribute("id")) {
                    case "CropFinderX":
                        checkboxi[i].value = 0;
                        break;
                    case "CropFinderY":
                        checkboxi[i].value = 0;
                        break;
                    case "CropFinderMinDistance":
                        checkboxi[i].value = 0;
                        break;
                    case "CropFinderDistance":
                        checkboxi[i].value = 10;
                        break;
                    case "MaxVillagePop":
                        checkboxi[i].value = 400;
                        break;
                    case "MaxPlayerPop":
                        checkboxi[i].value = 400;
                        break;
                    case "MaxPlayerVillages":
                        checkboxi[i].value = 400;
                        break;
                }
            }
        }
    }
    document.getElementById("CloseButton2").addEventListener('click', ZapriPojavnoOkno2, true);
    document.getElementById("CloseButton3").addEventListener('click', ZapriPojavnoOkno2, true);
    document.getElementById("contact-overlay").addEventListener('click', ZapriPojavnoOkno2, true);


    document.getElementById("contact-overlay").style.display = "";
    $("#CropFinder").slideDown(200);
    CropDodajSelect();
    CropDodajHistorySelect();
}

function ZapriPojavnoOkno2() {
    $("#CropFinder").hide();
    document.getElementById("contact-overlay").style.display = "none";
}

function MakeCropTableSortableEvent() {
    $("#CropFinderResults").tablesorter({
        sortList: [[4, 0]]
    });
}


function FilterCropTableHideEvent() {
    $("#FilterCropResultsOptions").slideUp(500, function () { });
}

function FilterCropTableGoEvent() {
    var filter = {
        enablepop: document.getElementById("PopulationCheckbox").checked,
        minvillagepop: document.getElementById("MinVillagePopulation").value,
        maxvillagepop: document.getElementById("MaxVillagePopulation").value,
        maxplayerpop: document.getElementById("MaxPlayerPopulation").value,
        minplayerpop: document.getElementById("MinPlayerPopulation").value,
        enablereports: document.getElementById("ReportsCheckbox").checked,
        lastreport: document.getElementById("farmshouldhavelstreport").checked,
        enablereporttype: document.getElementById("filterbylastreport").checked,
        attackgreen:document.getElementById("attackgreen").value,
        attackyellow:document.getElementById("attackyellow").value,
        attackred:document.getElementById("attackred").value,
        scoutgreen:document.getElementById("scoutgreen").value,
        scoutyellow:document.getElementById("scoutyellow").value,
        scoutred:document.getElementById("scoutred").value,
        notonvillage: document.getElementById("NotOnVillageCheckbox").checked,
        villages:[],
        nottribe:document.getElementById("TribeCheckbox").checked,
        Romans:document.getElementById("filtertribe1").checked,
        Teutons:document.getElementById("filtertribe2").checked,
        Gauls:document.getElementById("filtertribe3").checked,
        Natars:document.getElementById("filtertribe5").checked,
        allyenabled: document.getElementById("NotInAllayCheckBox").checked,
        ally: document.getElementById("NotInAllay").value.split(";")
    }
    
    var datum = new Date();
    filter.time = datum.getTime();
    filter.tasknumber = PLAYER.TASKNUMBER;
    PLAYER.TASKNUMBER++;
    PLAYER.farmSearch.filterHistory.splice(0, 0, filter);
    while (PLAYER.farmSearch.filterHistory.length > PLAYER.farmSearch.maxFilterSaved) {
        PLAYER.farmSearch.filterHistory.splice(PLAYER.farmSearch.filterHistory.length - 1, 1);
    }

    NastaviFilterHistory();
    /*var MinVillagePop = 0;
    if (document.getElementById("MinVillagePopulationCheckbox").checked == true) {
        MinVillagePop = document.getElementById("MinVillagePopulation").value;
    }
    var MaxVillagePop = 100000000;
    if (document.getElementById("MaxVillagePopulationCheckbox").checked == true) {
        MaxVillagePop = document.getElementById("MaxVillagePopulation").value;
    }

    var MinPlayerPop = 0;
    if (document.getElementById("MinPlayerPopulationCheckbox").checked == true) {
        MinPlayerPop = document.getElementById("MinPlayerPopulation").value;
    }

    var MaxPlayerPop = 100000000;
    if (document.getElementById("MaxPlayerPopulationCheckbox").checked == true) {
        MaxPlayerPop = document.getElementById("MaxPlayerPopulation").value;
    }

    var PositiveIncome = false;
    if (document.getElementById("PositiveIncomeCheckbox").checked == true) {
        PositiveIncome = true;
    }

    var FarmEff = false;
    if (document.getElementById("FarmEffCheckbox").checked == true) {
        FarmEff = document.getElementById("FarmEff").value;
    }

    var LastRep = false;
    if (document.getElementById("LastRepCheckbox").checked == true) {
        LastRep = true;
    }
    var FarmLoss = false;
    if (document.getElementById("FarmLossCheckbox").checked == true) {
        FarmLoss = document.getElementById("FarmLoss").value;
    }

*/
    var NotOnFarmlist = [];
    var divznaselji = document.getElementById("dodatnemoznostinaselja").getElementsByTagName("input");
    for (var i = 0; i < divznaselji.length; i++) {
        try {
            if (divznaselji[i].checked) {
                filter.villages.push(divznaselji[i].getAttribute("villageid"));
            }
        }
        catch (err) {
            break;
        }
    }
    /*
    var FilterTribe = [];
    if (document.getElementById("TribeCheckbox").checked == true) {
        if (document.getElementById("ui-multiselect-TribeCrop-option-0").checked) {
            FilterTribe.push(1);
        }
        if (document.getElementById("ui-multiselect-TribeCrop-option-1").checked) {
            FilterTribe.push(2);
        }
        if (document.getElementById("ui-multiselect-TribeCrop-option-2").checked) {
            FilterTribe.push(3);
        }
        if (document.getElementById("ui-multiselect-TribeCrop-option-3").checked) {
            FilterTribe.push(5);
        }
    }
    */

 /*   var AliansePakti = [];
    if (document.getElementById("NotInAllayCheckBox").checked == true) {
        AliansePakti = document.getElementById("NotInAllay").value.split(";");
    }
*/


    var Vnosi = document.getElementsByName("VrsticaCropFinder");
    for (var kk = 0; kk < Vnosi.length; kk++) {
        var Koordinate = Vnosi[kk].getElementsByClassName("koordinate")[0].innerHTML.split("|");
        var IdFarme = PLAYER.getCoordfromXY(Koordinate[0], Koordinate[1]);
        var AliansaFarme = Vnosi[kk].getElementsByClassName("PlayerAlly")[0].innerHTML;
        if (AliansaFarme.substring(0, 1) == " ") { AliansaFarme = AliansaFarme.substring(1, AliansaFarme.length) }
        AliansaFarme = AliansaFarme.split("&amp;").join("&")
        var tipFarme = Vnosi[kk].getElementsByClassName("tipFarme")[0].innerHTML;
        var VilalgePop = Vnosi[kk].getElementsByClassName("VillagePop")[0].innerHTML;
        var PlayerPop = Vnosi[kk].getElementsByClassName("PlayerPop")[0].innerHTML;
        if (PlayerPop == "?") {
            PlayerPop = filter.minplayerpop;
        }
        var Pleme = Vnosi[kk].getElementsByClassName("PlayerTribe")[0].getAttribute("tribe");
        var prikazi = true;
        var Oases = Vnosi[kk].getElementsByClassName("oaza")[0].innerHTML;
        var reportcelica = Vnosi[kk].getElementsByClassName("cropreport")[0];
        var attackgreen = false;
        var attackyellow = false;
        var attackred = false;
        var scoutgreen = false;
        var scoutyellow = false;
        var scoutred = false;
        var slike = reportcelica.getElementsByTagName("canvas");
        for (var uu = 0; uu < slike.length; uu++) {
            switch (slike[uu].getAttribute("report") * 1) {
                case 1:
                    attackgreen = true;
                    break;
                case 2:
                    attackyellow = true;
                    break;
                case 3:
                    attackred = true;
                    break;
                case 15:
                    scoutgreen = true;
                    break;
                case 16:
                    scoutyellow = true;
                    break;
                case 17:
                    scoutred = true;
                    break;
            }
        }
        var imareporte=false;
        if (slike.length > 0) {
            imareporte = true;
        }

        if (tipFarme == "farm") {
//            if (Oases == "?") {
//                if (LastRep == true) {
//                    prikazi = false;
//                }
//            }
//            else {
//                var Income = Oases.split("|")[0];
//                var Loss = Oases.split("|")[1];
//                var Eff = Oases.split("|")[2];
//                var dif = Oases.split("|")[3];
//                if (PositiveIncome != false) {
//                    if (dif <= 0) {
//                        prikazi = false;
//                    }
//                }
//                if (FarmEff != false) {
//                    if (Eff < FarmEff) {
//                        prikazi = false;
//                    }
//                }
//                if (FarmLoss != false) {
//                    if (Loss > FarmLoss) {
//                        prikazi = false;
//                    }
//                }
//            }
            if (filter.enablepop) {
                if (!(VilalgePop * 1 >= filter.minvillagepop * 1 && VilalgePop * 1 <= filter.maxvillagepop * 1 && PlayerPop * 1 >= filter.minplayerpop * 1 && PlayerPop * 1 <= filter.maxplayerpop * 1)) {
                    prikazi = false;
                }
            }
            if (filter.allyenabled) {
                for (var i = 0; i < filter.ally.length; i++) {
                    //console.log(AliansaFarme+" == "+filter.ally[i]);
                    if (AliansaFarme == filter.ally[i]) {
                        prikazi = false;
                        //console.log("break");
                        break;
                    }
                }
            }
            if (filter.nottribe) {
                if (Pleme * 1 == 1 && filter.Romans) {
                    prikazi = false;
                }
                if (Pleme * 1 == 2 && filter.Teutons) {
                    prikazi = false;
                }
                if (Pleme * 1 == 3 && filter.Gauls) {
                    prikazi = false;
                }
                if (Pleme * 1 == 5 && filter.Natars) {
                    prikazi = false;
                }
                /*
                for (var i = 0; i < FilterTribe.length; i++) {
                if (Pleme * 1 == FilterTribe[i] * 1) {
                prikazi = false;
                break;
                }
                }*/
            }
        }
        if (!imareporte && filter.lastreport) {
            prikazi = false;
        }

        if (filter.enablereporttype) {
            if (filter.attackgreen == "no" && attackgreen) {
                prikazi = false;
            }
            else if (filter.attackgreen == "yes" && !attackgreen) {
                prikazi = false;
            }

            if (filter.attackyellow == "no" && attackyellow) {
                prikazi = false;
            }
            else if (filter.attackyellow == "yes" && !attackyellow) {
                prikazi = false;
            }

            if (filter.attackred == "no" && attackred) {
                prikazi = false;
            }
            else if (filter.attackred == "yes" && !attackred) {
                prikazi = false;
            }

            if (filter.scoutgreen == "no" && scoutgreen) {
                prikazi = false;
            }
            else if (filter.scoutgreen == "yes" && !scoutgreen) {
                prikazi = false;
            }

            if (filter.scoutyellow == "no" && scoutyellow) {
                prikazi = false;
            }
            else if (filter.scoutyellow == "yes" && !scoutyellow) {
                prikazi = false;
            }

            if (filter.scoutred == "no" && scoutred) {
                prikazi = false;
            }
            else if (filter.scoutred == "yes" && !scoutred) {
                prikazi = false;
            }

        /*
   
        var  = false;
        var  = false;
        var scoutgreen = false;
        var scoutred = false;
        var scoutyellow = false;
        : document.getElementById("filterbylastreport").checked,
        :document.getElementById("attackgreen").value,
        :document.getElementById("attackyellow").value,
        attackred:document.getElementById("attackred").value,
        :document.getElementById("scoutgreen").value,
        :document.getElementById("scoutyellow").value,
        :document.getElementById("scoutred").value,*/
        }

        if (filter.notonvillage) {
            ninafarmlisti: for (var i = 0; i < filter.villages.length; i++) {
                var Farmlist = PLAYER.getVillage(filter.villages[i]).FARME;
                for (var gg = 0; gg < Farmlist.length; gg++)//
                {
                    var IdTeFarme = Farmlist[gg].link;
                    if (IdTeFarme == IdFarme) {
                        prikazi = false;
                        break ninafarmlisti;
                    }
                }
            }
        }

        if (prikazi == false) {
            Vnosi[kk].childNodes[0].childNodes[0].checked = false;
            Vnosi[kk].style.display = "none";
        }
        else {
            Vnosi[kk].style.display = "";
        }
    }
}


function FilterCropTableEvent() {
    try {
        document.getElementById("FilterCropTableHide").removeEventListener('click', FilterCropTableHideEvent, true);
        document.getElementById("FilterCropTableGo").removeEventListener('click', FilterCropTableGoEvent, true);
    }
    catch (err)
        { }

    for (var i = 0; i < 500; i++) {
        try {
            var element = document.getElementById("ui-multiselect-FilterAlly-option-" + i);
            element.removeEventListener('change', DodajVAllyFilter, true);
        }
        catch (err) {
            break;
        }
    }

    try {
        var element = document.getElementById("ui-multiselect-FilterAlly-option-0");
        element.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("a")[0].removeEventListener('click', DodajVseAlianse, true);
        element.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("a")[1].removeEventListener('click', OdstraniVseAlianse, true);
    }
    catch (err) {
    }


    var vsebinadiva = "<span style='margin: 0px auto; display: inline-block; text-align: left; min-width: 220px;'>"
    vsebinadiva += "<div id='filterhistory'><span>Filter history</span>:<span id='filterhistoryspan'></span></div>";
    vsebinadiva += "<div><input type='checkbox' id='PopulationCheckbox' tarca='showpopfilter'>Filter by population</div><div id='showpopfilter' style='background-color: yellow; display: none;'>";
    vsebinadiva += "<div>" + prevodi.translate103 + "<input tpye='text' size='2' id='MinVillagePopulation' value='0'></div>";
    vsebinadiva += "<div>" + prevodi.translate104 + "<input tpye='text' size='2' id='MaxVillagePopulation' value='400'></div>";
    vsebinadiva += "<div>" + prevodi.translate105 + "<input tpye='text' size='2' id='MinPlayerPopulation' value='0'></div>";
    vsebinadiva += "<div>" + prevodi.translate106 + "<input tpye='text' size='2' id='MaxPlayerPopulation' value='800'></div></div>";

    vsebinadiva += "<input type='checkbox' id='ReportsCheckbox' tarca='showreportfilter'>Filter by last reports <div id='showreportfilter' style='background-color: yellow; display: none; padding-bottom:5px;'>";
    vsebinadiva += "<div><input type='checkbox' id='farmshouldhavelstreport'>" + "Farms should have last report." + "</div>";
    vsebinadiva += "<div><input type='checkbox' id='filterbylastreport' tarca='reportetypesdiv'>" + "Filter by report types"; // + "<select><option>" + "Farms should have only positive attack(green) last reports." + "</option><option>" + "Farms should have positive green attack or scouting reports" + "</option><option>" + "Farms should have positive green or yellow attack or scouting reports" + "</option><option>" + "Farms should have yellow attack or scouting reports" + "</option><option>" + "Farms should have red attack or scouting reports" + "</option><option>" + "Farms should have yellow or red attack or scouting reports" + "</option><option>" + "Farms should have green scouting reports" + "</option><option>" + "Farms should have green scouting reports" + "</option><option>" + "Farms should have green scouting reports" + "</option><select>" + "</div></div>";
    vsebinadiva += "<div id='reportetypesdiv' style='background-color: orange; display: none; margin-bottom:15px; padding-bottom:15px; margin-left:30px;margin-right:30px;'><div>Should farm have positive attack (green) reports<select id='attackgreen'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    vsebinadiva += "<div>Should farm have negative attack (yellow) reports<select id='attackyellow'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    vsebinadiva += "<div>Should farm have negative attack (red) reports<select id='attackred'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    vsebinadiva += "<div>Should farm have positive scouting (green) reports<select id='scoutgreen'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    vsebinadiva += "<div>Should farm have negative scouting (yellow) reports<select id='scoutyellow'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    vsebinadiva += "<div>Should farm have negative scouting (red) reports<select id='scoutred'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    //vsebinadiva += "<div>Should farm have positive defense (green) reports<select id='defgreen'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    //vsebinadiva += "<div>Should farm have negative defense (yellow) reports<select id='defyellow'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    //vsebinadiva += "<div>Should farm have negative defense (red) reports<select id='defred'><option value='yes'>Yes</option><option value='no'>No</option><option value='notimportant'>Not important</option></select></div>"
    vsebinadiva += "</div></div></div>";
    /*
    document.getElementById("FilterCropResultsOptions").innerHTML +=
    document.getElementById("FilterCropResultsOptions").innerHTML += "<div id=''><input type='checkbox' id='FarmEffCheckbox'>" + "Farms with efficiency greater than:" + "<input tpye='text' size='2' id='FarmEff' value='50'>%</div>";
    document.getElementById("FilterCropResultsOptions").innerHTML += "<div id=''><input type='checkbox' id='LastRepCheckbox'>" + "Farms should have last reports about farming." + "</div>";
    document.getElementById("FilterCropResultsOptions").innerHTML += "<div id=''><input type='checkbox' id='FarmLossCheckbox'>" + "Farms with avarge loses per attack, lower than:" + "<input tpye='text' size='2' id='FarmLoss' value='500'></div>";
    */
    vsebinadiva += "<div><input type='checkbox' id='NotOnVillageCheckbox' tarca='dodatnemoznostinaselja'>" + prevodi.translate107 + "<div id='dodatnemoznostinaselja' style='background-color: yellow; display:none;'>";
    for (var i = 0; i < PLAYER.villages.length; i++) {
        vsebinadiva += "<div villageid='" + PLAYER.villages[i].villageid + "'><input type='checkbox' villageid='" + PLAYER.villages[i].villageid + "' id='NotOnVillageCheckbox" + PLAYER.villages[i].villageid + "'>" + PLAYER.villages[i].name + "(" + PLAYER.villages[i].x + "|" + PLAYER.villages[i].y + ")</div>";
    }

    vsebinadiva += "</div></div>";
    vsebinadiva += "<div><input type='checkbox' id='TribeCheckbox' tarca='dodatnemoznostitribe'>" + prevodi.translate108 + " <div id='dodatnemoznostitribe' style='background-color: yellow; display:none;'><div><input type='checkbox' tribe='0' id='filtertribe1'>" + prevodi.translate112 + "</div><div><input type='checkbox' tribe='1'  id='filtertribe2'>" + prevodi.translate113 + "</div><div><input type='checkbox' tribe='2' id='filtertribe3'>" + prevodi.translate114 + "</div><div><input type='checkbox' tribe='3' id='filtertribe5'>" + prevodi.translate115 + "</div></div></div>";

    vsebinadiva += "<div><input type='checkbox' id='NotInAllayCheckBox' tarca='FilterAlly,NotInAllay'>" + prevodi.translate109 + " <input id='NotInAllay' type='text' style='display:none'> <div style='background-color: yellow; display:none;' id='FilterAlly'></div> </div>";
    vsebinadiva += "</span>";
    vsebinadiva += '<br><button class="rounded" id="FilterCropTableGo" value="Start"><span>' + prevodi.translate110 + '</span></button><button class="rounded" id="FilterCropTableHide" value="Start"><span>' + prevodi.translate111 + '</span></button>';

    document.getElementById("FilterCropResultsOptions").innerHTML = vsebinadiva;
    var VseAlianse = [];
    var VseAlianseEval = document.evaluate(".//td[@tip='ally']", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (VseAlianseEval.snapshotLength) {
        document.getElementById("FilterAlly").innerHTML += "<div><input type='checkbox' id='checkallally'>" + "<span id='checkall'>Check all</span>" + "</div>";
        ZankaAlianse: for (var i = 0; i < VseAlianseEval.snapshotLength; i++) {
            var taAliansa = VseAlianseEval.snapshotItem(i).innerHTML;
            if (taAliansa.substring(0, 1) == " ") {
                taAliansa = taAliansa.substring(1);
            }
            for (var j = 0; j < VseAlianse.length; j++) {
                if (VseAlianse[j] == taAliansa) {
                    continue ZankaAlianse;
                }
            }
            var taAliansa2 = taAliansa;
            if (VseAlianseEval.snapshotItem(i).getAttribute("link")) {
                taAliansa2 = "<a href='" + VseAlianseEval.snapshotItem(i).getAttribute("link") + "' target='_blank'>" + taAliansa + "</a>";
            }
            document.getElementById("FilterAlly").innerHTML += "<div><input type='checkbox' ally='" + taAliansa + "' target='_blank'>" + taAliansa2 + "</div>";
            VseAlianse.push(taAliansa);
        }
    }

    document.getElementById("FilterCropTableHide").addEventListener('click', FilterCropTableHideEvent, true);

    document.getElementById("FilterCropTableGo").addEventListener('click', FilterCropTableGoEvent, true);
    document.getElementById("attackgreen").value = "notimportant";
    document.getElementById("attackyellow").value = "notimportant";
    document.getElementById("attackred").value = "notimportant";
    document.getElementById("scoutgreen").value = "notimportant";
    document.getElementById("scoutyellow").value = "notimportant";
    document.getElementById("scoutred").value = "notimportant";
    NastaviFilterHistory();
    
    /*
    $("#FilterAlly").multiselect();
    $("#TribeCrop").multiselect();
    $("#NotOnVillage").multiselect();
    
    for (var i = 0; i < 500; i++) {
        try {
            var element = document.getElementById("ui-multiselect-FilterAlly-option-" + i);
            element.addEventListener('change', DodajVAllyFilter, true);
        }
        catch (err) {
            break;
        }
    }

    try {
        var element = document.getElementById("ui-multiselect-FilterAlly-option-0");
        element.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("a")[0].addEventListener('click', DodajVseAlianse, true);
        element.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("a")[1].addEventListener('click', OdstraniVseAlianse, true);
    }
    catch (err) {
    }
*/
    document.getElementById("PopulationCheckbox").addEventListener('click', odpriDodatneMoznosti, true);
    document.getElementById("ReportsCheckbox").addEventListener('click', odpriDodatneMoznosti, true);
    document.getElementById("filterbylastreport").addEventListener('click', odpriDodatneMoznosti, true);
    
    document.getElementById("NotOnVillageCheckbox").addEventListener('click', odpriDodatneMoznosti, true);
    document.getElementById("TribeCheckbox").addEventListener('click', odpriDodatneMoznosti, true);
    document.getElementById("NotInAllayCheckBox").addEventListener('click', odpriDodatneMoznosti, true);

    document.getElementById("NotInAllay").addEventListener('change', PosodobiChecboxe, true);
    document.getElementById("checkallally").addEventListener('click', checkallally, true);
    var FilterAlly = document.getElementById("FilterAlly");
    var vseally = FilterAlly.getElementsByTagName("input");
    for (var i = 1; i < vseally.length; i++) {
        vseally[i].addEventListener('click', checkally, true);
    }
    $("#FilterCropResultsOptions").slideDown(500, function () { });

}

function NastaviFilterHistory() {
    if (PLAYER.farmSearch.filterHistory.length > 0) {
        var span = document.getElementById("filterhistoryspan");
        span.innerHTML = "";
        //span.innerHTML = prevodi.translate386 + ":";

        var select = document.createElement("select");

        span.appendChild(select);

        for (var i = 0; i < PLAYER.farmSearch.filterHistory.length; i++) {
            var option = document.createElement("option");
            var teksttitle = "<span style='color:black'>";
            for (index in PLAYER.farmSearch.filterHistory[i]) {
                var attr = PLAYER.farmSearch.filterHistory[i][index];
                teksttitle += index + ":" + attr + "<br>";
            }
            teksttitle += "</span>";
            option.innerHTML = vDatum(PLAYER.farmSearch.filterHistory[i].time);
            option.value = PLAYER.farmSearch.filterHistory[i].tasknumber;
            option.setAttribute("id", "report" + reportid);
            
            option.addEventListener('click', CropIskanjeFarmFilter, true);
            nastaviTooltipFarm(teksttitle, option);

            option.setAttribute("title", teksttitle);
            select.appendChild(option);
            try {
                $(option).tooltip({
                    tip: '#mojtooltipfarm' + "report" + reportid,
                    //effect: 'slide',
                    position: "center right",
                    predelay: 100,
                    offset: [0, 20]
                    //onHide: unsafeWindow.uniciTooltip//,
                    //onBeforeShow: unsafeWindow.ustvariReportTooltp
                }).dynamic({
                    //bottom: { direction: 'down' },
                    //top: { direction: 'uo' }
                });
            }
            catch (err)
            { }
            reportid++
        }
    }
    else {
        filterhistory.innerHTML = "No history";
    }

}

function CropIskanjeFarmFilter() {
    var tasknumber = this.getAttribute("value");
    for (var i = 0; i < PLAYER.farmSearch.filterHistory.length; i++) {
        if (PLAYER.farmSearch.filterHistory[i].tasknumber * 1 == tasknumber) {
            nastaviCropIskanjeFarmFilter(PLAYER.farmSearch.filterHistory[i])
            break;
        }
    }
}

function nastaviCropIskanjeFarmFilter(options) {

    document.getElementById("PopulationCheckbox").checked = options.enablepop
    document.getElementById("MinVillagePopulation").value = options.minvillagepop
    document.getElementById("MaxVillagePopulation").value = options.maxvillagepop
    document.getElementById("MaxPlayerPopulation").value = options.maxplayerpop
    document.getElementById("MinPlayerPopulation").value = options.minplayerpop
    document.getElementById("ReportsCheckbox").checked = options.enablereports
    document.getElementById("farmshouldhavelstreport").checked = options.lastreport
    document.getElementById("filterbylastreport").checked = options.enablereporttype
    document.getElementById("attackgreen").value = options.attackgreen
    document.getElementById("attackyellow").value = options.attackyellow
    document.getElementById("attackred").value = options.attackred
    document.getElementById("scoutgreen").value = options.scoutgreen
    document.getElementById("scoutyellow").value = options.scoutyellow
    document.getElementById("scoutred").value = options.scoutred
    document.getElementById("NotOnVillageCheckbox").checked = options.notonvillage
    //villages: []=options.
    document.getElementById("TribeCheckbox").checked = options.nottribe
    document.getElementById("filtertribe1").checked = options.Romans
    document.getElementById("filtertribe2").checked = options.Teutons
    document.getElementById("filtertribe3").checked = options.Gauls
    document.getElementById("filtertribe5").checked = options.Natars
    document.getElementById("NotInAllayCheckBox").checked = options.allyenabled
    document.getElementById("NotInAllay").value = options.ally.join(";")
    for (var i = 0; i < PLAYER.villages.length; i++) {
        var najdeno = false;
        for (var j = 0; j < options.villages.length; j++) {
            if (options.villages[i] == PLAYER.villages[i].villageid) {
                najdeno = true;
                break;
            }
        }
        document.getElementById("NotOnVillageCheckbox" + PLAYER.villages[i].villageid).checked = najdeno;
    }


    if (options.enablepop) {
        document.getElementById("showpopfilter").style.display = "";
    }
    else {
        document.getElementById("showpopfilter").style.display = "none";
    }

    if (options.enablereports) {
        document.getElementById("showreportfilter").style.display = "";
    }
    else {
        document.getElementById("showreportfilter").style.display = "none";
    }

    if (options.enablereporttype) {
        document.getElementById("reportetypesdiv").style.display = "";
    }
    else {
        document.getElementById("reportetypesdiv").style.display = "none";
    }

    if (options.notonvillage) {
        document.getElementById("dodatnemoznostinaselja").style.display = "";
    }
    else {
        document.getElementById("dodatnemoznostinaselja").style.display = "none";
    }

    if (options.nottribe) {
        document.getElementById("dodatnemoznostitribe").style.display = "";
    }
    else {
        document.getElementById("dodatnemoznostitribe").style.display = "none";
    }

    if (options.allyenabled) {
        document.getElementById("FilterAlly").style.display = "";
        document.getElementById("NotInAllay").style.display = "";
    }
    else {
        document.getElementById("FilterAlly").style.display = "none";
        document.getElementById("NotInAllay").style.display = "none";
    }
    PosodobiChecboxe()
}


function PosodobiChecboxe() {
    var FilterAlly = document.getElementById("FilterAlly");
    var vseally = FilterAlly.getElementsByTagName("input");
    var vsenoveally = document.getElementById("NotInAllay").value.split(";");
    for (var i = 1; i < vseally.length; i++) {
        var najdeno = false;
        for (var j = 0; j < vsenoveally.length; j++) {
            if (vseally[i].getAttribute("ally") == vsenoveally[j]) {
                najdeno = true;
                vseally[i].checked = true;
                break;
            }
        }
        if (!najdeno) {
            vseally[i].checked = false;
        }
    }
}

function odpriDodatneMoznosti() {
    var idmoznosti = this.getAttribute("tarca");
    idmoznosti=idmoznosti.split(",");
    for (var i = 0; i < idmoznosti.length; i++) {
        if (this.checked) {
            document.getElementById(idmoznosti[i]).style.display = "";
        }
        else {
            document.getElementById(idmoznosti[i]).style.display = "none";
        }
    }
}
function checkally() {
    var alliansa = this.getAttribute("ally");
    OdstraniAlly(alliansa)
    if (this.checked) {
        var allyFilter = document.getElementById("NotInAllay");
        if (allyFilter.value == "") {
            allyFilter.value = alliansa;
        }
        else {
            allyFilter.value += ";" + alliansa;
        }
    }
}

function OdstraniAlly(ally) {
    var vseally = document.getElementById("NotInAllay").value;
    vseally = vseally.split(";" + ally).join("");
    vseally = vseally.split(ally + ";").join("");
    document.getElementById("NotInAllay").value = vseally;
}

function checkallally() {
    if (this.checked) {
        DodajVseAlianse();
        document.getElementById("checkall").innerHTML = "Uncheck all";
    }
    else {
        OdstraniVseAlianse();
        document.getElementById("checkall").innerHTML = "Check all";
    }
}

function DodajVseAlianse() {
    var allyFilter = document.getElementById("NotInAllay");
    allyFilter.value = "";
    var FilterAlly = document.getElementById("FilterAlly");
    var vseally = FilterAlly.getElementsByTagName("input");
    for (var i = 1; i < vseally.length; i++) {
        vseally[i].checked = true;
        if (allyFilter.value == "") {
            allyFilter.value = vseally[i].getAttribute("ally");
        }
        else {
            allyFilter.value += ";" + vseally[i].getAttribute("ally");
        }
    }
}

function OdstraniVseAlianse() {
    document.getElementById("NotInAllay").value = "";
    var FilterAlly = document.getElementById("FilterAlly");
    var vseally = FilterAlly.getElementsByTagName("input");
    for (var i = 0; i < vseally.length; i++) {
        vseally[i].checked = false;
    }
}

function OdkljukajVseAlianse() {
    try {
        var allyFilter = document.getElementById("NotInAllay");
        allyFilter.value = "";
        for (var i = 1; i < 500; i++) {

            var element = document.getElementById("ui-multiselect-FilterAlly-option-" + i);
            element.checked = false;


        }
    }
    catch (err) {
        return;
    }
}

function DodajVAllyFilter() {
    var allyFilter = document.getElementById("NotInAllay");
    if (this.checked) {
        if (allyFilter.value == "") {
            allyFilter.value = this.value;
        }
        else {
            allyFilter.value += ";" + this.value;
        }
    }
    else {
        var vseAlianse = allyFilter.value.split(";");
        for (var i = 0; i < vseAlianse.length; i++) {
            if (vseAlianse[i] == this.value) {
                vseAlianse.splice(i, 1);
                break;
            }
        }
        allyFilter.value = vseAlianse.join(";");
    }
}

function FilterCropMinPopulationEvent() {
    if (this.checked == true) {
        document.getElementById("DivFilterCropMinPopulation").style.display = "";
    }
    else {
        document.getElementById("DivFilterCropMinPopulation").style.display = "none";
    }
}

function FilterCropMaxPopulationEvent() {
    if (this.checked == true) {
        document.getElementById("DivFilterCropMaxPopulation").style.display = "";
    }
    else {
        document.getElementById("DivFilterCropMaxPopulation").style.display = "none";
    }
}

function FilterCropAllyEvent() {
    if (this.checked == true) {
        document.getElementById("DivFilterAlly").style.display = "";
    }
    else {
        document.getElementById("DivFilterAlly").style.display = "none";
    }
}

function FilterCropFarmlistEvent() {
    if (this.checked == true) {
        document.getElementById("DivFilterCropFarmlist").innerHTML = "";
        var SeznamOpcij = document.createElement("select");
        SeznamOpcij.setAttribute("class", "dropdown");
        SeznamOpcij.id = "FilterCropFarmlistVillage";

        if (PLAYER.villages.length > 0) {

            for (var StevilkaVasi = 0; StevilkaVasi < PLAYER.villages.length; StevilkaVasi++) {
                var Naselje = PLAYER.villages[StevilkaVasi];
                var idnaselja = Naselje.ID;
                var tekst = Naselje.x + "|" + Naselje.y;
                Opcija = document.createElement("option");
                Opcija.value = Naselje.villageid;
                Opcija.innerHTML = tekst;
                SeznamOpcij.appendChild(Opcija);
            }

        }
        else {
            document.getElementById("DivFilterCropFarmlist").innerHTML = " " + prevodi.translate116;
            SeznamOpcij.style.display = "none";
            Opcija = document.createElement("option");
            Opcija.value = "none";
            Opcija.innerHTML = "none";
            SeznamOpcij.appendChild(Opcija);
            SeznamOpcij.value = "none";

        }
        document.getElementById("DivFilterCropFarmlist").appendChild(SeznamOpcij);
    }
    else {
        document.getElementById("DivFilterCropFarmlist").innerHTML = "";
    }
}
function AddToFarmlistButtonEvent() {
    PodatkiZaDodat = document.getElementById("AddToFarmlistInput").value.split(",");
    ime_farme = PodatkiZaDodat[0];
    link_farme = PodatkiZaDodat[1];
    enote = "0,0,0,0,0,0,0,0,0,0,0";
    tip_napada = 4;
    aktivna = false;
    villageid = PodatkiZaDodat[2];
    var Farm =
    {
        type: "farm",
        name: filtriraj(ime_farme),
        link: link_farme,
        troops: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        att: 4,
        work: false,
        villageid: villageid
    }
    DodajFarmo(Farm);
}


function PreveriFarmlist(NaseljeFarmlist, IdFarme) {
    if (NaseljeFarmlist == false) {
        return true;
    }
    var Farmlist = PLAYER.getVillage(NaseljeFarmlist).FARME;
    for (var gg = 0; gg < Farmlist.length; gg++)//
    {
        var IdTeFarme = Farmlist[gg].link;
        if (IdFarme == IdTeFarme) {
            return false
        }
    }

    return true;
}

function PreveriAlianso(Aliansa, Pakti) {
    if (Pakti == false) {
        return true;
    }
    if (Pakti == true) {
        if (Aliansa == "/") {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        for (var ff = 0; ff < Pakti.length; ff++) {
            if (Pakti[ff] == Aliansa) {
                return false;
            }
        }
        return true;
    }
}

function PreveriPopulacijo(Populacija, MinPop, MaxPop) {
    if (MinPop != false && MaxPop != false) {
        if (Populacija * 1 >= MinPop * 1 && Populacija * 1 <= MaxPop * 1) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (MinPop != false) {
        if (Populacija * 1 >= MinPop * 1) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (MaxPop != false) {
        if (Populacija * 1 <= MaxPop * 1) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return true;
    }
}
