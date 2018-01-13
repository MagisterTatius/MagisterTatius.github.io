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
var c=[6,7,7,2,4,8,5,5,5,3,6,1,6,7,7,8,3,5,1,6,5,2,3,7,5,4,7,7,6,3,2,3,6,7,7,9,4,5,1,5,1,8,4,3,7,3,5,2,6,7,7,11,2,3,5,7,9,9,8,2,4,6,3,6,3,6,7,7,7,6,3,1,4,9,7,8,7,5,4,5,6,9,7,6,5,7,8,2,4,1,7,4,6,3,5,3];
var wordsGame="MDQuMDIuMDYuU2VsZWNjaW9uYXJfcGFsYWJyYV9j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["UHVlbGxh","Y2FudGF0Lg","TWFyY3VzOg","qw","VGFjZQ","SXVsaWG7Lg","TmVxdWU","SXVsaWE","dGFjZXQ","c2Vk","Y2FudGF0","Lg","TWFyY3Vz","cHVlbGxhbQ","cHVsc2F0Lg","UXVpbnR1cyw","cXVp","YWRlc3Q","LA","TWFyY3Vt","dWlkZXQ","ZXQ","ZXVt","cHVsc2F0Lg","UHVlciw","cXVlbQ","UXVpbnR1cw","cHVsc2F0LA","aXJhdHVz","ZXN0","ZXQ","ZXVt","cXVvcXVl","cHVsc2F0Lg","UXVpbnR1cw","QWVtaWxpYW0s","cXVhZQ","YWJlc3Q","LA","dW9jYXQ","Og","q01hbW1hLA","dWVuaQ","uy4","QWVtaWxpYQ","ZXVt","YXVkaXQ","ZXQ","dWVuaXQu","QWVtaWxpYQ","UXVpbnR1bQ","aW50ZXJyb2dhdDo","qw","Q3Vy","SXVsaWE","cGxvcmF0Pw","UmVzcG9uZGUs","UXVpbnRluy4","UXVpbnR1czo","qw","UXVpYQ","TWFyY3Vz","ZWFt","cHVsc2F0","uy4","TWFyY3Vz","aXJhdHVzOg","q0l1bGlh","aW1wcm9iYQ","cHVlbGxh","ZXN0","LA","cXVpYQ","Y2FudGF0uy4","QWVtaWxpYQ","aW1wZXJhdDo","q1RhY2Us","TWFyY2U","Ibsu","TWF0ZXI","ZmlsaXVt","dWVyYmVyYXQu","UXVpbnR1cw","cmlkZXQs","SXVsaWE","cGxvcmF0Lg","QWVtaWxpYTo","qw","VGFjZQ","LA","UXVpbnRlLg","UHVlcg","cHJvYnVz","bm9u","cmlkZXQ","Lrs"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
