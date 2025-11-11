// HTML要素を取得
const rollButton = document.getElementById('roll-button');
const dice1Element = document.getElementById('dice1');
const dice2Element = document.getElementById('dice2');
const dice3Element = document.getElementById('dice3');
const totalSumElement = document.getElementById('total-sum');

/**
 * 1から6までの乱数を生成する関数
 * @returns {number} 1から6までの整数
 */
function getRandomDiceRoll() {
    // Math.random()は0 (含む) から 1 (含まない) の間の浮動小数点数を返す
    // Math.floor(Math.random() * 6) で 0, 1, 2, 3, 4, 5 が得られる
    // + 1 することで 1, 2, 3, 4, 5, 6 が得られる
    return Math.floor(Math.random() * 6) + 1;
}

/**
 * サイコロを振り、結果を表示する関数
 */
function rollDice() {
    // 3つのサイコロを振る
    const roll1 = getRandomDiceRoll();
    const roll2 = getRandomDiceRoll();
    const roll3 = getRandomDiceRoll();
    
    // 合計値を計算
    const totalSum = roll1 + roll2 + roll3;
    
    // 結果をHTMLに表示
    dice1Element.textContent = roll1;
    dice2Element.textContent = roll2;
    dice3Element.textContent = roll3;
    totalSumElement.textContent = totalSum;
    
    // ちょっとした演出: サイコロを振った感じを出すために少し回転させる
    dice1Element.style.transform = `rotate(${roll1 * 30 + Math.random() * 10}deg)`;
    dice2Element.style.transform = `rotate(${roll2 * 30 + Math.random() * 10}deg)`;
    dice3Element.style.transform = `rotate(${roll3 * 30 + Math.random() * 10}deg)`;
}

// ボタンにクリックイベントリスナーを追加
rollButton.addEventListener('click', rollDice);

// 初期表示（念のため1回振っておく）
rollDice();