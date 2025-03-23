import { useEffect, useState } from 'react'
import { Box, Slider, Typography } from '@mui/material'

const images = [
  {
    src: '/images/MechLine-1200x540.png',
    alt: 'Aliro1 - Mech Line - war room',
  },
  {
    src: '/images/MechLine-left2-1200x540.png',
    alt: 'Aliro1 - Mech Line left2 - war room',
  },
  {
    src: '/images/MechLine-Right-1200x540.png',
    alt: 'Aliro1 - Mech Line right - war room',
  },
  {
    src: '/images/Aliro-silo-1200x540.png',
    alt: 'Aliro1 - silhouette',
  },
  {
    src: '/images/Aliro-cry-1200x540.png',
    alt: 'Aliro1 - silhouette dark room',
  },
]

const ImageSlider = () => {
  const [value, setValue] = useState(0) // Current slide index

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev + 1) % images.length)
    }, 3000) // Change slide every 3 seconds
    return () => clearInterval(interval)
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      {/* Display the current image */}
      <Box
        component="img"
        src={images[value].src}
        alt={images[value].alt}
        sx={{
          width: '100%',
          height: { xs: '300px', sm: '400px', md: '500px' },
          objectFit: 'cover',
          borderRadius: 2,
          mb: 2,
        }}
      />

      {/* MUI Slider for navigation */}
      <Slider
        value={value}
        onChange={handleChange}
        min={0}
        max={images.length - 1}
        step={1}
        sx={{
          width: '80%',
          margin: '0 auto',
          color: '#0070F2', // Customize slider color
        }}
      />

      {/* Optional: Display current slide number */}
      <Typography variant="body1" sx={{ mt: 1 }}>
        Image {value + 1} of {images.length}
      </Typography>
    </Box>
  )
}

export default ImageSlider