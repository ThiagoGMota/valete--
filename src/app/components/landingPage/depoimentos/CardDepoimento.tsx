import { Star } from "lucide-react"
import Image from "next/image"

export const CardDepoimento = ({ text, img, name }: { text: string; img: string; name: string }) => {
  return (
    <div className="bg-zinc-950 shadow-2xl flex flex-col w-96 h-64 rounded-2xl p-4 text-white">
      <p className="mb-4 h-1/2 py-6 px-2 text-zinc-400 text-xl">&quot;{text}&quot;</p>
      <div className="flex items-center gap-3 h-1/2">
        <Image src={`/assinantes/`+img} alt="foto do usuario" height={50} width={50} className="rounded-xl" />
        <div>
          <p className="font-semibold text-2xl">{name}</p>
          <div className="flex mt-1">
            {/* Renderiza 5 estrelas de uma vez usando Array.from */}
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} size={16} color="#DAA520" fill="#FFD700" className={index > 0 ? "ml-1" : ""} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

