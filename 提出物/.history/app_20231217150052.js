for (let i = 1; i <= 50; i++) {
  console.log(i)
  if (i == 10) { console.log("今10回ループしました。") 
  } else if (i == 20) { console.log("今20回ループしました。")
  } else if (i == 30) { console.log("今30回ループしました。")
  } else if (i == 40) { console.log("今40回ループしました。")
  } else if (i == 50) {
      console.log("今50回ループしました。")
      alert()
  }

  if (i % 4 == 0) {
    console.log("4で割れる数です。" + i)
  }
}


// // じゃんけんの手を入力してもらうプロンプト欄を生成
// let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// // じゃんけんの手をランダムに作成する関数を呼び出す
// let js_hand = getJShand();

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
// let judge = winLose(user_hand, js_hand);

// // 結果を表示する
// alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');

// // ランダムでじゃんけんの手を作成する関数
// function getJShand(){
    
//     let js_hand_num = Math.floor( Math.random() * 3 );
//     let js_hand = '';
    
//     if(js_hand_num == 0){
//         js_hand = "グー";
//     }else if(js_hand_num == 1){
//         js_hand = "チョキ";
//     }else if(js_hand_num == 2){
//         js_hand = "パー";
//     }
    
//     return js_hand;
// }

// // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
// function winLose(user, js){
//   let winLoseStr;

//   if(user == "グー"){
//     if(js == "グー"){
//       winLoseStr = "あいこ";
//     } else if(js == "チョキ"){
//       winLoseStr = "勝ち";
//     } else if(js == "パー"){
//       winLoseStr = "負け";
//     }
//   } else if(user == "チョキ"){
//     if(js == "グー"){
//       winLoseStr = "負け";
//     } else if(js == "チョキ"){
//       winLoseStr = "あいこ";
//     } else if(js == "パー"){
//       winLoseStr = "勝ち";
//     }
//   } else if(user == "パー"){
//     if(js == "グー"){
//       winLoseStr = "勝ち";
//     } else if(js == "チョキ"){
//       winLoseStr = "負け";
//     } else if(js == "パー"){
//       winLoseStr = "あいこ";
//     }
//   }

//   return winLoseStr;
// }
