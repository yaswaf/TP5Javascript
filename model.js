// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing(ctx) {

//********************
//LISTSHAPES=LISTformes pour nous
//***********************
    this.listFormes = new Array();
    this.addForme = function (Dessin, id) {
        var tab = {id: id, dessin: Dessin}
        var btn = document.createElement("BUTTON");
        //btn.classList.add("btn");
        //btn.classList.add('btn-default');
        var html = "<span class='glyphicon glyphicon-remove-sign'></span>";

        btn.style.position = "absolute";
        if(!Dessin.yDebut)
        {
            var coordX =Dessin.yGauche;
        }
        else
        {
            var coordX =Dessin.yDebut;
        }

        if(!Dessin.xDebut)
        {
            var coordY =Dessin.xGauche;
        }
        else
        {
            var coordY =Dessin.xDebut;
        }


        btn.style.top =  (coordX+100)+ "px"
        btn.style.left =  (coordY+400)+"px"
        btn.id = id;
        var id = btn.id
        document.body.appendChild(btn);



        var paragraph = document.getElementById(id);
        paragraph.innerHTML = ' <span class="glyphicon glyphicon-remove-sign"> </span>';
        this.listFormes.push(tab)
        var y= this.listFormes;

        /*btn.addEventListener("click", function(drawing){
            drawing=new Drawing()

            y.splice(btn.id, btn.id+1);
            drawing.paint(ctx)
            drawing.updateShapeList(ctx);

        });*/
    }.bind(this);

    this.getFormes = function () {
        return this.listFormes
    }.bind(this);


}


function Dessin(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;


};

function Ligne(xFin, yFin, xDebut, yDebut, epaisseur, couleur) {
    this.xFin = xFin;
    this.yFin = yFin;
    this.xDebut = xDebut;
    this.yDebut = yDebut;


    Dessin.call(this, couleur, epaisseur);
};

function Rectangle(xGauche, yGauche, hauteur, largeur, epaisseur, couleur) {
    this.xGauche = xGauche;
    this.yGauche = yGauche;
    this.hauteur = hauteur;
    this.largeur = largeur;

    Dessin.call(this, couleur, epaisseur);
};


