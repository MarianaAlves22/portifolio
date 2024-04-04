import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos></Projetos>
        </main>
      </Container>
    </>
  )
}

export default App
