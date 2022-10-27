import {
  Box,
  Container,
  Typography,
  Link,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material"
import { grey } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      light: '#d6d6d6',
      main: '#fff',
      dark: '#8e8e8e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d6d6d6',
      main: '#cccccc',
      dark: '#8e8e8e',
      contrastText: '#000',
    },
  },
})

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: grey[800] }}>
        <Container sx={{ mx: 'auto', mt: '4rem', pt: '2rem', pb: '1rem' }}>
          <Grid container>
            <Grid item xs={6} sx={{ textAlign: 'center' }}>
              <Link href="https://www.cyberagent.co.jp/privacy/" target="_blank">
                <Typography>プライバシーポリシー</Typography>
              </Link>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'center' }}>
              <Link href="/EBPMDB/committee">
                <Typography>運営主体</Typography>
              </Link>
            </Grid>
          </Grid>
          <Typography component="p" variant="body2" sx={{ textAlign: 'center', color: '#ffffff', mt: '3rem' }}>
            Copyright &copy; CyberAgent, Inc.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

