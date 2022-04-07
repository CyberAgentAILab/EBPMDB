import { EducationHero } from '../components/hero'
import EvidenceSticky from '../components/evidence-sticky'
import Navigation from '../components/navigation'
import { Container, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import matter from 'gray-matter'
import DCard from '../components/card'
import NoData from '../components/nodata'
import Footer from '../components/footer'
import fs from 'fs'
import { DocumentMeta } from '../interfaces/document'
import { FunctionComponent } from 'react'

interface IProps {
  docs: DocumentMeta[]
}

const DIR_NAME = 'education'

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

const Education: FunctionComponent<IProps> = ({ docs }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <EducationHero />
        <Container sx={{ m: 'auto' }}>
          {docs.length > 0
            ? <div><EvidenceSticky />{docs.map((doc, i) => (<DCard key={i} doc={doc} />))}</div>
            : <NoData />
          }
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Education

export async function getStaticProps() {
  const files = fs.readdirSync(`docs/${DIR_NAME}/`)
  const docs = files.map(file => {
    const data = fs.readFileSync(`docs/${DIR_NAME}/${file}`).toString()
    return {
      ...matter(data).data,
      slug: [DIR_NAME, file.split('.')[0]]
    }
  }).reverse()

  return {
    props: {
      docs
    }
  }
}