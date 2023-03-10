## TUTORIAL DO PROJETO

*Iniciar o Node*
`nvm use 17.0.0`
`npm init -y`  

*instalação do typescript types tsx tsup*
`npm install -D typescript @types/node tsx tsup `

*iniciar o typescript e trocar a configuração do typescript(tsconfig.json) do target es2020*
` npx tsc --init `

*frame no node  para criar uma rota simples*
` npm i fastify `

*deixar com ambiente de desenvolvimento* 
` npm i prisma -D `
` npm i @prisma/client `

*Iniciar o prisma*
`npx prisma init`

*alterar o banco de dados*
`npx prisma migrate dev`

*Rodar o prisma*
`npx prisma studio `

*ajudar na validação do typescript*
`npm i zod `

*add script de dev no package.json dentro de script*
`"dev": "tsx src/server.ts" `

*Antes de rodar npm run dev, rodamos*
`npx prisma generate` 

*Depois*
`npm run dev`



#########################
`npm install sucrase nodemon -D `
`npx prisma migrate dev`
=> dá o nome para a migrate ex: create-table-user-post


## CREATE USER
- POST
- http://localhost:3030/user
{
  "name": "Dantas",
  "email": "dantas@dantas.com.br"
}

## FIND USERS
- GET
- http://localhost:3030/users


## FIND USER
- GET
- http://localhost:3030/user/1       OBS: O número 1 é o ID


## UDPATE USER
- PUT
- http://localhost:3030/user/1

{
  "name": "Dantas",
  "email": "dantas@dantas.com.br"
}

## DELETE USER
- DELETE
- http://localhost:3030/user/1