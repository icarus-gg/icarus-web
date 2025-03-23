import React from 'react'
import { Box, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1a1a1a',
        py: 4,
        mt: 6,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" sx={{ color: '#ffffff' }}>
        © 2024 Aliro1. All rights reserved.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Link href="#" sx={{ color: '#00bcd4', mx: 1 }}>
          Twitter
        </Link>
        <Link href="#" sx={{ color: '#00bcd4', mx: 1 }}>
          Discord
        </Link>
        <Link href="#" sx={{ color: '#00bcd4', mx: 1 }}>
          GitHub
        </Link>
      </Box>
    </Box>
  )
}

export default Footer