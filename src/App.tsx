import { ThemeProvider } from 'styled-components'
import { useState } from 'react'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaLight from './Themes/light'
import temaDark from './Themes/dark'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos></Projetos>
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
