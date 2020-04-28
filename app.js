var item = document.querySelectorAll('.item');
var btnNav = document.querySelector('.navigationIcon');
var containerMenu = document.querySelector('.containerMenu');
var btnBarre = document.querySelectorAll('.barre');
var b1 = document.querySelector('.b1');
var b2 = document.querySelector('.b2');
var b3 = document.querySelector('.b3');
var menuItems = document.querySelectorAll('.menuItem');
var toggle = 0;


for(let i = 0; i < item.length; i++){
  charming(item[i]);
}



btnNav.addEventListener('click', () => {

  if (toggle == 0){
    toggle++;
    TweenMax.to(b2, 0.01, {display: 'none'});
    TweenMax.to(b1, 0.1, {top: 2.5, transform: 'rotate(225deg)'})
    TweenMax.to(b3, 0.1, {top: -2.5, transform: 'rotate(-225deg)'})
    TweenMax.to(containerMenu, 0.8, {left: 0});
    for(let i = 0; i < btnBarre.length; i++){
      TweenMax.to(btnBarre[i], 0.5, {background: 'white', ease: Power2.easeOut})
    };
  } else {
    toggle--;
    TweenMax.to(b2, 0.1, {delay: 0.25, display: 'block'});
    TweenMax.to(b1, 0.1, {top: -10, transform: 'rotate(0deg)'})
    TweenMax.to(b3, 0.1, {top: 10, transform: 'rotate(0deg)'})
    TweenMax.to(containerMenu, 0.8, {left: '-100%'});
    for(let i = 0; i < btnBarre.length; i++){
      TweenMax.to(btnBarre[i], 0.05, {background: 'black', ease: Power4.easeIn})
    }
  }

})


menuItems.forEach((item) => {
  item.addEventListener('mouseenter', (event) => {
    // Define an array with all the individual letters of an item
    let itemLetters = Array.from(event.target.childNodes[1].querySelectorAll('span'));

    // For each letter, apply an animation
    itemLetters.forEach((letter) => {

      TweenMax.to(letter, 1, {
        // Define a random coordinate between -50 and 50
        // as the gris row height is 100px and the menu-item is in the middle
        x: Math.floor(Math.random() * 100 - 50),
        y: Math.floor(Math.random() * 100 - 50),
        z: Math.floor(Math.random() * 100 - 50),
        rotation: Math.floor(Math.random() * 100 - 50),
        opacity: 0.3,
        ease: Circ.easeOut
      })

    })

    menuItems.forEach((item) => {
      item.addEventListener('mouseleave', () => {

        itemLetters.forEach((letter) => {

          TweenMax.to(letter, 1, {
            // Define a random coordinate between -50 and 50
            // as the gris row height is 100px and the menu-item is in the middle
            x: 0,
            y: 0,
            z: 0,
            rotation: 0,
            opacity: 1,
            ease: Circ.easeOut
          })

        })
      })
    })
  });
})

// Close the menu window
menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggle--;
    TweenMax.to(b2, 0.1, {delay: 0.25, display: 'block'});
    TweenMax.to(b1, 0.1, {top: -10, transform: 'rotate(0deg)'})
    TweenMax.to(b3, 0.1, {top: 10, transform: 'rotate(0deg)'})
    TweenMax.to(containerMenu, 0.8, {left: '-100%'});
    for(let i = 0; i < btnBarre.length; i++){
      TweenMax.to(btnBarre[i], 0.05, {background: 'black', ease: Power4.easeIn})
    }
  })
})













