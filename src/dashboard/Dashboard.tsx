import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import AppTheme from '../shared-theme/AppTheme'
import CenteredImageLayout from '../components/CenteredImgLayout'
import GameCard from '../components/GameCard'

export default function Dashboard() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <GameCard />
        <CenteredImageLayout />
      </Box>
    </AppTheme>
  )
}