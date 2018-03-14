
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

canvas.width=800
canvas.height=600
var drawing=new Drawing()
var pencil=new Pencil(ctx,drawing,canvas)
// Code temporaire pour tester le DnD
var cnv=new DnD(canvas,pencil);
ctx.fillStyle = '#F0F0F0'; // set canvas' background color
ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
var drap=0;
function mouseDown(event) {
    cnv.pression(event)
    drap=1

}

function mouseMove(event) {
		if(drap==1)
		{
			cnv.deplacement(event)
		}
   
}

function mouseUp(event) {
		drap=0;
		cnv.relachement(event)

}





// Code temporaire pour tester l'affiche de la vue
//var rec = new Rectangle(5, 10, 50, 100, 5, '#00CCC0');
//console.log("je suis la")
//rec.paint(ctx);
//var ligne = new Rectangle(10, 20, 50, 100, 5, '#00CCC0');
//ligne.paint(ctx);
// tester également Dessin.
////

// Code final à utiliser pour manipuler Pencil.
//var drawing = new Drawing();
//var pencil = new Pencil(ctx, drawing, canvas);
//drawing.paint(ctx, canvas);

