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
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="'Arial Black', Gadget, sans-serif";
var fResp="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Rectum est!"; messageTime=""; messageError="Responsum falsum!"; messageErrorG="Responsum falsum!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#0000FF"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDQuMDQuMDIuVGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Quot uiri adsunt in thermopolio?","2. Adestne Terentius in scaena?","3. Quis Iulium uocat?","4. Cur sunt irati uiri Tusculi?","5. Quid Iulius ponit in mensa thermopolii?","6. Cur Iulius iam laetus est?","7. Quid sumit Porcius?"];
var answers1=["MVF1aW5xdWU","MFRyZXM","MFNleA"];
var answers2=["MVRlcmVudGl1cyBhYmVzdA","MFRlcmVudGl1cyBub24gYWJlc3Q","MFRlcmVudGl1cyBhZGVzdA"];
var answers3=["MUl1bGl1bSBEYXV1cyB1b2NhdA","MFBhdWxpbnVzIEl1bGl1bSB1b2NhdA","MEl1bGl1cyBEYXV1bSB1b2NhdA"];
var answers4=["MVF1aWEgYmFyYmFydXMgVnJzdXMgcm9tYW51bSBQb3JjaXVtIHB1bHNhdA","MFF1aWEgVnJzdXMsIHVpciBtYWdudXMsIFBvcmNpdW0sIHVpcnVtIHBhcnV1bSwgcHVsc2F0","MFF1aWEgUG9yY2l1cyBUZXJlbnRpdW0sIHF1aSBjYW50YXQsIHB1bHNhdA"];
var answers5=["MUJhY3VsdW0gZXQgc2FjY3VsdW0gc3V1bSBwb25pdA","MFBlY3VuaWFtIGVpdXMsIHF1YWUgaW4gc2FjY3VsbyBlc3QsIHBvbml0","MEJhY3VsdW0gZXQgbnVtbXVtIHN1dW0gcG9uaXQ"];
var answers6=["MVF1aWEgVnJzdXMgYm9udXMgc2VydXVzIGVzdA","MFF1aWEgUG9yY2l1cyBsYWV0dXMgZXN0","MFF1aWEgRGF1dXMgcmVzcG9uZGV0"];
var answers7=["MVBlY3VuaWFtIEl1bGlpIHN1bWl0","MFBlY3VuaWFtIHN1YW0gc3VtaXQ","MEJhY3VsdW0gSXVsaWkgc3VtaXQ"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["","","","","","",""];
var ima=["Lectio.04.01.jpg","Lectio.04.01.jpg","Lectio.04.01.jpg","Lectio.04.01.jpg","Lectio.04.01.jpg","Lectio.04.01.jpg","Lectio.04.01.jpg"];
var indexTag=0; actualAnswers=[]; dirMedia="04.04.02.Test_resources/media/";
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
