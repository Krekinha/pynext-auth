# Integração de Python com Next.js

Este projeto demonstra como integrar código Python dentro de um projeto Next.js utilizando uma API. A ideia é permitir que você utilize a flexibilidade e o poder do Python em um ambiente de front-end moderno como o Next.js.

## Como esse modelo pode ser utilizado

Para começar a usar este modelo, você pode criar um novo aplicativo Next.js usando o seguinte comando:

```bash
npx create-next-app@latest meu-app --example "https://github.com/Krekinha/pynext-auth" 
```

## Funcionalidades

- **Integração de API**: Permite que você chame scripts Python a partir do seu aplicativo Next.js.
- **Autenticação**: Inclui um exemplo de autenticação para proteger suas rotas.
- **Flexibilidade**: Utilize bibliotecas Python para processamento de dados, aprendizado de máquina, etc., diretamente do seu front-end.

## Como funciona

1. **Configuração do Servidor**: O projeto configura um servidor que pode executar scripts Python.
2. **Chamadas de API**: As rotas de API no Next.js são configuradas para interagir com o código Python.
3. **Autenticação**: Implementa um sistema de autenticação para proteger suas rotas e dados.

## Requisitos

- Node.js
- Python 3.x

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Krekinha/pynext-auth
   cd pynext-auth
   ```

2. Instale as dependências do Node.js:
   ```bash
   npm install
   ```

3. Configure o ambiente Python conforme necessário para o seu projeto.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do projeto, crie uma branch para suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a Licença MIT.
