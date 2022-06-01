import { Typography, Grid, Link } from '@mui/material'
import { EvidenceTableProps } from '../interfaces/EvidenceCardProps'
import EvidenceTableStrength from './evidence-table-strength'
import EvidenceTableEffectiveness from './evidence-table-effectiveness'
import { Help } from '@mui/icons-material'

export default function EvidenceTable(props: { table: EvidenceTableProps }) {
  const { title, effectiveness, strength } = props.table

  return (
    <Grid
      container
      columns={10}
      component="dl"
      sx={{
        py: { xs: 2, md: 1 },
        flexDirection: { xs: 'column', md: 'row' },
        gap: { xs: '1rem', md: 0 },
      }}
      className="table-border"
    >
      <Grid
        item
        lg={5}
        md={12}
        sx={{
          display: { xs: 'flex', md: 'block' },
          justifyContent: 'space-between',
        }}
      >
        <Typography
          component="dt"
          variant="body1"
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center',
            flexBasis: '40%',
          }}
        >
          評価指標
        </Typography>
        <Typography
          component="h3"
          variant="body1"
          sx={{
            fontWeight: 'bold',
            display: { xs: 'flex', md: 'block' },
            flexBasis: '60%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid
        item
        lg={2}
        md={12}
        sx={{
          px: { xs: 0, md: '1rem' },
          display: { xs: 'flex', md: 'block' },
          justifyContent: 'space-between',
        }}
      >
        <Typography
          component="dt"
          variant="body1"
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          効果
          <Link href={`/EBPMDB/effectiveness`}>
            <Help sx={{ position: 'relative', top: '3px', fontSize: '18px' }} />
          </Link>
        </Typography>
        <EvidenceTableEffectiveness effectiveness={effectiveness} />
      </Grid>
      <Grid
        item
        lg={3}
        md={12}
        sx={{
          display: { xs: 'flex', md: 'block' },
          justifyContent: 'space-between',
        }}
      >
        <Typography
          component="dt"
          variant="body1"
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          証拠の強さ
          <Link href={`/EBPMDB/sms`}>
            <Help sx={{ position: 'relative', top: '3px', fontSize: '18px' }} />
          </Link>
        </Typography>
        <EvidenceTableStrength strength={strength} />
      </Grid>
    </Grid>
  )
}
