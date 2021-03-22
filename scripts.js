const pg = document.getElementById("penguin");
const bbt = document.getElementById("bbt");
const bbt2 = document.getElementById("bbt2");
const ice = document.getElementById("platform");
const menu = document.getElementById("menu");
const play = document.getElementById("play");
const bee = document.getElementById("bee");
const bee2 = document.getElementById("bee2");
const spark = document.getElementById("spark");
const menu_btn = document.getElementById("return");
const go_msg = document.getElementById("go_msg")
const go_btns = document.getElementById("go_btns");
const inst = document.getElementById("inst");

var score = document.getElementById("score"),count=0;
var time1;
var time2;
var time3;
var time4;
var time5;
var time6;
var time7;

// SEPARATE FUNCTIONS 
function jump() {
  if (pg.classList != "jump") {
    pg.classList.add("jump");
    document.getElementById("a_jump").play();
    
    time6 = setTimeout(function () {
      pg.classList.remove("jump");
    }, 700)
  }
}  

function jump2() {
  pg.classList.replace("upper","jump2");
  document.getElementById("a_jump2").play();
    
  time7 = setTimeout(function () {
    pg.classList.remove("jump2");
  }, 700)
}

function gotBbt() {
  if (!play.classList.contains("freeze")) {
    bbt.style.visibility = "hidden";
    document.getElementById("a_pt").play();
    spark.style.top = "-470px";
    spark.style.display = "flex";
    
    setTimeout(function () {
      spark.style.display = "none";
    }, 500)
    
    bbt.classList.add("point");
    
    setTimeout(function() {
      bbt.classList.remove("point")
    },500)
  }
}

function gotBbt2() {
  if (!play.classList.contains("freeze")) {
    bbt2.style.visibility = "hidden";
    document.getElementById("a_pt2").play();
    spark.style.top = "-570px";
    spark.style.display = "flex";
    
    setTimeout(function () {
      spark.style.display = "none";
    }, 500)
    
    bbt2.classList.add("point");
    
    setTimeout(function() {
      bbt2.classList.remove("point")
    },500)
  }
}


function platform(rng1) {
  if (ice.classList != "run_platform" && !play.classList.contains("freeze")) {
    ice.classList.add("run_platform");
    if (play.classList.contains("special")) {
      runBbt2();
    } else if (rng1 % 3 === 0) {
      runBbt2();
    }
    
    time1 = setTimeout(function () {
      ice.classList.remove("run_platform")
    }, 2900)
  }
}

function runBbt() {
  if (!bbt.classList.contains("run_bbt") && !play.classList.contains("freeze")) {
    var secs = (Math.random()*2)+2
    bbt.style.visibility = "visible";
    bbt.classList.add("run_bbt");
    bbt.style.animationDuration = secs+'s'
  }
}

function runBbt2() {
  if (!bbt2.classList.contains("run_bbt2") && !play.classList.contains("freeze")) {
    bbt2.style.visibility = "visible";
    bbt2.classList.add("run_bbt2");

    time2 = setTimeout(function () {
      bbt2.classList.remove("run_bbt2")
    },2900)
  }
}

function runBee() {
  if (play.classList.contains("special") && count >= 28) {
    return;
  }

  if (!bee.classList.contains("run_bee") && !play.classList.contains("freeze")) {
    if (count < 20) {
      var secs = (Math.random()*1)+2
    } 
    if (count >= 20 && count < 50) {
      var secs = (Math.random()*1)+1.5
    }
    if (count >= 50) {
      var secs = (Math.random()*1)+1
    }
    bee.style.animationDuration = secs+'s'
    bee.classList.add("run_bee");

    time3 = setTimeout(function () {
      bee.classList.remove("run_bee")
    }, 4000)
  }
}

function runBee2() {
  if (play.classList.contains("special") && count >= 28) {
    return;
  }

  if (!bee2.classList.contains("run_bee2") && !play.classList.contains("freeze")) {
    if (count < 20) {
      var secs = (Math.random()*1)+2.5
    } 
    if (count >= 20 && count < 50) {
      var secs = (Math.random()*1)+2
    }
    if (count >= 50) {
      var secs = (Math.random()*1)+1.5
    }
    bee2.style.animationDuration = secs+'s'
    bee2.classList.add("run_bee2");

    time4 = setTimeout(function () {
      bee2.classList.remove("run_bee2")
    }, 4000)
  }
}

const bgm = document.getElementById("bgm");

function startGame(mode) {
  if (menu.style.display = "block") {
    if (bgm.classList.contains("on")) {
      bgm.volume = 0.5;
      bgm.currentTime=0;
      bgm.play();
    }
    menu.style.display = "none"
    play.style.display = "block"  
    count=0;
    score.innerHTML = count;
    pg.classList.remove("jump","jump2")
    bbt.classList.remove("run_bbt");
    bbt2.classList.remove("run_bbt2");
    bee.classList.remove("run_bee");
    bee2.classList.remove("run_bee2");
    hbd.classList.remove("run_hbd");
    ice.classList.remove("run_platform");
    go_msg.style.display = "none"
    go_btns.style.display = "none"
    play.classList.remove("freeze")
    
    if (mode == "special") {
      play.classList.add("special");
      instructions()
    } else if (mode == "endless") {
      play.classList.add("endless");
      instructions()
    }
  }
}

function instructions() {
  inst.classList.add("inst_in")
  inst.style.visibility = "visible"

  setTimeout(function () {
    inst.classList.replace("inst_in","inst_out")

    setTimeout(function() {
      inst.classList.remove("inst_out")
      inst.style.visibility = "hidden"
    }, 1500)
  }, 4000)
}

function goToMenu() {
  menu_btn.classList.remove("return_button")
  play.classList.remove("freeze");
  pg.classList.remove("jump","jump2")
  bbt.classList.remove("run_bbt");
  bbt2.classList.remove("run_bbt2");
  bee.classList.remove("run_bee");
  bee2.classList.remove("run_bee2");
  hbd.classList.remove("run_hbd");
  ice.classList.remove("run_platform");
  go_msg.style.display = "none"
  go_btns.style.display = "none"
  bgm.pause();
  hb_song.pause();
  clearTimeout(startSong);
  hb_song.classList.remove("on");
  clearInterval(fadeInt);


  if (play.style.display = "block") {
    play.style.display = "none"
    menu.style.display = "block" 
    
    if (play.classList.contains("special")) {
      play.classList.remove("special");
      hbd.classList.remove("run_hbd");
    }
    if (play.classList.contains("endless")) {
      play.classList.remove("endless");
    }
  }
}

function gameOver() {
  if (count >= 28 && play.classList.contains("special")) {
    return;
  } else {
    if (!play.classList.contains("freeze")) {
      document.getElementById("a_dead").play();
      document.getElementById("bgm").pause();
    }
    play.classList.add("freeze")
    clearTimeout(time1)
    clearTimeout(time2)
    clearTimeout(time3)
    clearTimeout(time4)
    clearTimeout(time5)
    clearTimeout(time6)
    clearTimeout(time7)
    go_msg.style.display = "flex"
    go_btns.style.display = "flex"
    //  hbd.classList.remove("run_hbd") 
  }
}

// DETERMINES COLLISION & ADDS POINTS
let gotPoint = setInterval(function () {
  let pgHead = parseInt(
    window.getComputedStyle(pg).getPropertyValue("top")
  );
  let bbtLeft = parseInt(
    window.getComputedStyle(bbt).getPropertyValue("left")
  );
  let bbtLeft2 = parseInt(
    window.getComputedStyle(bbt2).getPropertyValue("left")
  );

  if (bbtLeft < 40  && bbtLeft > 0 && pgHead >= 90 && !bbt.classList.contains("point")) {  
    gotBbt();

    if (count == 28 && play.classList.contains("special")) {
      return;
    } else {
      count+=1;
      score.innerHTML = count;
    }
  }

  if (bbtLeft2 < 40 && bbtLeft2 > 0 && pgHead <= 50 && !bbt2.classList.contains("point")) {
    gotBbt2();
    count+=1;
    score.innerHTML = count;
  }
}, 20);

// IF PENGUIN SHOULD BE ON PLATFORM OR NOT
let isElevated = setInterval(function () {
  var pgFeet = parseInt(
  window.getComputedStyle(pg).getPropertyValue("bottom")
);
  var iceLeft = parseInt(
  window.getComputedStyle(ice).getPropertyValue("right")
);

  if (pgFeet > -35 && pgFeet < -32 && iceLeft >= -50 && iceLeft < 115) {
    pg.classList.add("upper");
  }
  if (pgFeet === -32 && (iceLeft > 130 || iceLeft < -500)) {
    if (pg.classList == "upper") {
      pg.classList.replace("upper","descend");
   
      time5 = setTimeout(function () {
        pg.classList.remove("descend");
      }, 200)
    }
  }
}, 5)

// RNG TO RUN PLATFORM OR BBT
let runItems = setInterval(function () {
  var rng1 = Math.floor(Math.random() * 100);
  var rng2 = Math.floor(Math.random() * 100);

  if (play.style.display != "none") {
    if (rng1 % 8 === 0 && count > 2) {
      if (count >= 28 && play.classList.contains("special")) {
        return;
      } else {
        platform(rng1);
      }
    }
    if (rng1 % 2 === 0) {
      if (count === 0) {
        var bbtTime = setTimeout(function() {
          runBbt()
        }, 2000)
      } else {
        clearTimeout(bbtTime)
        runBbt();
      }
    }
    if (count >= 5 && rng2 % 3 === 0) {
      runBee();
    }
    if (count >= 10 && rng2 % 5 === 0) {
      runBee2();
    }
  }
}, 500)

// REMOVE CLASS FOR BBT 
let removeBbt = setInterval(function() {
    var bbtLeft = parseInt(
      window.getComputedStyle(bbt).getPropertyValue("left"));

    if ((bbtLeft < -25 || bbtLeft > 650) && bbt.classList.contains("run_bbt")) {
      bbt.classList.remove("run_bbt")
    }
  }, 5)

let runMsg = setInterval(function () {
  if (count >= 28 && play.classList.contains("special")) {
    hbd.classList.add("run_hbd");
    menu_btn.classList.add("return_button")

  }
},100);

let isDead = setInterval(function() {
  let pgHead = parseInt(
    window.getComputedStyle(pg).getPropertyValue("top")
  );
  let beeLeft = parseInt(
    window.getComputedStyle(bee).getPropertyValue("left")
  );
  let beeLeft2 = parseInt(
    window.getComputedStyle(bee2).getPropertyValue("left")
  );

  if (pgHead >= 90 && beeLeft < 25 && beeLeft > -50) {
    gameOver();
  }

  if (pgHead <=40 && pgHead > -40 && beeLeft2 < 25 && beeLeft2 > -50) {
    gameOver();
  }
}, 50)


//SOUND EFFECTS
var specBtn = document.getElementById("special");
var endlessBtn = document.getElementById("endless");
var btn1 = document.getElementById("go_btn");
var btn2 = document.getElementById("go_btn2");

specBtn.addEventListener('mouseover', function() {
  document.getElementById("a_hover").play();
})
endlessBtn.addEventListener('mouseover', function() {
  document.getElementById("a_hover").play();
})
btn1.addEventListener('mouseover', function() {
  document.getElementById("a_hover").play();
});
btn2.addEventListener('mouseover', function() {
  document.getElementById("a_hover").play();
});

const hb_song = document.getElementById("a_hb");
var startSong;
var fadeInt;

let isMusic = setInterval(function() {
  if (count === 28 && play.classList.contains("special")) {
    if (!hb_song.classList.contains("on")) {
      startSong = setTimeout(function() {
        hb_song.classList.add("on");
        hb_song.play();
      }, 3200)

      if (bgm.classList.contains("on")) {
        fadeMusic();
      } 
    }
  }
}, 1000);

function fadeMusic() {
  fadeInt = setInterval(function() {
  if ((0.1 - bgm.volume) > 0) {
    bgm.volume = 0;
  } else {
      bgm.volume -= 0.1
    }
  }, 700)
  bgm.classList.replace("on","off")
}


function toggleMusic(option) {
  if (option === 'on') {
    bgm.currentTime = 0
    if (play.style.display == 'block') {
      bgm.play()
    }
    bgm.classList.replace("off","on");
    document.getElementById('music_off').style.display = "flex"
    document.getElementById('music_on').style.display = "none"
    console.log("music on")
    
  } 
  if (option === 'off') {
    bgm.pause();
    bgm.classList.replace("on","off");
    document.getElementById('music_off').style.display = "none"
    document.getElementById('music_on').style.display = "flex"
    console.log("music off")
  }
}

document.addEventListener("keydown", function (e) {
  var pgFeet = parseInt(
    window.getComputedStyle(pg).getPropertyValue("bottom")
  );

  if (e.key === " ") {
    e.preventDefault();
    
    if (pgFeet === -135) {
      jump();
    }

    if (pgFeet === -32) {
      jump2();
    }
  }

  if (e.key === "Escape") {
    e.preventDefault();
    goToMenu();
    bgm.pause();
    hb_song.pause();
    
  }
});

