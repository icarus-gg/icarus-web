import React from 'react'
import { Box, Typography, Card, CardContent, Grid } from '@mui/material'

const updates = [
  {
    title: 'Alpha Build Released',
    date: '2024-03-01',
    description: 'The first alpha build of Aliro1 is now available for testing. Explore the initial world and mechanics!',
  },
  {
    title: 'New Enemy AI System',
    date: '2024-02-15',
    description: 'Implemented a new AI system for enemies, making them more dynamic and challenging.',
  },
  {
    title: 'Environment Design Complete',
    date: '2024-01-30',
    description: 'Finished designing the main environments for the game. Check out the screenshots!',
  },
]

const DevelopmentUpdates = () => {
  return (
    <Grid container spacing={4}>
      {updates.map((update, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card
            sx={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #00bcd4',
              boxShadow: '0 0 10px rgba(0, 188, 212, 0.3)',
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ color: '#00bcd4', mb: 1 }}>
                {update.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#ffffff', mb: 2 }}>
                {update.date}
              </Typography>
              <Typography variant="body1" sx={{ color: '#ffffff' }}>
                {update.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default DevelopmentUpdates