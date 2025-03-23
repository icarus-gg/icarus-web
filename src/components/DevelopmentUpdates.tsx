import { Typography, Card, CardContent } from '@mui/material'
import Grid from '@mui/material/Grid2'

const updates = [
  {
    title: 'Aliro1: power or air',
    date: '2025-03-23',
    description: `Went through pilot training recently, between our Thoren and Machine Gun Turret capabilities, we may yet survive.`,
  },
  {
    title: 'Development Update',
    date: '2025-03-21',
    description: `Managed to get a decent core up for the enemy AI patrol & chase system... had to re-rig / update the Thoren mk2 design in order for skeletal meshes and animations to be able to update without flipping too many tables. Things are looking good.`,
  },
  {
    title: 'Aliro1: turbulence accumilated',
    date: '2025-03-14',
    description: `Our engineer has upgraded our defensive capabilities, we've been in the field for days "testing".`,
  },
  {
    title: 'Development Update',
    date: '2025-03-07',
    description: 'Implemented a functional Tower Defense building! it shoots...',
  },
  {
    title: 'Aliro1: apocalypse realised',
    date: '2025-03-01',
    description: `Our previous planet made us realize there is no end to a means... We have travelled for centuries and have come up with the same results. Thoren's mk2 designs have been completed, and there is only progress in our horizon.`,
  },
]

const DevelopmentUpdates = () => {
  return (
    <Grid container spacing={4}>
      {updates.map((update, index) => (
        <Grid size={{xs:12, md:6 }} key={index}>
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