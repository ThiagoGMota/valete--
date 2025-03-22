
import AppApresentacao from "./components/landingPage/appApresentacao"
import Apresentacao from "./components/landingPage/Apresentacao"
import Carrosel from "./components/landingPage/Carrosel"
import { Navbar } from "./components/landingPage/Navbar"

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
      <div className="mt-4 relative md:bottom-52 ">
        <Carrosel />
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quasi illum a ab neque enim beatae nostrum odio dolores blanditiis sequi necessitatibus aspernatur, eum similique totam est, dolore veniam. Eaque!
        Velit, error quod quam beatae eos nisi esse, voluptas accusamus, facere hic officia dicta dolorum temporibus corrupti molestias eaque ex sunt aut veritatis laudantium assumenda aspernatur? Quas accusamus dignissimos tempora!
        Reiciendis quibusdam dolor officiis hic! Doloribus eveniet illo voluptatibus quas rerum ipsa molestiae esse eos, facilis accusamus placeat dolores sapiente animi, reprehenderit natus! Possimus consectetur reiciendis quos quas!
        Repudiandae natus quae temporibus quisquam rerum perspiciatis minus voluptas nemo voluptate saepe porro tenetur recusandae ad est, impedit sequi quod voluptatum dignissimos cupiditate alias, accusantium reiciendis libero quas! Quidem, itaque.
        Officiis error provident suscipit ad exercitationem optio sit ullam, deleniti fugiat veniam quam aut voluptatum expedita, animi, necessitatibus delectus impedit aperiam quia ea unde quasi. Expedita, repellat obcaecati. Inventore, sunt!</p>
      </div>
      </div>
      
    </main>
  )
}

