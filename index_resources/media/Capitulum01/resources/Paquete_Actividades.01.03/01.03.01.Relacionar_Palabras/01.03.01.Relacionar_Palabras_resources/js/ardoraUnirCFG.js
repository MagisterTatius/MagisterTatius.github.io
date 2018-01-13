//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=1;
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
var timeOnMessage=5; messageOk="Optime!!!"; messageTime=""; messageError="Me paenitet. Falsum est!"; messageErrorG="Me paenitet. Falsum est!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDEuMDMuMDEuUmVsYWNpb25hcl9QYWxhYnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Zmx1dWl1cw", "bWFnbnVz"],["bWFnbnVz", "TmlsdXM"],["Zmx1dWlp", "bWFnbmk"],["bWFnbmk", "UmhlbnVzIGV0IERhbnV1aXVz"],["aW5zdWxh", "bWFnbmE"],["bWFnbmE", "Q3JldGE"],["aW5zdWxhZQ", "bWFnbmFl"],["bWFnbmFl", "U2ljaWxpYSBldCBTYXJkaW5pYQ"],["b3BwaWR1bQ", "bWFnbnVt"],["bWFnbnVt", "QnJ1bmRpc2l1bQ"],["b3BwaWRh", "bWFnbmE"],["bWFnbmE", "Um9tYSBldCBBdGhlbmFl"]];
var c=[[7,6],[6,5],[6,5],[5,18],[6,5],[5,5],[7,6],[6,19],[7,6],[6,10],[6,5],[5,15]];
var con1=["fluuius","fluuii","insula","insulae","oppidum","oppida"];
var con2=["magnus","magna","magnum","magni","magnae"];
var con3=["Nilus","Rhenus et Danuuius","Creta","Sicilia et Sardinia","Brundisium","Roma et Athenae"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
