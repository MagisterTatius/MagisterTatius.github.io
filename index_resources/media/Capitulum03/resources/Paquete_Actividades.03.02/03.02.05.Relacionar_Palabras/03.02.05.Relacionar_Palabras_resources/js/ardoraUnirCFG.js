//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
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
var wordsGame="MDMuMDIuMDUuUmVsYWNpb25hcl9QYWxhYnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["TWVkdW0gSXVsaXVzIHVvY2F0Lg", "UXVlbSBJdWxpdXMgdW9jYXQ/"],["SXVsaWEgQWVtaWxpYW0gdW9jYXQu", "UXVpcyBBZW1pbGlhbSB1b2NhdD8"],["SXVsaXVtIEFlbWlsaWEgdW9jYXQu", "UXVlbSBBZW1pbGlhIHVvY2F0Pw"],["QWVtaWxpYSBNYXJjdW0gdWVyYmVyYXQu", "UXVpcyBNYXJjdW0gdWVyYmVyYXQ/"],["RGVsaWEgU3lyYXF1ZSBhbmNpbGxhZSBBZW1pbGlhZSBzdW50Lg", "Q3VpdXMgYW5jaWxsYWUgc3VudCBEZWxpYSBldCBTeXJhPw"],["UXVpbnRpIHBhdGVyIGVzdCBJdWxpdXMu", "Q3VpdXMgcGF0ZXIgZXN0IEl1bGl1cz8"],["SXVsaXVzIGVzdCBwYXRlciBJdWxpYWUu", "UXVpcyBlc3QgcGF0ZXIgSXVsaWFlPw"]];
var c=[[19,18],[21,20],[21,19],[24,21],[37,34],[24,23],[24,22]];
var con1=["Medum Iulius uocat.","Iulia Aemiliam uocat.","Iulium Aemilia uocat.","Aemilia Marcum uerberat.","Delia Syraque ancillae Aemiliae sunt.","Quinti pater est Iulius.","Iulius est pater Iuliae."];
var con2=["Quem Iulius uocat?","Quis Aemiliam uocat?","Quem Aemilia uocat?","Quis Marcum uerberat?","Cuius ancillae sunt Delia et Syra?","Cuius pater est Iulius?","Quis est pater Iuliae?"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
