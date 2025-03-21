import Apresentacao from "./components/landingPage/Apresentacao";

import { Navbar } from "./components/landingPage/Navbar";

export default function Home() {
  return (
    <main className="bg-[#FFFFEA] border-2 ">
      <nav className="fixed w-full">
        <Navbar />
      </nav>
      
      <div className="pt-28">
        <Apresentacao/>
      </div>

      <div>
        
      </div>
      
      <div></div>
    </main>
  );
}
