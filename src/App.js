import Navigator from './pages/Navigator'
import { ThemeProvider } from 'styled-components'
import breakpoints from './styles/breakpoints'

function App() {
  return (
    <>
      <ThemeProvider theme={breakpoints}>
        <Navigator />
      </ThemeProvider>
    </>
  )
}

export default App
