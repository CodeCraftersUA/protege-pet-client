import './styles/App.css'
import { Input } from './components/Input/Input'
import { Title } from "./components/Title/Title";
import { Button } from "./components/Button/Button"
import { Logo } from "./components/Logo/Logo"

import img from "./assets/logo-pets.png"

function App() {

  return (

    <>
      <Logo width='118px' height='117px' logo={img}></Logo>
      <Title font='20px' content='ProtegePet' margin='18px'></Title>
      <Title content="Login"></Title>
      <Input title='Email'></Input>
      <Input title='Senha'></Input>
      <Button position='157px' content='Entrar'></Button>
      <Title margin={"40px"} content='Ainda não tenho conta:'></Title>
      <Button position='90px' content='Cadastrar como Protetora'></Button>
      <Button position='84px' content='Cadastrar como Fornecedor'></Button>
    </>

  )

}

export default App
