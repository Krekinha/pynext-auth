import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Antes de renderiza a página de login, irei verificar
  // se o usuário está logado. Se estiver, irei redirecionar para a
  // a página principal da aplicação
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/");
  }

  return <>{children}</>;
}
