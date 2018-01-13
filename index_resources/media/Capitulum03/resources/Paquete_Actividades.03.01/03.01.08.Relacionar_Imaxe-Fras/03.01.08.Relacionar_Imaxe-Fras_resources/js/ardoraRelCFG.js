//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=7; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk="Optime!!"; messageTime=""; messageError="Errare humanum est. Iterum tenta."; messageErrorG="Errare humanum est. Iterum tenta."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDMuMDEuMDguUmVsYWNpb25hcl9JbWF4ZS1GcmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Quintus Marcum uidet</p>","<p>Marcus puellam audit</p>","<p>Puer puellam pulsat</p>","<p>Iulia Aemiliam uocat</p>","<p>Iulius Quintum non audit</p>","<p>Quintus Marcum pulsat</p>","<p>Quintum Marcus pulsat</p>"];
var iL=["","","","","","",""];
var order=["","","","","","",""]; orderR=["","","","","","",""];indexR=0; indexL=0;
var cR=["","","","","","",""]; ansRL=["MQ","Mg","MA","Mw","NA","NQ","Ng"];
var iR=["<div  align='center'><img src='03.01.08.Relacionar_Imaxe-Fras_resources/media/03.01.08.Marcus.pulsat.jpg'></div>","<div  align='center'><img src='03.01.08.Relacionar_Imaxe-Fras_resources/media/03.05.uidet.jpg'></div>","<div  align='center'><img src='03.01.08.Relacionar_Imaxe-Fras_resources/media/03.01.08.Marcus.audit.jpg'></div>","<div  align='center'><img src='03.01.08.Relacionar_Imaxe-Fras_resources/media/03.10.uocat.jpg'></div>","<div  align='center'><img src='03.01.08.Relacionar_Imaxe-Fras_resources/media/03.09.dormit.jpg'></div>","<div  align='center'><img src='03.01.08.Relacionar_Imaxe-Fras_resources/media/03.02.pulsat.jpg'></div>","<div  align='center'><img src='03.01.08.Relacionar_Imaxe-Fras_resources/media/03.01.08.Marcus_Quintum_pulsat.jpg'></div>"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
