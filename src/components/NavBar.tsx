import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Box,
} from '@mui/material'

const NavBar = () => {
  // Example navigation items - you can modify these
  const navItems = [
    { label: 'home', href: '/' },
    { label: 'daedalus', href: '/dashboard' },
    // { label: 'Aliro1', href: '/about' },
    // { label: 'GitHub', href: 'https://github.com', external: true },
  ]

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'black',
        boxShadow: 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: '48px', sm: '64px' },
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: { xs: 1, sm: 2 },
              flexWrap: 'wrap',
              py: 1,
            }}
          >
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  sx={{
                    color: '#a849c8',
                    textDecoration: 'none',
                    fontSize: { xs: '0.7rem', sm: '.7rem' },
                    '&:hover': {
                      color: '#c174db',
                      textDecoration: 'none',
                    },
                    fontFamily: '"Press Start 2P", monospace',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.label}
                </Link>
                {index < navItems.length - 1 && (
                  <Typography
                    sx={{
                      color: '#333',
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      fontFamily: '"Press Start 2P", monospace',
                    }}
                  >
                    |
                  </Typography>
                )}
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar