const highScoreList = document.getElementById("list");
const highScore = JSON.parse(localStorage.getItem("highScore"));
let sorted = highScore.sort((a, b) => parseInt(b.Score) - parseInt(a.Score));


for(let i=0; i<10; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${sorted[i].Initials} - ${sorted[i].Score}`
    highScoreList.append(listItem);
};