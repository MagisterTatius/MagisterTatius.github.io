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
var c=[6,6,4,5,4,4,3,6,4,6,4,7,4,5,4,7,5,3,6,4,6,7,3,5,2,7,4,6,4,8,4,5,8,6,7,5,2,7,11,6,2,8,7,10,7,2,6,4,3,3,5,6,7,3,11,5,3,5,4,3,7,10,7,9];
var wordsGame="MDMuMDEuMDcuU2VsZWNjaW9uYXJfcGFsYWJyYV9j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["UHVlbGxh","Y2FudGF0","cXVpYQ","bGFldGE","ZXN0Lg","UHVlcg","ZWFt","cHVsc2F0","cXVpYQ","aXJhdHVz","ZXN0Lg","UHVlbGxhLA","cXVhZQ","SXVsaWE","ZXN0LA","cGxvcmF0Lg","UHVlciw","cXVp","TWFyY3Vz","ZXN0LA","cmlkZXQu","UXVpbnR1cw","ZXVt","dWlkZXQ","ZXQ","cHVsc2F0LA","cXVpYQ","TWFyY3Vz","cHVlcg","aW1wcm9idXM","ZXN0Lg","SXVsaWE","QWVtaWxpYW0","dW9jYXQu","QWVtaWxpYQ","dWVuaXQ","ZXQ","UXVpbnR1bQ","aW50ZXJyb2dhdDo","q1F1aXM","bWU","dW9jYXQ/uw","UXVpbnR1cw","cmVzcG9uZGV0Og","q0l1bGlh","dGU","dW9jYXQs","cXVpYQ","aWFt","bm9u","bGFldGE","ZXN0Lrs","QWVtaWxpYQ","ZXVt","aW50ZXJyb2dhdDo","q1ZiaQ","ZXN0","cGF0ZXI","dHV1cw","P7s","UXVpbnR1cw","cmVzcG9uZGV0Og","q1BhdGVy","ZG9ybWl0Lrs"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
