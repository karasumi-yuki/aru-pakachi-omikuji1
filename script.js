// =======================================================
// 1. 各項目の★0〜10の出現確率
//
// weights の左から ★0, ★1, ... ★10。
// 合計100にすれば、そのまま%として考えられます。
// 総合運は7項目の平均値です。
// =======================================================

const fortuneSettings = [
  {
    name: "恋愛運",
    weights: [1, 2, 3, 5, 8, 12, 16, 18, 16, 12, 7]
  },
  {
    name: "商売運",
    weights: [2, 3, 5, 7, 11, 16, 18, 16, 11, 7, 4]
  },
  {
    name: "学業運",
    weights: [1, 1, 3, 5, 8, 12, 16, 18, 17, 12, 7]
  },
  {
    name: "金運",
    weights: [2, 4, 6, 9, 13, 17, 17, 14, 10, 5, 3]
  },
  {
    name: "健康運",
    weights: [1, 2, 3, 5, 8, 13, 17, 19, 16, 10, 6]
  },
  {
    name: "勝負運",
    weights: [5, 6, 7, 8, 9, 10, 10, 10, 10, 9, 16]
  },
  {
    name: "アルパカ運",
    weights: [2, 3, 5, 7, 10, 14, 16, 16, 13, 9, 5]
  }
];


// =======================================================
// 2. 総合運コメント（12パターン）
//
// 0.0
// 0.1〜1.0
// 1.1〜2.0
// 2.1〜3.0
// 3.1〜4.0
// 4.1〜5.0
// 5.1〜6.0
// 6.1〜7.0
// 7.1〜8.0
// 8.1〜9.0
// 9.1〜9.9
// 10.0
// =======================================================

const overallComments = [
  {
    label: "0.0",
    min: 0.0,
    max: 0.0,
    text: `0...ｱｯｱｯ...( ๑´•ω•)۶ﾖｼﾖｼ
明日はきっと良い事あるよぉ💦`
  },

  {
    label: "0.1-1.0",
    min: 0.1,
    max: 1.0,
    text: `やぁ〜い！
運気ポンコツゥ！！
アルパカとおそろ〜い🦙`
  },

  {
    label: "1.1-2.0",
    min: 1.1,
    max: 2.0,
    text: `夜ふかししたから運気逃げちゃったのかなぁ？
今日は早く寝ようねぇ🦙💤`
  },

  {
    label: "2.1-3.0",
    min: 2.1,
    max: 3.0,
    text: `水色の物ちゃんと持ってるぅ？
アルパカ色にしないと運気逃げちゃうｿﾞｯ️💙`
  },

  {
    label: "3.1-4.0",
    min: 3.1,
    max: 4.0,
    text: `早く虫取り網もって来てぇ！
一緒に運気捕まえに行くよっ🦙💨`
  },

  {
    label: "4.1-5.0",
    min: 4.1,
    max: 5.0,
    text: `綺麗な空の写真撮ってアルパカに見せてぇ🦙
ちゃんと空 (上) 見ててねぇ！
地面 (下)見ちゃダメだからﾈｯ👀✨`
  },

  {
    label: "5.1-6.0",
    min: 5.1,
    max: 6.0,
    text: `明日朝ごはんをしっかり食べたら
運気アップするよぉ( 'ч' )ŧ‹”ŧ‹”
アルパカおにぎり食べたぁい🍙🦙`
  },

  {
    label: "6.1-7.0",
    min: 6.1,
    max: 7.0,
    text: `今日スーパーに行ったら欲しいものが
20％OFFで買えちゃう魔法かけといたよぉ🪄✨`
  },

  {
    label: "7.1-8.0",
    min: 7.1,
    max: 8.0,
    text: `運気上げたいのぉ？
アルパカに任せてぇ‼️
🦙ﾍﾟｯｯｯ✨`
  },

  {
    label: "8.1-9.0",
    min: 8.1,
    max: 9.0,
    text: `運(気)も実力！
ちゃんと頑張ってるの神様とアルパカは
見ているからﾈｯ👀✨`
  },

  {
    label: "9.1-9.9",
    min: 9.1,
    max: 9.9,
    text: `わぁっ!!!
運良いねぇ👏
アルパカの次にっ( ｰ\`дｰ´)ｷﾘｯ`
  },

  {
    label: "10.0",
    min: 10.0,
    max: 10.0,
    text: `じゅっ...10‼️
今日...いやっ。
今年いっぱいはあなたが主役🎉`
  }
];


// =======================================================
// 3. 総合運の名称
// =======================================================

const fortuneNames = [
  { min: 9, name: "大大吉" },
  { min: 8, name: "大吉" },
  { min: 7, name: "中吉" },
  { min: 6, name: "吉" },
  { min: 5, name: "小吉" },
  { min: 4, name: "末吉" },
  { min: 3, name: "凶" },
  { min: 0, name: "大凶" }
];


// =======================================================
// 4. 挑戦回数
// =======================================================

const myCountKey = "omikuji_v6_my_count";


// =======================================================
// 5. HTML要素
// =======================================================

const myCountEl =
  document.getElementById("myCount");

const drawBtn =
  document.getElementById("drawBtn");

const resultEl =
  document.getElementById("result");

const itemsEl =
  document.getElementById("items");

const fortuneNameEl =
  document.getElementById("fortuneName");

const fortuneScoreEl =
  document.getElementById("fortuneScore");

const messageEl =
  document.getElementById("message");

const messageRangeEl =
  document.getElementById("messageRange");

const torii =
  document.getElementById("torii");


// =======================================================
// 6. 保存された挑戦回数
// =======================================================

let myCount =
  Number(
    localStorage.getItem(myCountKey) || 0
  );

myCountEl.textContent =
  myCount.toLocaleString("ja-JP");


// =======================================================
// 7. 重み付きランダム抽選
// =======================================================

function weightedRandom(weights) {

  const total =
    weights.reduce(
      (a, b) => a + b,
      0
    );

  let r =
    Math.random() * total;

  for (
    let i = 0;
    i < weights.length;
    i++
  ) {

    r -= weights[i];

    if (r < 0) {
      return i;
    }
  }

  return weights.length - 1;
}


// =======================================================
// 8. 星表示
//
// 総合運は小数なので、
// 星の塗りつぶしだけ四捨五入します。
// =======================================================

function makeStars(score) {

  const roundedScore =
    Math.round(score);

  let html = "";

  for (
    let i = 1;
    i <= 10;
    i++
  ) {

    html += `
      <span
        class="star ${
          i <= roundedScore
            ? "on"
            : "off"
        }"
      >
        ★
      </span>
    `;
  }

  return html;
}


// =======================================================
// 9. 総合運の名前
// =======================================================

function chooseFortuneName(avg) {

  const found =
    fortuneNames.find(
      x => avg >= x.min
    );

  return found
    ? found.name
    : "大凶";
}


// =======================================================
// 10. 総合運コメント
// =======================================================

function chooseOverallComment(score) {

  return (
    overallComments.find(
      item =>
        score >= item.min &&
        score <= item.max
    )
    ||
    overallComments[0]
  );
}


// =======================================================
// 11. おみくじを引く
// =======================================================

function drawOmikuji() {

  drawBtn.disabled = true;

  resultEl.classList.remove(
    "show"
  );

  torii.classList.add(
    "shake"
  );


  setTimeout(() => {

    // -------------------------------
    // 7項目を個別に抽選
    // -------------------------------

    const results =
      fortuneSettings.map(
        setting => ({
          name:
            setting.name,

          score:
            weightedRandom(
              setting.weights
            )
        })
      );


    // -------------------------------
    // 7項目の平均値 = 総合運
    // -------------------------------

    const rawAverage =
      results.reduce(
        (sum, x) =>
          sum + x.score,
        0
      )
      /
      results.length;


    // 小数第1位まで
    const overallScore =
      Number(
        rawAverage.toFixed(1)
      );


    const fortuneName =
      chooseFortuneName(
        overallScore
      );


    const commentData =
      chooseOverallComment(
        overallScore
      );


    // -------------------------------
    // 総合運
    // -------------------------------

    const overallHtml = `
      <div class="item overall">

        <div class="item-name">
          総合運
        </div>

        <div class="stars">
          ${makeStars(overallScore)}
        </div>

        <div class="score">
          ${overallScore.toFixed(1)}
        </div>

      </div>
    `;


    // -------------------------------
    // 個別7項目
    // -------------------------------

    const itemHtml =
      results.map(
        x => `

          <div class="item">

            <div class="item-name">
              ${x.name}
            </div>

            <div class="stars">
              ${makeStars(x.score)}
            </div>

            <div class="score">
              ${x.score}
            </div>

          </div>

        `
      ).join("");


    itemsEl.innerHTML =
      overallHtml + itemHtml;


    // -------------------------------
    // 総合結果
    // -------------------------------

    fortuneNameEl.textContent =
      fortuneName;

    fortuneScoreEl.textContent =
      `総合運 ★${overallScore.toFixed(1)}`;


    // -------------------------------
    // コメント
    // -------------------------------

    messageRangeEl.textContent =
      commentData.label;

    messageEl.textContent =
      commentData.text;


    // -------------------------------
    // 挑戦回数 +1
    // -------------------------------

    myCount += 1;


    localStorage.setItem(
      myCountKey,
      String(myCount)
    );


    myCountEl.textContent =
      myCount.toLocaleString(
        "ja-JP"
      );


    // -------------------------------
    // 表示
    // -------------------------------

    torii.classList.remove(
      "shake"
    );

    resultEl.classList.add(
      "show"
    );

    drawBtn.disabled = false;


    resultEl.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });

  }, 700);
}


// =======================================================
// 12. ボタン
// =======================================================

drawBtn.addEventListener(
  "click",
  drawOmikuji
);
