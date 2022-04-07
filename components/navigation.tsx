import { Container, AppBar, Toolbar, Button, Box, Typography, Link } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import { makeStyles } from '@mui/styles'

const pages = [{
  label: '教育',
  dirName: 'education',
}, {
  label: '医療',
  dirName: 'medical_care',
}, {
  label: '少子化対策',
  dirName: 'measures_for_declining_birthrate',
}];

export default function Navigation() {
  return (
    <>
      <AppBar position='relative' color='primary'>
        <Container sx={{ m: 'auto' }}>
          <Toolbar disableGutters>
            <Link sx={{ my: 2, mr: 2, color: 'white', display: 'block', fontWeight: 'bold' }} href={`/EBPMDB/`}>
              EBPMDB
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Link
                  key={page.dirName}
                  sx={{ my: 2, mx:2, color: 'white', display: 'block' }}
                  href={`/EBPMDB/${page.dirName}`}
                >
                  {page.label}
                </Link>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Button href="https://github.com/CyberAgentAILab/EBPMDB/" target="_blank" rel="noopener">
                <GitHub sx={{ color: '#ffffff' }} />
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}