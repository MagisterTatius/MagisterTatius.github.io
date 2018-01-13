//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var indice, indiceMul, taboaContidos, maxIndice, menuLateral, menuActividades, anchoContidoIni,horaInicio, taboaIntentos;
function inicia(){
   var data=new Date();
   if (data.getMinutes()<10){horaInicio=data.getHours() +":0"+data.getMinutes()+" h";}
   else{horaInicio=data.getHours() +":"+data.getMinutes()+" h";}
   taboaIntentos=new Array();
   menuLateral='';
   menuActividades='';
   if (window.opener == null){
      indice=0;
      }else{
      if (window.opener.indice == null){
         indice=0;
      }else{
         indice=window.opener.indice;
      }
   }
   maxIndice=5;
	taboaContidos=new Array();
taboaContidos[0]=new act("1. Exercitium primum","1. Exercitium primum","","<object width='100%' height='450' type='text/html' data='03.02.01.Relacionar_Palabras/03.02.01.Relacionar_Palabras.htm'></object>",false,"",true,false,false);
taboaContidos[1]=new act("2. Exercitium secundum","2. Exercitium secundum","","<object width='100%' height='450' type='text/html' data='03.02.02.Seleccionar_pal_parag/03.02.02.Seleccionar_pal_parag.htm'></object>",false,"",true,false,false);
taboaContidos[2]=new act("3. Exercitium tertium","3. Exercitium tertium","","<object width='100%' height='450' type='text/html' data='03.02.03.Ordenar_Frases/03.02.03.Ordenar_Frases.htm'></object>",false,"",true,false,false);
taboaContidos[3]=new act("4. Exercitium quartum","4. Exercitium quartum","","<object width='100%' height='450' type='text/html' data='03.02.04.Completar_Texto.Arras/03.02.04.Completar_Texto.Arras.htm'></object>",false,"",true,false,false);
taboaContidos[4]=new act("5. Exercitium quintum","5. Exercitium quintum","","<object width='100%' height='450' type='text/html' data='03.02.05.Relacionar_Palabras/03.02.05.Relacionar_Palabras.htm'></object>",false,"",true,false,false);
taboaContidos[5]=new act("6. Exercitium sextum","6. Exercitium sextum","","<object width='100%' height='450' type='text/html' data='03.02.06.Completar_Texto.Escri/03.02.06.Completar_Texto.Escri.htm'></object>",false,"",true,false,false);
document.getElementById("botonAdiante").href="javascript:avanza()";
document.getElementById("botonAtras").href="javascript:retrocede()";
document.getElementById("botonAxuda").target="_blank";
anchoContidoIni=document.getElementById("areaContido").style.width;
   actualiza();
}
function actualiza(){
   document.getElementById("tituloAct").innerHTML=taboaContidos[indice].descricion;
   document.getElementById("enunciadoAct").innerHTML=taboaContidos[indice].enunciado;
   document.getElementById("contidoAct").innerHTML=taboaContidos[indice].areaContido;
   document.getElementById("botonAdiante").style.visibility="hidden";
   document.getElementById("botonAtras").style.visibility="hidden";
   document.getElementById("botonAxuda").style.visibility="hidden";
   if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.visibility="hidden";}
   if (taboaContidos[indice].seg_ant){
      if (indice>0){
         document.getElementById("botonAtras").title=taboaContidos[indice-1].descricionUTF8;
         document.getElementById("botonAtras").style.visibility="visible";
      }
      if (indice<maxIndice){
         document.getElementById("botonAdiante").title=taboaContidos[indice+1].descricionUTF8;
         document.getElementById("botonAdiante").style.visibility="visible";
      }
   }
   if (taboaContidos[indice].mp){
      document.getElementById("menuPrincipal").style.visibility="visible";
   }
   else{
      document.getElementById("menuPrincipal").style.visibility="hidden";
   }
   if (taboaContidos[indice].bAxuda.length>0){
      document.getElementById("botonAxuda").href=taboaContidos[indice].bAxuda;
      document.getElementById("botonAxuda").style.visibility="visible";
   }
   if ((taboaContidos[indice].ml) || (taboaContidos[indice].ma)){
	   contido="";
	   document.getElementById("menu").style.height="auto";
      document.getElementById("areaContido").style.width=anchoContidoIni;
	   if (taboaContidos[indice].ml){ contido=menuLateral;}
	   if (taboaContidos[indice].ma){ contido=contido+menuActividades;}
	   document.getElementById("menu").innerHTML=contido;
	   document.getElementById("menu").style.visibility="visible";
   }
   else{
        if (eval(document.getElementById("menu")) != null){document.getElementById("menu").style.height="0px";}
        document.getElementById("areaContido").style.width="100%";
   }
}
function avanza(){
   if (indice<maxIndice){
      indice++; actualiza();
   };
}
function irA(num){
      indice=num; actualiza();
}
function recarga(){
      irA(indice);
}
function retrocede(){indice--; actualiza();}
function act( descricion, descricionUTF8, enunciado, areaContido,ma, bAxuda, seg_ant, mp, ml ) {
   this.descricion=descricion;
   this.descricionUTF8=descricionUTF8;
   this.enunciado=enunciado;
   this.areaContido=areaContido;
   this.mp=mp;
   this.ml=ml;
   this.ma=ma;
   this.seg_ant=seg_ant;
   this.bAxuda=bAxuda;
   }
function iniciaActividade(){
   var data=new Date();
   if (data.getMinutes()<10){var hI=data.getHours() +":0"+data.getMinutes();}
   else{var hI=data.getHours() +":"+data.getMinutes();}
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function iniciaActividadeMul(){
   indiceMul=indice;
   var data=new Date();
   if (data.getMinutes()<10){var hI=data.getHours() +":0"+data.getMinutes();}
   else{var hI=data.getHours() +":"+data.getMinutes();}
   var x=taboaIntentos.length;
   taboaIntentos[x]=new infoAct(indice,hI,0,"exec","xx:xx",0);
}
function infoAct( ind, hinicio, intentos, estado, hfin, puntos){
	this.ind=ind;
	this.hinicio=hinicio;
	this.intentos=intentos;
	this.estado=estado;
	this.hfin=hfin;
	this.puntos=puntos;
}
function actualizaInfoAct(puntos,intentos,estado){
	var data=new Date();
   if (data.getMinutes()<10){var hF=data.getHours() +":0"+data.getMinutes();}
   else{var hF=data.getHours() +":"+data.getMinutes();}
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indice,hI,intentos,estado,hF,puntos);
}
function actualizaInfoActMul(){
	var data=new Date();
   if (data.getMinutes()<10){var hF=data.getHours() +":0"+data.getMinutes();}
   else{var hF=data.getHours() +":"+data.getMinutes();}
	var x=taboaIntentos.length-1;
	var hI=taboaIntentos[x].hinicio;
	taboaIntentos[x]=new infoAct(indiceMul,hI,0,"--",hF,0);
}
function PechaVentana(){window.close()}
function AbreCentrada(theURL,winName,features, myWidth, myHeight, isCenter,aNume) {
	if(window.screen)if(isCenter)if(isCenter=="true"){
      var myLeft = (screen.width-myWidth)/2;
      var myTop = (screen.height-myHeight)/2;
      features+=(features!='')?',':'';
      features+=',left='+myLeft+',top='+myTop;
    }
    window.open(theURL,winName,features+((features!='')?',':'')+'width='+myWidth+',height='+myHeight);
    indice=aNume;
}
function mostrar(capa){
var obj = document.getElementById(capa)
if(obj.style.display == "block"){
   obj.style.display = "none"
   document.getElementById("contenido").style.width="95%";
}else{
   obj.style.display = "block";
   document.getElementById("contenido").style.width="75%";
}}
function hideMenu(menu,contido,wC){var obj=document.getElementById(menu);var con=document.getElementById(contido);
if (obj.style.display=="block"){obj.style.display="none";con.style.width="95%";}
else{obj.style.display="block";con.style.width=wC;}}
function MM_preloadImages() {
   var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
   var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
   if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_swapImgRestore() {var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;}
function MM_findObj(n, d) { //v4.01
   var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
   d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
   if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
   for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
      if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { //v3.0
   var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
