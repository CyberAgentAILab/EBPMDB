import { TopHero } from '../components/hero'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import {
  Container,
  ThemeProvider,
  Card,
  CardContent,
  Typography,
  CardActionArea,
  Grid,
  createTheme,
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

const CategoryCard = (props: { categoryLabel: string, description: string, categoryName: string }) => {
  const { categoryLabel, description, categoryName } = props
  return (
    <Card>
      <CardActionArea style={{ height: '27rem' }} href={`/EBPMDB/${categoryName}`}>
        <div className={`${categoryName}-image category-card-image`}></div>
        <CardContent>
          <Typography component="div" variant="h5" sx={{ my: 2 }}>{categoryLabel}</Typography>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const Home: FunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <TopHero />
        <Container sx={{ mx: 'auto', my: 8 }}>
          <Grid container justifyContent="space-between" spacing={3}>
            <Grid item xs={4}>
              <CategoryCard
                categoryLabel="教育"
                description="教育関連のエビデンスです。教育関連のエビデンスです。教育関連のエビデンスです。教育関連のエビデンスです。教育関連のエビデンスです。教育関連のエビデンスです。教育関連のエビデンスです。"
                categoryName="education"
              />
            </Grid>
            <Grid item xs={4}>
              <CategoryCard
                categoryLabel="医療"
                description="医療関連のエビデンスです。医療関連のエビデンスです。医療関連のエビデンスです。医療関連のエビデンスです。医療関連のエビデンスです。医療関連のエビデンスです。医療関連のエビデンスです。"
                categoryName="medical_care"
              />
            </Grid>
            <Grid item xs={4}>
              <CategoryCard
                categoryLabel="少子化対策"
                description="少子化対策関連のエビデンスです。少子化対策関連のエビデンスです。少子化対策関連のエビデンスです。少子化対策関連のエビデンスです。少子化対策関連のエビデンスです。少子化対策関連のエビデンスです。"
                categoryName="measures_for_declining_birthrate"
              />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Home