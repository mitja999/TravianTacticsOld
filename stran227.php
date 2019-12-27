<html>

<head>

<title>Travian Tactics Online</title>

<meta name="keywords" content="travian, bot, travian bot, travian script, free travian bot"></meta>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-19970352-5"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-19970352-5');
</script>


<script type="text/javascript">
var golderPlayer = "http://86.58.69.167:8080/data_base/GolderPlayer.aspx";
<?php
$IframeLink=$_GET["link"];
$travian = strrpos($IframeLink,".travian.");
$https=substr($IframeLink,0,5);
$start = ('https' == $https) ? 8 : 7;
$end=strrpos($IframeLink,"/",$travian);
$link=substr($IframeLink,$start,$end-$start);
echo "var SERVERLINK=\"$link\";";
?>
</script>

<link rel="stylesheet" type="text/css" href="http://www.traviantactics.com/resources/css/jquery.ptTimeSelect.css">

<link rel="stylesheet" type="text/css" href="http://www.traviantactics.com/resources/css/jquery-ui.css">

<link href="http://www.traviantactics.com/resources/css/jquery.multiselect.css" rel="stylesheet" >

<link href="http://www.traviantactics.com/resources/css/Tooltip.css" type="text/css" rel="stylesheet" media="screen">

<link href="http://www.traviantactics.com/resources/css/drag.css" type="text/css" rel="stylesheet" media="screen">

<link href="http://www.traviantactics.com/resources/css/glavna3.css" type="text/css" rel="stylesheet" media="screen">

<link href="http://www.traviantactics.com/resources/css/global.css" type="text/css" rel="stylesheet" media="screen">

<link href="http://www.traviantactics.com/resources/css/side.css" type="text/css" rel="stylesheet" media="screen">





<script src="http://traviantactics.com/resources/loadjs62.js?vers=5.13" type="text/javascript"></script>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-19974352-3']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>

<body style="margin-top:0px; margin-left:0px; margin-bottom:0px; background-color: #CEDDE9; overflow: hidden;">
<div id="PodatkiIgralec">
</div>

<div id="OnemogociIgranje" class="NePrikaziOviro">
</div>
<div style="position: fixed; left: 5px; top: 3px; width: 200px; z-index: 999; background: #9CCCF0; border-width: 2px; border-style: solid;">
If you can not add tasks in this window, open travian page in new tab. Buttons to add tasks should appear there. This is problem of new greasemonkey version.
</div>





<table style="height: 100%; width:100%;">
<tr class="Vrstica1" id="Vrstica1" style="height: 100%;">
<td class="Celica0" id="V1Celica0">

<div style="position:fixed; left: 0px; bottom:180px;z-index:10; width:200px;margin:0px;padding:0px;" class="menichrome" >
<div style="margin-bottom:10px; border: 1px solid #527FA2; left:0px; background-color: #9CCCF0; padding:10px; border-bottom-right-radius:15px; border-top-right-radius:15px; overflow:auto; height:100px;">
Tips<span style="cursor:pointer; position: absolute; right: 40px; top: 5px;font-size:20px; text-align:center; z-index: 1000;"><img style="cursor:pointer; " src="https://dl.dropboxusercontent.com/u/222838177/resources/img/refresh.ico" id="refreshTips"></span><span style="cursor:pointer; position: absolute; right: 20px; top: 0px;font-size:20px; text-align:center; z-index: 1000;" id="removeTips"><b>X  </b></span>
<div id="tips"></div>
</div>

<div style="border: 1px solid #527FA2; left:0px; background-color: #9CCCF0; padding:10px; border-bottom-right-radius:15px; border-top-right-radius:15px;">
	<ul id="menu" class="dbMenu onMouse">
		<li style="display:none;" id="optionsKolona"><span>Options</span>
            <ul>
			     <li id="Autologin"><span>Autologin</span></li>
				 <li id="MoznostiAnalize"><span>Analysing options</span></li>
				 <li id="ExportImport" style="display:none;"><span>Export/Import</span></li>
				 <li id="WorkingTime" style="display:none;"><span>Working time</span></li>
				 <li id="Templates" style="display:none;"><span>Templates</span></li>
				 <li id="Zoom" style="display:none;"><span>Zoom</span></li>
				 <li id="ShowLogs" style="display:none;"><span>Logs</span></li>
            </ul>
		<li style="display:none;" id="attackkolona"><span>Attack</span>
			<ul>
				<li id="HeroButton" style="display:none;"><span>Hero</span></li>
				<li id="GoldFarmlist" style="display:none;"><span>Farmlists</span></li>
				<li id="AttackBuilder" style="display:none;"><span>Attack builder</span></li>
				<li id="SearchFarms" style="display:none;"><span>Crop/Farm search</span></li>
			</ul>
		</li>
		
		<li id="Demolish" style="display:none;"><span>Demolish</span></li>
		
	    <li  id="saveKolona"><span>Save</span>
            <ul>
                <li id="ShraniLocal" style="display:none"><span>Localy</span></li>
				<li id="DeleteData"><span>Delete data</span></li>
            </ul>
	    </li>
		<li id="instalKolona"><span>Install</span>
            <ul>
                <li id="instalFirefox" link="http://www.mozilla.org/en-US/firefox/new/"><span>Firefox</span></li>
				<li id="instalGreasemonkey" link="https://addons.mozilla.org/sl/firefox/addon/greasemonkey/"><span>Greasemonkey</span></li>
				<li style="display: none;" id="instalScript" link="http://userscripts.org/scripts/source/76663.user.js"><span>TravianTactics script</span></li>
				<li id="instalScript2" link="http://www.traviantactics.com/gresemonkey/TT5.13-skrcena.user.js"><span>TravianTactics script</span></li>
            </ul>
	    </li>
		
		<li id="Golder" style="display:none;" link="http://www.traviantactics.com/#golder"><span>Golder</span></li>
		<li id="offlinecolona"> <span>Offline bot</span><img src="http://shrani.si/f/3n/vN/2iZvF4tA/1/new.gif">
            <ul>
				<li id="GumbOffline" link="http://www.traviantactics.com/#offlineBot"><span>About offline bot</span></li>
				<li id="GumbOffline2" style="display:none;" link="http://www.traviantactics.com/#offlineBot"><span>Offline bot webpage</span></li>
			</ul>
	    </li>
		<li id="GumbTroopEvade" style="display:none;"><span>Troop evasion</span></li>
		<li id="aboutkolona"><span>About</span><img src="http://shrani.si/f/3n/vN/2iZvF4tA/1/new.gif">
            <ul>
				<li id="Website" link="http://www.traviantactics.com/"><span>Website</span></li>
				<li id="Forum" link="http://traviantactics.freeforums.org/index.php"><span>Forum</span></li>
				<li style="display: none;" id="Library" link="http://traviantactics.com/documentation/"><span>Documentation</span> <img src="http://shrani.si/f/3n/vN/2iZvF4tA/1/new.gif"></li>
				<li style="display: none;" id="Chat" link="http://www.traviantactics.com/chat/"><span>Chat</span></li>
				<li style="display: none;" id="Media" link="http://www.traviantactics.com/media/"><span>Media</span></li>
				<li id="Facebook" link="http://www.facebook.com/pages/Travian-Tactics/303069466406338"><span>Facebook</span></li>
			</ul>
	    </li>
		<li id="connectionsetting"><span>Connection settings</span></li>
	</ul>

<form action="https://www.paypal.com/cgi-bin/webscr" method="post" style="height: 10px">
  <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="XR62LTRDYWY6N">
      <input type="image" src="https://www.paypalobjects.com/WEBSCR-640-20110429-1/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/WEBSCR-640-20110429-1/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
<div class="btnn green" id="Shrani" style="display:none">Save to server</div>
<div class="btnn blue" id="PosljiSMS" style="display:none;">Send sms</div>
<div class="btnn blue" id="AnalizaFarm" style="display:none;">Farm analyses</div>
</div>
</div>
</td>
<td class="Celica1" id="V1Celica1">
<?php
$IframeLink=$_GET["link"];
echo '<input type="hidden" value="'.$IframeLink.'" id="travianframelocation" name="travianframelocation">';
echo '<iframe src ="'.$IframeLink.'" width="100%" height="100%" id="travianframe" name="travianframe"><p>Your browser does not support iframes.</p></iframe>';
?>
</td>
<td class="Celica2">
<div class="DivReklame" id="DivReklame">
<iframe src="Reklame1.php" width="100%" height="100%" id="FrameReklame" name="FrameReklame" style="border:0px; overflow:hidden;">
  <p>Your browser does not support iframes.</p>
</iframe>
</div>
</td>
</tr>
<tr class="Vrstica2" id="Vrstica2">
<th colspan="3" >
<img src="http://shrani.si/f/44/Jf/ypNsZkz/up.png" id="Pokazi" style="display:none; cursor:pointer;"><img src="http://shrani.si/f/2G/ug/30ZJFvgB/down.png" id="Skrij" style="cursor:pointer;">
<table border="0" style="width:100%; height:100%; text-align:center; align:center; vertical-align:top; font-family: Arial, Helvetica, sans-serif; font-size: 14px;" id="Tabela2">
<tr><td style="width:35%; text-align:center; vertical-align:top;align:center;">

<div id="CakalnaVrsta" speed="4">
<span id="cakalnavrsta">Task list</span><img title="help" src="http://shrani.si/f/Z/Kb/UzpJts0/vprasaj.jpg" style="cursor: pointer;" id="helptasklist">


</div>

</td>
<td style="width:20%; text-align:center; vertical-align:top;align:left;">
<div id="DivGlavnoOkno" speed="4"  style="text-align:center; align:center;">
<div id="Status" style="display: none; font-size:20px; font-weight: bold;">Login to travian and press get data.</div>
<div id="ProgressBarDiv" style="font-size:20px; font-weight: bold; display: none;">
<progress class="AnalizaProgres" id="AnalizaProgress" max="100" value="0" style="width:70%;background-color: #F0F0F0;border: solid #808080 2px;border-radius: 5px;-moz-box-shadow: 3px 3px 3px #C0C0C0;-webkit-box-shadow: 3px 3px 3px #C0C0C0;box-shadow: 3px 3px 3px #C0C0C0;padding: 3px;"></progress><span id="progressnumber">0%</span>
</div>
<table border="0" style="text-align:center;align:center;width:100%;"><tr><td style="width:100%;text-align:left;">


</td></tr><tr><td style="width:100%">
<div id="divloadprogress"> Loading script <progress  max="10" id="loadprogress" value="0"></progress></div>
<div class="btnn green" id="GetDataLocal" style="display:none" >Get Data Localy</div>
<div class="btnn green" id="Start" style="display:none; font-size: 30px;margin:auto;">Start</div>
<div class="btnn green" id="Stop" style="display:none; font-size: 30px;">Stop</div>

<div class="btnn blue" id="SetLanguage" style="display:none">Set language</div>
<div class="btnn blue" id="FarmFinderV2" style="display:none;">Crop/Farm search v2</div>


<span id="StatusSaving" style="font-size:15px; font-weight: bold;"><img src="http://shrani.si/f/3W/4X/MN7xbXF/loading.gif" alt="Loading..." style="display:none;"/></span><br></td></tr>

<tr style="display:none;"><td style="width:100%;text-align:left;">

<p>We recomend firefox 18<a href="http://www.mozilla.com/" target="_blank">link </a>       <!-- To oznako vstavite v glavo ali tik pred oznako, ki zaključuje telo -->
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>

<!-- To oznako vstavite na mesto, kjer želite upodobiti gumb +1 -->
   <span>    </span><g:plusone></g:plusone></p>
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
  <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="hosted_button_id" value="XR62LTRDYWY6N">
      <input type="image" src="https://www.paypalobjects.com/WEBSCR-640-20110429-1/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/WEBSCR-640-20110429-1/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
<tr style="display:none;"><td style="width:100%;text-align:left;">
Please translate script to your language<a href="http://traviantactics.com/forum/default.aspx?g=topics&f=6" target="_blank"> info</a><br>
Visit: <a href="http://traviantactics.com/" target="_blank">website </a>or <a href="http://traviantactics.com/forum/" target="_blank"> forum </a>
</td></tr>
</table>


<div id="contact-overlay" class="simplemodal-overlay" style="display:none; opacity: 0.7; height: 100%; width: 100%; position: fixed; left: 0px; top: 0px; z-index: 1001; background-color:#000; cursor:wait;"></div>
<div id="PojavnoOkno" style="display:none; position: fixed; z-index: 10002; left: 5%; overflow:auto; top: 5%;">vsebina</div>
<div id="CropFinder" firstTime="true" style="display:none; position: fixed; z-index: 9002;  left: 5%; top: 5%;  overflow:auto; color: #000000; background-color:#85C2FF;">
<span style='text-align:left;font-size:35px;'><b>Crop/farm finder</b></span><span id='CloseButton2' style='cursor:pointer; position: absolute; right: 0px; top: 0px; z-index: 10000;font-size:20px;'>x &nbsp;</span>
<div id="TravianCropFinder" style="display:none;">
<p>Server:
<?php $IframeLink=$_GET["link"];
$CropFinderLink= parse_url($IframeLink);
$CropFinderLink=$CropFinderLink['host'];
echo '<span id="CropFinderLink">'.$CropFinderLink.'</span>'; ?>
<div><span>Search history<span>:<span id="LastFarmSearch">None</span></div>
<div style='display:none'><span>Saved serarches</span>:<span id="SavedFarmSearch">None</span></div>
<div><b>X:</b> <input type="text" value="0" size="2" id="CropFinderX">  <b>Y: </b><input type="text" value="0" size="2" id="CropFinderY"><span id="cropcoordinates">a</span></div>
<div>Min distance: <input type="text" value="0" size="1" id="CropFinderMinDistance"> fields</div>
<div>Max distance: <input type="text" value="10" size="1" id="CropFinderDistance"> fields</div>
<table style="width:100%;">
<tr>
<th style="width:33%;">
<p><INPUT TYPE="CHECKBOX" id="CropFinderFarme">Find Farms</p>
</th>
<th style="width:33%;">
<p><INPUT TYPE="CHECKBOX" id="CropFinderc9c15">Find c9/c15</p>
</th>
<th style="width:33%;">
<p><INPUT TYPE="CHECKBOX" id="CropFinderOases">Find oases</p>
</th>
</tr>
<tr>
<td style="height:100%;">
<div id="spanFindFarms" style="background-color:yellow; display:none;line-height:150%;width:100%;height:100%;text-align:center;">
Max village pop:<INPUT TYPE="text" id="MaxVillagePop" value="400" size="3">
<span id="prikaziTipReports" style="cursor:pointer; display: none;" tip="May take a lot of time to analyse! This will obtain last reports from farms">Get last reports of farms:</span><INPUT TYPE="checkbox" id="GetFarmsReports" style="display: none;"><br>
<div id="analizirajreportecrop" style="background-color:#FFCC00; display:none;line-height:150%; margin-left:20px; margin-right: 20px;"  tip="May take a lot of time to analyse! This will analyse last reports of farms">
<span id="prikaziTipReportsanaliziraj" style="cursor:pointer; display: none;" tip="May take a lot of time to analyse! This will analyse last reports from farms">Analyse last reports of farms:</span><INPUT TYPE="checkbox" id="AnalyseFarmsReports" style="display: none;">
</div>

<span id="prikaziTipAdvanedFarm" style="cursor:pointer" tip="May not work on some servers">Use advanced farm finder</span>:<INPUT TYPE="checkbox" id="AdvancedFarm">
<div id="spanAdvancedFarmFinder" style="background-color:#FFCC00; display:none;line-height:150%; margin-left:20px; margin-right: 20px;">
Max player pop:<INPUT TYPE="text" id="MaxPlayerPop" value="400" size="3"><br>
Max player villages:<INPUT TYPE="text" id="MaxPlayerVillages" value="1" size="1"><br>
Find natars:<INPUT TYPE="checkbox" id="FindNatars"><br>
<div id="spanonlynatars" style="background-color:#FF9900; display:none;line-height:150%; margin-left:20px; margin-right: 20px;">
Find only natars:<INPUT TYPE="checkbox" id="OnlyNatars">
</div>
</div>
</div>
</td>
<td>

<div id="spanc9c15" style="background-color:yellow; display:none;line-heigth:150%;width:100%;height:100%;text-align:center;">
<INPUT TYPE="CHECKBOX" id="CropFinderc9">Find c9<br>
<INPUT TYPE="CHECKBOX" id="CropFinderc15">Find c15<br>
</div>
</td>
<td>

<div id="spanoases" style="background-color:yellow; display:none;line-height:150%;width:100%;height:100%;text-align:center;">
<INPUT TYPE="CHECKBOX" id="CropFinderAllOases">Find all oases<br>
<INPUT TYPE="CHECKBOX" id="CropFinderElephants">Find oases with elephants<br>
<INPUT TYPE="CHECKBOX" id="CropFinderKrokodili">Find oases with crocodiles<br>
<INPUT TYPE="CHECKBOX" id="CropFinderEmptyOases">Find empty oases<br>
<div id="spanemptyoases" style="background-color:orange; display:none;line-height:150%; margin-left:20px; margin-right: 20px;">
<INPUT TYPE="CHECKBOX" id="CropFinderEmptyOasesWood">Find all empty oases with wood<br>
<INPUT TYPE="CHECKBOX" id="CropFinderEmptyOasesClay">Find all empty oases with clay<br>
<INPUT TYPE="CHECKBOX" id="CropFinderEmptyOasesIron">Find all empty oases with iron<br>
<INPUT TYPE="CHECKBOX" id="CropFinderEmptyOasesCrop">Find all empty oases with crop<br>
</div>
<INPUT TYPE="CHECKBOX" id="CropFinderFreeOases">Find free oases<br>
</div>
</td>
</tr>
</table>
<p><button class="rounded" id="CropFinderStart" value="Start">
  <span>Start</span>
</button>
<button class="rounded" id="CropFinderStop" value="Start" style="display:none;">
  <span>Stop</span>
</button>
<button class="rounded" id="MakeCropTableSortable" value="Start" style="display:none;">
  <span>Make sortable</span>
</button>
<button class="rounded" id="FilterCropTable" value="Start" style="display:none;">
  <span>Filter results</span>
</button>
<div id="FilterCropResultsOptions" style="display:none;line-height:200%">

</div>



<div id="CropFinderProgress"></div>

<p><span id="ProstorZaCropTabelo">

</span>
</p>
</div>

<div id="CropFinderHelp">

<span style='text-align:left;'><b>Help</b></span><span id='CloseButton3' style='cursor:pointer; position: absolute; right: 0px; top: 0px; z-index: 10001'>x &nbsp;</span><p>You need greasemonkey addon for this website to work. Get it <a href='https://addons.mozilla.org/en-US/firefox/addon/748/' target='_blank'>here</a>.</p><p>When you have greasemonkey installed, you need a script. Get it <a href='http://userscripts.org/scripts/source/76663.user.js' target='_blank'>here</a>.</p><p><b>You need to be logged in travian to be able to get data!</b></p><p>Get more info at <a href='http://userscripts.org/scripts/show/76663' target='_blank'>userscripts</a> or <a href='http://www.traviantactics.site40.net/' target='_blank'>webpage</a></p><p>Tutorials:<ul><li><a href='http://www.youtube.com/watch?v=sBpo-dtUoQ0' target='_blank'>Install</a></li><li><a href='http://www.youtube.com/watch?v=venCeK2OjQM' target='_blank'>Builder</a></li><li><a href='http://www.youtube.com/watch?v=nbcB20W99ZI' target='_blank'>Farmer</a></li><li><a href='http://www.traviantactics.com' target='_blank'>Crop/Farm finder</a></li></ul></p><p>If script still does not work, try refreshing page.</p><br><br>

</div>

<div id="CropFinderDodajNaFarmlist">
</div>

</div>
<input type="hidden" id="ScriptVersion" name="ScriptVersion" value="1">
<input type="hidden" id="TravianVersion" name="ScriptVersion" value="3">
<input type="hidden" id="VILLAGES" name="VILLAGES" value="">
<input type="hidden" id="AddToFarmlistInput" name="AddToFarmlistInput" value="">
<input type="button" style="display:none;" id="UstvariPojavnoOkno" value="3">
<input type="hidden" id="PojavnoOknoPodatki" value="0">
<input type="button" style="display:none;" id="AddToFarmlistButton" name="AddToFarmlistButton" value="">
<input type="button" style="display:none;" id="AnalizirajIgmje" value="0">
<input type="button" style="display:none;" id="AnalizirajReport" value="0">
<input type="button" style="display:none;" id="Analiza" value="0">
<input type="button" style="display:none;" id="PostRequest" value="0">
<input type="button" style="display:none;" id="PridobiGoldLink" value="0">
<input type="button" style="display:none;" id="PridobiServere" value="0">
<input type="button" style="display:none;" id="RegistrirajAcc" value="0">
<input type="button" style="display:none;" id="analizirajReporteEvent" value="0">
<input type="button" style="display:none;" id="farmajFarmlist" value="0">
<input type="button" style="display:none;" id="ustvariFarmlist" value="0">
<input type="button" style="display:none;" id="izvediTask" value="0">
<input type="button" style="display:none;" id="getMap" value="0">
<input type="button" style="display:none;" id="setLang" value="0">
<input type="button" style="display:none;" id="getdata" value="0">
<input type="button" style="display:none;" id="logout" value="0">
<input type="button" style="display:none;" id="pocistiintervale" value="0">
<input type="button" style="display:none;" id="odpripopup" value="0">
</div>



</td>
<td style="width:35%;align:center; text-align:center; vertical-align:top;">
<div id="DivFarmlist" speed="4">
<span id="farmlist">Farm list</span><img title="help" src="http://shrani.si/f/Z/Kb/UzpJts0/vprasaj.jpg" style="cursor: pointer;" id="helpfarmlist">
<div id="testo">
</div>
</div>
</td>
</tr>
</table>
</th>
</tr>
</table>
<div id="dhtmltooltip"></div>
<div id="mojtooltip">

</div>
<div id="mojtooltipfarm">

</div>
</body>
</html>