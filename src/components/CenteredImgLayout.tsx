import { Box, Container, Typography, useTheme, useMediaQuery } from '@mui/material'

const CenteredImageLayout = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
      <Container
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          my: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          component="img"
          src="/icarus.gg-500x146.png"
          alt="Centered image"
          sx={{
            width: isMobile ? '100%' : '500px',
            height: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            mt: { xs: 1, sm: 2 },
            textAlign: 'center',
            maxWidth: '500px',
            fontSize: isMobile ? '0.875rem' : '1rem',
            lineHeight: 1.5,
          }}
        >
          Software & Indie Game Studio
        </Typography>
      </Container>
    </Box>
  )
}

export default CenteredImageLayout