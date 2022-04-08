import { Typography, Grid } from '@mui/material'
import { EvidenceTableProps } from '../interfaces/EvidenceCardProps'
import EvidenceTableStrength from './evidence-table-strength'
import EvidenceTableEffectiveness from './evidence-table-effectiveness'

export default function EvidenceTable(props: { table: EvidenceTableProps }) {
  const { title, effectiveness, strength } = props.table

  return (
    <Grid container columns={10} sx={{ py: 1 }} className="table-border">
      <Grid item xs={5}>
        <Typography component="h3" variant="body1" sx={{ fontWeight: 'bold' }}>{title}</Typography>
      </Grid>
      <Grid item xs={2} sx={{ px: '1rem'}}>
        <EvidenceTableEffectiveness effectiveness={effectiveness} />
      </Grid>
      <Grid item xs={3}>
        <EvidenceTableStrength strength={strength} />
      </Grid>
    </Grid>
  )
}