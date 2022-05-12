import Navigation from '../components/navigation'
import { Container, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material'
import { Typography, Grid, Link } from '@mui/material'
import EvidenceTableEffectiveness from '../components/evidence-table-effectiveness'
import Footer from '../components/footer'
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

const SMS: FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <Navigation />
        <Container sx={{ m: 'auto' }}>
          <Typography component="h2" variant="h3" sx={{ my: 8 }}>効果について</Typography>
          <Typography component="p" variant="body1" sx={{ my: 8, fontSize: 18 }}>各分析の結果は直感的にわかりやすい4つの分類で示しています。</Typography>
          <Grid container spacing={1} sx={{ py: 4, borderTop: 1, borderColor: 'grey.500' }}>
            <Grid item xs={1} sx={{ py: 4 }}>
              <EvidenceTableEffectiveness effectiveness="効果あり" />
            </Grid>
            <Grid item xs={1} sx={{ py: 4 }}>
              効果あり
            </Grid>
            <Grid item xs={10} sx={{ py: 4 }}>
              期待された効果があったことを示します。多くの場合、統計的に有意であり、また実質的にも意義のある大きさの効果があったことを示しています。
            </Grid>
            <Grid item xs={1} sx={{ py: 4 }}>
              <EvidenceTableEffectiveness effectiveness="効果なし" />
            </Grid>
            <Grid item xs={1} sx={{ py: 4 }}>
              効果なし
            </Grid>
            <Grid item xs={10} sx={{ py: 4 }}>
              期待された効果が得られなかったことを示します。多くの場合、サンプルサイズが十分にあったが統計的に有意ではなかったことを示します。サンプルサイズが非常に大きい場合は統計的に有意であっても実質的に意味のない効果であることがあり、こちらに分類されます。
            </Grid>
            <Grid item xs={1} sx={{ py: 4 }}>
              <EvidenceTableEffectiveness effectiveness="ミックス" />
            </Grid>
            <Grid item xs={1} sx={{ py: 4 }}>
              ミックス
            </Grid>
            <Grid item xs={10} sx={{ py: 4 }}>
              介入効果は異質性を示すことが多くあります。例えば、男性には効果があったが女性にはなかった、若者には効果があるが高齢者にはなかった、など条件によって結論が異なる場合ミックスとしています。
            </Grid>
            <Grid item xs={1} sx={{ py: 4 }}>
              <EvidenceTableEffectiveness effectiveness="不明" />
            </Grid>
            <Grid item xs={1} sx={{ py: 4 }}>
              不明
            </Grid>
            <Grid item xs={10} sx={{ py: 4 }}>
              サンプルサイズが十分でなかったり、分析手法が不十分である場合は不明とします。不明と判定された介入は追加的な検証が必要です。
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default SMS