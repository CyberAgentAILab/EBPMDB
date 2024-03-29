---
id: "18" # id は空欄のままで結構です。
title: "学習障害がある生徒への特別支援教育" # 引用符付きで研究対象の政策や変数を端的に示す名称を記入してください。
description: " ニューヨーク市における学習障害がある生徒への特別支援教育の効果" # 引用符付きで一文以内で政策の簡単な概要を記入してください。
date: "2023-05-25" # 引用符付きで記入日を入れてください。
category: "education" # レビューのカテゴリーを記入してください。カテゴリーがない場合は新規で作成してください。その際、カテゴリを端的に示す英単語を選んでください。
categoryLabel: "教育" # レビューのカテゴリーラベルを記入してください。新規の場合はカテゴリを端的に示す名称を選んでください。
tables: [
  {
    "title": "算数と英語のスコア", # 評価指標の名称を簡潔に記入してください。
    "effectiveness": "効果あり", # 期待される効果があったことが確認された場合は"効果あり"、期待される効果がなかったり、逆効果だったことが確認された場合は"効果なし"、状況によって効果があったりなかったりする場合は"ミックス"、検出力不足や研究の不備によって結論が出せない場合は"不明" としてください。
    "strength": 2 # 証拠の強さは https://cyberagentailab.github.io/EBPMDB/sms を参照してください。
  },  # 複数評価指標がある場合は、カンマで区切って追記してください。
  {
    "title": "学校への出席率",
    "effectiveness": "効果あり",
    "strength": 2
  }
]

points:
    - ニューヨーク市の学習障害がある生徒が、特別支援教育を受けることで、算数と英語の点数があがった。
    - 女子生徒とアジア系の生徒への効果が大きかった。
    - 学年が低い段階で学習障害の診断を受け、特別支援教育を受けた生徒の効果が大きかった。

contacts:
  - 吉良光冬（東京大学）

---

## 背景 
- 特別支援教育は拡大しつつあるが、普通教育と比べて学力にどの程度効果があるかはほとんど検証されていない。なぜなら、障害がある生徒といっても個別性が高く比較するのが難しいためである。
- 障害がある生徒とない生徒の学力を比較したところ、2017年のアメリカの全国学力調査の結果、障害のある学生は約25~30%ポイント低いことが分かった。この差は、障害特性によるものと考えられるが、特別支援教育が学力に効果的でない可能性も示しており検証の必要がある。
- ニューヨーク市では、学習障害がある生徒の割合が高い。障害がある生徒のうち40％は学習障害を抱えており、十分なデータが得られる。

## 介入
- 学習障害のある生徒への特別支援教育の提供

## 評価指標
- 生徒は学習障害の診断が下されると、特別支援教育を受けることになる。生徒の診断前後の学業成績を比較することで、特別支援教育を受けた前後の学業成績を比較。
- 数学と英語の点数及び学校への出席率。

## 分析方法
- パネルデータを用いた回帰分析。ある生徒がある年より以前に学習障害の診断を受けたかを介入変数とし、時間によって変化する、生徒の観測可能な特徴（転校や留年等）や学校、生徒固定効果を加えている。

## 証拠の強さ
- SMS:2
- 根拠 
    - 特別支援教育を受けた学習障害のある生徒を介入群とし、その生徒が特別支援教育を受ける前を非介入群として回帰分析を行っている。これにより、生徒が個別に持つ特性に対処している（生徒固定効果）。

## サンプル
- ニューヨーク市の公立学校に在籍する全ての生徒を含むデータを使用。
- 2006年から2008年までに幼稚園から小学8年生(日本の中学2年生相当)に在籍した130万人の生徒が含まれる。数学と英語の点数に関しては小学4年生から中学2年生を対象とする。
- 数学の点数…観測数92,902、生徒数24,189人
- 英語の点数…観測数90,356、生徒数23,901人
- 出席率…観測数197,274、生徒数44,487人


## 結果
- 学習障害の診断を受け特別支援教育を受けた生徒の数学の平均点は、その生徒の特別支援教育を受ける前の平均点と比べ標準偏差の0.117倍分向上し、英語の点数は標準偏差の0.102倍分向上した。（教育分野における介入の効果の目安として標準偏差の0.1倍以上の増加という基準がBloom et al.(2006)によって提案されている。）出席率への有意な結果は得られなかった。
-  介入の結果、男子生徒に比べると女子生徒の数学の点数は標準偏差の0.059倍分高かった。またアジア系の生徒の数学の点数はそれ以外の生徒と比べ、標準偏差の0.097倍分向上した。
- 学年が低い段階で学習障害の診断を受けた生徒はより大きな効果を得られた。今回の分析の対象学年で最も低い学年である小学4年時に診断を受けた生徒に対する効果が最も高く、数学の点数は標準偏差の0.158倍向上し、英語の点数は標準偏差の0.171倍分向上した。また診断を受ける学年が上がるごとに、その効果は小さくなる。
- 学習障害の診断が外れ普通教育に戻った生徒を対象に推定した結果、外れた後も特別支援教育の効果は薄まりながらも7年生まで継続することが示された。8年生になると負の効果が確認され、これは中学校卒業から高校入学への準備と関係している可能性があるが明確な理由は分からない。


## 研究の弱点
- 学習障害の程度はデータに含まれていないため、障害の程度による効果の差は考慮できていない。
- 介入がランダムではないため、学習障害のある生徒以外への特別支援教育の効果は分からない。
## 書誌情報
- Schwartz, Amy Ellen.,  Hopkins, Bryant Gregory. and Stiefel, Leanna. (2011). The Effects of Special Education on the Academic Performance of Students with Learning Disabilities. JOURNAL OF POLICY ANALYSIS AND MANAGEMENT, 40(2), 480-520. https://doi.org/10.1002/pam.22282 
