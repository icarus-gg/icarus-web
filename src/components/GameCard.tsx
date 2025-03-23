import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const GameCard = () => {

  const navigate = useNavigate();

  const navigateToAliroPage = (e) => {
    e.preventDefault()
    navigate('/aliro1')
  }

  return (
    <Card
      onClick={(e) => navigateToAliroPage(e)}
      sx={{
        maxWidth: 920, // Match Steam Library Header width
        mx: 'auto',
        my: 4,
        boxShadow: 3,
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component="img"
        height="430" // Match Steam Library Header height
        image="/images/Aliro-silo-920x430.png" // Replace with your game's preview image
        alt="Game Preview"
        sx={{
          width: '100%',
          height: '430px', // Fixed height to match Steam Library Header
          objectFit: 'cover', // Ensure the image covers the container
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          Aliro1
        </Typography>
        <Typography variant="h6" color="text.secondary">
          A Survival-Tower-Defense game set in dystopian times. Prove your worth alone or with friends to one of three factions, for the evolution of society-- whether it ascends us to the stars or engulfs us in darkness.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Chip label="In Development" color="primary" sx={{ fontWeight: 'bold' }} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default GameCard