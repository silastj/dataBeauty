## TUTORIAL DO PROJETO

*Iniciar o Node*
`nvm use 17.0.0`
`npm init -y`  

*deixar com ambiente de desenvolvimento* 
` npm i prisma -D `
` npm i @prisma/client `

*Iniciar o prisma*
`npx prisma init`

*alterar o banco de dados*
`npx prisma migrate dev`
=> dá o nome para a migrate ex: create-table-user-post

*Rodar o prisma*
`npx prisma studio `

*add script de dev no package.json dentro de script*
`"dev": "nodemon src/server.js" `

*Antes de rodar npm run dev, rodamos*
`npx prisma generate` 

*Depois que adicionar um banco e adicionar outro banco*
npx prisma db push

*Pegar banco de dados*
npx prisma db pull

*Instalar o sucrase nodemon*
`npm install sucrase nodemon -D `

## RODAR O PROJETO EM DEV
- ` baixar o projeto `
- ` usar o node 17.0.0 `
- ` npm install `
- ` npm run dev `


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

## VERCEL
- criar na raiz arquivo
vercel.json