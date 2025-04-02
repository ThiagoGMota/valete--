
import About from "./components/landingPage/About"
import AppApresentacao from "./components/landingPage/appApresentacao"
import Apresentacao from "./components/landingPage/Apresentacao"
import CardCursos from "./components/landingPage/CardCursos"
import Depoimentos from "./components/landingPage/Depoimentos"
import DocumentariosSlider from "./components/landingPage/DocumentariosSlider"
import Footer from "./components/landingPage/Footer"
import Logos from "./components/landingPage/Logos"
import { Navbar } from "./components/landingPage/Navbar"
import Novidades from "./components/landingPage/Novidades"
import Perguntas from "./components/landingPage/Perguntas"
import Price from "./components/landingPage/Price"
import ResumoFinal from "./components/landingPage/ResumoFinal"
import Revista from "./components/landingPage/Revista"

export default function Home() {

  return (
    <main className="bg-[#FFFFEA] border-2">
      <nav className="fixed w-screen bg-[#FFFFEA] top-0 z-50">
        <Navbar />
      </nav>

      <div id="apresentacao" className=" pt-28 ">
        <Apresentacao />
      </div>

      <div className="pt-16 ">
        <AppApresentacao />
      </div>

      <div className="mt-4 relative md:bottom-52 bg-[#FFFFEA] flex flex-col items-center justify-start  ">
        <div className="w-[90%] lg:w-[70%] my-8 ">
            <Logos />
          
          <div>
            <About />
          </div>
            
          <div className="w-full overflow-hidden">
            <DocumentariosSlider />
          </div>

          <Revista />

          <div className="flex  flex-col justify-center items-center gap-8  w-full">
            <CardCursos />

            <div className="scale-90 flex flex-col ">
              <Novidades />
            </div>
            <div className="mt-[500px] md:mt-60 lg:mt-20 xl:mt-0 ">
              <Price />
            </div>

          </div>
        </div>
      </div>
      <Depoimentos />
      <Perguntas />
      <ResumoFinal/>
      <div className="relative">
        <Footer />
      </div>
    </main>
  )
}

