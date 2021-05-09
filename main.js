let daytime = document.querySelector(".daytime")
let car = document.querySelector(".car")

addEventListener("keypress", function(x) {
  if (x.which == 13) {
    daytime.classList.toggle("moving")
    car.classList.toggle("suspention")
  }
})

let omikujiitem = [
  "おめでとう！超相性がいい",
  "すばらしい！相性がいい",
  "ぼちぼち！まぁまぁ相性がいい",
  "残念！相性はよくない",
]
let btn = document.getElementById("btn")
let disp = document.getElementById("disp")
let num = 0

btn.addEventListener("click", function() {
  let num = Math.floor(Math.random() * omikujiitem.length)

  let result = omikujiitem[num]
  disp.innerHTML = result
  if (result == "おめでとう！超相性がいい") {
    alert("一緒に飯いきましょ！")
  } else if (result == "すばらしい！相性がいい") {
    alert("一緒にゲームしましょ！")
  } else if (result == "ぼちぼち！まぁまぁ相性がいい") {
    alert("ぜひ、話しかけてください！")
  } else {
    alert("一緒に切磋琢磨していきましょう！")
  }
})
