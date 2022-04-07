import Navigation from '../components/navigation'
import { HowtoHero } from '../components/hero'
import Footer from '../components/footer'
import {
  Container,
  ThemeProvider,
  createTheme,
  Typography,
  Grid,
  Link,
} from '@mui/material'
import { FunctionComponent } from 'react'

const theme = createTheme({
  palette: {
    primary: {
      light: '#6C63FF',
      main: '#6C63FF',
      dark: '#b24545',
      contrastText: '#000',
    },
    secondary: {
      light: '#d6d6d6',
      main: '#cccccc',
      dark: '#8e8e8e',
      contrastText: '#000',
    },
  },
})

const Howto: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <HowtoHero />
      <Container sx={{ m: 'auto' }}>
        <Typography component='p' variant='body1'>
          EBPMデータベースは以下のような用途で活用できます。
        </Typography>
        <Typography component='h2' variant='h4' sx={{ mt: '3rem', mb: '1rem' }}>
          課題解決のアイデアボックスとして
        </Typography>
        <Typography component='p' variant='body1'>
          人口減少、高齢化、産業空洞化、インフラ老朽化、子育て支援…、ともすれば閉塞感も漂う行政の現場。日本国内外で取り組まれたさまざまな施策とその効果を調べることで解決の糸口が見つかります。
        </Typography>
        <Typography component='h2' variant='h4' sx={{ mt: '3rem', mb: '1rem' }}>
          企画立案の参考資料として
        </Typography>
        <Typography component='p' variant='body1'>
          企画立案は易く、調整は難し。<br />
          上司、関係部署、幹部、議会、住民に対して、説得力のある説明を行うのは簡単なことではありません。研究者たちの努力によって得られた実証実験を補助として使うことで、より正しい意思決定が得られます。
        </Typography>
        <Typography component='h2' variant='h4' sx={{ mt: '3rem', mb: '1rem' }}>
          予算査定の判断材料として
        </Typography>
        <Typography component='p' variant='body1'>
          高齢化を背景に増大する福祉分野の歳出圧力のもと、予算の優先順位づけが不可欠です。過去の検証結果と照らし合わせることで、不必要な予算を削減し、真に有効な政策に集中することができます。
        </Typography>
        <Typography component='h2' variant='h4' sx={{ mt: '3rem', mb: '1rem' }}>
          専門家への相談窓口として
        </Typography>
        <Typography component='p' variant='body1'>
          具体的な政策を検討したり、新規施策の実証実験を実施するためには専門家の知見が欠かせません。各分野の専門家に直接政策の相談や、実証実験の助言を依頼することが可能です。専門家への依頼については下記問い合わせ先にご連絡ください。
        </Typography>
        <Typography component='p' variant='subtitle1' sx={{ textAlign: 'center', my: '3rem' }}>
          政策相談、実証実験その他のご相談： ebpm@cyberagent.co.jp
        </Typography>
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default Howto