---
id: "13"
title: "実質講義時間の長さ"
description: "授業において教師が講義している時間の割合が成績に与える影響"
date: "2022-03-10"
category: "education"
categoryLabel: "教育"
tables: [
  {
    "title": "数学の試験の点数",
    "effectiveness": "効果あり",
    "strength": 3
  }
]

points:
    - 教師の講義時間と生徒の問題を解く時間をあわせた授業時間に占める教師の講義時間が長いと数学と理科の成績が向上する
    - 特に数学において顕著な向上がみられた

contacts:
  - 株式会社サイバーエージェントAI Lab, 経済学社会実装チーム

---

## 背景
- 生徒の学習に影響を与える要素として教師の特性の大きな影響が指摘されてきたが、本研究では授業の中での教師の実務的な行動について研究を行った。

## 介入
- 授業時間に占める講義時間の割合

## 評価指標
- 生徒の数学と理科の試験の点数

## 分析方法
- 2003年のTrends in INternational Math and Science Study (TIMSS)を用いて階層モデルにより数学と理科の成績を授業における講義時間で回帰した

## 証拠の強さ
- SMS:3
- 根拠 
    - サンプルバイアスを除去するために階層モデルが用いられている
    - 頑健性チェックも実施されている

## サンプル
- 231校の8871人の米国の8年生（中学2年生）
- アンケートの無回答について欠損値補完を実施

## 結果
- 10%ポイント講義時間の割合が増加すると、数学や理科の試験の点数が標準偏差で1あがる。

## 研究の弱点
- 非常に緻密な頑健性チェックを施しているもののランダムな介入ではないことに留意

## 書誌情報
- Schwerdt, G., & Wuppermann, A. C. (2011). Is traditional teaching really all that bad? A within-student between-subject approach. Economics of Education Review, 30(2), 365-379.