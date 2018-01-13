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
var c=[2,7,6,5,2,5,6,5,6,7,4,3,6,5,5,3,7,6,7,4,3,7,4,2,6,4,5,6,2,6,4,3,7,6,3,6,4,2,7,6,6,6,7,5,6,2,6,7,7,4,8,2,7,7,5,4,7,6,5,6,6,5,4,9,3,6,5,3,6,5,4,5,2,5,6,2,7,6,5,4,7,4,7,6,7,4,3,6,5,5,8,7,6,3,2,7];
var wordsGame="MDEuMDMuMDguU2VsZWNjaW9uYXJfcGFsYWJyYV9j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["SW4","aW1wZXJpbw","cm9tYW5v","bXVsdGk","ZXQ","bWFnbmk","Zmx1dWlp","c3VudC4","UmhlbnVz","Zmx1dWl1cw","ZXN0Lg","RHVv","Zmx1dWlp","bWFnbmk","c3VudC4","U2Vk","VGliZXJpcw","cGFydXVz","Zmx1dWl1cw","ZXN0Lg","VmJp","VGliZXJpcw","ZXN0Pw","SW4","SXRhbGlh","ZXN0Lg","UGFkdXM","cXVvcXVl","aW4","SXRhbGlh","ZXN0LA","c2Vk","Zmx1dWl1cw","bWFnbnVz","bm9u","cGFydXVz","ZXN0Lg","SW4","aW1wZXJpbw","cm9tYW5v","cXVvcXVl","bXVsdGFl","aW5zdWxhZQ","c3VudCw","cGFydWFl","ZXQ","bWFnbmFl","U2ljaWxpYQ","aW5zdWxhZQ","ZXN0Lg","U2FyZGluaWE","ZXQ","Q29yc2ljYQ","aW5zdWxhZQ","c3VudC4","VHJlcw","aW5zdWxhZQ","bWFnbmFl","c3VudC4","TWVsaXRh","aW5zdWxh","cGFydWE","ZXN0Lg","QnJpdGFubmlh","bm9u","aW5zdWxh","cGFydWE","c2Vk","aW5zdWxh","bWFnbmE","ZXN0Lg","TXVsdGE","ZXQ","bWFnbmE","b3BwaWRh","aW4","aW1wZXJpbw","cm9tYW5v","c3VudC4","Um9tYQ","b3BwaWR1bQ","ZXN0Lg","QXRoZW5hZQ","cXVvcXVl","b3BwaWR1bQ","ZXN0Lg","RHVv","b3BwaWRh","bWFnbmE","c3VudC4","VHVzY3VsdW0","b3BwaWR1bQ","cGFydXVt","ZXN0","aW4","SXRhbGlhLg"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
