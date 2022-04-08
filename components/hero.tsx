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
        <Typography component='h1' variant='h1' className="headline">
          政策を調べる
        </Typography>
        <Typography component='p' variant='body1' className="lead">
          関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の<Link href="/EBPMDB/sms">証拠としての強さ</Link>を示しています。
        </Typography>
      </Container>
    </div>
  )
}