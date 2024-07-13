import "@/globals.css";
import type { Metadata } from "next";
import { auth } from "@/app/api/auth/[...nextauth]/auth";
import { redirect } from "next/navigation";
import NextAuthSessionProvider from "@/providers/SessionProvider";

/**
 * Neste arquivo irei determinar o padrão de layout para todas as rotas do grupo (menu)
 * e configurar parâmetros que serão compartilhados com essa rotas (metadados,
 * provedores, fontes, css globais, etc). Aqui também irei verificar se o usuário tem 
 * uma sessão válida para acessar as rotas desse grupo.
 * @author Krekinha
 * @version 1.0
 */


export const metadata: Metadata = {
  title: "Python Next App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Antes de renderizar páginas nesse grupo de rotas, irei verificar
  // se o usuário está logado. Se não estiver, irei redirecionar para a
  // a página de login
  const session = await auth()

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <html lang="en">
      <body >
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
