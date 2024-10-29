import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import AppTheme from '../shared-theme/AppTheme'
import {
  chartsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations'
import CenteredImageLayout from '../components/CenteredImgLayout'

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
}

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <CenteredImageLayout />
      </Box>
    </AppTheme>
  )
}
