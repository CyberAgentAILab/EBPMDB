import type { NextPage } from 'next'
import Link from 'next/link'
import data from '../data.json'

import Hero from '../components/hero'
import EvidenceCard from '../components/evidence-card'
import EvidenceSticky from '../components/evidence-sticky'
import Navigation from '../components/navigation'
import { Container, ThemeProvider} from '@mui/material'
import { createTheme } from '@mui/material'
import matter from 'gray-matter'
import DCard from '../components/card'
import fs from 'fs'
import { DocumentMeta } from '../interfaces/document'
import { FunctionComponent } from 'react'

interface IProps {
  docs: DocumentMeta[]
}

const theme = createTheme({
  palette: {
    primary: {
      light: '#ff8282',
      main: '#ff6363',
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

const Home: FunctionComponent<IProps> = ({ docs }) => {
  return (
    <>
      <ThemeProvider theme={theme}> 
        <Navigation />
        <Hero />
        <Container sx={{ m: 'auto' }}>
          <EvidenceSticky />
          {docs.map((doc, i) => (
            <DCard key={i} doc={doc} />
          ))}
        </Container>
      </ThemeProvider>
    </>
  )
}

export default Home


export async function getStaticProps() {
  const files = fs.readdirSync('docs')
  let docs = files.map(file => {
    const data = fs.readFileSync(`docs/${file}`).toString()
    return {
      ...matter(data).data,
      slug: file.split('.')[0]
    }
  }).reverse()

  return {
    props: {
      docs
    }
  }
}