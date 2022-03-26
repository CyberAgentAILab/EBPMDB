import { Box, Typography } from '@mui/material'
import { EvidenceTableProps } from '../interfaces/EvidenceCardProps'
import EvidenceTableStrength from './evidence-table-strength'
import EvidenceTableEffectiveness from './evidence-table-effectiveness'

export default function EvidenceTable(props: { table: EvidenceTableProps }) {
  const { title, effectiveness, strength } = props.table

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', py: 1, pl: 2 }} className="table-border">
      <Typography component="h3" variant="body1" sx={{ fontWeight: 'bold' }}>{title}</Typography>
      <Box sx={{ textAlign: 'center' }}>
        <EvidenceTableEffectiveness effectiveness={effectiveness} />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <EvidenceTableStrength strength={strength} />
      </Box>
    </Box>
  )
}