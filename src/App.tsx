import { Header } from "./components/Header"
import { Carousel } from "./components/Carousel"
import { Content } from "./components/Content"
import { Footer } from "./components/Footer"

function App(): JSX.Element {

  return (
    <>
      <Header />
      <Carousel />
      <Content />
      <Footer />
    </>
  )
}

export default App
