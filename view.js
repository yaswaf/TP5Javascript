
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function(ctx) {
//TODO Manager color
	ctx.beginPath();
    ctx.rect(this.xGauche, this.yGauche, this.hauteur, this.largeur);
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
	ctx.stroke();
};

Ligne.prototype.paint = function(ctx) {
//TODO Manager color

    ctx.beginPath();
    ctx.moveTo(this.xDebut, this.yDebut);
    ctx.lineTo(this.xFin, this.yFin);
    ctx.lineWidth=this.epaisseur;
    ctx.strokeStyle=this.couleur;
    ctx.stroke();

};


Drawing.prototype.paint = function(ctx) {
    
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
     
    this.getFormes().forEach(function(eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

