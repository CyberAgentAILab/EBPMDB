import { Container, Typography } from '@mui/material'

export default function Hero() {
  return (
    <div className="hero">
      <Container sx={{ m: 'auto' }}>
        <Typography component='h1' variant='h1' className="headline">
          EBPMデータベース
        </Typography>
        <Typography component='p' variant='body1' className="lead">
        日本国内外で集められたエビデンスを活用して証拠に基づく政策（Evidence Based Policy Making, EBPM）を進めましょう。 
        </Typography>
        <Link href="https://github.com/CyberAgentAILab/EBPMDB" underline="hover" color="inherit">GitHubレポジトリ</Link>
        <Typography component='p' variant='body1' className="lead">からエビデンスを投稿することができます。</Typography>
      </Container>
    </div>
  )
}