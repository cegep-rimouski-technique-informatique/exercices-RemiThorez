const spadeTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const spadeTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const spade1 = document.querySelector("#spade1");
const spade2 = document.querySelector("#spade2");
const spade3 = document.querySelector("#spade3");


// codez ici  
/*function animationPique(nomItem, anime)
{
  spade1.animate(spadeTumbling, spadeTiming);
}


function animationPique2()
{
  spade2.animate(spadeTumbling, spadeTiming);
}

animationPique("N/A",animationPique2);
*/


const lesAnimations = [spade1, spade2, spade3];

function prochain(theSpade)
{

  let i = lesAnimations.indexOf(theSpade)
  if(i >= lesAnimations.length - 1)
  { 
    i = 0;
  }
  else
  {
    i++;
  }
  animer(lesAnimations[i], prochain);
}

animer(lesAnimations[0], prochain);

function animer(item, callback) 
{
  item.animate(spadeTumbling, spadeTiming);
  callback(item)
}





//code corrections

