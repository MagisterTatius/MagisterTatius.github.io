//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=1;
var score=0; scoreMax=9; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Laetare! Optime egisti."; messageTime=""; messageError="Falsum. Iterum tenta."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>1.- Brundisium <input type="text" name="item1" id="item1" class="ardoraInput"> est, Sparta et Delphi <input type="text" name="item2" id="item2" class="ardoraInput"> sunt. </p><p> 2.- Quid est III? III <input type="text" name="item3" id="item3" class="ardoraInput"> romanus est. </p><p> 3.- Estne Creta insula <input type="text" name="item4" id="item4" class="ardoraInput">? Creta et quoque Sicilia <input type="text" name="item5" id="item5" class="ardoraInput"> magnae sunt. </p><p> 4.- Vbi sunt magni <input type="text" name="item6" id="item6" class="ardoraInput">? In Europa magni et quoque parui sunt fluuii. </p><p> 5.- In Germania oppida multa et <input type="text" name="item7" id="item7" class="ardoraInput"> sunt. </p><p> 6.- C et D litterae <input type="text" name="item8" id="item8" class="ardoraInput"> sunt. A <input type="text" name="item9" id="item9" class="ardoraInput"> latina, sed quoque graeca est. </p><p>  </p><p> </p>'];
var b=["Mw","Ng","NQ","Nw","OA","OQ","MQ","Mg","NA"];
var c=[7,6,7,5,7,7,14,12,5];
var answers=["bnVtZXJ1cw","Zmx1dWlp","aW5zdWxhZQ","cGFydWE","bGF0aW5hZQ","bGl0dGVyYQ","b3BwaWR1bSBtYWdudW0","b3BwaWRhIHBhcnVh","bWFnbmE"];
var a=["3","6","5","7","8","9","1","2","4"];
var itemCorr=["0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDEuMDMuMDQuQ29tcGxldGFyX1RleHRvLkVzY3Jp"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
