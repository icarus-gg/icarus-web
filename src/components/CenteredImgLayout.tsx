import React from 'react'
import { Box, Container, Link, Typography } from '@mui/material'
import { FaDiscord } from "react-icons/fa";

const CenteredImageLayout = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Main content with centered image */}
      <Container
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          my: 4,
          background: 'none'
        }}
      >
        <Box
          component="img"
          src="/icarus.gg-500x146.png"
          alt="Centered image"
          sx={{
            width: 500,
            height: 146,
            objectFit: 'contain',
            background: 'none',
            imageRendering: 'auto',
            mixBlendMode: 'normal'
          }}
        />
      </Container>
      {/* Discord link section */}
      {/* <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: 4
        }}
      >
        <Link
          href="https://discord.gg/XB6mepj"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            textDecoration: 'none',
            color: 'primary.main',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          <FaDiscord size={24} />
        </Link>
      </Container> */}

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          color: 'white'
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            mt: 2,
            textAlign: 'center',
            maxWidth: 500,
            fontSize: '1rem',
            lineHeight: 1.5
          }}
        >
          software & indie game studio
        </Typography>
      </Box>
    </Box>
  )
}

export default CenteredImageLayout