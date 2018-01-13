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
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Optime!!"; messageTime=""; messageError="Quidquam falsum est."; messageErrorG="Quidquam falsum est."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDMuMDIuMDIuU2VsZWNjaW9uYXJfcGFsX3BhcmFn"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var sw=["ZG9ybWl0","cXVpYQ","dW9jYWJ1bGE","dWVuaXQ","cGFydWFt","cHVlcnVt","aWFt","ZXN0"]; iw=["MQ","MQ","MQ","MQ","MQ","MQ","MQ","MQ"];
var testW=["1.","pulsat","•","uocat","•","dormit","•","interrogat","2.","cur","•","quia","•","quot","•","num","3.","ancilla","•","scaena","•","uocabula","•","littera","4.","ridet","•","uenit","•","respondet","•","uidet","5.","familiam","•","paruam","•","filiam","•","ancillam","6.","puerum","•","liberorum","•","filiorum","•","seruorum","7.","me","•","eum","•","iam","•","te","8.","quia","•","quae","•","quem","•","cuius","9.","ridet","•","est","•","cantat","•","audit"];
var selColor="#FFFFFF"; selFonColor="#FFFFFF";selType=1;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
