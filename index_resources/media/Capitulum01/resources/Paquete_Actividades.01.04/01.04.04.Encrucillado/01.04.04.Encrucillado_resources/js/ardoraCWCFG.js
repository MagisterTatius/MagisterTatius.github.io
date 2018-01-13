//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=false;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=false;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Arial, Helvetica, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Bene!!"; messageTime=""; messageError="Quodquam uerbum falsum est. Iterum tenta"; messageErrorG="Quodquam uerbum falsum est. Iterum tenta"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDEuMDQuMDQuRW5jcnVjaWxsYWRv"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["Tw","","","","","Vg","","","","","","","","",""],["UA","","","","","Tw","","","","","","","","",""],["UA","","","","","Qw","","","","","","","","",""],["SQ","Tg","Uw","Vg","TA","QQ","RQ","","","","TQ","QQ","Rw","Tg","SQ"],["RA","","","","","Qg","","","","","Vg","","","",""],["QQ","","SQ","","","Vg","","","","","TA","","","",""],["","","TQ","","","TA","","","Tw","","VA","","","",""],["","","UA","Ug","Tw","Vg","SQ","Tg","Qw","SQ","QQ","RQ","","",""],["","","RQ","","","TQ","","","RQ","","","","","",""],["","","Ug","","","","","UA","QQ","Ug","Vg","QQ","","",""],["","","SQ","","","","","","Tg","","","","","",""],["Rg","TA","Vg","Vg","SQ","Vg","Uw","","Vg","","","","","",""],["","","TQ","","","","","","Uw","","","","","",""]];
var x1=[1,6,11,3,9,1,11,3,8,1];
var y1=[1,1,4,6,7,4,4,8,10,12];
var x2=[1,6,11,3,9,7,15,12,12,7];
var y2=[6,9,8,13,13,4,4,8,10,12];
var imaCW=["01.04.04.Encrucillado_resources/media/Celtic_Oppidum_1st_century_B.C..jpg","01.04.04.Encrucillado_resources/media/Vocabula.jpg","01.04.04.Encrucillado_resources/media/Multae_insulae.jpg","01.04.04.Encrucillado_resources/media/Imperium.Romanum.jpg","01.04.04.Encrucillado_resources/media/oceanus.jpg","01.04.04.Encrucillado_resources/media/Insula.jpg","01.04.04.Encrucillado_resources/media/Magnus.jpg","01.04.04.Encrucillado_resources/media/Prouinciae.jpg","01.04.04.Encrucillado_resources/media/paruus.jpg","01.04.04.Encrucillado_resources/media/--1450832689fjT.jpg"];
var audioCW=["","","","","","","","","",""];
var defCW=["In Graecia et in Italia sunt magna et parua.","QVOQVE ____ latinum est. PHILOSOPHIA _____ graecum est.","Pauca sunt oppida in Arabia., sed in Graecia _______ sunt.","Romanum est magnum _________. Multae sunt prouinciae eius.","____________ atlanticus est mare magnum.","Magnae et paruae sunt","Centum et Mille sunt numeri _______.","Multae sunt in imperio romano","Iulia est puella _____","Nilus est magnus ____. Tiberis paruus ____ est."];
var colNum=15;
var rowNum=13;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
