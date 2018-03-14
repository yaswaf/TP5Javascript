
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  
	this.xDebut=0;
	this.yDebut=0;
	this.xFin=0;
	this.yFin=0;
	// Developper les 3 fonctions gérant les événements
  // Ces 3 fonctions seront utilisées dans le main
	this.pression = function(evt) {
    console.log(evt);
    var info=getMousePosition(canvas,evt)
    this.xDebut=info.x;
    this.yDebut=info.y;
    //ctx.moveTo(this.xDebut,this.yDebut)
    interactor.onInteractionStart(this);

  }.bind(this) ;
this.deplacement = function(evt) {
    //console.log(evt);
    var info=getMousePosition(canvas,evt)
    this.xFin=info.x;
    this.yFin=info.y;
     interactor.onInteractionUpdate(this);

  }.bind(this) ;
  this.relachement = function(evt) {
  //ctx.lineTo(this.xFin,this.yFin);
  interactor.onInteractionEnd(this);
//ctx.stroke();
  }.bind(this) ;
	// Associer les fonctions précédentes aux évènements du canvas.
  

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



