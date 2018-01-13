var goURLNext=false; goURLRepeat=false;tiAval=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var itemHelp=["Sacculus","Pecunia","Nummus","Mensa","Baculum","Habet","Numerat","Adest-Abest","Salutat","Ponit","Sumit","Imperat-Paret","Vacuus","Plenus","Nullus"];
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fileIma=["i_TXT_04.01.sacculus.jpg","i_TXT_04.02.pecunia.jpg","i_TXT_04.03.nummus.jpg","i_TXT_04.04.mensa.jpg","i_TXT_04.05.baculum.jpg","i_TXT_04.06.habet.jpg","i_TXT_04.07.numerat.jpg","i_TXT_04.08-09.adest_abest.jpg","i_TXT_04.10.salutat.jpg","i_TXT_04.11.ponit.jpg","i_TXT_04.12.sumit.jpg","i_TXT_04.13-14.imperat_paret.jpg","i_TXT_04.15.uacuus.jpg","i_TXT_04.16.plenus.jpg","i_TXT_04.17.nullus.jpg"];
var fileX=["800","800","800","800","800","800","800","800","800","800","800","800","800","800","800"];
var fileY=["597","597","597","597","597","597","597","597","597","597","597","597","597","597","597"];
var txt=["","","","","","","","","","","","","","",""];
var fileMP3=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var fileOgg=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var conType=["","","","","","","","","","","","","","",""];
var conLink=["","","","","","","","","","","","","","",""];
