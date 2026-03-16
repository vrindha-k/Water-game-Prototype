let score = 0

function updateScore(){

document.getElementById("score").innerText = score

}

function spawnDrop(){

let drop = document.createElement("div")

drop.className = "drop"
drop.innerHTML = "💧"

drop.style.left = Math.random()*90 + "%"
drop.style.top = "0px"

drop.onclick = function(){

score += 10
updateScore()
drop.remove()
checkWin()

}

document.getElementById("gameArea").appendChild(drop)

fall(drop)

}

function spawnTrash(){

let trash = document.createElement("div")

trash.className = "trash"
trash.innerHTML = "🗑️"

trash.style.left = Math.random()*90 + "%"
trash.style.top = "0px"

trash.onclick = function(){

score -= 5
updateScore()
trash.remove()

}

document.getElementById("gameArea").appendChild(trash)

fall(trash)

}

function fall(item){

let position = 0

/* speed increases with score */

let speed = 4 + (score/40)

let interval = setInterval(function(){

position += speed
item.style.top = position + "px"

if(position > 320){

clearInterval(interval)
item.remove()

}

},40)

}

function checkWin(){

if(score >= 100){

document.getElementById("winMessage").innerText =
"🎉 You helped provide clean water! 🎉"

}

}

function resetGame(){

score = 0
updateScore()

document.getElementById("gameArea").innerHTML = ""
document.getElementById("winMessage").innerText = ""

}

/* spawn objects */

setInterval(spawnDrop,1300)
setInterval(spawnTrash,3200)