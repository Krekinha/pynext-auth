import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const data = await req.json();

  console.log("DATA API: ", data);

  // Verifica se o usuário existe
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  console.log("USUÁRIO API: ", user);

  // Se o usuário não existir, retorna uma mensagem de erro
  if (!user) {
    return new Response("Usuário não cadastrado",{status: 401, headers:{"erro":"Usuário não cadastrado"}});
  }
  

  // Se o usuário existir, verifica se a senha é válida
  const isValidPassword = bcrypt.compareSync(data.senha, user.senha);

  // Se a senha for inválida, retorna uma mensagem de erro
  if (!isValidPassword) {
    return new Response("Usuário ou senha inválida",{status: 401, headers:{"erro":"Usuário ou senha inválida"}});
  }

  // Se a senha for válida, gera um token JWT
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: "1d",
  });

  // Usando a desestruturação, irei criar um novo objeto "userSemSenha" excluindo a propriedade senha
  const { senha, ...userSemSenha } = user;

  // Retorna o usuário e o token JWT
  return Response.json({
    user: userSemSenha,
    token: token,
  });
}
