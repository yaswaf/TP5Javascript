
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(){

	this.listFormes=new Array();
	this.addForme = function(Dessin) {
    this.listFormes.push(Dessin)
  }.bind(this) ;
  this.getFormes = function() {
    return this.listFormes
  }.bind(this) ;


}

function Dessin(couleur,epaisseur) {
  this.couleur = couleur;
  this.epaisseur = epaisseur;
  
};

function Ligne(xFin,yFin,xDebut,yDebut,epaisseur,couleur) {
	this.xFin=xFin;
	this.yFin=yFin;
	this.xDebut=xDebut;
	this.yDebut=yDebut;
  Dessin.call(this, couleur, epaisseur);
};

function Rectangle(xGauche,yGauche,hauteur,largeur,epaisseur,couleur) {
	this.xGauche=xGauche;
	this.yGauche=yGauche;
	this.hauteur=hauteur;
	this.largeur=largeur;
  Dessin.call(this, couleur, epaisseur);
};


