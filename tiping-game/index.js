const target = document.querySelector("#target-word");
const input = document.querySelector("#user-input")
const mozi = [
  { "kanji": "こんにちは", "kana": "こんにちは", "roma": ["konnitiha", "konnichiha", "konnitiwa", "konnichiwa"] },
  { "kanji": "ありがとう", "kana": "ありがとう", "roma": ["arigatou", "arigatoh"] },
  { "kanji": "お疲れ様です", "kana": "おつかれさまです", "roma": ["otukaresamadesu", "otsukaresamadesu"] },
  { "kanji": "よろしくお願いします", "kana": "よろしくおねがいします", "roma": ["yorosikuonegaisimasu", "yoroshikuonegaishimasu", "yorosikuonegaishimasu", "yoroshikuonegaisimasu"] },
  { "kanji": "プログラミング", "kana": "ぷろぐらみんぐ", "roma": ["puroguramingu"] },
  { "kanji": "パソコン", "kana": "ぱそこん", "roma": ["pasokon"] },
  { "kanji": "キーボード", "kana": "きーぼーど", "roma": ["ki-bo-do"] },
  { "kanji": "タッチタイピング", "kana": "たっちたいぴんぐ", "roma": ["tattitaipingu", "taccitaipingu"] },
  { "kanji": "カレーライス", "kana": "かれーらいす", "roma": ["kare-raisu"] },
  { "kanji": "お腹が空いた", "kana": "おなかがすいた", "roma": ["onakagasuita"] },
  { "kanji": "明日天気になれ", "kana": "あしたてんきになれ", "roma": ["asitatenkininare", "ashitatenkininare"] },
  { "kanji": "コーヒーブレイク", "kana": "こーひーぶれいく", "roma": ["ko-hi-bureiku"] },
  { "kanji": "一石二鳥", "kana": "いっせきにちょう", "roma": ["issekinityou", "issekinichou"] },
  { "kanji": "早起きは三文の徳", "kana": "はやおきはさんもんのとく", "roma": ["hayaokihasanmonnotoku", "hayaokihasanmonnotoku", "hayaokiwasanmonnotoku"] },
  { "kanji": "猫の手も借りたい", "kana": "ねこのてもかりたい", "roma": ["nekonotemokaritai"] }
];
let currentData;
function initGame() {
    const number = Math.floor(Math.random() * 15);
currentData = mozi[number];
target.textContent = currentData.kanji;
document.querySelector("#roma-guide").textContent = currentData.roma[0];
};
input.addEventListener("input", () => {
    const nyuryokumozi = input.value;
    if (currentData.roma.includes(nyuryokumozi)) {
        input.value = "";
        initGame();
    }
});
initGame();