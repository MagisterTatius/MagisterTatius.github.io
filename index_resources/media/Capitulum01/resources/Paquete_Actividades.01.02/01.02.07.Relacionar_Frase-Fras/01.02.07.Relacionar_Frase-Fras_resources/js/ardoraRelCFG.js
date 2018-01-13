//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=8; attempts=0; attemptsMax=1;
var score=0; scoreMax=8; scoreInc=1; scoreDec=1
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
var wordsGame="MDEuMDIuMDcuUmVsYWNpb25hcl9GcmFzZS1GcmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Vbi est Roma?</p>","<p>Vbi sunt Syria et Arabia?</p>","<p>Esne puella romana?</p>","<p>Vbi sumus?</p>","<p>Num Creta oppidum est?</p>","<p>Estne II magnus numerus?</p>","<p>Quid est Tiberis?</p>","<p>Quid sunt Gallia et Aegyptus?</p>"];
var iL=["<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/alex-blajan-199239.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Arabia.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/02.04.puella.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/green-question-mark-2.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Oppidum.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/DVO.001.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/green-question-mark-2.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Gallia.001.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Magnus non est, sed paruus est.</p>","<p>Fluuius in Italia est.</p>","<p>Prouinciae romanae sunt.</p>","<p>Non, graeca sum.</p>","<p>In Europa estis.</p>","<p>In Italia est.</p>","<p>In Asia sunt.</p>","<p>Creta insula est.</p>"]; ansRL=["NQ","Ng","Mw","NA","Nw","MA","MQ","Mg"];
var iR=["<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/DVO.002.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/willian-west-276239.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Poruinciae.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Graecia.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/green-question-mark-2.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Mapa_Italia.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Asia.jpg'></div>","<div  align='center'><img src='01.02.07.Relacionar_Frase-Fras_resources/media/Insula.jpg'></div>"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
