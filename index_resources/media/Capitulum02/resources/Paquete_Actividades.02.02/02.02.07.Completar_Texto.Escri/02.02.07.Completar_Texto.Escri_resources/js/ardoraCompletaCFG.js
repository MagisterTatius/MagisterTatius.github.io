//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=12; attempts=0; attemptsMax=1;
var score=0; scoreMax=12; scoreInc=1; scoreDec=1
var typeGame=2;
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
var timeOnMessage=5; messageOk="Bene fecisti!"; messageTime=""; messageError="Errare humanum est"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<img class="imaLeft" src="02.02.07.Completar_Texto.Escri_resources/media/02.02.07.Aemilia_Quintus.jpg" alt="Ima"  align="left"><p>1. Aemilia - Quintus: </p><p>  a) Aemilia <input type="text" name="item1" id="item1" class="ardoraInput"> <input type="text" name="item2" id="item2" class="ardoraInput"> est.  </p><p>  b) Quintus <input type="text" name="item3" id="item3" class="ardoraInput"> <input type="text" name="item4" id="item4" class="ardoraInput"> est.</p>','<img class="imaLeft" src="02.02.07.Completar_Texto.Escri_resources/media/02.02.07.Iulius_Marcus_Iulia.jpg" alt="Ima"  align="left"><p>2. Iulius - Marcus Iuliaque: </p><p>  a) Iulius <input type="text" name="item5" id="item5" class="ardoraInput"> <input type="text" name="item6" id="item6" class="ardoraInput"> est.  </p><p>  b) Marcus et Iuliae <input type="text" name="item7" id="item7" class="ardoraInput"> <input type="text" name="item8" id="item8" class="ardoraInput"> sunt.</p>','<img class="imaLeft" src="02.02.07.Completar_Texto.Escri_resources/media/02.02.07.Iulius_Medus.jpg" alt="Ima"  align="left"><p>3. Iulius - Medus: </p><p>  a) Iulius <input type="text" name="item9" id="item9" class="ardoraInput"> <input type="text" name="item10" id="item10" class="ardoraInput"> est.  </p><p>  b) Medus <input type="text" name="item11" id="item11" class="ardoraInput"> <input type="text" name="item12" id="item12" class="ardoraInput"> est.</p>'];
var b=["NQ","MTE","Mg","MTA","Mw","Nw","MQ","OA","NA","OQ","MTI","Ng"];
var c=[5,6,6,4,6,6,5,5,8,7,5,15];
var answers=["cGF0ZXI","c2VydXVz","UXVpbnRp","TWVkaQ","ZmlsaXVz","bGliZXJp","bWF0ZXI","SXVsaWk","QWVtaWxpYWU","ZG9taW51cw","SXVsaWk","TWFyY2kgSXVsaWFlcXVl"];
var a=["5","11","2","10","3","7","1","8","4","9","12","6"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDIuMDIuMDcuQ29tcGxldGFyX1RleHRvLkVzY3Jp"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=true;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
