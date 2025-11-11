// HTML要素を取得
const die1Element = document.getElementById('die1');
const die2Element = document.getElementById('die3'); // IDをdie2, die3に修正
const die3Element = document.getElementById('die2');
const rollButton = document.getElementById('rollButton');
const totalValueElement = document.getElementById('totalValue');

// サイコロを振る関数
function rollDice() {
    // 1から6までの乱数を生成
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;
    const roll3 = Math.floor(Math.random() * 6) + 1;

    // 生成した乱数をサイコロの表示に反映
    die1Element.textContent = roll1;
    die2Element.textContent = roll2;
    die3Element.textContent = roll3;
    
    // 合計値を計算して表示
    const total = roll1 + roll2 + roll3;
    totalValueElement.textContent = total;

    // 振った感（アニメーション）をつける（おまけ）
    animateDice();
}

// アニメーション用の関数
function animateDice() {
    [die1Element, die2Element, die3Element].forEach(die => {
        // 振るときのクイックな回転アニメーションをCSSで付与
        die.style.transform = 'rotateX(360deg) scale(1.1)';
        
        // 0.2秒後に元に戻す
        setTimeout(() => {
            die.style.transform = 'rotateX(0deg) scale(1)';
        }, 200);
    });
}

// ボタンがクリックされたらサイコロを振る
rollButton.addEventListener('click', rollDice);

// 最初のロード時にも一度実行して初期値を設定
rollDice();