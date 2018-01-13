//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=19; attempts=0; attemptsMax=1;
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
var wordsGame="MDMuMDEuMDIuUmVsYWNpb25hcl9QYWxhYnJhcw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["ZG9taW51bQ", "QUNDVlNBVElWVlM"],["ZG9taW5vcnVt", "R0VORVRJVlZT"],["bGliZXI", "Tk9NSU5BVElWVlM"],["bGlicnVt", "QUNDVlNBVElWVlM"],["YW5jaWxsYQ", "Tk9NSU5BVElWVlM"],["YW5jaWxsYWU", "Tk9NSU5BVElWVlM"],["YW5jaWxsYWU", "R0VORVRJVlZT"],["b3BwaWRp", "R0VORVRJVlZT"],["b3BwaWRh", "Tk9NSU5BVElWVlM"],["Tk9NSU5BVElWVlM", "ZG9taW51cw"],["Tk9NSU5BVElWVlM", "ZG9taW5p"],["R0VORVRJVlZT", "ZG9taW5p"],["R0VORVRJVlZT", "bGlicm9ydW0"],["R0VORVRJVlZT", "bGlicmk"],["Tk9NSU5BVElWVlM", "bGlicmk"],["R0VORVRJVlZT", "YW5jaWxsYXJ1bQ"],["QUNDVlNBVElWVlM", "YW5jaWxsYW0"],["Tk9NSU5BVElWVlM", "UXVpbnR1cw"],["QUNDVlNBVElWVlM", "UXVpbnR1bQ"]];
var c=[[7,11],[9,9],[5,11],[6,11],[7,11],[8,11],[8,9],[6,9],[6,11],[11,7],[11,6],[9,6],[9,8],[9,5],[11,5],[9,10],[11,8],[11,7],[11,7]];
var con1=["dominum","dominorum","liber","librum","ancilla","ancillae","oppidi","oppida"];
var con2=["NOMINATIVVS","ACCVSATIVVS","GENETIVVS"];
var con3=["dominus","domini","librorum","libri","ancillarum","ancillam","Quintus","Quintum"];
var sel1=""; join1=[]; join2=[];
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
