import { Container, Typography, Link } from '@mui/material'

export function TopHero() {
  return (
    <div className="hero top-image">
      <Container sx={{ m: 'auto' }}>
        <Typography component='h1' variant='h1' className="headline">
          EBPMデータベース
        </Typography>
        <Typography component='p' variant='body1' className="lead">
        過去の研究成果を確認して、証拠に基づく政策（Evidence Based Policy Making, EBPM）を進めましょう。気になった政策分野のタブをクリックすれば、世界中の研究者が実施した実験や研究成果が確認できます。
        </Typography>
      </Container>
    </div>
  )
}

export function HowtoHero() {
  return (
    <div className="hero howto-image">
      <Container sx={{ m: 'auto' }}>
        <Typography component='h2' variant='h2' className="headline">
          政策担当者の方へ
        </Typography>
        <Typography component='p' variant='body1' className="lead">
          関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の<Link href="/EBPMDB/sms">証拠としての強さ</Link>を示しています。さまざまな課題に対する政策のアイデアや、客観的なデータに基づく政策の優先づけ、議会や住民とのコンセンサスづくりなどにご活用できます。
        </Typography>
        <Typography component='p' variant='body1' className="lead">
          専門家による詳しいアドバイスが必要な場合は、お気軽にebpm@cyberagent.co.jpまでお問い合わせください。
        </Typography>

        <Typography component='h2' variant='h2' className="headline">
          研究者の方へ
        </Typography>
        <Typography component='p' variant='body1' className="lead">
          GitHubから新たな記事（レビュー）を自由に投稿することができます。新たな政策課題も大歓迎です。重要な研究やご自身の研究成果を簡単なレビューにして政策担当者に届けましょう。詳細は<a href="https://github.com/CyberAgentAILab/EBPMDB/">GitHubページ</a>をご覧ください。
        </Typography>
      </Container>
    </div>
  )
}