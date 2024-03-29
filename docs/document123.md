---
id: "123" # id は空欄のままで結構です。
title: "保育所整備" # 引用符付きで研究対象の政策や変数を端的に示す名称を記入してください。
description: "保育所整備による出生率への影響" # 引用符付きで一文以内で政策の簡単な概要を記入してください。
date: "2022-11-25" # 引用符付きで記入日を入れてください。
category: "fertility" # レビューのカテゴリーを記入してください。カテゴリーがない場合は新規で作成してください。その際、カテゴリを端的に示す英単語を選んでください。
categoryLabel: "少子化対策" # レビューのカテゴリーラベルを記入してください。新規の場合はカテゴリを端的に示す名称を選んでください。
tables: [
  {
    "title": "自治体レベル出生率", # 評価指標の名称を簡潔に記入してください。
    "effectiveness": "ミックス", # 期待される効果があったことが確認された場合は"効果あり"、期待される効果がなかったり、逆効果だったことが確認された場合は"効果なし"、状況によって効果があったりなかったりする場合は"ミックス"、検出力不足や研究の不備によって結論が出せない場合は"不明" としてください。
    "strength": 3 # 証拠の強さは https://cyberagentailab.github.io/EBPMDB/sms を参照してください。
  }  # 複数評価指標がある場合は、カンマで区切って追記してください。
]

points:
    - 平均的には保育所定員率(= 0-5歳児一人あたりの保育所定員数)の向上は出生率に対して効果がなかった。
    - ただし女性の労働参加率の予測値(LFP)が中央値以上かつ保育サービス需要が大きい(待機児童が存在する)自治体では有意に正の効果があった。

contacts:
  - 土生 一心(東京大学)

---

## 背景 
- 出生率低下を受けて1990年代中期から保育所定員率の向上が行われ、出生率はその後上昇したがそれは政策が影響したものかどうかを定量的に検証した。
- 日本の保育施設は、2009年時点で92%が公的な形で運営されている(認可保育所など)。
- 保育所定員率の利用可能性は地域によってばらつきがある。

## 介入
- 保育所定員率の向上
- 2000年から2010年の間に、特に待機児童の存在する自治体で分子が増加した。

## 評価指標
- 自治体ごとの25~39歳の女性についての出生率
- 女性の年齢階級ごと(5年区切り)の出生数の合計を25~39歳女性人口で割って算出した。

## 分析方法
- 固定効果モデル・操作変数を用いた回帰分析

## 証拠の強さ
- SMS:3
- 根拠 
    - 受け入れ可能性割合(= 各自治体での保育施設受け入れ数 / 25-39歳の女性の人数)、を操作変数として使うことによって、出産行動の変化による子どもの数の増減から保育所定員率に影響を与えるという逆因果に対処している。
    - 他にも、育児政策が各自治体の保育所定員率や保育サービス需要の変化を受けて決定されているという政策の内生性、子どもを持つ予定の夫婦が自発的に移動することなどに伴うバイアスは考慮・検証されており、因果の方向に一定の信頼性がある。
。

## サンプル
- 『国勢調査』、『人口動態統計』、および『社会福祉施設等調査』, 2000、2005、2010年
- 日本全国1749の自治体について、25-39歳女性および0~5歳就学前児童、認可保育施設を対象とした自治体単位集計データ(N = 1749)。
- 保育施設需要の大小の指標として、待機児童の存在を用いており、785の自治体について待機児童が存在。
- 20-24歳女性は教育水準が未定の場合も多くあるため除外。

## 結果
- すべてのサンプルを用いた場合、保育所定員率の向上は出生率に影響を与えなかった一方で、保育需要が大きい(待機児童が存在する)地域かつ女性の労働参加率予測値(LFP)が中央値を超える地域において有意に正の効果が確認された。
- LFPが高いほど効果は高まり、特に25-34歳女性・核家族世帯について大きい。
- 限界効果の推定値は0.03(10%の定員率向上で25-39歳女性1000人当たり3人の出生数上昇)ほどであり、保育所定員率が100%まで向上した場合の出生率は1.71である。

## 研究の弱点
- 第１子に対する影響が強いのではないかという推察はあるものの、ミクロデータではなく自治体レベルの集計データであるため、出生順位による効果の違いなどの検証はできていない。

## 書誌情報
- Fukai, T. (2017). Childcare availability and fertility: Evidence from municipalities in Japan. Journal of the Japanese and International Economies, 43, 1–18. https://doi.org/10.1016/j.jjie.2016.11.003
