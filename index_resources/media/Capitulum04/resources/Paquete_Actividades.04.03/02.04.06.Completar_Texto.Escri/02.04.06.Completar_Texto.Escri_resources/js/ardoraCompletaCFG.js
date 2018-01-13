//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=2;
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
var timeOnMessage=5; messageOk="Bene fecisti!"; messageTime=""; messageError="Errare humanum est"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>1. <input type="text" name="item1" id="item1" class="ardoraInput"> est Dauus?. Dauus est <input type="text" name="item2" id="item2" class="ardoraInput"> Iulii. Iulius dominus Daui est.  </p><p> 2. <input type="text" name="item3" id="item3" class="ardoraInput"> est Syra? Syra ancilla Aemiliae est. Aemilia est <input type="text" name="item4" id="item4" class="ardoraInput"> Syrae. </p><p> 3. Cornelius:  \"<input type="text" name="item5" id="item5" class="ardoraInput"> serui sunt in <input type="text" name="item6" id="item6" class="ardoraInput"> tua?\" - \"In familia <input type="text" name="item7" id="item7" class="ardoraInput"> sunt <input type="text" name="item8" id="item8" class="ardoraInput"> (C) serui.\"  </p><p> 4. Titulus <input type="text" name="item9" id="item9" class="ardoraInput"> tui latini est  \"LINGVA LATINA\". Liber tuus <input type="text" name="item10" id="item10" class="ardoraInput"> est, non antiquus.</p>'];
var b=["Nw","OA","OQ","Mw","MTA","NA","NQ","Ng","MQ","Mg"];
var c=[3,6,5,4,5,6,4,7,4,6];
var answers=["bWVh","Y2VudHVt","bGlicmk","UXVhZQ","bm91dXM","ZG9taW5h","UXVvdA","ZmFtaWxpYQ","UXVpcw","c2VydXVz"];
var a=["7","8","9","3","10","4","5","6","1","2"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDIuMDQuMDYuQ29tcGxldGFyX1RleHRvLkVzY3Jp"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
