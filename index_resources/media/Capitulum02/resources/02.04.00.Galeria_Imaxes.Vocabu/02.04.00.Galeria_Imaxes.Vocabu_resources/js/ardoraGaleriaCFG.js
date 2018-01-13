var goURLNext=false; goURLRepeat=false;tiAval=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var itemHelp=["Vir","Femina","Puer","Puella","Familia","Pater","Mater","Filius","Filia","Liberi","Seruus","Dominus","Ancilla","Domina","Liber","Ceteri, -ae"];
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fileIma=["i_TXT_02.01.uir.jpg","i_TXT_02.02.femina.jpg","i_TXT_02.03.puer.jpg","i_TXT_02.04.puella.jpg","i_TXT_02.05.familia.jpg","i_TXT_02.06.pater.jpg","i_TXT_02.07.mater.jpg","i_TXT_02.08.filius.jpg","i_TXT_02.09.filia.jpg","i_TXT_02.10.liberi.jpg","i_TXT_02.11.seruus.jpg","i_TXT_02.12.dominus.jpg","i_TXT_02.13.ancilla.jpg","i_TXT_02.14.domina.jpg","i_TXT_02.15.liber.jpg","i_TXT_02.16.Ceteri_Ceterae.jpg"];
var fileX=["800","800","800","800","800","800","800","800","800","800","800","800","800","800","800","800"];
var fileY=["597","597","597","597","597","597","597","597","597","597","597","597","597","597","597","597"];
var txt=["","","","","","","","","","","","","","","",""];
var fileMP3=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var fileOgg=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var conType=["","","","","","","","","","","","","","","",""];
var conLink=["","","","","","","","","","","","","","","",""];
