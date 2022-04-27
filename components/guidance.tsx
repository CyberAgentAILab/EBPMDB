import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Grid,
  Container,
  Typography,
} from '@mui/material'
import { FunctionComponent } from 'react'

const Guidance: FunctionComponent = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Card>
            <CardMedia sx={{ mt: 2 }} className="howto-image guidance-image" />
            <CardContent sx={{ p: 4 }}>
              <Typography component='h2' variant='h4' sx={{ mb: 2 }}>政策担当者の方へ</Typography>
              <Typography component='p' variant='body1'>
                関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の<Link href="/EBPMDB/sms">証拠としての強さ</Link>を示しています。さまざまな課題に対する政策のアイデアや、客観的なデータに基づく政策の優先づけ、議会や住民とのコンセンサスづくりなどにご活用できます。
              </Typography>
              <Typography component='p' variant='body1' sx={{ mt: 1 }}>
                専門家による詳しいアドバイスが必要な場合は、お気軽にebpm@cyberagent.co.jpまでお問い合わせください。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ height: '100%' }}>
            <CardMedia sx={{ mt: 2 }} className="report-image guidance-image" />
            <CardContent sx={{ p: 4 }}>
              <Typography component='h2' variant='h4' sx={{ mb: 2 }}>研究者の方へ</Typography>
              <Typography component='p' variant='body1'>
                GitHubから新たな記事（レビュー）を自由に投稿することができます。新たな政策課題も大歓迎です。重要な研究やご自身の研究成果を簡単なレビューにして政策担当者に届けましょう。詳細は<Link href="https://github.com/CyberAgentAILab/EBPMDB/">GitHubページ</Link>をご覧ください。
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Guidance