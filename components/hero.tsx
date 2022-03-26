import { Container, Typography } from '@mui/material'

export default function Hero() {
  return (
    <div className="hero">
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