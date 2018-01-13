//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
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
var wordsGame="MDQuMDIuMDEuUmVsYWNpb25hcl9QYWxhYnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["MS4tSXVsaXVzOqtBcGVyaSBzYWNjdWx1bSB0dXVtLCBEYXVlIbs", "Yy4gRGF1dXM"],["Mi4tRGF1dXMgc2FjY3VsdW0gc3V1bSBhcGVyaXQu", "Yy4gRGF1dXM"],["My4tSXVsaXVzIHBlY3VuaWFtIHN1YW0gbm9uIHVpZGV0Lg", "YS4gSXVsaXVz"],["NC4tRGF1dXM6IKtTYWNjdWx1cyBtZXVzIHVhY3V1cyBlc3QsIGRvbWluZS67", "Yy4gRGF1dXM"],["Yy4gRGF1dXM", "NS4tSXVsaXVzIHVudW0gbnVtbXVtIGluIHNhY2N1bG8gZWl1cyBwb25pdA"],["YS4gSXVsaXVz", "Ni4tTWVkdXMsIHF1aSBpYW0gYWJlc3QsIG51bW1vcyBlaXVzIG51bWVyYXQ6IKtOb25hZ2ludGEhIbs"],["YS4gSXVsaXVz", "Ny4tSXVsaXVzIE1lZHVtIG5vbiB1aWRldC4gU2VydXVzIGVpdXMgYWJlc3Qu"],["YS4gSXVsaXVz", "OC4tQWVtaWxpYTogq1NlcnVpIHR1aSBpYW0gYWJzdW50uy4"]];
var c=[[40,8],[30,8],[34,9],[47,8],[8,43],[9,61],[9,45],[9,37]];
var con1=["1.-Iulius:«Aperi sacculum tuum, Daue!»","2.-Dauus sacculum suum aperit.","3.-Iulius pecuniam suam non uidet.","4.-Dauus: «Sacculus meus uacuus est, domine.»"];
var con2=["a. Iulius","b. Aemilia","c. Dauus","d. Medus"];
var con3=["5.-Iulius unum nummum in sacculo eius ponit","6.-Medus, qui iam abest, nummos eius numerat: «Nonaginta!!»","7.-Iulius Medum non uidet. Seruus eius abest.","8.-Aemilia: «Serui tui iam absunt»."];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
