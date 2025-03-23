import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material'

const GameCard = () => {
  return (
    <Card
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
        image="/images/game-preview.jpg" // Replace with your game's preview image
        alt="Game Preview"
        sx={{
          width: '100%',
          height: '430px', // Fixed height to match Steam Library Header
          objectFit: 'cover', // Ensure the image covers the container
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          Game Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A thrilling adventure game set in a dystopian future. Explore, survive, and uncover the secrets of the world.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Chip label="In Development" color="primary" sx={{ fontWeight: 'bold' }} />
        </Box>
      </CardContent>
    </Card>
  )
}

export default GameCard