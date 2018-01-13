//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360;timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=8;
var score=0;scoreMax=1;scoreInc=1; scoreDec=0;
var typeGame=0;
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
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Optime!!!"; messageTime=""; messageError=""; messageErrorG=""; messageAttempts="Iterum tenta!"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError=""; borderAttempts="#FF0000";
var wordsGame="MDIuMDQuMDQuWG9nb19NZW1vcmlh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var wo1=["Pater liberorum","Serui Iulii","Filia Aemiliae et Iulii","Liberi Iulii et Aemiliae","Viri","Domina ancillarum","Ceteri ceteraeque","Pueri"];im1=["","","","","","","",""];mp31=["","","","","","","",""];
var wo2=["","","","","","","",""];im2=["02.10.liberi.jpg","02.01.uir.jpg","02.14.domina.jpg","02.16.Ceteri_Ceterae.jpg","02.06.pater.jpg","02.09.filia.jpg","02.03.puer.jpg","02.11.seruus.jpg"];mp32=["","","","","","","",""];
var cols=4; rows=4; items=8; itp=["MTA","MTE","MTI","MTM","MTQ","MTU","MTY","MTc"]; pos=["MjQ","Mjc","MjU","MjA","MjE","MjI","MjM","MjY"];
var boardGame=[["","","",""],["","","",""],["","","",""],["","","",""]]; dirMedia="02.04.04.Xogo_Memoria_resources/media/"
var open1R=""; open1C=""; open2R=""; open2C=""; ansDo=0;
var a;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
