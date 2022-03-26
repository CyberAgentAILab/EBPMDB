import ReactMarkdown from "react-markdown";
import { FunctionComponent } from "react";

interface IProps {
  contents: string[];
}

const MarkdownList: FunctionComponent<IProps> = ({ contents }) => {
  return (
    <ul>
      {contents.map((content, i) => (
        <li key={i}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </li>
      ))}
    </ul>
  )
}

export default MarkdownList;