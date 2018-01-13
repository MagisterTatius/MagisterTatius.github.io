$(function(){
      $(".fg-button").hover(
          function(){ $(this).removeClass("ui-state-default").addClass("ui-state-focus"); },
      	   function(){ $(this).removeClass("ui-state-focus").addClass("ui-state-default"); }
       );
   $("#flat0").menu({
       content: $("#flat0").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat5").menu({
       content: $("#flat5").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat8").menu({
       content: $("#flat8").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat12").menu({
       content: $("#flat12").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat15").menu({
       content: $("#flat15").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat16").menu({
       content: $("#flat16").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat20").menu({
       content: $("#flat20").next().html(),
       showSpeed: 400,
       flyOut: true
   });
   $("#flat23").menu({
       content: $("#flat23").next().html(),
       showSpeed: 400,
       flyOut: true
   });
});
function cargar(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").load(function() {$(this).contents().find("body").css({"text-align":"inherit"});});
}
function cargarIma(url){
var iframe = document.getElementById("showIframe");
iframe.src = url;
$("#showIframe").load(function() {$(this).contents().find("body").css({"text-align":"center"});});
}
