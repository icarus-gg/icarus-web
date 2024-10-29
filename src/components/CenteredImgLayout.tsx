import React from 'react';
import { Box, Container, Link, Typography, useTheme, useMediaQuery } from '@mui/material';

const CenteredImageLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.default'
      }}
    >
      {/* Main content with centered image and description */}
      <Container
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          my: { xs: 2, sm: 3, md: 4 }, // Responsive margin
          background: 'none',
          px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        }}
      >
        <Box
          component="img"
          src="/icarus.gg-500x146.png"
          alt="Centered image"
          sx={{
            width: {
              xs: '100%', // Full width on mobile
              sm: '400px', // Tablet size
              md: '500px'  // Desktop size
            },
            height: 'auto', // Allow height to scale proportionally
            maxWidth: '100%', // Ensure image never overflows container
            objectFit: 'contain',
            background: 'none',
            imageRendering: 'auto',
            mixBlendMode: 'normal'
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
            mt: { xs: 1, sm: 2 }, // Responsive margin top
            textAlign: 'center',
            maxWidth: {
              xs: '100%',
              sm: '400px',
              md: '500px'
            },
            fontSize: {
              xs: '0.875rem', // Smaller font on mobile
              sm: '0.925rem', // Medium font on tablet
              md: '1rem'      // Regular font on desktop
            },
            px: { xs: 2, sm: 0 }, // Add padding on mobile only
            lineHeight: 1.5
          }}
        >
          software & indie game studio
        </Typography>
      </Container>

      {/* Discord link section */}
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          py: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          background: 'none'
        }}
      >
        {/* <Link
          href="https://discord.com/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0.5, sm: 1 }, // Responsive gap
            textDecoration: 'none',
            color: 'primary.main',
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          <Discord size={isMobile ? 20 : 24} />
          <Typography
            sx={{
              fontSize: {
                xs: '0.875rem',
                sm: '1rem'
              }
            }}
          >
            Join our Discord community
          </Typography>
        </Link> */}
      </Container>

      {/* Footer */}
      {/* <Box
        component="footer"
        sx={{
          py: { xs: 2, sm: 3 },
          px: { xs: 1, sm: 2 },
          mt: 'auto',
          backgroundColor: 'primary.main',
          color: 'white'
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="body1"
            align="center"
            sx={{
              fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem'
              }
            }}
          >
            © 2024 Your Company Name. All rights reserved.
          </Typography>
        </Container>
      </Box> */}
    </Box>
  );
};

export default CenteredImageLayout;