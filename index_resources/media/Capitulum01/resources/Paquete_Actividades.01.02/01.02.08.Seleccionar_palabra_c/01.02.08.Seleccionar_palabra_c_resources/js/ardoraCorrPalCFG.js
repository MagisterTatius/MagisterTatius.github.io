//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
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
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Bene!!"; messageTime=""; messageError="Falsum est!"; messageErrorG="Falsum est!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var c=[7,6,4,8,2,7,7,5,6,6,5,4,9,3,6,6,3,6,5,4,5,10,2,8,10,3,2,8,3,2,6,4,10,2,8,6,2,6,5,4,6,7,3,6,6,4,3,3,5,6,6,3,5,6,6];
var wordsGame="MDEuMDIuMDguU2VsZWNjaW9uYXJfcGFsYWJyYV9j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["U2ljaWxpYQ","aW5zdWxh","ZXN0Lg","U2FyZGluaWE","ZXQ","Q29yc2ljYQ","aW5zdWxhZQ","c3VudC4","TWVsaXRh","aW5zdWxh","cGFydWE","ZXN0Lg","QnJpdGFubmlh","bm9u","aW5zdWxh","cGFydWEs","c2Vk","aW5zdWxh","bWFnbmE","ZXN0Lg","RXN0bmU","QnJ1bmRpc2l1bQ","aW4","R3JhZWNpYT8","QnJ1bmRpc2l1bQ","bm9u","aW4","R3JhZWNpYSw","c2Vk","aW4","SXRhbGlh","ZXN0Lg","TWVkaW9sYW51bQ","ZXQ","TmVhcG9saXM","cXVvcXVl","aW4","SXRhbGlh","c3VudC4","RXNuZQ","cHVlbGxh","cm9tYW5hPw","Tm9u","cHVlbGxh","Z3JhZWNh","c3VtLA","c2Vk","dW9z","cHVlcmk","cm9tYW5p","ZXN0aXMu","Tm9z","cHVlcmk","cm9tYW5p","c3VtdXMu"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
