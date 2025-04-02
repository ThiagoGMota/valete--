import { CardPerguntas } from "./perguntas/cardPerguntas"

interface perguntasProps {
  id: number
  pergunta: string
  resposta: string
}

const perguntasFrequentes: perguntasProps[] = [
  {
    pergunta: "O que é o Valete Plus e o que ele oferece?",
    resposta:
      "O Valete Plus é um aplicativo exclusivo que reúne conteúdos de alta qualidade em diversas formas, como dossiês investigativos, séries visuais, cursos e uma revista física mensal. Ele foi criado para oferecer aprendizado, cultura e reflexão de maneira acessível e dinâmica. ",
  },
  {
    pergunta: "Como posso acessar o Valete Plus?",
    resposta:
      "O Valete Plus está disponível para dispositivos Android e iOS. Após fazer o download do aplicativo, basta criar sua conta ou fazer login com seus dados de assinatura e começar a explorar os conteúdos de acordo com o seu plano.",
  },
  {
    pergunta: "Preciso pagar frete pela minha Revista Valete?",
    resposta: "Não, o frete é totalmente gratuito para assinantes do plano revista.",
  },
  {
    pergunta: "A Revista está inclusa em todos os planos?",
    resposta:
      "Não. A Revista Valete física está inclusa apenas no Plano Revista, onde ela é entregue mensalmente à sua casa com frete gratuito. No entanto, conteúdos complementares relacionados à revista podem ser acessados no aplicativo por todos os assinantes.",
  },
  {
    pergunta: "Posso cancelar minha assinatura a qualquer momento?",
    resposta:
      "Sim, você pode cancelar sua assinatura do Valete Plus nos primeiros 7 dias após a contratação, garantindo um reembolso integral, caso não esteja satisfeito. Após esse período, o cancelamento só será efetivado ao final do ciclo de cobrança vigente, sem reembolsos para meses já pagos. Essa política garante uma experiência inicial segura para conhecer a plataforma.",
  },
  {
    pergunta: "É possível mudar de plano depois de assinar?",
    resposta: "Sim, você pode fazer upgrade do seu plano a qualquer momento pelo e-mail: falecom@valete.org.br",
  },
  {
    pergunta: "Como o Valete Plus apoia a democratização do conhecimento?",
    resposta:
      "Além de oferecer conteúdos exclusivos, parte da assinatura é direcionada para projetos que ampliam o acesso à cultura e educação, como a fundação da editora da Valete, que publica conteúdos impactantes, e o Café Valete, um espaço físico de trocas culturais e intelectuais. Com mais de 20 milhões de pessoas alcançadas mensalmente, o Valete Plus é um movimento para transformar a sociedade.",
  },
].map((perguntasFrequentes, i) => ({ ...perguntasFrequentes, id: i + 1 })) //id automatico

const Perguntas = () => {
  return (
    <div className="flex flex-col items-center justify-start py-20">
      <h1 className="font-extrabold text-[#d11303] text-6xl md:text-6xl sm:text-4xl xs:text-3xl mb-10">
        Perguntas Frequentes.
      </h1>
      <div className="w-full max-w-4xl px-4 md:px-8 lg:px-10">
        {perguntasFrequentes.map((pergunta) => (
          <CardPerguntas key={pergunta.id} pergunta={pergunta.pergunta} resposta={pergunta.resposta} />
        ))}
      </div>
    </div>
  )
}

export default Perguntas

