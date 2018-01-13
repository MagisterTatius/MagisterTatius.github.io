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
var wordsGame="MDEuMDMuMDcuUmVsYWNpb25hcl9GcmFzZS1GcmFz"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["<p>Num Britannia insula parua est?</p>","<p>Suntne Creta et Sicilia insulae magnae?</p>","<p>Suntne Aegyptus et Syria prouinciae romanae?</p>","<p>Estne Brundisium oppidum paruum?</p>","<p>Vbi sunt multa et magna oppida?</p>","<p>Estne II magnus numerus?</p>","<p>Quid est Tiberis?</p>","<p>Quid est Syria?</p>"];
var iL=["<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Insula.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Insula.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/aussieactive-335572.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Oppidum.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Oppidum.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/DVO.001.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/willian-west-276239.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Palmyra_T__trapylon_02.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Creta et Sicilia insulae magnae sunt.</p>","<p>Britannia non insula parua sed insula magna est.</p>","<p>Magnus non est, sed paruus est.</p>","<p>Aegyptus et Syria prouinciae romanae sunt.</p>","<p>Oppidum paruum non est Brundisium.</p>","<p>In Aegypto multa et magna oppida sunt.</p>","<p>Fluuius paruus in Italia est.</p>","<p>Prouincia romana est.</p>"]; ansRL=["MQ","MA","Mw","NA","NQ","Mg","Ng","Nw"];
var iR=["<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Creta-Sicilia.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Britannia.001.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/DVO.002.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Aegyptus-Syria.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Brundisium.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/aussieactive-335572.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Tiberis.jpg'></div>","<div  align='center'><img src='01.03.07.Relacionar_Frase-Fras_resources/media/Aegyptus-Syria.jpg'></div>"];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
