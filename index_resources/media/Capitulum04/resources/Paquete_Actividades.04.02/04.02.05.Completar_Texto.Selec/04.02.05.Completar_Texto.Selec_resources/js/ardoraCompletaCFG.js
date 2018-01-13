//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<p>1.- Nummi <select name="item1" id="item1" class="ardoraCombo"></select> in sacculo Medi sunt, non eius sed Iulii sunt. </p><p> 2.- Pecunia <select name="item2" id="item2" class="ardoraCombo"></select> Medus in sacculo suo habet, Iulii est. </p><p> 3.- Dauus sacculum suum, <select name="item3" id="item3" class="ardoraCombo"></select> uacuus est, in mensa ponit. </p><p> 4.- Iulius unum nummum, <select name="item4" id="item4" class="ardoraCombo"></select> in sacculo eius est, in sacculo Daui ponit.</p>','<p>5.- Iam sacculus Daui, <select name="item5" id="item5" class="ardoraCombo"></select> Aemilia in mensa uidet, uacuus non est. </p><p> 6.- Baculum, <select name="item6" id="item6" class="ardoraCombo"></select> Iulius non uidet, in mensa est. </p><p> 7.- Pecuniam, <select name="item7" id="item7" class="ardoraCombo"></select> Iulii est, iam Medus numerat: «Nonaginta!.»</p>'];
var b=["Mg","MQ","Mjg","MTE","Mjc","Mjk","MTU","NA","MzQ","MzI","MjA","Mw","NQ","Mw","MTQ","Mzg","Mg","Ng","Mzk","MTY","NDA","MzM","MTc","MjE","MTA","MzU","NA","Nw","MjI","NDE","OQ","NQ","OA","MjM","MjY"];
var c=[4,3,4,4,4,4,4,3,4,3,4,3,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,3];
var answers=["quam","qui","quam","quod","quae","quod","quae","qui","quae","qui","quem","qui","quem","quem","quem","quam","quae","quod","qui","quam","quem","quem","quod","quae","quem","quam","quam","quae","quam","quod","qui","quod","quae","quod","qui"];
var a=["2","1","5","2","5","5","3","4","6","6","4","3","5","1","3","7","1","6","7","3","7","6","3","4","2","6","1","7","4","7","2","1","2","4","5"];
var itemCorr=["0","0","0","0","0","0","0"];
var itemHelp=["","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDQuMDIuMDUuQ29tcGxldGFyX1RleHRvLlNlbGVj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
