"use client"

import { useSession } from "next-auth/react"


export default function Saudacoes() {
const { data: session, status } = useSession()
  console.log(session, status)

  return(
    <h1 className="text-3xl font-bold">Bem vindo {session?.user?.nome}!</h1>
  )
}