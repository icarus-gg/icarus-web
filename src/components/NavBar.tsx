import React from 'react'
import { AppBar, Toolbar, Typography, Container, Box, Link as MuiLink } from '@mui/material'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  const location = useLocation()

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Daedalus', href: 'https://daedalus.icarus.gg', external: true },
    { label: 'Aliro1', href: '/aliro1' }, 
  ]

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '64px', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                {item.external ? ( // Step 2: Use MuiLink for external links
                  <MuiLink
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#a849c8',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': { color: '#FFDD00' }, // Use sx prop for hover
                      fontFamily: '"Press Start 2P", monospace',
                    }}
                  >
                    {item.label}
                  </MuiLink>
                ) : ( // Step 3: Use RouterLink for internal links
                  <RouterLink
                    to={item.href}
                    style={{
                      color: location.pathname === item.href ? '#FFDD00' : '#a849c8',
                      textDecoration: location.pathname === item.href ? 'underline' : 'none',
                      fontSize: '0.875rem',
                      fontFamily: '"Press Start 2P", monospace',
                    }}
                    className="nav-link" // Add a class for hover styles
                  >
                    {item.label}
                  </RouterLink>
                )}
                {index < navItems.length - 1 && (
                  <Typography sx={{ color: '#333', fontSize: '1rem', fontFamily: '"Press Start 2P", monospace' }}>
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