import { Card, CardContent, Box, Typography, Link } from '@mui/material'
import { Help  } from "@mui/icons-material";

export default function EvidenceSticky() {
  const ext = process.env.ENV === 'prd' ? '.html' : ''
  return (
    <Card sx={{ display: 'flex', position: 'sticky', top: -1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="h3" variant="body1">介入</Typography>
        </CardContent>
      </Box>
      <Box sx={{ width: '50%' }}>
        <CardContent>
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', alignItems: 'center' }}>
            <Typography component="h3" variant="body1">評価指標</Typography>
            <Typography component="h3" variant="body1">効果</Typography>
            <Typography component="h3" variant="body1">
              証拠の強さ
              <Link href={`/EBPM/sms${ext}`}><Help sx={{ position: 'relative', top: '6px' }} /></Link>
            </Typography>
          </Box>
        </CardContent>
        
      </Box>
    </Card>
  )
}