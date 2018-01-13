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
var indexTXT=0; var txtC=['<p>1.- III est numerus <select name="item1" id="item1" class="ardoraCombo"></select>. </p><p> 2.- Creta <select name="item2" id="item2" class="ardoraCombo"></select> graeca est. </p><p> 3.- Creta et Melita insulae <select name="item3" id="item3" class="ardoraCombo"></select> sunt. </p><p> 4.- Estisne uos <select name="item4" id="item4" class="ardoraCombo"></select> romani? - Nos puellae <select name="item5" id="item5" class="ardoraCombo"></select> sumus.  </p><p> 5.- Suntne Sparta et Brundisium <select name="item6" id="item6" class="ardoraCombo"></select> graeca? Sparta oppidum <select name="item7" id="item7" class="ardoraCombo"></select> est, sed Brundisium <select name="item8" id="item8" class="ardoraCombo"></select> italicum est. </p><p> 6.- Esne tu puella <select name="item9" id="item9" class="ardoraCombo"></select>? - Non, ego <select name="item10" id="item10" class="ardoraCombo"></select> graecus sum. </p><p>  </p><p>  </p><p> </p>'];
var b=["MTA","MTE","OQ","Mjc","MjM","NA","Mg","MzQ","MTk","Nw","MTA","OA","MTQ","MjY","MTU","NQ","Nw","Mw","MTg","MzA","Ng","Mw","MzE","MjI","MzU","Mzg","Mzk","Ng","Mg","MQ"];
var c=[6,5,6,6,7,5,5,7,6,7,4,7,4,7,6,7,7,6,6,9,6,5,7,6,6,7,6,7,6,6];
var answers=["paruum","parua","romana","graeca","littera","pueri","parua","romanus","graeci","graecum","puer","oppidum","puer","graecus","puerus","graecae","oppidum","paruae","graeca","uocabulum","oppida","parui","fluuius","insula","romani","fluuius","insula","littera","insula","paruus"];
var a=["3","3","9","7","6","4","1","9","5","7","10","8","4","7","4","5","2","3","5","8","6","1","8","6","9","10","10","2","2","1"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDEuMDMuMDIuQ29tcGxldGFyX1RleHRvLlNlbGVj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
