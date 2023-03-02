const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Déclarer une liste avec les chemins des images*/
function afficherThumbBar()
{   
    let listeImg = document.createElement("ul");
    listeImg["style"]["list-style"] = "none"
    listeImg["style"]["padding-inline-start"] = "0px"
    thumbBar.appendChild(listeImg);

    for(let i = 1; i <= 5; i++)
    {
        let liImg = document.createElement("li");
        let image = document.createElement("img")

        let srcImg = $`images/pic{i}.jpg`;
        image.setAttribute("src", srcImg);

        image.setAttribute("onclick", "displayedImage.src = this.src")

        liImg.appendChild(image);
        listeImg.appendChild(liImg);
        
    }
}

afficherThumbBar()

/* Déclarer le texte alternative pour chaque image*/

/* traverser les images */

//const newImage = document.createElement('img');

/* sombre/clair bouton */

function sombre()
{
    if(btn.getAttribute("class") === "dark")
    {
        btn.setAttribute("class", "light")
        btn.innerHTML = "Ligthen"
        overlay["style"]["background-color"] = "rgba(0,0,0,0.5)";
    }
    else
    {
        btn.setAttribute("class", "dark")
        btn.innerHTML = "Darken" 
        overlay["style"]["background-color"] = "rgba(0,0,0,0)";
    }
}

btn.setAttribute("onclick",  "sombre()");
