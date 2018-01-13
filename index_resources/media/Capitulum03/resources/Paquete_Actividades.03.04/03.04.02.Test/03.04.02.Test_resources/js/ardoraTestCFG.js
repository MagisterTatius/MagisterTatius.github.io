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
var wordsGame="MDMuMDQuMDIuVGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Quid bibit Vrsus?","2. Quis Terentium pulsat?","3. Cur Terentius cantat?","4. Porciusne quoque uinum bibit?","5. Quem Vrsus pulsat?","6. Cur Terentius iam non cantat?","7. Cur Vrsus uirum paruum pulsat?"];
var answers1=["MVZyc3VzIG5lcXVlIGFxdWFtIG5lcXVlIHVpbnVtIGJpYml0","MFZyc3VzIGFxdWFtIGJpYml0","MFZyc3VzIHVpbnVtIGJpYml0"];
var answers2=["MVBvcmNpdXMgVGVyZW50aXVtIHB1bHNhdA","MFBvcmNpdW0gVGVyZW50aXVzIHB1bHNhdA","MFZyc3VzIFRlcmVudGl1bSBwdWxzYXQ"];
var answers3=["MVF1aWEgdWludW0gYmliaXQ","MFF1aWEgYXF1YW0gYmliaXQ","MFF1aWEgUG9yY2l1cyBpcmF0dXMgZXN0"];
var answers4=["MVBvcmNpdXMgdWludW0gbm9uIGJpYml0LCBuZXF1ZSBjYW50YXQ","MFBvcmNpdXMgdWludW0gYmliaXQsIG5lcXVlIGNhbnRhdA","MFBvcmNpdXMgbmVxdWUgcmlkZXQgbmVxdWUgY2FudGF0"];
var answers5=["MVZyc3VzIFBvcmNpdW0gcHVsc2F0","MFZyc3VtIFBvcmNpdXMgcHVsc2F0","MFZyc3VzIFRlcmVudGl1bSBwdWxzYXQ"];
var answers6=["MVF1aWEgUG9yY2l1cyBldW0gcHVsc2F0","MFF1aWEgUG9yY2l1cyBuZXF1ZSByaWRldCBuZXF1ZSBjYW50YXQ","MFF1aWEgcGxvcmF0"];
var answers7=["MVF1aWEgdWlyIHBhcnV1cyBpbXByb2J1cyBlc3Q","MFF1aWEgVGVyZW50aXVzIGlhbSBub24gY2FudGF0LCBzZWQgcGxvcmF0","MFF1aWEgUGF1bGludXMgaWFtIG5vbiByaWRldA"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["","","","","","",""];
var ima=["Lectio.03.01.jpg","Lectio.03.01.jpg","Lectio.03.01.jpg","Lectio.03.01.jpg","Lectio.03.01.jpg","Lectio.03.01.jpg","Lectio.03.01.jpg"];
var indexTag=0; actualAnswers=[]; dirMedia="03.04.02.Test_resources/media/";
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
