// No AI. Ain't nobody got time for that

$(document).ready(function() {
  $('#chooseToken').modal('show');

  var wins = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  var pile = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var pX = [];
  var pO = [];
  var turn = "pX"; // can be pX or pO
  var player = "";

  $("#chooseX").on("click", function() {
    player = "pX";
    reset();
  })

  $("#chooseO").on("click", function() {
    player = "pO";
    reset();
    randomMove();
  })

  function randomMove() {
    var rnd = Math.floor(Math.random() * pile.length);
    if (player !== "pX" && turn === "pX") {
      $("#" + pile[rnd]).text("X");
      pX.push(pile[rnd]);
      pile.splice(pile.indexOf(pile[rnd]), 1);
      turn = "pO";
    } else {
      $("#" + pile[rnd]).text("O");
      pO.push(pile[rnd]);
      pile.splice(pile.indexOf(pile[rnd]), 1);
      turn = "pX";
    }
    checkWin();
  }

  function checkWin() {
    for (var winsIndex = 0; winsIndex < wins.length; winsIndex++) {
      if (pX.includes(wins[winsIndex][0]) &&
        pX.includes(wins[winsIndex][1]) &&
        pX.includes(wins[winsIndex][2])) {
        $('#pXwins').modal('show');
        reset();
      } else if (pO.includes(wins[winsIndex][0]) &&
        pO.includes(wins[winsIndex][1]) &&
        pO.includes(wins[winsIndex][2])) {
        $('#pOwins').modal('show');
        reset();
      }
    }
  }

  $("#1").on("click", function() {
    if (pile.includes(1) && turn === "pX") {
      $("#1").text("X");
      pile.splice(pile.indexOf(1), 1);
      pX.push(1);
      turn = "pO";
      randomMove();
    } else if (pile.includes(1) && turn === "pO") {
      $("#1").text("O");
      pile.splice(pile.indexOf(1), 1);
      pO.push(1);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#2").on("click", function() {
    if (pile.includes(2) && turn === "pX") {
      $("#2").text("X");
      pile.splice(pile.indexOf(2), 1);
      pX.push(2);
      turn = "pO";
      randomMove();
    } else if (pile.includes(2) && turn === "pO") {
      $("#2").text("O");
      pile.splice(pile.indexOf(2), 1);
      pO.push(2);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#3").on("click", function() {
    if (pile.includes(3) && turn === "pX") {
      $("#3").text("X");
      pile.splice(pile.indexOf(3), 1);
      pX.push(3);
      turn = "pO";
      randomMove();
    } else if (pile.includes(3) && turn === "pO") {
      $("#3").text("O");
      pile.splice(pile.indexOf(3), 1);
      pO.push(3);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#4").on("click", function() {
    if (pile.includes(4) && turn === "pX") {
      $("#4").text("X");
      pile.splice(pile.indexOf(4), 1);
      pX.push(4);
      turn = "pO";
      randomMove();
    } else if (pile.includes(4) && turn === "pO") {
      $("#4").text("O");
      pile.splice(pile.indexOf(4), 1);
      pO.push(4);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#5").on("click", function() {
    if (pile.includes(5) && turn === "pX") {
      $("#5").text("X");
      pile.splice(pile.indexOf(5), 1);
      pX.push(5);
      turn = "pO";
      randomMove();
    } else if (pile.includes(5) && turn === "pO") {
      $("#5").text("O");
      pile.splice(pile.indexOf(5), 1);
      pO.push(5);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#6").on("click", function() {
    if (pile.includes(6) && turn === "pX") {
      $("#6").text("X");
      pile.splice(pile.indexOf(6), 1);
      pX.push(6);
      turn = "pO";
      randomMove();
    } else if (pile.includes(6) && turn === "pO") {
      $("#6").text("O");
      pile.splice(pile.indexOf(6), 1);
      pO.push(6);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#7").on("click", function() {
    if (pile.includes(7) && turn === "pX") {
      $("#7").text("X");
      pile.splice(pile.indexOf(7), 1);
      pX.push(7);
      turn = "pO";
      randomMove();
    } else if (pile.includes(7) && turn === "pO") {
      $("#7").text("O");
      pile.splice(pile.indexOf(7), 1);
      pO.push(7);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#8").on("click", function() {
    if (pile.includes(8) && turn === "pX") {
      $("#8").text("X");
      pile.splice(pile.indexOf(8), 1);
      pX.push(8);
      turn = "pO";
      randomMove();
    } else if (pile.includes(8) && turn === "pO") {
      $("#8").text("O");
      pile.splice(pile.indexOf(8), 1);
      pO.push(8);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  $("#9").on("click", function() {
    if (pile.includes(9) && turn === "pX") {
      $("#9").text("X");
      pile.splice(pile.indexOf(9), 1);
      pX.push(9);
      turn = "pO";
      randomMove();
    } else if (pile.includes(9) && turn === "pO") {
      $("#9").text("O");
      pile.splice(pile.indexOf(9), 1);
      pO.push(9);
      turn = "pX";
      randomMove();
    }
    checkWin();
  })

  function reset() {
    pile = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    pX = [];
    pO = [];
    $(".box").text("");
    turn = "pX";
    if (player === "pO") {
      randomMove();
    }
  }

  $("#reset").on("click", function() {
    reset();
  })
})