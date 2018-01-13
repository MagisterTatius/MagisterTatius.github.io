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
var wordsGame="MDIuMDIuMDEuUmVsYWNpb25hcl9QYWxhYnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["dWly", "LWk"],["Y2FwaXR1bHVt", "LWk"],["ZmVtaW5h", "LWFl"],["cHVlcg", "LWk"],["cHVlbGxhZQ", "LWFydW0"],["SXVsaWE", "LWFl"],["UXVpbnR1cw", "LWk"],["cGFnaW5h", "LWFl"],["LW9ydW0", "dWlyaQ"],["LWk", "RGF1dXM"],["LWFl", "QWVtaWxpYQ"],["LWFydW0", "bGl0dGVyYWU"],["LWFl", "c3lsbGFiYQ"],["LWk", "dW9jYWJ1bHVt"],["LW9ydW0", "c2VydWk"],["LWk", "bGliZXI"]];
var c=[[3,2],[9,2],[6,3],[4,2],[7,5],[5,3],[7,2],[6,3],[5,4],[2,5],[3,7],[5,8],[3,7],[2,9],[5,5],[2,5]];
var con1=["uir","capitulum","femina","puer","puellae","Iulia","Quintus","pagina"];
var con2=["-i","-orum","-ae","-arum"];
var con3=["uiri","Dauus","Aemilia","litterae","syllaba","uocabulum","serui","liber"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
