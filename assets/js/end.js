let saveScoreButton = document.getElementById("saveScore");
let input = document.getElementById("username");
const finalScore = document.getElementById("final-score");
const lastScore = window.localStorage.getItem("finalScore");

saveScoreButton.disabled = true;



function endQuiz () {
    finalScore.innerHTML = "Your score is: " + lastScore + "/100";
}

function saveScore(event) {
    event.preventDefault();
    let highScore = window.localStorage.getItem("highScore") ? JSON.parse(window.localStorage.getItem("highScore")) : [];
    let score = {
        Initials: input.value,
        Score: lastScore,
    };

    highScore.push(score);
    window.localStorage.setItem("highScore", JSON.stringify(highScore));
    location.replace("highscore.html");

}

saveScoreButton.addEventListener("click", saveScore);

input.addEventListener("input", function() {
    let content = input.value;
    if(content === null) {
        saveScoreButton.disabled = true;
    } else {
        saveScoreButton.disabled = false;
    }
});

endQuiz ();