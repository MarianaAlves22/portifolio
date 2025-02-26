import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Estou cursando Análise e Desenvolvimento de Sistemas e Full Stack,
      apaixonada por aprender e crescer profissionalmente. Minha formação inclui
      conhecimentos em linguagens de programação como HTML, CSS, React e
      JavaScript, CSS, além de fundamentos em Python. Além disso, sou fluente em
      inglês e tenho conhecimento básico em espanhol.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=MarianaAlves22&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarianaAlves22&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
