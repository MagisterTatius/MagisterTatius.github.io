//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=20;
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
var fActi="'Arial Black', Gadget, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Optime!!"; messageTime=""; messageError="Falsum est!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var imaSel=0; texSel=0;
var board=[["03.03.02.Album_Escribir_resources/media/TEFFVEE.jpg","03.03.02.Album_Escribir_resources/media/SU1QUk9CVlM.jpg","03.03.02.Album_Escribir_resources/media/QVZESVQ.jpg","03.03.02.Album_Escribir_resources/media/RE9STUlU.jpg"],["03.03.02.Album_Escribir_resources/media/UFZMU0FU.jpg","03.03.02.Album_Escribir_resources/media/Vk9DQVQ.jpg","03.03.02.Album_Escribir_resources/media/VkVOSVQ.jpg","03.03.02.Album_Escribir_resources/media/SU5URVJST0dBVA.jpg"],["03.03.02.Album_Escribir_resources/media/UkVTUE9OREVU.jpg","03.03.02.Album_Escribir_resources/media/UklERVQ.jpg","03.03.02.Album_Escribir_resources/media/UExPUkFU.jpg","03.03.02.Album_Escribir_resources/media/SVJBVEE.jpg"],["0","0","0","0"]]; var xAnswer=5; answer=[]; rows=6; cols=10; xKey=-1; yKey=-1; animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var words=[]; answers=[["LAETA","IMPROBVS","AVDIT","DORMIT"],["PVLSAT","VOCAT","VENIT","INTERROGAT"],["RESPONDET","RIDET","PLORAT","IRATA"],["0","0","0","0"]]; letters=[]; indexLetters=0; xSel=-1; ySel=-1; iLetter=-1; jLetter=-1;
var wordsGame="MDMuMDMuMDIuQWxidW1fRXNjcmliaXI"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
