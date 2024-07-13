import { NextApiResponse } from "next";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions: NextAuthOptions = {
  // Lista de provedores de autenticação que irei utilizar
  providers: [
    CredentialsProvider({
      name: "credentials",
      // Campos que irei usar ao fazer login
      credentials: {
        email: {},
        senha: {},
      },
      // API que irei usar para validar os dados (poderia ser também uma função)
      async authorize(credentials, req) {
        const response = await fetch(
          "http://localhost:3000/api/auth/users/login",
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );

        // Se a resposta à API der algum erro, captura o erro personalizado no cabeçalho
        // da resposta e envia o mesmo erro para a função que chamou o Signin (o formulário de login)
        if (!response.ok) {
          const erro = response.headers.get("erro");
          throw new Error(erro || "erro ao consultar");
        }

        const user = await response.json();

        if (user) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
    
      console.log("jwt-USER: ", user);

      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session = token.user as any;
      return session;
    },
  },

  debug: false,
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
