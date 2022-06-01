import { TopHero } from '../components/hero'
import Navigation from '../components/navigation'
import EvidenceSticky from '../components/evidence-sticky'
import DCard from '../components/card'
import Footer from '../components/footer'
import Guidance from '../components/guidance'
import {
  Container,
  Tabs,
  Tab,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material'
import matter from 'gray-matter'
import { DocumentMeta } from '../interfaces/document'
import { FunctionComponent, SyntheticEvent, useState } from 'react'
import fs from 'fs'
import Header from '../components/header'

interface IProps {
  docs: DocumentMeta[]
}

const Home: FunctionComponent<IProps> = ({ docs }) => {
  const categories = Array.from(
    new Map(docs.map(doc => [doc.category, doc])).values()
  ).map(d => [d.category, d.categoryLabel])
  const tabs = [['all', 'すべて'], ...categories]
  const [filter, setFilter] = useState('all')
  const [displayItems, setDisplayItems] = useState(docs)

  const handleChange = (
    _: SyntheticEvent | SelectChangeEvent<string>,
    f: string
  ) => {
    setFilter(f)
    setDisplayItems(
      docs.filter(doc => (f === 'all' ? true : doc.category === f))
    )
  }

  return (
    <>
      <Header />
      <Navigation />
      <TopHero />
      <Guidance />
      <Container sx={{ m: 'auto' }}>
        <Tabs
          value={filter}
          onChange={handleChange}
          sx={{
            my: { xs: 0, md: '2rem' },
            visibility: { xs: 'hidden', md: 'visible' },
            height: { xs: '0', md: '100%' },
            width: { xs: '0', md: '100%' },
          }}
          aria-label="cagerory select"
        >
          {tabs.map(tab => {
            const [category, categoryLabel] = tab
            return <Tab key={category} value={category} label={categoryLabel} />
          })}
        </Tabs>
        <FormControl sx={{ display: { xs: 'block', md: 'none' } }}>
          <Select
            id="category-select"
            value={filter}
            onChange={e => handleChange(e, e.target.value)}
            fullWidth
          >
            {tabs.map(tab => {
              const [category, categoryLabel] = tab
              return (
                <MenuItem key={category} value={category}>
                  {categoryLabel}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <EvidenceSticky />
        {displayItems.map((doc, i) => (
          <DCard key={i} doc={doc} />
        ))}
      </Container>
      <Footer />
    </>
  )
}

export default Home

export async function getStaticProps() {
  const files = fs.readdirSync('docs')
  const docs = files
    .map(file => {
      const data = fs.readFileSync(`docs/${file}`).toString()
      return {
        ...matter(data).data,
        slug: file.split('.')[0],
      }
    })
    .reverse()

  return {
    props: {
      docs,
    },
  }
}
