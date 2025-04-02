import type React from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface Feature {
  text: string
  active: boolean
}

interface SubscriptionCardProps {
  planName: string
  price: string
  periodicity?: string // opcional, padrão é "/por mês"
  description?: string
  buttonText?: string // opcional, padrão é "ASSINAR AGORA"
  features: Feature[]
}

export default function CardPrice({
  planName,
  price,
  periodicity = "/por mês",
  description = "Ideal para quem busca conteúdos exclusivos e de qualidade.",
  buttonText = "ASSINAR AGORA",
  features,
}: SubscriptionCardProps) {
  return (
    <div className="flex justify-center p-6 ">
      <Card className="w-full max-w-xs rounded-xl overflow-hidden bg-red-600 text-white">
        <CardHeader className="pb-2 pt-6 px-6">
          <h3 className="text-[22px] font-medium">Plano <span className="font-extrabold">{planName}</span></h3>
          <div className="mt-2">
            <span className="font-bold text-[58px]">R${price}</span>
            <span className="text-[18px]">{periodicity}</span>
          </div>
          <p className=" mt-2 text-white/90 text-[16px] font-medium">{description}</p>
        </CardHeader>
        <CardFooter className="pb-4 pt-2 px-6">
          <Button className="w-full bg-black hover:bg-black/80 text-white rounded-full text-[18px] font-extrabold py-8 px-[14px]">{buttonText}</Button>
        </CardFooter>
        <CardContent className="bg-white text-black rounded-t-xl p-6">
          <h4 className=" mb-4 text-[18px] font-extrabold">O que está incluso:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <Feature key={index} active={feature.active}>
                {feature.text}
              </Feature>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

function Feature({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <li className="flex items-start gap-2">
      <div className={`rounded-full p-0.5 ${active ? "bg-green-500" : "bg-gray-300"}`}>
        <Check className="h-3.5 w-3.5 text-white " />
      </div>
      <span className={`text-[16px] ${active ? "text-black" : "text-gray-500 line-through"}`}>{children}</span>
    </li>
  )
}

