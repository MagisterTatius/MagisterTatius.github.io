//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
$(document).ready(function () {$("body").css({backgroundColor:"#FFFFFF"});var tabs = $("#Grammatica03ardoraTabs").tabs({heightStyle: "fill"});$("body").on("resize", function () {tabs.tabs("refresh");});
tabs.find( ".ui-tabs-nav" ).sortable({axis:"x",stop: function() {tabs.tabs("refresh");}});
 $( "#Grammatica03ardoraTabs" ).tabs({collapsible: true});
$( "#Grammatica03ardoraTabs" ).tabs({event: "mouseover"});
});
$.event.special.hoverintent = {
setup: function() {$( this ).bind( "mouseover", jQuery.event.special.hoverintent.handler );},
teardown: function() {$( this ).unbind( "mouseover", jQuery.event.special.hoverintent.handler );},
handler: function( event ) {var currentX, currentY, timeout,args = arguments,target = $( event.target ),previousX = event.pageX,previousY = event.pageY;
function track( event ){currentX = event.pageX;currentY = event.pageY;};
function clear() {target.unbind( "mousemove", track ).unbind( "mouseout", clear );clearTimeout( timeout );}
function handler() {var prop,orig = event;if ( ( Math.abs( previousX - currentX ) +Math.abs( previousY - currentY ) ) < 7 ) {clear();
event = $.Event( "hoverintent" );for ( prop in orig ) {if ( !( prop in event ) ) {event[ prop ] = orig[ prop ];}} delete event.originalEvent;target.trigger( event );
} else {previousX = currentX;previousY = currentY;timeout = setTimeout( handler, 100 );}}
timeout = setTimeout( handler, 100 );target.bind({mousemove: track,mouseout: clear});}};
function initAct(){
if (tiAval){parent.iniciaActividade()}
}
function randomSort(){
}
function isCorrect(){
}
function goTime(){clearInterval(timeInterval);showMessage("Time");}
function showSol(oldTypeGame){ 
}
function paintBack(){}
