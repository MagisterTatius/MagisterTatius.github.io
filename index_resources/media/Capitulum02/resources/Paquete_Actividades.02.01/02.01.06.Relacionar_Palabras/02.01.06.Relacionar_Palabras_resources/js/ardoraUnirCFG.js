//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=16; attempts=0; attemptsMax=1;
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
var wordsGame="MDIuMDEuMDYuUmVsYWNpb25hcl9QYWxhYnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["cHVlbGxh", "ZmVtaW5pbnVt"],["b3BwaWR1bQ", "bmV1dHJ1bQ"],["Y2FwaXR1bGE", "bmV1dHJ1bQ"],["ZG9taW5h", "ZmVtaW5pbnVt"],["bGliZXI", "bWFzY3VsaW51bQ"],["bGl0dGVyYWU", "ZmVtaW5pbnVt"],["dW9jYWJ1bGE", "bmV1dHJ1bQ"],["Zmx1dWlp", "bWFzY3VsaW51bQ"],["bWFzY3VsaW51bQ", "cGF0ZXI"],["bWFzY3VsaW51bQ", "bGliZXJp"],["ZmVtaW5pbnVt", "YW5jaWxsYQ"],["bmV1dHJ1bQ", "ZXhlbXBsYQ"],["bWFzY3VsaW51bQ", "c2VydXVz"],["ZmVtaW5pbnVt", "cGFnaW5h"],["bmV1dHJ1bQ", "aW1wZXJpdW0"],["ZmVtaW5pbnVt", "aW5zdWxh"]];
var c=[[6,9],[7,7],[8,7],[6,9],[5,10],[8,9],[8,7],[6,10],[10,5],[10,6],[9,7],[7,7],[10,6],[9,6],[7,8],[9,6]];
var con1=["puella","oppidum","capitula","domina","liber","litterae","uocabula","fluuii"];
var con2=["masculinum","femininum","neutrum"];
var con3=["pater","liberi","ancilla","exempla","seruus","pagina","imperium","insula"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
