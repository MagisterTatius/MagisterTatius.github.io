//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=1;
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
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Bellissime!"; messageTime=""; messageError="Responsum falsum!"; messageErrorG="Responsum falsum!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#0000FF"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var d=[[0,0,0,0,0,0,0],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1]];
var vCell=[["0","0","0","0","0","0","0"],["0","2","2","2","2","2","2"],["0","2","2","2","2","2","2"]];
var a0Cell=[["Mg","RGF1dXMgUGF1bGludW0gaW50ZXJyb2dhdDogq1F1aXMgZXN0IHVpciwgcXVpIG5lcXVlIHJpZGV0IG5lcXVlIGNhbnRhdD+7","RGF1dXMgdWludW0gYmliaXQgbmVxdWUgY2FudGF0","UG9yY2l1cyBpcmF0dXMgVGVyZW50aXVtLCBxdWkgY2FudGF0LCBwdWxzYXQ","VGVyZW50aXVzLCBxdWVtIFZyc3VzIHB1bHNhdCwgaWFtIG5vbiBjYW50YXQgc2VkIHBsb3JhdA","UGF1bGludXMsIHF1aSBWcnN1bSB1aWRldCwgaW50ZXJyb2dhdDogq0N1ciBtYWdudXMgVnJzdXMgdWlydW0gcGFydXVtIHB1bHNhdD+7","RGF1dXMgcmVzcG9uZGV0OiCrUXVpYSBwYXJ1dXMgdWlyIGltcHJvYnVzIGVzdC4guw"],["VkVSVk0","MQ","MA","MQ","MA","MQ","MA"],["RkFMU1ZN","MA","MQ","MA","MQ","MA","MQ"]];
var c=[[0,74,30,44,55,80,51],[5,1,1,1,1,1,1],[6,1,1,1,1,1,1]];
var c1=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var c2=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var c3=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var a1Cell=[["","RGF1dXMgUGF1bGludW0gaW50ZXJyb2dhdDogq1F1aXMgZXN0IHVpciwgcXVpIG5lcXVlIHJpZGV0IG5lcXVlIGNhbnRhdD+7","RGF1dXMgdWludW0gYmliaXQgbmVxdWUgY2FudGF0","UG9yY2l1cyBpcmF0dXMgVGVyZW50aXVtLCBxdWkgY2FudGF0LCBwdWxzYXQ","VGVyZW50aXVzLCBxdWVtIFZyc3VzIHB1bHNhdCwgaWFtIG5vbiBjYW50YXQgc2VkIHBsb3JhdA","UGF1bGludXMsIHF1aSBWcnN1bSB1aWRldCwgaW50ZXJyb2dhdDogq0N1ciBtYWdudXMgVnJzdXMgdWlydW0gcGFydXVtIHB1bHNhdD+7","RGF1dXMgcmVzcG9uZGV0OiCrUXVpYSBwYXJ1dXMgdWlyIGltcHJvYnVzIGVzdC4guw"],["VkVSVk0","MQ","MA","MQ","MA","MQ","MA"],["RkFMU1ZN","MA","MQ","MA","MQ","MA","MQ"]];
var a2Cell=[["","RGF1dXMgUGF1bGludW0gaW50ZXJyb2dhdDogq1F1aXMgZXN0IHVpciwgcXVpIG5lcXVlIHJpZGV0IG5lcXVlIGNhbnRhdD+7","RGF1dXMgdWludW0gYmliaXQgbmVxdWUgY2FudGF0","UG9yY2l1cyBpcmF0dXMgVGVyZW50aXVtLCBxdWkgY2FudGF0LCBwdWxzYXQ","VGVyZW50aXVzLCBxdWVtIFZyc3VzIHB1bHNhdCwgaWFtIG5vbiBjYW50YXQgc2VkIHBsb3JhdA","UGF1bGludXMsIHF1aSBWcnN1bSB1aWRldCwgaW50ZXJyb2dhdDogq0N1ciBtYWdudXMgVnJzdXMgdWlydW0gcGFydXVtIHB1bHNhdD+7","RGF1dXMgcmVzcG9uZGV0OiCrUXVpYSBwYXJ1dXMgdWlyIGltcHJvYnVzIGVzdC4guw"],["VkVSVk0","MQ","MA","MQ","MA","MQ","MA"],["RkFMU1ZN","MA","MQ","MA","MQ","MA","MQ"]];
var a3Cell=[["","RGF1dXMgUGF1bGludW0gaW50ZXJyb2dhdDogq1F1aXMgZXN0IHVpciwgcXVpIG5lcXVlIHJpZGV0IG5lcXVlIGNhbnRhdD+7","RGF1dXMgdWludW0gYmliaXQgbmVxdWUgY2FudGF0","UG9yY2l1cyBpcmF0dXMgVGVyZW50aXVtLCBxdWkgY2FudGF0LCBwdWxzYXQ","VGVyZW50aXVzLCBxdWVtIFZyc3VzIHB1bHNhdCwgaWFtIG5vbiBjYW50YXQgc2VkIHBsb3JhdA","UGF1bGludXMsIHF1aSBWcnN1bSB1aWRldCwgaW50ZXJyb2dhdDogq0N1ciBtYWdudXMgVnJzdXMgdWlydW0gcGFydXVtIHB1bHNhdD+7","RGF1dXMgcmVzcG9uZGV0OiCrUXVpYSBwYXJ1dXMgdWlyIGltcHJvYnVzIGVzdC4guw"],["VkVSVk0","MQ","MA","MQ","MA","MQ","MA"],["RkFMU1ZN","MA","MQ","MA","MQ","MA","MQ"]];
var wordsGame="MDMuMDQuMDMuQ29tcGxldGFyX1RhYmVsYQ"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var cols=3; var rows=7;var showC=true;
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
