import { Container, AppBar, Toolbar, Button, Box } from "@mui/material";
import { GitHub } from "@mui/icons-material";

export default function Navigation() {
  return (
    <AppBar position='relative' color='primary'>
      <Container sx={{ m: 'auto' }}>
        <Toolbar disableGutters>
          <Button sx={{ color: '#ffffff'}} href={`/EBPMDB/`}>
            EBPMDB
          </Button>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}></Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button href="https://github.com/CyberAgentAILab/EBPMDB/" target="_blank" rel="noopener">
              <GitHub sx={{ color: '#ffffff' }} />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}