import { useTheme } from '@mui/material/styles'
import {
  Box,
  Card,
  CardContent,
  Link,
  Typography
} from '@mui/material'
import EvidenceTable from './evidence-table'
import { EvidenceCardProps } from '../interfaces/EvidenceCardProps'

export default function EvidenceCard(props: { item: EvidenceCardProps, index: number}) {
  const theme = useTheme()

  const { title, lead, table } = props.item

  return (
    <Card sx={{ display: 'flex', my: 4, p: 2, boxShadow: '0 19px 25px -17px rgb(2 31 63 / 30%)' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Link href={`/evidences/${props.index}`}>
            <Typography component="h2" variant="h5">{title}</Typography>
          </Link>
          <Typography component="p" variant="body1" sx={{ mt: 2 }}>{lead}</Typography>
        </CardContent>
      </Box>
      <Box sx={{ width: '50%', borderLeft: 1, p: 1 }}>
        {table.map((item, index) => <EvidenceTable key={index} table={item} />)}
      </Box>
  </Card>
  )
}