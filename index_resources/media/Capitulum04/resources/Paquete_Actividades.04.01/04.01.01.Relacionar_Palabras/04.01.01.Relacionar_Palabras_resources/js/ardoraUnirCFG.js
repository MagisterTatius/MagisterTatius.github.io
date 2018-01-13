//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=20; attempts=0; attemptsMax=1;
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
var fMenssage="Arial, Helvetica, sans-serif";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var timeOnMessage=5; messageOk="Optime!!!"; messageTime=""; messageError="Me paenitet. Falsum est!"; messageErrorG="Me paenitet. Falsum est!"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="MDQuMDEuMDEuUmVsYWNpb25hcl9QYWxhYnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["Y2FudGE", "MS5Db25pdWdhdGlv"],["MS5Db25pdWdhdGlv", "Y2FudGF0"],["cHVsc2F0", "MS5Db25pdWdhdGlv"],["MS5Db25pdWdhdGlv", "cHVsc2E"],["cmVzcG9uZGV0", "Mi5Db25pdWdhdGlv"],["Mi5Db25pdWdhdGlv", "cmVzcG9uZGU"],["ZG9ybWl0", "NC5Db25pdWdhdGlv"],["NC5Db25pdWdhdGlv", "ZG9ybWk"],["dGFjZQ", "Mi5Db25pdWdhdGlv"],["Mi5Db25pdWdhdGlv", "dGFjZXQ"],["cG9uZQ", "My5Db25pdWdhdGlv"],["My5Db25pdWdhdGlv", "cG9uaXQ"],["c3VtZQ", "My5Db25pdWdhdGlv"],["My5Db25pdWdhdGlv", "c3VtaXQ"],["ZGlzY2VkaXQ", "My5Db25pdWdhdGlv"],["My5Db25pdWdhdGlv", "ZGlzY2VkZQ"],["dWlkZQ", "Mi5Db25pdWdhdGlv"],["Mi5Db25pdWdhdGlv", "dWlkZXQ"],["aW50ZXJyb2dhdA", "MS5Db25pdWdhdGlv"],["MS5Db25pdWdhdGlv", "aW50ZXJyb2dh"]];
var c=[[5,12],[12,6],[6,12],[12,5],[9,12],[12,8],[6,12],[12,5],[4,12],[12,5],[4,12],[12,5],[4,12],[12,5],[8,12],[12,7],[4,12],[12,5],[10,12],[12,9]];
var con1=["canta","pulsat","respondet","dormit","tace","pone","sume","discedit","uide","interrogat"];
var con2=["1.Coniugatio","2.Coniugatio","3.Coniugatio","4.Coniugatio"];
var con3=["cantat","pulsa","responde","dormi","tacet","ponit","sumit","discede","uidet","interroga"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
