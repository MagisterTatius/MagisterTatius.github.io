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
var wordsGame="MDEuMDYuMDIuVGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Quid est Laeron?","2. Vbi Conimbriga est?","3. Num Bracara in Lusitania est?","4. Estne Emerita in Britannia?","5. Estne Durius quoque fluuuius paruus?","6. Vbi est Tamaris?","7. Num insulae Cicae magnae sunt?"];
var answers1=["MUZsdXVpdXMgcGFydXVzIGVzdA","ME9wcGlkdW0gcGFydXVtIGVzdA","MEluc3VsYSBwYXJ1YSBlc3Q"];
var answers2=["MUluIEx1c2l0YW5pYQ","MEluIEdhbGxhZWNpYQ","MEluIEJyaXRhbm5pYQ"];
var answers3=["MU5vbiBpbiBMdXNpdGFuaWEsIHNlZCBpbiBHYWxsYWVjaWEgQnJhY2FyYSBlc3Qu","ME5vbiBpbiBMdXNpdGFuaWEsIHNlZCBpbiBCYWV0aWNhIEJyYWNhcmEgZXN0Lg","MEluIEJyaXRhbm5pYSBCcmFjYXJhIGVzdC4"];
var answers4=["MUluIEx1c2l0YW5pYSBFbWVyaXRhIGVzdA","MEluIEJyaXRhbm5pYSBFbWVyaXRhIGVzdA","MEluIEdhbGxhZWNpYSwgaW4gTHVzaXRhbmlhLCBpbiBCcml0YW5uaWEgRW1lcml0YSBub24gZXN0"];
var answers5=["MUR1cml1cyBmbHV1aXVzIG1hZ251cyBlc3Q","MER1cml1cyBmbHV1aXVzIHBhcnV1cyBlc3Q","MER1cml1cyBmbHV1aXVzIG5vbiBlc3QsIHNlZCBvcHBpZHVtIGVzdA"];
var answers6=["MVRhbWFyaXMgaW4gR2FsbGFlY2lhIGVzdA","MFRhbWFyaXMgaW4gQnJpdGFubmlhIGVzdA","MFRhbWVzaXMsIG5vbiBUYW1hcmlzLCBpbiBHYWxsYWVjaWEgZXN0"];
var answers7=["MUluc3VsYWUgQ2ljYWUgbm9uIG1hZ25hZSwgc2VkIHBhcnVhZSBzdW50","MFZuYSBpbnN1bGEgbWFnbmEgZXN0LiBEdWFlIHBhcnVhZSBzdW50","MENpY2FlIG5vbiBpbnN1bGFlLCBzZWQgb3BwaWR1bSBlc3Q"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["","","","","","",""];
var ima=["Lectio.01.02.jpg","Lectio.01.02.jpg","Lectio.01.02.jpg","Lectio.01.02.jpg","Lectio.01.02.jpg","Lectio.01.02.jpg","Lectio.01.02.jpg"];
var indexTag=0; actualAnswers=[]; dirMedia="01.06.02.Test_resources/media/";
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
