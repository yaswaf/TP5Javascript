// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
//TODO Manager color
    ctx.beginPath();
    ctx.rect(this.xGauche, this.yGauche, this.hauteur, this.largeur);
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();

};

Ligne.prototype.paint = function (ctx) {
//TODO Manager color

    ctx.beginPath();
    ctx.moveTo(this.xDebut, this.yDebut);
    ctx.lineTo(this.xFin, this.yFin);
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.couleur;
    ctx.stroke();


};


Drawing.prototype.paint = function (ctx) {

    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);


};

Drawing.prototype.updateShapeList = function (ctx) {
    var i = 0;
    this.getFormes().forEach(function (eltDuTableau) {
        // now fill the canvas
        i++;
        eltDuTableau.dessin.paint(ctx);
    });
};





/*<button type="button" class="btn btn-default">
 <span class="glyphicon glyphicon-remove-sign"></span>
 </button>*/

   
   
