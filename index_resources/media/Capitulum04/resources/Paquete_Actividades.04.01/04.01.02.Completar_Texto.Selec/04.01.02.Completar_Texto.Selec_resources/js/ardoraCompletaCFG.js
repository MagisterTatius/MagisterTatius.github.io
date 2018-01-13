//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=18; attempts=0; attemptsMax=1;
var score=0; scoreMax=18; scoreInc=1; scoreDec=1
var typeGame=1;
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
var timeOnMessage=5; messageOk="Bene egisti!"; messageTime=""; messageError="Falsum est! Me paenitet."; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
var consolidateSuccess=0; var consolidateScore=0;
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var indexTXT=0; var txtC=['<p>1.- Iulius: «Vbi sacculus meus est? Quis eum hab<select name="item1" id="item1" class="ardoraCombo"></select> ? </p><p> 2.- Aemilia: «Interrog<select name="item2" id="item2" class="ardoraCombo"></select> Medum, qui ad<select name="item3" id="item3" class="ardoraCombo"></select>.» </p><p> 3.- Iulius eum interrog<select name="item4" id="item4" class="ardoraCombo"></select>: «Quis sum<select name="item5" id="item5" class="ardoraCombo"></select> pecuniam meam, Mede?» </p><p> 4.- Medus respond<select name="item6" id="item6" class="ardoraCombo"></select>: «Non ego. Dauus tuam pecuniam hab<select name="item7" id="item7" class="ardoraCombo"></select>.»  </p><p> 5.- Iulius: «Dauum uoc<select name="item8" id="item8" class="ardoraCombo"></select>». Medus Dauum uoc<select name="item9" id="item9" class="ardoraCombo"></select> neque seruus uen<select name="item10" id="item10" class="ardoraCombo"></select>.</p>','<p>6.- Iulius: «Ven<select name="item11" id="item11" class="ardoraCombo"></select>, Daue, improbe serue». Dauus iam dominum aud<select name="item12" id="item12" class="ardoraCombo"></select> uen<select name="item13" id="item13" class="ardoraCombo"></select>que. </p><p> 7.- Iulius: «Aud<select name="item14" id="item14" class="ardoraCombo"></select>, Mede. Quis pecuniam meam hab<select name="item15" id="item15" class="ardoraCombo"></select>». </p><p> 8.- Medus: «Dauus pecuniam tuam in sacculo suo habet. Vid<select name="item16" id="item16" class="ardoraCombo"></select> in sacculo eius, domine!» </p><p> 9.- Aemilia: «Aud<select name="item17" id="item17" class="ardoraCombo"></select>, Mede. Seruus probus non accus<select name="item18" id="item18" class="ardoraCombo"></select>.</p>'];
var b=["MTg","MTU","NQ","NDY","Mg","MTE","NDI","MQ","NjY","NTg","MjY","MTg","OA","NDM","Mg","MTk","Mjc","MTU","Mw","Nw","Mzg","Ng","MzU","NTk","MTI","NDc","NjM","MzE","Ng","MTA","MTM","NTQ","NTA","MjI","Mw","MTA","MjM","NTE","OQ","MTQ","MTY","MTc","MTE","MzQ","NTU","NjI","Njc","NA","NzA","NzE","Nw","MzA","Mzk","MTQ"];
var c=[2,2,2,2,1,1,1,2,2,2,2,1,1,1,2,2,1,2,2,2,1,2,2,2,2,1,2,1,2,2,2,1,1,2,3,2,2,2,2,1,1,1,2,2,2,1,1,2,2,2,2,2,2,2];
var answers=["at","it","it","et","a","i","e","et","it","at","it","i","a","a","at","et","e","et","it","it","i","at","it","it","it","i","it","e","et","it","it","e","i","at","est","et","it","et","at","i","e","i","at","et","it","i","i","at","et","it","et","at","at","et"];
var a=["18","4","5","12","2","11","11","1","17","15","7","5","8","11","1","5","7","15","1","2","10","2","9","15","12","12","16","8","6","10","13","14","13","6","3","3","6","13","9","14","16","17","3","9","14","16","17","4","18","18","7","8","10","4"];
var itemCorr=["0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0"];
var itemHelp=["","","","","","","","","","","","","","","","","",""];
var animationX=[]; animationY=[]; animationPosX=[]; animationPosY=[]; animationLetter=[];
var wordsGame="MDQuMDEuMDIuQ29tcGxldGFyX1RleHRvLlNlbGVj"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tiUD=false;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
