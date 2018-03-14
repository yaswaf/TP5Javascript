
var editingMode = { rect: 0, line: 1 };


function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
   
    this.currLineWidth = document.getElementById("spinnerWidth").value;
    this.currColour = document.getElementById("colour").value;
    this.currentShape = 0;

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    new DnD(canvas, this);

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function (dnd) {
        if(this.currEditingMode == 0){
            
            this.currentShape = new Rectangle(dnd.xDebut, dnd.yDebut, 0, 0, this.currLineWidth, this.currColour)
        }
        else{
            this.currentShape = new Ligne(dnd.xFin, dnd.yFin,dnd.xDebut, dnd.yDebut,  this.currLineWidth, this.currColour)
        }
        this.currentShape.paint(ctx);
    }.bind(this);

    this.onInteractionUpdate = function (dnd) {

        if (this.currEditingMode == 0) {
            this.currentShape.largeur = dnd.xFin - dnd.xDebut;
            this.currentShape.hauteur = dnd.yFin - dnd.yDebut;
            
        }
        else {
            this.currentShape.xFin = dnd.xFin;
            this.currentShape.yFin = dnd.yFin;
            
        }
        
    drawing.paint(ctx);
        this.currentShape.paint(ctx);
    }.bind(this);

    this.onInteractionEnd = function (dnd) {
        
        drawing.addForme(this.currentShape);
        drawing.paint(ctx);
    }.bind(this);

};


function ChangerFormeRectangle() {
    pencil.currEditingMode=0
}
function ChangerFormeLine() {
     pencil.currEditingMode=1
}


function ChangerEpaisseur() {
     pencil.currLineWidth=document.getElementById("spinnerWidth").value;
     var haha=document.getElementById("spinnerWidth").value;
     console.log(haha)
    
 }

function ChangerCouleur() {
     pencil.currColour=document.getElementById("colour").value;
     var haha=document.getElementById("colour").value;
     console.log(haha)
    
 }
