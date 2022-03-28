import { FunctionComponent } from "react";
import {
  Box,
  Card,
  CardContent,
  Link,
  Typography
} from '@mui/material'
import { DocumentMeta } from "../interfaces/document";
import EvidenceTable from './evidence-table'

interface IProps {
  doc: DocumentMeta
}

const DCard: FunctionComponent<IProps> = ({ doc }) => {
  const { title, description, tables } = doc
  return (
    <Card sx={{ display: 'flex', my: 4, p: 2, boxShadow: '0 19px 25px -17px rgb(2 31 63 / 30%)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Link href={`/EBPMDB/doc/${doc.slug}`}>
            <Typography component="h2" variant="h5">{title}</Typography>
          </Link>
          <Typography component="p" variant="body1" sx={{ mt: 2 }}>{description}</Typography>
        </CardContent>
      </Box>
      <Box sx={{ width: '50%', borderLeft: 1, p: 1 }}>
        {tables.map((table, i) => (
          <EvidenceTable key={i} table={table} />
        ))}
      </Box>
    </Card>
  )
}

export default DCard