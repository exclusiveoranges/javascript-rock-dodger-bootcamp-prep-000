const DODGER = document.getElementById('dodger')
const GAME = document.getElementById('game')
const GAME_HEIGHT = 400
const GAME_WIDTH = 400
const LEFT_ARROW = 37 // use e.which!
const RIGHT_ARROW = 39 // use e.which!
const ROCKS = []
const START = document.getElementById('start')

var gameInterval = null


function checkCollision(rock) {

  const top = positionToInteger(rock.style.top)

  if (top > 360) {
    const dodgerLeftEdge = positionToInteger(DODGER.style.left)

    const dodgerRightEdge = dodgerLeftEdge + 40;

    const rockLeftEdge = positionToInteger(rock.style.left)

    const rockRightEdge = rockLeftEdge + 20;

    return (rockLeftEdge <= dodgerLeftEdge) && (rockRightEdge >= dodgerLeftEdge) ||
    (rockLeftEdge >= dodgerLeftEdge) && (rockRightEdge <= dodgerRightEdge)||
    (rockLeftEdge <= dodgerRightEdge) && (rockRightEdge >= dodgerRightEdge)
  }
}

function createRock(x) {
  const rock = document.createElement('div')
  rock.className = 'rock'
  rock.style.left = `${x}px`
  rock.style.top = 0
  GAME.appendChild(rock);

  var top = rock.style.top
  function moveRock() {
    rock.style.top = `${top += 2}px`

    if (top < GAME_HEIGHT) {
      window.requestAnimationFrame(moveRock)
    }

    if (checkCollision(rock) === true) {
      endGame()
    }

    if (top > GAME_HEIGHT) {
      rock.remove()
    }
  }

  window.requestAnimationFrame(moveRock)
  // We should kick of the animation of the rock around here


  ROCKS.push(rock)


  return rock
}

function endGame() {
  clearInterval(gameInterval)


ROCKS.forEach(function(rock) {
  rock.remove()
  });

window.removeEventListener('keydown', moveDodger)

alert('YOU LOSE!')

}

function moveDodger(e) {

  if (e.which === 37) {
<<<<<<< HEAD
    e.preventDefault()
    e.stopPropagation()
=======
>>>>>>> e9e606821509cd373b2c699139e2645acf38e687
    moveDodgerLeft()
  }

  if (e.which === 39) {
<<<<<<< HEAD
    e.preventDefault()
    e.stopPropagation()
=======
>>>>>>> e9e606821509cd373b2c699139e2645acf38e687
    moveDodgerRight()
  }

}

function moveDodgerLeft() {
<<<<<<< HEAD

  window.requestAnimationFrame(function(){
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)

    if (left > 0) {
      dodger.style.left = `${left - 4}px`
    }
  });
=======
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left > 0) {
    dodger.style.left = `${left - 4}px`
  }

  window.requestAnimationFrame(moveDodgerLeft())


>>>>>>> e9e606821509cd373b2c699139e2645acf38e687

}

function moveDodgerRight() {

<<<<<<< HEAD


window.requestAnimationFrame(function() {

  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)

  if (left < 360) {
    dodger.style.left = `${left + 4}px`
  };

});
};
=======
  var rightNumbers = dodger.style.right.replace('px', '')
  var right = parseInt(rightNumbers, 10)

  if (right > 0) {
    dodger.style.left = `${left + 4}px`
  }

window.requestAnimationFrame(moveDodgerRight())

}
>>>>>>> e9e606821509cd373b2c699139e2645acf38e687

/**
 * @param {string} p The position property
 * @returns {number} The position as an integer (without 'px')
 */
function positionToInteger(p) {
  return parseInt(p.split('px')[0]) || 0
}

function start() {
  window.addEventListener('keydown', moveDodger)

  START.style.display = 'none'

  gameInterval = setInterval(function() {
    createRock(Math.floor(Math.random() *  (GAME_WIDTH - 20)))
  }, 1000)
}
