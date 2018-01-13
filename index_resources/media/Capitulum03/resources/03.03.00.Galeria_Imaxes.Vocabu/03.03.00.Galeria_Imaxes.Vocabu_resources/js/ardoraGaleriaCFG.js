var goURLNext=false; goURLRepeat=false;tiAval=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var fActi="Arial, Helvetica, sans-serif";
var fEnun="Arial, Helvetica, sans-serif";
var itemHelp=["Cantat","Pulsat","Plorat","Ridet","Videt","Interrogat","Respondet","Venit","Dormit","Vocat","Audit","Improbus","Probus","Laetus","Iratus"];
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var fileIma=["i_TXT_03.01.cantat.jpg","i_TXT_03.02.pulsat.jpg","i_TXT_03.03.plorat.jpg","i_TXT_03.04.ridet.jpg","i_TXT_03.05.uidet.jpg","i_TXT_03.06.interrogat.jpg","i_TXT_03.07.respondet.jpg","i_TXT_03.08.uenit.jpg","i_TXT_03.09.dormit.jpg","i_TXT_03.10.uocat.jpg","i_TXT_03.11.audit.jpg","i_TXT_03.12.improbus.jpg","i_TXT_03.13.probus.jpg","i_TXT_03.14.laetus.jpg","i_TXT_03.15.iratus.jpg"];
var fileX=["800","800","800","800","800","800","800","800","800","800","800","800","800","800","800"];
var fileY=["597","597","597","597","597","597","597","597","597","597","597","597","597","597","597"];
var txt=["","","","","","","","","","","","","","",""];
var fileMP3=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var fileOgg=["","","","","","","","","","","","","","","","","","","","","","","","",""];
var conType=["","","","","","","","","","","","","","",""];
var conLink=["","","","","","","","","","","","","","",""];
