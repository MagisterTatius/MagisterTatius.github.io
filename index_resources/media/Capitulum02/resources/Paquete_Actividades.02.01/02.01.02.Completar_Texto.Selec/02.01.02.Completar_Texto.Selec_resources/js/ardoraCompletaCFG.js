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
var indexTXT=0; var txtC=['<p>1.- Marcus puer romanus est; Iulia <select name="item1" id="item1" class="ardoraCombo"></select> romana est. </p><p> 2.- Iulius est uir romanus; Aemilia est <select name="item2" id="item2" class="ardoraCombo"></select> romana. </p><p> 3.- Quintus non puella, sed <select name="item3" id="item3" class="ardoraCombo"></select> romanus est. </p><p> 4.- Marcus Quintusque sunt <select name="item4" id="item4" class="ardoraCombo"></select>, non puellae. </p><p> 5.- Iulius et Medus non pueri, sed <select name="item5" id="item5" class="ardoraCombo"></select> sunt. Dauus quoque <select name="item6" id="item6" class="ardoraCombo"></select> est. </p><p> 6.- Non uiri, sed <select name="item7" id="item7" class="ardoraCombo"></select> sunt Aemilia Deliaque; Syra quoque <select name="item8" id="item8" class="ardoraCombo"></select> est. </p><p> </p>'];
var b=["Mw","MTA","MTE","MjM","MTg","OA","Ng","Nw","Mg","MTQ","NA","MTk","Mw","Mg","MzA","Ng","Nw","MTU","NQ","MjI","MjY","Mjc","MzE","MQ"];
var c=[7,3,6,4,5,6,7,7,6,5,5,6,4,6,6,3,6,5,4,7,8,7,6,6];
var answers=["ancilla","uir","seruus","puer","serui","femina","ancilla","feminae","femina","filii","pueri","domini","puer","femina","domina","uir","puella","serui","uiri","dominus","ancillae","dominae","puella","puella"];
var a=["1","3","3","6","5","8","2","7","1","4","4","5","3","2","8","6","2","4","5","6","7","7","8","1"];
var itemCorr=["0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDIuMDEuMDIuQ29tcGxldGFyX1RleHRvLlNlbGVj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
