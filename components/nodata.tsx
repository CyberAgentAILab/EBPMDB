import { FunctionComponent } from "react"
import { Box, Typography } from "@mui/material"
import { grey } from "@mui/material/colors"

export default function NoData() {
  return (
    <Box sx={{ p: 30, my: 5, backgroundColor: grey[100],  }}>
      <Typography component="h2" variant="h5" sx={{ textAlign: 'center', color: grey[500] }}>
        データがありません
      </Typography>
    </Box>
  )
}