//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=13; attempts=0; attemptsMax=1;
var score=0; scoreMax=13; scoreInc=1; scoreDec=1
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
var indexTXT=0; var txtC=['<p>1.- Vbi est pecunia Iulii? Pecunia <select name="item1" id="item1" class="ardoraCombo"></select> in sacculo est. </p><p> 2.- Iulius pecuniam <select name="item2" id="item2" class="ardoraCombo"></select> in mensa ponit. Aemilia pecuniam <select name="item3" id="item3" class="ardoraCombo"></select> uidet. </p><p> 3.- Adsunt ancillae Aemiliae. Serui <select name="item4" id="item4" class="ardoraCombo"></select> absunt. Iulius seruum <select name="item5" id="item5" class="ardoraCombo"></select> uocat. </p><p> 4.- Dauus dominum <select name="item6" id="item6" class="ardoraCombo"></select> salutat et sacculum <select name="item7" id="item7" class="ardoraCombo"></select> in mensa ponit. </p><p>  </p><p> </p>','<p>5.- Medus Dauum accusat neque in sacculo <select name="item8" id="item8" class="ardoraCombo"></select> nulla pecunia est. </p><p> 6.- Iulius: «Aperi sacculum <select name="item9" id="item9" class="ardoraCombo"></select>, Daue.» Sacculus <select name="item10" id="item10" class="ardoraCombo"></select> uacuus est.  </p><p> 7.- Dauus: «Sacculus <select name="item11" id="item11" class="ardoraCombo"></select> pecuniam <select name="item12" id="item12" class="ardoraCombo"></select> non habet, domine.» Medus pecuniam <select name="item13" id="item13" class="ardoraCombo"></select> habet. </p><p> </p>'];
var b=["MzA","NQ","MTk","Nw","MzE","NA","MjY","MTI","MQ","Mw","Ng","MTE","NDc","NDY","OQ","Mjc","MjI","MTQ","MzU","MTg","MTE","MzQ","MjM","Ng","Nw","OA","MTM","MTA","Mzg","Mzk","NDI","MTA","NTA","MTU","NDM","Mg","NTE","Mg","Mw"];
var c=[3,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,3,3];
var answers=["suo","suum","tuum","meam","meo","eius","eius","tuam","eius","eius","suum","meus","eius","meam","tuum","tuum","eius","sui","eius","eius","tuam","suum","meum","eius","suum","eius","eius","eius","suus","meus","tuus","suam","suam","mei","eius","suam","tuam","sua","tua"];
var a=["8","5","5","2","8","4","7","12","1","3","6","11","12","12","9","7","6","4","9","5","3","9","6","2","7","8","13","10","10","10","11","3","13","4","11","2","13","1","1"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDQuMDIuMDIuQ29tcGxldGFyX1RleHRvLlNlbGVj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
