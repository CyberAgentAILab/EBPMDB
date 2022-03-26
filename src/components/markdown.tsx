import ReactMarkdown from "react-markdown";
import { FunctionComponent } from "react";
import { makeStyles } from '@mui/styles'

interface IProps {
  content: string;
}

const useStyles = makeStyles({
  markdown: {
    h2: {
      marginTop: '1em',
      color: 'red'
    }
  }
})

const Markdown: FunctionComponent<IProps> = ({ content }) => {
  const classes = useStyles()
  return (
    <div className="markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default Markdown;