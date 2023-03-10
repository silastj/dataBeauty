import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  async createUser(req, res) {
    try {
      const {name, email} = req.body
      let user = await prisma.user.findUnique({ where: {email}})
    
      if(user) {
        return res.json({error: "User existing with email"})
      }
    
      user = await prisma.user.create({
        data: {
          name, 
          email,
        },
      })
    
      return res.json(user)    
    } catch (error) {
      return res.json(`${error} No No Errouuuuuuuu`)
    }    
  },

  async findAllUsers(req, res){
    try {
      const users = await prisma.user.findMany()
      return res.json(users)      
    } catch (error) {
      return res.json(`${error} No No list Users Errrouuuuuuuuuuuu`)
    }
  },

  async findUser(req, res){
    try {
      const{id} = req.params;
      const user = await prisma.user.findUnique({where: {id: Number(id)}})
      if(!user) return res.json({ error: "No existed user registered."})
      return res.json(user)
    } catch (error) {
      return res.json(`${error} No No list User Errrouuuuuuuuuuuu`)
    }
  },

  async updateUser(req, res){
    try {
      const {id} = req.params
      const {name, email} = req.body
      
      let user = await prisma.user.findUnique({where: {id: Number(id)}})
      if(!user) return res.json({error: "No find user"})

      user = await prisma.user.update({where: {id: Number(id)}, data:{name, email}})
      return res.json(user)
    } catch (error) {
      return res.json(`${error} No No User Errrouuuuuuuuuuuu`)
    }
  },

  async deleteUser(req, res){
    try {
      const {id} = req.params

      let user = await prisma.user.findUnique({where: { id: Number(id)}})
      if(!user) return res.json({error: "No existed user registered."})

      await prisma.user.delete({where: {id: Number(id)}})
      return res.json("User delete Sucess")
    } catch (error) {
      return res.json(`${error} No Delete User Errrouuuuuuuuuuuu`)
    }
  }

}