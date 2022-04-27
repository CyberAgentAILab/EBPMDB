import { TopHero } from '../components/hero'
import Navigation from '../components/navigation'
import EvidenceSticky from '../components/evidence-sticky'
import DCard from '../components/card'
import Footer from '../components/footer'
import Guidance from '../components/guidance'
import {
  Container,
  ThemeProvider,
  createTheme,
  Tabs,
  Tab,
} from '@mui/material'
import matter from 'gray-matter'
import { DocumentMeta } from '../interfaces/document'
import { FunctionComponent, SyntheticEvent, useState } from 'react'
import fs from 'fs'

interface IProps {
  docs: DocumentMeta[]
}

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

const Home: FunctionComponent<IProps> = ({ docs }) => {
  const categories = Array.from(
    new Map(docs.map(doc => [doc.category, doc])).values()
  ).map(d => ([d.category, d.categoryLabel]))
  const tabs = [['all', 'すべて'], ...categories]
  const [filter, setFilter] = useState('all')
  const [displayItems, setDisplayItems] = useState(docs)
  const handleChange = (_: SyntheticEvent, f: string) => {
    setFilter(f)
    setDisplayItems(docs.filter(doc => f === 'all' ? true : doc.category === f))
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <TopHero />
        <Guidance />
        <Container sx={{ m: 'auto' }}>
          <Tabs value={filter} onChange={handleChange} sx={{ my: '2rem' }} aria-label="cagerory select">
            {tabs.map(tab => {
              const [category, categoryLabel] = tab
              return <Tab key={category} value={category} label={categoryLabel} />
            })}
          </Tabs>
          <EvidenceSticky />
          {displayItems.map((doc, i) => (
            <DCard key={i} doc={doc} />
          ))}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const files = fs.readdirSync('docs')
  const docs = files.map(file => {
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