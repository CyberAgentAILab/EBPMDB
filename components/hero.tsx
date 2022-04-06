import { Container, Typography } from '@mui/material'

export default function Hero() {
  return (
    <div className="hero">
      <Container sx={{ m: 'auto' }}>
        <Typography component='h1' variant='h1' className="headline">
          EBPMデータベース
        </Typography>
        <Typography component='p' variant='body1' className="lead">
        日本国内外で集められたエビデンスを活用して証拠に基づく政策（Evidence Based Policy Making, EBPM）を進めましょう。 <Link href="https://github.com/CyberAgentAILab/EBPMDB" onClick={preventDefault}>GitHubレポジトリ</Link>からエビデンスを投稿することができます。
        </Typography>
      </Container>
    </div>
  )
}