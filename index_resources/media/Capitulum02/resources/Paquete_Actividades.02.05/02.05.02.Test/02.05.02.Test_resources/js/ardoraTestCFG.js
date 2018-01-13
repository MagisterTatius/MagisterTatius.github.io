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
var wordsGame="MDIuMDUuMDIuVGVzdA"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var tags=["1. Quis est magnus uir?","2. Vbi sunt uiri?","3. Num Vrsus graecus est?","4. Cuius est seruus Vrsus?","5. Estne Aulus Paulinus seruus graecus?","6. Quot ancillae sunt in familia Paulini?","7. Quot filii et quot filiae sunt in familia Paulini?"];
var answers1=["MVZyc3Vz","MERhdXVz","MFBhdWxpbnVz"];
var answers2=["MUluIG9wcGlkbyBUdXNjdWxv","MEluIEdhbGxpYQ","MEluIEdyYWVjaWE"];
var answers3=["MU5vbiBncmFlY3VzIHNlZCBnYWxsdXMgZXN0Lg","ME5vbiBncmFlY3VzIHNlZCBnZXJtYW51cyBlc3Qu","ME5vbiBncmFlY3VzIHNlZCByb21hbnVzIGVzdC4"];
var answers4=["MUx1Y2lpIEl1bGlpIEJhbGJpIHNlcnV1cyBlc3Q","MEF1bGkgUGF1bGluaSBzZXJ1dXMgZXN0","MERhdWkgc2VydXVzIGVzdA"];
var answers5=["MU5vbiBzZXJ1dXMgc2VkIGRvbWludXMgZXN0","ME5vbiBzZXJ1dXMgZ3JhZWN1cyBzZWQgc2VydXVzIHJvbWFudXMgZXN0Lg","MFNlcnV1cyBncmFlY3VzIG5vbiBlc3QuIEdhbGx1cyBlc3Qu"];
var answers6=["MUluIGZhbWlsaWEgUGF1bGluaSBkdWFlIGFuY2lsbGFlIHN1bnQ","MEluIGZhbWlsaWEgUGF1bGluaSBub24gc3VudCBhbmNpbGxhZQ","MEluIGZhbWlsaWEgUGF1bGluaSB0cmVzIGFuY2lsbGFlIHN1bnQ"];
var answers7=["MVRyZXMgZmlsaWFlIGV0IHRyZXMgZmlsaWk","MFZuYSBmaWxpYSBldCBkdW8gZmlsaWk","MER1YWUgZmlsaWFlIGV0IHRyZXMgZmlsaWk"];
var ans=[answers1,answers2,answers3,answers4,answers5,answers6,answers7];
var err=["","","","","","",""];
var ima=["Lectio.02.01.jpg","Lectio.02.01.jpg","Lectio.02.01.jpg","Lectio.02.01.jpg","Lectio.02.01.jpg","Lectio.02.01.jpg","Lectio.02.01.jpg"];
var indexTag=0; actualAnswers=[]; dirMedia="02.05.02.Test_resources/media/";
colorText="#000000";colorButton="#3399FF";colorBack="#FFFFFF";colorSele="#B6B6B6";goURLNext=true;goURLRepeat=true;
fMenssage="Verdana, Geneva, sans-serif";fActi="Verdana, Geneva, sans-serif";fEnun="Verdana, Geneva, sans-serif";
