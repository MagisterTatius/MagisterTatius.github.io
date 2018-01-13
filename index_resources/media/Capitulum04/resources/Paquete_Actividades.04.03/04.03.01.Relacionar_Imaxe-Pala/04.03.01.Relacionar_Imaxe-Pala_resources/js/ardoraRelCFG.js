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
var wordsGame="MDQuMDMuMDEuUmVsYWNpb25hcl9JbWF4ZS1QYWxh"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cL=["","","","","","","",""];
var iL=["<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.07.numerat.jpg'></div>","<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.15.uacuus.jpg'></div>","<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.08.adest.jpg'></div>","<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.09.abest.jpg'></div>","<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.11.ponit.jpg'></div>","<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.12.sumit.jpg'></div>","<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.10.salutat.jpg'></div>","<div  align='center'><img src='04.03.01.Relacionar_Imaxe-Pala_resources/media/04.05.baculum.jpg'></div>"];
var order=["","","","","","","",""]; orderR=["","","","","","","",""];indexR=0; indexL=0;
var cR=["<p>Seruus unum nummum sumit</p>","<p>Iulius baculum suum sumit</p>","<p>Iulius pecuniam suam numerat</p>","<p>Dauus Iulium, dominum suum, salutat</p>","<p>Dauus sacculum suum in mensa ponit</p>","<p>Sacculus Daui uacuus est</p>","<p>Nummus adest</p>","<p>Nummus abest</p>"]; ansRL=["Mg","NQ","Ng","Nw","NA","MA","Mw","MQ"];
var iR=["","","","","","","",""];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
