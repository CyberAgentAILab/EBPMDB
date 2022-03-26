import { FunctionComponent } from "react";
import fs from 'fs';
import matter from 'gray-matter';
import { DocumentInfo } from "../../interfaces/document";
import { createTheme } from '@mui/material'
import { Container, ThemeProvider, Typography, Box} from '@mui/material'
import Navigation from '../../components/navigation'
import Markdown from '../../components/markdown';
import MarkdownList from '../../components/markdown-list';
import EvidenceTable from '../../components/evidence-table';

interface IProps {
  doc: DocumentInfo
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

const Document: FunctionComponent<IProps> = ({ doc }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navigation />
        <Container sx={{ m: 'auto', width: 1024 }}>
          <Typography component='h1' variant='h4' sx={{ marginTop: '2em' }}>{doc.meta.title}</Typography>
          <Typography component='p' variant='body1' sx={{ my: '1.5em' }}>{doc.meta.description}</Typography>
          <div className="summary">
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', alignItems: 'center', marginBottom: '1em' }}>
              <Typography component="h3" variant="body1">評価指標</Typography>
              <Typography component="h3" variant="body1">効果</Typography>
              <Typography component="h3" variant="body1">証拠の強さ</Typography>
            </Box>
            {doc.meta.tables.map((table, i) => (
              <EvidenceTable key={i} table={table} />
            ))}
            <Typography component='h3' variant='h6' sx={{ marginTop: '2em' }}>ポイント</Typography>
            <MarkdownList contents={doc.meta.points} />
            <Typography component='h3' variant='h6'>文献選定／レビュー作成</Typography>
            <MarkdownList contents={doc.meta.contacts} />
          </div>
          <Markdown content={doc.content} /> 
        </Container>
      </ThemeProvider>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync('docs')
  const paths = files.map(file => ({
    params: {
      slug: file.split('.')[0]
    }
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const content = fs.readFileSync(`docs/${slug}.md`).toString()

  const info = matter(content)

  const doc = {
    meta: {
      ...info.data,
      slug
    },
    content: info.content
  }

  return {
    props: {
      doc
    }
  }
}

export default Document