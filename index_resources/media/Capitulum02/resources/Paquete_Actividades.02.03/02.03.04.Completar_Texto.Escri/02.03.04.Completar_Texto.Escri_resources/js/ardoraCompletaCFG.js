//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=5; attempts=0; attemptsMax=1;
var score=0; scoreMax=5; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<p>1.- Insulae et oppida = <input type="text" name="item1" id="item1" class="ardoraInput"> . </p><p> 2.- <input type="text" name="item2" id="item2" class="ardoraInput"> = Iulius Aemiliaque . </p><p> 3.- Viri et feminae = <input type="text" name="item3" id="item3" class="ardoraInput"> . </p><p> 4.- Vna puella et duo pueri = <input type="text" name="item4" id="item4" class="ardoraInput"> </p><p> 5.- <input type="text" name="item5" id="item5" class="ardoraInput"> = Seruus Iulii ancillaeque Aemiliae.</p>'];
var b=["Mg","Mw","MQ","NA","NQ"];
var c=[17,15,17,23,34];
var answers=["SXVsaXVzIGV0IEFlbWlsaWE","VmlyaSBmZW1pbmFlcXVl","SW5zdWxhZSBvcHBpZGFxdWU","Vm5hIHB1ZWxsYSBkdW9xdWUgcHVlcmk","U2VydXVzIEl1bGlpIGV0ICBhbmNpbGxhZSBBZW1pbGlhZQ"];
var a=["2","3","1","4","5"];
var itemCorr=["0","0","0","0","0"];
var itemHelp=["","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDIuMDMuMDQuQ29tcGxldGFyX1RleHRvLkVzY3Jp"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
