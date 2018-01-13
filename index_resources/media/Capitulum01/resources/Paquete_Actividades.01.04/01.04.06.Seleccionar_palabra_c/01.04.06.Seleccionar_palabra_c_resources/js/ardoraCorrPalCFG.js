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
var c=[7,6,5,4,7,2,8,6,7,6,5,5,2,6,6,5,5,7,3,7,6,2,7,6,4,5,7,6,10,2,5,7,6,3,8,8,7,6,6,4,6,3,7,3,7,4,6,2,7,3,7,3,10,7,5,9,9,6,2,6,6,6,4,1,2,2,6,6,5,1,2,1,8,7,5,1,5,7,1,7,7,4,8,9,7,4,2,6,6,4,6,8,3,5,9];
var wordsGame="MDEuMDQuMDYuU2VsZWNjaW9uYXJfcGFsYWJyYV9j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["Q29yc2ljYQ","aW5zdWxh","bWFnbmE","ZXN0Lg","U2ljaWxpYQ","ZXQ","U2FyZGluaWE","cXVvcXVl","aW5zdWxhZQ","bWFnbmFl","c3VudC4","TmlsdXM","ZXQ","UmhlbnVz","Zmx1dWlp","bWFnbmk","c3VudC4","VGliZXJpcw","ZXN0","Zmx1dWl1cw","cGFydXVz","SW4","aW1wZXJpbw","cm9tYW5v","c3VudA","bXVsdGE","b3BwaWRhLA","bXVsdGFl","cHJvdWluY2lhZQ","ZXQ","bXVsdGk","Zmx1dWlpLg","TWFnbnVt","ZXN0","aW1wZXJpdW0","cm9tYW51bS4","T2NlYW51cw","cXVvcXVl","bWFnbnVz","ZXN0Lg","UmhlbnVz","bm9u","b3BwaWR1bQ","c2Vk","Zmx1dWl1cw","ZXN0Lg","R2FsbGlh","ZXQ","R3JhZWNpYQ","bm9u","aW5zdWxhZQ","c2Vk","cHJvdWluY2lhZQ","cm9tYW5hZQ","c3VudC4","QnJpdGFubmlh","cHJvdWluY2lh","cm9tYW5h","ZXQ","cXVvcXVl","aW5zdWxh","cm9tYW5h","ZXN0Lg","SQ","ZXQ","SUk","bnVtZXJp","cm9tYW5p","c3VudC4","QQ","ZXQ","Qg","bGl0dGVyYWU","bGF0aW5hZQ","c3VudC4","QQ","cHJpbWE","bGl0dGVyYQ","Qg","c2VjdW5kYQ","bGl0dGVyYQ","ZXN0Lg","SW1wZXJpdW0","dW9jYWJ1bHVt","bGF0aW51bQ","ZXN0Lg","SW4","bGluZ3Vh","bGF0aW5h","c3VudA","cGF1Y2Fl","bGl0dGVyYWU","c2Vk","bXVsdGE","dW9jYWJ1bGEu"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
