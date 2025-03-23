import { useState } from 'react'
import { Box, Typography, Stepper, Step, StepLabel } from '@mui/material'

/*
steps:: completed | active | incomplete
*/
const steps = [
  { label: 'Concept & Design', status: 'completed' },
  { label: 'Core Mechanics', status: 'active' },
  { label: 'Multiplayer Functionality', status: 'active' },
  { label: 'Demo Release', status: 'incomplete' },
  { label: 'Campaign', status: 'incomplete' },
  { label: 'Early Access', status: 'incomplete' },
  { label: 'Full Release', status: 'incomplete' },
]

const Roadmap = () => {
  const [activeStep, setActiveStep] = useState(2) // Default to the "Alpha Release" step

  // Handle step click
  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex)
  }

  // Dummy content for each step
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return 'Brainstorm ideas and create initial designs, layout a rough storyboard and plan a campaign for early access.'
      case 1:
        return 'Architect and develop c++ systems to pilot the core of Aliro1. Goals are aimed to break things down and implement with a goal to ease expansion.'
      case 2:
        return 'Going for peer to peer multiplayer functionality on our Demo Release. Really pushing to have this completed in time, as a lot of core childhood memories are based around multiplayer gaming.'
      case 3:
        return 'Beta Testing phase in a nutshell. We release a public Demo for feedback and further testing of our core systems, including Multiplayer.'
      case 4:
        return 'Finalize our Single Player Campaign in preparation for Early Access Release while fixing or adding whatever is deemed necessary from our Demo run.'
      case 5:
        return 'Early Access Release! The game is officially launched with a Single player Campaign, and Multiplayer functionality.'
      case 6:
        return 'Aliro1 Full Release. The game is officially launched with a Single player Campaign, and Multiplayer functionality.'
      default:
        return 'Unknown step'
    }
  }

  return (
    <Box sx={{ width: '100%', padding: 3 }}>
      {/* Stepper with manually controlled step icons */}
      <Stepper alternativeLabel sx={{ color: '#00bcd4' }}>
        {steps.map((step, index) => (
          <Step
            key={step.label}
            onClick={() => handleStepClick(index)}
            sx={{ cursor: 'pointer' }}
          >
            <StepLabel
              sx={{
                color:
                  step.status === 'completed'
                    ? '#4caf50' // Green for completed
                    : step.status === 'active'
                    ? '#00bcd4' // Cyan for active
                    : '#9e9e9e', // Grey for incomplete
              }}
              StepIconProps={{
                // Manually control the step icon appearance
                completed: step.status === 'completed',
                active: step.status === 'active',
              }}
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Display content for the active step */}
      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h6" sx={{ color: '#00bcd4' }}>
          {steps[activeStep].label}
        </Typography>
        <Typography variant="body1" sx={{ marginTop: 2, color: '#ffffff' }}>
          {getStepContent(activeStep)}
        </Typography>
      </Box>
    </Box>
  )
}

export default Roadmap