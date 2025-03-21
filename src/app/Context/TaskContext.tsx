import { createContext } from "react";

interface FuncoesCompartilhadas {
    statusDaTastk:'pendendo'| 'em execucao'| 'concluida'
    tasks: string[]
    addTask:(task:string) => void
}
const task = createContext
