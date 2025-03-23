import { Box, Typography, Button } from '@mui/material'

const HeroSection = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 10,
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
        borderRadius: 2,
        border: '1px solid #00bcd4',
        boxShadow: '0 0 20px rgba(0, 188, 212, 0.5)',
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #00bcd4, #ff00ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 2,
        }}
      >
        Aliro1
      </Typography>
      <Typography variant="h5" sx={{ color: '#ffffff', mb: 4 }}>
        A Sci-Fi Adventure in Development
      </Typography>
      <Button
        variant="outlined"
        sx={{
          color: '#00bcd4',
          borderColor: '#00bcd4',
          '&:hover': { borderColor: '#ff00ff', color: '#ff00ff' },
        }}
      >
        Follow Development
      </Button>
    </Box>
  )
}

export default HeroSection