//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Arial, Helvetica, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Optime!!"; messageTime=""; messageError="Quicquam falsum fecisti. Iterum fac!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>1. In <input type="text" name="item1" id="item1" class="ardoraDropInput" readonly> prima capituli tertii sunt tres <input type="text" name="item2" id="item2" class="ardoraDropInput" readonly>: Iulia, Marcus, Quintus. </p><p> 2. Iulia: \"Uhuhu!\" Puella <input type="text" name="item3" id="item3" class="ardoraDropInput" readonly>. Puer <input type="text" name="item4" id="item4" class="ardoraDropInput" readonly>:  \"Hahahae\". Puer <input type="text" name="item5" id="item5" class="ardoraDropInput" readonly> ridet Marcus est.  </p><p> 3. Quintus eum <input type="text" name="item6" id="item6" class="ardoraDropInput" readonly> et Marcum <input type="text" name="item7" id="item7" class="ardoraDropInput" readonly>. Marcus <input type="text" name="item8" id="item8" class="ardoraDropInput" readonly> Quintum quoque pulsat. </p><p> 4. Iulia Aemiliam uocat:  \"Mamma!!\". Aemilia eam audit et <input type="text" name="item9" id="item9" class="ardoraDropInput" readonly> </p><p> 5. Aemilia interrogat:  \"Cur Iulia plorat?\". Quintus respondet:  \"<input type="text" name="item10" id="item10" class="ardoraDropInput" readonly> Marcus eam pulsat.\" </p><p> </p>'];
var answers=["uenit","ridet","qui","scaena","Quia","personae","iratus","uidet","pulsat","plorat"];
var a=["OQ","NA","NQ","MQ","MTA","Mg","OA","Ng","Nw","Mw"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDMuMDMuMDUuQ29tcGxldGFyX1RleHRvLkFycmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
