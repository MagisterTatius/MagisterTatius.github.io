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
var c=[5,6,7,4,5,3,7,6,1,2,7,5,4,5,6,7,8,8,7,1,5,7,6,7,7,3,6,7,3,6,4,6,3,3,3,7,3,7,1,6,7,7,4,7,6,11,4,6,5,3,6,6,2,4,7,7,1];
var wordsGame="MDIuMDEuMDUuU2VsZWNjaW9uYXJfcGFsYWJyYV9j"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var testW=["TWVkdXM","c2VydXVz","Z3JhZWN1cw","ZXN0Lg","RGVsaWE","ZXN0","YW5jaWxsYQ","Z3JhZWNh","Lg","SW4","ZmFtaWxpYQ","SXVsaWk","c3VudA","bXVsdGk","Z3JhZWNp","Z3JhZWN1cw","YW5jaWxsYWU","YW5jaWxsYXM","Z3JhZWNhZQ","Lg","RXN0bmU","QWVtaWxpYQ","ZmVtaW5h","Z3JhZWNhPw","QWVtaWxpYQ","bm9u","ZmVtaW5h","Z3JhZWNhLA","c2Vk","cm9tYW5h","ZXN0Lg","SXVsaXVz","bm9u","ZXN0","dWly","Z3JhZWN1cw","c2Vk","cm9tYW51cw","Lg","U3BhcnRh","b3BwaWR1bQ","Z3JhZWN1bQ","ZXN0Lg","U3BhcnRhLA","RGVscGhp","VHVzY3VsdW1xdWU","dHJpYQ","b3BwaWRh","c3VudDo","ZHVv","b3BwaWRh","Z3JhZWNh","ZXQ","dW51bQ","b3BwaWR1bQ","cm9tYW51bQ","Lg"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
