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
var indexTXT=0; var txtC=['<p>1.- DOMINA / SALVTAT = «<input type="text" name="item1" id="item1" class="ardoraInput"> ! · Dauus <input type="text" name="item2" id="item2" class="ardoraInput">. </p><p> 2.- MEDVS / VOCAT = «<input type="text" name="item3" id="item3" class="ardoraInput"> ! · Dauus <input type="text" name="item4" id="item4" class="ardoraInput">. </p><p> 3.- RESPONDET = «<input type="text" name="item5" id="item5" class="ardoraInput"> ! · Dauus <input type="text" name="item6" id="item6" class="ardoraInput">. </p><p> 4.- SACCVLVS DAVI / APERIT = «<input type="text" name="item7" id="item7" class="ardoraInput"> ! · Dauus <input type="text" name="item8" id="item8" class="ardoraInput">. </p><p> 5.- NVMMVS / SVMIT = «<input type="text" name="item9" id="item9" class="ardoraInput"> ! · Dauus <input type="text" name="item10" id="item10" class="ardoraInput">.</p>'];
var b=["Ng","Mg","OA","Nw","NA","NQ","OQ","Mw","MTA","MQ"];
var c=[9,15,20,19,11,8,11,10,12,14];
var answers=["cmVzcG9uZGV0","ZG9taW5hbSBzYWx1dGF0","c2FjY3VsdW0gc3V1bSBhcGVyaXQ","U2FjY3VsdW0gdHV1bSBhcGVyaQ","TWVkdW0gdW9jYXQ","UmVzcG9uZGU","TnVtbXVtIHN1bWU","TWVkdW0gdW9jYQ","bnVtbXVtIHN1bWl0","RG9taW5hbSBzYWx1dGE"];
var a=["6","2","8","7","4","5","9","3","10","1"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDQuMDEuMDQuQ29tcGxldGFyX1RleHRvLkVzY3Jp"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
