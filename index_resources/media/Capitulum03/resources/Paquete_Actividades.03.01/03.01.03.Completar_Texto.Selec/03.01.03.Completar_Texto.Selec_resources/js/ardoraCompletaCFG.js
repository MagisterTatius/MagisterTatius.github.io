//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=1;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=1;
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
var timeOnMessage=5; messageOk="Bene egisti!"; messageTime=""; messageError="Falsum est! Me paenitet."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>1.- <select name="item1" id="item1" class="ardoraCombo"></select> <select name="item2" id="item2" class="ardoraCombo"></select> pulsat. </p><p> 2.- <select name="item3" id="item3" class="ardoraCombo"></select> Marcum uidet et <select name="item4" id="item4" class="ardoraCombo"></select> pulsat. </p><p> 3.- Iulia <select name="item5" id="item5" class="ardoraCombo"></select> uocat. Marcus <select name="item6" id="item6" class="ardoraCombo"></select> pulsat. </p><p> 4.- Quintus <select name="item7" id="item7" class="ardoraCombo"></select> uocat. Iulius <select name="item8" id="item8" class="ardoraCombo"></select> audit et uenit. </p><p> 5.- <select name="item9" id="item9" class="ardoraCombo"></select> <select name="item10" id="item10" class="ardoraCombo"></select> uerberat. </p><p> </p>'];
var b=["OA","Nw","MTk","Mjc","MzA","MjM","Mzg","Mw","MTQ","MTA","MjY","Mzk","MzQ","MTU","NQ","MTg","MTE","Ng","MjI","MzE","OQ","MzU","MTA","MQ","Mg","Nw","NA","Mw","Mg","Ng"];
var c=[3,6,8,5,3,6,6,7,3,7,6,5,5,3,8,7,6,7,7,3,6,6,6,6,6,6,3,5,6,5];
var answers=["eum","Iuliae","Aemiliae","Iulii","eam","Quinti","Marcus","Quintus","eam","Quintum","Iulius","Marci","Iulii","iam","Aemiliam","Aemilia","Quinti","Quintum","Quintus","iam","Iulius","Iulium","Marcum","Marcus","Marcum","Iulium","eum","Marci","Iuliam","Iulia"];
var a=["8","2","5","7","8","6","10","3","4","3","7","10","9","4","5","5","3","6","6","8","9","9","10","1","1","7","4","1","2","2"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDMuMDEuMDMuQ29tcGxldGFyX1RleHRvLlNlbGVj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
