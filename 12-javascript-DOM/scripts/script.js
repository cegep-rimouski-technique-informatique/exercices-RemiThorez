// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html


// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"
document.getElementById("titre").outerHTML = "Domain des Arbres";
  
  // 3. Changez l'ordre de présentation des images avec flex
  function changerDirFlex()
  {
    var element = document.getElementsByClassName("container");
        var element2 = element[0]["style"]["flex-direction"] = "column-reverse";

    console.log("HAHAHAHHAHAHAHA. . . :(                Send help . . .")
  }
  changerDirFlex();


  // 4. Ajoutez le point "Terre" à la liste d'éléments
function ajouterElemento()
{
    var elementUl = document.getElementsByTagName("ul")[0].appendChild(document.createTextNode("Terre"));
}

ajouterElemento();

  // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.
  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document.querySelectorAll(
    'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
  )[0];
  // code ici
  
  function mettreImgLien()
  {
    var imagesSansLiens = document.querySelectorAll("img");
    for(const image of imagesSansLiens) 
    {
      if(!image.parentNode.hasAttribute("href"))
      {
        image.parentNode.setAttribute("href", "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg")
      }
    }
  }
  mettreImgLien();
 

  // 6. Modifiez la police du texte pour toutes les éléments de la liste


  function changementDePolice()
  {
    document.getElementsByTagName("ul")[0]["style"]["font-family"] = "arial";
  }

  changementDePolice();

}
