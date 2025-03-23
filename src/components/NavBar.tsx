import React from 'react'
import { AppBar, Toolbar, Typography, Container, Link, Box } from '@mui/material'

const NavBar = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Daedalus', href: 'https://daedalus.icarus.gg', external: true },
    { label: 'Aliro1', href: '/aliro1' }, // Add this line
  ]

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: '64px', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map((item, index) => (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  sx={{
                    color: '#a849c8',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#c174db' },
                    fontFamily: '"Press Start 2P", monospace',
                  }}
                >
                  {item.label}
                </Link>
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