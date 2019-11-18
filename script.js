//Fonctionnalité 1-bis :

var foot = document.querySelector('footer');
var increment = 0;
foot.addEventListener("click", function(){
    increment ++ ;
    console.log(`Tu as clique ${increment} fois`);
})

//Fonctionnalité 2 :

var navBar = document.querySelector('.navbar-toggler');

    navBar.addEventListener("click", function(){
    var bar = document.querySelector('#navbarHeader')
    bar.classList.toggle("collapse");
});

//Fonctionnalité 3 :
//rendre le text de la premiere card en rouge

var firstedit= document.querySelectorAll('.btn-outline-secondary')[0]
    firstedit.addEventListener("click", function(){
        let text= document.querySelectorAll('.card-body')[0]
        text.style.color = 'red'
    });
//Fonctionnalité 4 :
// Toggle le texte de la deuxieme carte en vert

var secondedit= document.querySelectorAll('.btn-outline-secondary')[1]

    secondedit.addEventListener("click", function(){
    let k= document.querySelectorAll('.card-body')[1]
    if (k.style.color === 'green'){
        k.style.color = '' ;
        }else k.style.color = 'green';
});

// Fonctionnalité 5 :
let link = document.styleSheets[0];
let navbar = document.getElementsByTagName('header')[0];

    navbar.addEventListener("dblclick", function(){
        if (link.disabled === true) {
          link.disabled = false;
        }
        else {
          link.disabled = true;
        }
});


// Fonctionnalité 6 :
function reduce(){
  let text6 = document.getElementsByClassName('card-text');
  let view =    document.getElementsByClassName('btn-success');
  let img =      document.getElementsByClassName('card-img-top');

  for (let i = 0; i < text6.length; i++) {
    let p = document.getElementsByClassName('card-text')[i].textContent;
    let reduce = false;
   view[i].addEventListener("mouseover", function(){
      if (reduce === false) {
        img[i].style.width = '20%';
        text6[i].textContent = "";
        reduce = true;
      }
      else {
        img[i].style.width = '100%';
        text6[i].textContent = p;
        reduce = false;
      }
    });
  }
};

reduce();
