import React from 'react'
import { Box, Typography, Stepper, Step, StepLabel } from '@mui/material'

const steps = [
  'Concept & Design',
  'Core Mechanics',
  'Alpha Release',
  'Beta Testing',
  'Full Release',
]

const Roadmap = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={2} alternativeLabel sx={{ color: '#00bcd4' }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{ color: '#00bcd4' }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}

export default Roadmap