/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*", // Para todas as requisições que começam com '/api'
        destination: "http://127.0.0.1:8000/api/:path*", // redirecionar para o backend
        
        /*process.env.NODE_ENV === "development"
            ? "http://127.0.0.1:3001/api/:path*"
            : "/api/:path*",*/
      },
    ];
  },
};

module.exports = nextConfig;
