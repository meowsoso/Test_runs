console.log('run');
jQuery(document).ready(function($){
  console.log('once?');
  //Code goes here

  // generate raindrop in different location

  const randomRain = function (rain) {
    console.log('hello');
    var posx = (Math.random() * ($(document).width()*0.9)).toFixed();
    // var posy = (Math.random() * ($(document).height() * 0.1)).toFixed();
    $('div.raindrop').clone().css({
      'left': posx+'px',
      'top': '0px'
    }).addClass(`${ rain }`).removeClass('raindrop').appendTo('body');
  };

const rainEffect =function (divClass, speed) {

  for (let i = 0; i < 60; i++ ) {
    randomRain(divClass)
  };
    anime({
    targets: `div.${ divClass }`,
    translateY: 700,
    easing: 'easeInOutSine',
    delay: anime.stagger(speed),
    loop: true
  });
};

// clouds floating 

function getRandomInt(min, max) {
  let mini = Math.ceil(min);
  let maxi = Math.floor(max);
  return Math.floor(Math.random() * (maxi - mini + 1)) + mini;
}

const lightningPath = function (startX, startY) {
  let array = [`M${ startX } ${ startY }`];
  console.log(array)
  let positionY = startY;
  while (positionY <= 800) {
    array.push(`L${ getRandomInt(startX - 150, startY + 150)} ${ positionY += getRandomInt(0, 100)}`);
  } ;
  console.log(array.join(" "));
  return array.join("  ");
  
};

const createLight = function () {
  let newEl = $('.anim svg g path').clone()

  newEl.attr("d", `${ lightningPath(200, 100) }`).addClass('thunder').appendTo('.anim svg g');
  // $('.anim svg').remove(newEl);
  anime({
    targets: 'path.thunder',
    strokeDashoffset: [anime.setDashoffset, 0],
    duration: 2000,
    loop: false,
    easing: 'easeInOutSine',
    autoplay: true
  })
}

// const test = function(){



createLight();
createLight();



// rainEffect('rain', 65);
// rainEffect('rain2', 40);
// rainEffect('rain3', 50);
});