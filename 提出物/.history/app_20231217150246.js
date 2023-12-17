for (let i = 1; i <= 50; i++) {
  console.log(i)
  if (i == 10) {
    console.log("今10回ループしました。") 
  } else if (i == 20) {
    console.log("今20回ループしました。")
  } else if (i == 30) {
    console.log("今30回ループしました。")
  } else if (i == 40) {
    console.log("今40回ループしました。")
  } else if (i == 50) {
    console.log("今50回ループしました。")
    alert("50回カウントが終わりました。")
  }

  if (i % 4 == 0) {
    console.log("4で割れる数です。" + i)
  }
}