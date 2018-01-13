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
var wordsGame="MDEuMDUuMDIuVGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Quid est Nilus?","2. Vbi Nilus est?","3. Num Aegyptus in Asia est?","4. Estne Barbaria in Asia?","5. Estne Rhenus quoque fluuuius paruus?","6. Vbi est Rhenus?","7. Num duo numerus magnus est?"];
var answers1=["MUZsdXVpdXMgbWFnbnVzIGVzdA","ME9wcGlkdW0gbWFnbnVtIGVzdA","MEluc3VsYSBtYWduYSBlc3Q"];
var answers2=["MUluIEFmcmljYQ","MEluIEFlZ2lwdG8","MEluIEFyYWJpYQ"];
var answers3=["MU5vbiBpbiBBc2lhLCBzZWQgaW4gQWZyaWNhIEFlZ3lwdHVzIGVzdA","ME5vbiBpbiBBc2lhLCBzZWQgaW4gQWZyaWNhIEFlZ3lwdHVtIGVzdA","MEluIEFzaWEgQWVneXB0dXMgZXN0"];
var answers4=["MUluIEFzaWEsIGluIEFmcmljYSwgaW4gRXVyb3BhIEJhcmJhcmlhIG5vbiBlc3Q","MEluIEFzaWEgQmFyYmFyaWEgZXN0","MEluIGltcGVyaW8gcm9tYW5vIEJhcmJhcmlhIGVzdA"];
var answers5=["MVJoZW51cyBmbHV1aXVzIG1hZ251cyBlc3Q","MFJoZW51cyBmbHV1aXVzIHBhcnV1cyBlc3Q","MFJoZW51cyBmbHV1aXVzIG5vbiBlc3Q"];
var answers6=["MVJoZW51cyBpbiBHYWxsaWEgZXQgR2VybWFuaWEgZXN0","MFJoZW51cyBpbiBCcml0YW5uaWEgZXN0","MFJoZW51cyBpbiBJdGFsaWEgZXN0"];
var answers7=["MUR1byBudW1lcnVzIHBhcnV1cyBlc3QuIE1pbGxlIG51bWVydXMgbWFnbnVzIGVzdC4","MER1byBudW1lcnVzIHBhcnV1cyBlc3QuIE1pbGxlIHF1b3F1ZSBudW1lcnVzIHBhcnV1cyBlc3Qu","MER1byBudW1lcnVzIG1hZ251cyBlc3QuIE1pbGxlIHF1b3F1ZSBudW1lcnVzIG1hZ251cyBlc3Qu"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["","","","","","",""];
var ima=["Lectio.01.01.jpg","Lectio.01.01.jpg","Lectio.01.01.jpg","Lectio.01.01.jpg","Lectio.01.01.jpg","Lectio.01.01.jpg","Lectio.01.01.jpg"];
var indexTag=0; actualAnswers=[]; dirMedia="01.05.02.Test_resources/media/";
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
