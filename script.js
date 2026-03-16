let score = 0;

function spawnDrop(){

  let drop = document.createElement("div");
  drop.classList.add("drop");
  drop.innerHTML = "💧";

  drop.style.left = Math.random()*90 + "%";
  drop.style.top = "0px";

  drop.onclick = function(){
    score += 10;
    document.getElementById("score").innerText = score;
    drop.remove();
    checkWin();
  }

  document.getElementById("gameArea").appendChild(drop);

  fall(drop);
}

function spawnTrash(){

  let trash = document.createElement("div");
  trash.classList.add("trash");
  trash.innerHTML = "🗑️";

  trash.style.left = Math.random()*90 + "%";
  trash.style.top = "0px";

  trash.onclick = function(){
    score -= 5;
    document.getElementById("score").innerText = score;
    trash.remove();
  }

  document.getElementById("gameArea").appendChild(trash);

  fall(trash);
}

function fall(item){

  let position = 0;

  let fallInterval = setInterval(function(){

    position += 5;
    item.style.top = position + "px";

    if(position > 380){
      clearInterval(fallInterval);
      item.remove();
    }

  },50);
}

function checkWin(){

  if(score >= 100){
    document.getElementById("winMessage").innerHTML =
    "🎉 You helped provide clean water! 🎉";
  }

}

function resetGame(){

  score = 0;
  document.getElementById("score").innerText = score;
  document.getElementById("winMessage").innerHTML = "";
  document.getElementById("gameArea").innerHTML = "";

}

setInterval(spawnDrop,1500);
setInterval(spawnTrash,3000);