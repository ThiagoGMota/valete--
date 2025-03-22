
import AppApresentacao from "./components/landingPage/appApresentacao"
import Apresentacao from "./components/landingPage/Apresentacao"
import { Navbar } from "./components/landingPage/Navbar"

export default function Home() {

  return (
    <main className="bg-[#FFFFEA] border-2">
      <nav className="fixed w-screen bg-[#FFFFEA] top-0 z-50">
        <Navbar />
      </nav>

      <div id="apresentacao" className=" pt-28">
        <Apresentacao />
      </div>

      <div className="pt-16">
        <AppApresentacao />
      </div>
    </main>
  )
}

