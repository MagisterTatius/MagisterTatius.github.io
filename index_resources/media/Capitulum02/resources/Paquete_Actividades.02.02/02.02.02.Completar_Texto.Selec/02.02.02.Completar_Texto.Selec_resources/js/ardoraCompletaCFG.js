//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<p>1.- Cornelius dominus <select name="item1" id="item1" class="ardoraCombo"></select> est. </p><p> 2.- Quintus non seruus sed filius <select name="item2" id="item2" class="ardoraCombo"></select> est. </p><p> 3.- Iulia est soror <select name="item3" id="item3" class="ardoraCombo"></select> et filia <select name="item4" id="item4" class="ardoraCombo"></select>. </p><p> 4.- Numerus <select name="item5" id="item5" class="ardoraCombo"></select> <select name="item6" id="item6" class="ardoraCombo"></select> est tres. </p><p> 5.- Paginae <select name="item7" id="item7" class="ardoraCombo"></select> tui sunt multae. Numerus <select name="item8" id="item8" class="ardoraCombo"></select> magnus est. </p><p> </p>'];
var b=["MTk","NQ","NA","Mjc","MTQ","Mg","MTU","OA","MjY","MjI","MzA","Ng","Mw","MTg","MTA","Mg","MjM","Nw","MzE","MTE","Ng","MQ","Nw","Mw"];
var c=[8,9,17,5,18,5,18,11,6,7,8,8,13,6,17,11,7,5,8,16,6,17,6,15];
var answers=["librorum","liberorum","Aemiliae Iuliique","liber","Aemilius et Iuliae","Iulii","Iulius et Aemiliae","uocabulorum","liberi","Aemilii","uocabula","Aemiliae","paucus seruus","liberi","Quintus et Marcus","pauci serui","Aemilia","libri","uocabuli","Marcus et Quinti","Iulius","paucorum seruorum","Iuliae","Quinti Marcique"];
var a=["5","5","4","7","4","2","4","8","7","6","8","6","1","5","3","1","6","7","8","3","2","1","2","3"];
var itemCorr=["0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDIuMDIuMDIuQ29tcGxldGFyX1RleHRvLlNlbGVj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
