import { prisma } from "@/utils/prisma";
import jwt, { JsonWebTokenError } from "jsonwebtoken";
import { headers } from "next/headers";

export async function GET(req: Request, res: Response) {

  // Pega o token que esta no header da solicitação
  const headersInstance = headers();
  const authorization = headersInstance.get("authorization")?.split(" ")[1];

  // Retorna um erro se o token não for encontrado
  if (!authorization) {
    return Response.json("Não autorizado");
  }

  try {
    // Verifica se o token é válido e, em caso afirmativo, retorna o id do usuário que está armazenado no payload
    const { id } = jwt.verify(
      authorization,
      process.env.JWT_SECRET as string
    ) as { id: string };

    // Usando o id recuperado, verifica se o usuário existe no banco de dados
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    // Se o usuário não existir, retorna uma mensagem de erro
    if (!user) {
      return Response.json("Usuário não encontrado");
    }

    // Se o usuário existir, criar uma nova instância do usuário sem a propriedade senha
    const { senha, ...userSemSenha } = user;

    
    return Response.json({ userSemSenha });
  } catch (err: any | JsonWebTokenError) {
    return Response.json(err?.message || "Não autorizado");
  }
}
