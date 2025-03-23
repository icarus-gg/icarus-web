import { Box, Typography, Container, Divider } from '@mui/material'
import DevelopmentUpdates from '../components/DevelopmentUpdates'
import Roadmap from '../components/Roadmap'
import Footer from '../components/Footer'
import HeroSlider from '../components/HeroSlider'

const Aliro1Page = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        minHeight: '100vh',
        pt: 4,
      }}
    >
      <Container maxWidth="lg">
        {/* Hero Slider */}
        <HeroSlider />

        {/* Development Updates */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#00bcd4', fontWeight: 'bold' }}>
            Development Updates
          </Typography>
          <Divider sx={{ bgcolor: '#00bcd4', mb: 4 }} />
          <DevelopmentUpdates />
        </Box>

        {/* Roadmap */}
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ color: '#00bcd4', fontWeight: 'bold' }}>
            Roadmap
          </Typography>
          <Divider sx={{ bgcolor: '#00bcd4', mb: 4 }} />
          <Roadmap />
        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  )
}

export default Aliro1Page