//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
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
var timeOnMessage=5; messageOk="Bene!!!"; messageTime=""; messageError="Inueni errum et iterum tenta"; messageErrorG="Inueni errum et iterum tenta"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDEuMDMuMDkuRXNxdWVtYS5Db21wbGV0YXJfQ2Fk"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var depth=-1;var nodeCount=0;
var nodeF=["TlVNRVJWUw","U0lOR1ZMQVJJUw","Rmx1dWl1cyBtYWdudXM","U0lOR1ZMQVJJUw","SW5zdWxhIG1hZ25h","U0lOR1ZMQVJJUw","T3BwaWR1bSBtYWdudW0","TlVNRVJWUw","UExWUkFMSVM","Rmx1dWlpIG1hZ25p","UExWUkFMSVM","SW5zdWxhZSBtYWduYWU","UExWUkFMSVM","T3BwaWRhIG1hZ25h"];
var nodeFS=[7,10,14,10,12,10,14,7,8,12,8,14,8,12];
var nodeE=["U0lOR1ZMQVJJUw","Rmx1dWl1cyBtYWdudXM","LXVz","SW5zdWxhIG1hZ25h","LWE","T3BwaWR1bSBtYWdudW0","LXVt","UExWUkFMSVM","Rmx1dWlpIG1hZ25p","LWk","SW5zdWxhZSBtYWduYWU","LWFl","T3BwaWRhIG1hZ25h","LWE"];
var nodeES=[10,14,3,12,2,14,3,8,12,2,14,3,12,2];
var nodeCount=0;var ind=0;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
