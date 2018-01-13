//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
function initAct(){
if (tiAval){parent.iniciaActividade()}if ((tiTime) && (tiButtonTime)){paintButtonTime();}
$( "#c1" ).click(function() {selType=1;fixType();});
$( "#c2" ).click(function() {selType=2;fixType();});
$( "#c3" ).click(function() {selType=3;fixType();});
$(".normalWord").click(function() {if ($(this).css("background-color").toString().replace(/\s+/g, "").localeCompare(colorToRGB(colorBack))==0){
$(this).css("background-color",selColor);$(this).css("color",selFonColor);}else{
$(this).css("background-color",colorBack);$(this).css("color",colorText);}});fixType();
}
function colorToRGB(h){return "rgb("+hexToR(h)+","+hexToG(h)+","+hexToB(h)+")";}
function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}
function fixType(){$("#c1").css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");$("#c2").css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");
$("#c3").css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");
if (selType==1){$( "#c1" ).mouseout(function() {$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});
$( "#c2" ).mouseout(function() {$(this).css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");});
$( "#c3" ).mouseout(function() {$(this).css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");});
$("#c1").css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");$( "#c2" ).mouseover(function() {
$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});$( "#c3" ).mouseover(function() {
$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});$(".normalWord").hover(function () {$(this).css("borderColor",$("#c1").css("backgroundColor"));},
function () {$(this).css("borderColor",colorBack);});selColor=$("#c1").css("backgroundColor");selFonColor=$("#c1").css("color");}
if (selType==2){$( "#c1" ).mouseout(function() {$(this).css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");});
$( "#c2" ).mouseout(function() {$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});
$( "#c3" ).mouseout(function() {$(this).css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");});
$("#c2").css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");$( "#c1" ).mouseover(function() {$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});
$("#c3").mouseover(function() {$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});
$(".normalWord").hover(function () {$(this).css("borderColor",$("#c2").css("backgroundColor"));},function () {$(this).css("borderColor",colorBack);});
selColor=$("#c2").css("backgroundColor");selFonColor=$("#c2").css("color");}
if (selType==3){$( "#c2" ).mouseout(function() {$(this).css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");});
$("#c1").mouseout(function() {$(this).css("boxShadow","4px 4px 4px rgba(50, 50, 50, 0.5)");});
$("#c3").mouseout(function() {$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});
$("#c3").css("boxShadow","inset 4px 4px 4px rgba(50,50,50,0.5)");$("#c1").mouseover(function() {$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});
$("#c2").mouseover(function() {$(this).css("boxShadow","inset 4px 4px 4px rgba(50, 50, 50, 0.5)");});
$(".normalWord").hover(function () {$(this).css("borderColor",$("#c3").css("backgroundColor"));},function () {$(this).css("borderColor",colorBack);});
selColor=$("#c3").css("backgroundColor");selFonColor=$("#c3").css("color");}}
function randomSort(){
}
function cleanWord(w){var cw=w;
if (cw.substring(cw.length-1, cw.length).localeCompare(",")==0 || cw.substring(cw.length-1, cw.length).localeCompare(";")==0 || cw.substring(cw.length-1, cw.length).localeCompare(".")==0){
cw=cw.substring(0,cw.length-1);}return cw;}
function isCorrect(){
var correct=true;for (i=0;i<testW.length;i++) {var aw=cleanWord($("#w" + i.toString()).text());var colorW=$("#w" + i.toString()).css("background-color").toString().replace(/\s+/g, "");
if (colorW.localeCompare(colorToRGB(colorBack)) == 0) {for (j = 0; j < sw.length; j++) {if (SelPalWords(sw[j]).localeCompare(aw)==0){ correct=false;}}}
else{var indexColor=0;var correctColor=false;
if (colorW.localeCompare($("#c1").css("backgroundColor").toString().replace(/\s+/g, "")) == 0) {indexColor=1;}
if (colorW.localeCompare($("#c2").css("backgroundColor").toString().replace(/\s+/g, "")) == 0) {indexColor=2;}
if (colorW.localeCompare($("#c3").css("backgroundColor").toString().replace(/\s+/g, "")) == 0) {indexColor=3;}
for(j=0;j<sw.length;j++){var aW=new RegExp(SelPalWords(sw[j]));var aW1=aW.toString();var ans1=new RegExp(aw);var riW=new RegExp(SelPalWords(iw[j]));var riW1=riW.toString();
var ans2=new RegExp(indexColor.toString());if(ans1.test(aW1) && ans2.test(riW1)){correctColor=true;}}if (!correctColor){correct=false;}}}
if (correct) {score=score + scoreInc;timeAct=timeAct+timeBon;successes++;showMessage("Ok");} else {attempts++;
score = score - scoreDec;if (tiAttempts) {if (attempts > attemptsMax) {showMessage("Attempts");} else {showMessage("Error");}} else {showMessage("Error");}}
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
function SelPalWords(input) {var output = ""; var chr1, chr2, chr3 = ""; var enc1, enc2, enc3, enc4 = "";var i = 0;
var btest = /[^A-Za-z0-9\+\/\=]/g; if (btest.exec(input)) { alert("Invalid characters");} input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do { enc1 = wordsStr.indexOf(input.charAt(i++)); enc2 = wordsStr.indexOf(input.charAt(i++)); enc3 = wordsStr.indexOf(input.charAt(i++)); enc4 = wordsStr.indexOf(input.charAt(i++)); chr1 = (enc1 << 2) | (enc2 >> 4); chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);if (enc3 != 64) {output = output + String.fromCharCode(chr2);} if (enc4 != 64) {output = output + String.fromCharCode(chr3);}
chr1 = chr2 = chr3 = ""; enc1 = enc2 = enc3 = enc4 = "";} while (i < input.length);return unescape(output);}
Array.prototype.in_array=function(){ for(var j in this){ if(this[j]==arguments[0]){return true;}}return false;}
