---
id: "19" # id は空欄のままで結構です。
title: "特別な支援を必要とする生徒からのピア効果" # 引用符付きで研究対象の政策や変数を端的に示す名称を記入してください。
description: " ザンクトガレン州（スイス）における特別な支援を必要とする生徒が通常の生徒と同じ教室で学ぶことによる影響" # 引用符付きで一文以内で政策の簡単な概要を記入してください。
date: "2023-08-20" # 引用符付きで記入日を入れてください。
category: "education" # レビューのカテゴリーを記入してください。カテゴリーがない場合は新規で作成してください。その際、カテゴリを端的に示す英単語を選んでください。
categoryLabel: "教育" # レビューのカテゴリーラベルを記入してください。新規の場合はカテゴリを端的に示す名称を選んでください。
tables: [
  {
    "title": "算数とドイツ語テストの点数を合わせた結果", # 評価指標の名称を簡潔に記入してください。
    "effectiveness": "効果あり", # 期待される効果があったことが確認された場合は"効果あり"、期待される効果がなかったり、逆効果だったことが確認された場合は"効果なし"、状況によって効果があったりなかったりする場合は"ミックス"、検出力不足や研究の不備によって結論が出せない場合は"不明" としてください。
    "strength": 4 # 証拠の強さは https://cyberagentailab.github.io/EBPMDB/sms を参照してください。
  },  # 複数評価指標がある場合は、カンマで区切って追記してください。
  {
    "title": "義務教育終了後の進路",
    "effectiveness": "効果あり",
    "strength": 4
  },
  {
    "title": "17-25歳の時の一ヵ月あたりの所得",
    "effectiveness": "効果あり",
    "strength": 4
  }
]

points:
    - 教室内に特別な支援を必要とする生徒が15-20%以上いる場合、その教室の生徒のテストの点数、義務教育終了後の進学する確率、17-25歳の時の一ヵ月あたりの所得が低下する。
    - 特別な支援を必要とする生徒に対する負の影響が、支援を必要としない生徒に比べて大きい。
    - 特別な支援を必要とする生徒と支援を必要としない生徒を完全に分離した教室編成による、全ての生徒に対する平均の負の影響は大きい。分離した教室編成は統合された教室編成より大きな負の影響がある。
    - 特別な支援を必要とする生徒を特定し、統合された教室編成を行うことが、完全に分離した教室編成より望ましい。

contacts:
  - 吉良光冬（東京大学）

---

## 背景 
- 障害がある子どもは普通教育から分離されてきた歴史がある。しかし近年、世界では障害の有無に関わらず、共に学ぶ教育環境 （統合）が推進されてきている。
- 統合を推進するにあたり、障害がある子どもの権利と統合による障害がない子どもへの負の影響が論点となっている。
- しかし、統合された環境が生徒の短・長期的達成度に与える影響を推定する研究は少ない。

## 介入
- 中学校の教室における、特別な支援を必要とする生徒の割合。
- 州が提供する学校心理サービスを小学生時に2回以上利用した生徒を、特別な支援を必要とする生徒とみなす。

## 評価指標
- 中学2年時に受ける算数とドイツ語テストの点数を合わせた結果。
- 義務教育修了後、進学をする確率。進学をした場合、職業訓練教育かアカデミック教育かで職業訓練教育に進む確率。職業訓練教育に進んだ場合、高レベル教育に進む確率。
- 17-25歳の時の一ヵ月あたりの所得。

## 分析方法
- 準ランダムに決定される特別な支援を必要とする生徒の割合を介入変数とし、学校・年度・教師固定効果を加えた回帰分析。

## 証拠の強さ
- SMS:4
- 根拠 
    - スイスでは学校選択は居住地に基づいて行われ、このルールは厳格である。またスイスでは80％以上が5年以内の引っ越しを行わず、子どもの学校選択の為に引っ越すことは非常に稀である。（自己選択バイアスの回避）
    - 小学校から中学校への移行の時にのみ、クラス替えが行われる。加えて学校心理サービスの情報は小学校から中学校には共有されずクラス編成が行われる。そのため、中学校の教室編成時に、特別な支援を必要とする生徒は準ランダムに割り当てられている。

## サンプル
- ザンクトガレン州における2008年から2017年に中学2年生だった全ての生徒。
- 算数とドイツ語テストの点数を合わせた結果・義務教育終了後の進路…49,961人
- 2016年に17-25歳の時の彼ら彼女らの一ヵ月あたりの所得…26,429人



## 結果
- 教室に特別な支援を必要とする生徒が1人(5%)増えると、特別な支援を必要としない生徒のテストの結果は標準偏差の2.2%分低下し、特別な支援を必要とする生徒のテストの結果は標準偏差の3.0%分低下する。この効果は特別な支援を必要とする生徒が3-4人(15-20%)以上居る場合に起こる。(本文では1%あたりで評価)
-  この推定結果に基づき、特別な支援を必要とする生徒の最適な配置を分析した結果、特別な支援を必要とする生徒を完全に分離するよりも、適度に分散させたほうが負の外部性が弱まるという結果が得られた。
- 教室に特別な支援を必要とする生徒が1人増えると、生徒の義務教育後に進学する確率は 0.44%ポイント低下し、高レベルな職業訓練教育に進む確率は 0.59%ポイント低下する。
- 長期的な影響として、教室に特別な支援を必要とする生徒が1人増えると17-25歳の時の月間所得（2016年時）が0.6%減少し、月15USドルの減少に値する。


## 研究の弱点
- 特別な支援を必要とする生徒が与える負の影響のメカニズムは明らかにできていない。負の影響を小さくするためには何が重要な負の原因となっているかを今後明らかにする必要がある。
## 書誌情報
- Balestra, S., Eugster, B., & Liebert, H. (2022). Peers with Special Needs: Effects and Policies. The Review of Economics and Statistics, 104(3), 602–618. https://doi.org/10.1162/rest_a_00960
