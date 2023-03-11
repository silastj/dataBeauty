import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default {
  // CREATE USER
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
      return res.json(`${error} No No Errouuuuuuuu Create User`)
    }    
  },

  // FIND USERS
  async findAllUsers(req, res){
    try {
      const users = await prisma.user.findMany()
      return res.json(users)      
    } catch (error) {
      return res.json(`${error} No No list Users Errrouuuuuuuuuuuu`)
    }
  },

  // FIND USER
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

  // UPDATE USER
  async updateUser(req, res){
    try {
      const {id} = req.params
      const {name, email} = req.body
      
      let user = await prisma.user.findUnique({where: {id: Number(id)}})
      if(!user) return res.json({error: "No find user"})

      user = await prisma.user.update({where: {id: Number(id)}, data:{name, email}})
      return res.json(user)
    } catch (error) {
      return res.json(`${error} No No User Errrouuuuuuuuuuuu existing`)
    }
  },

  //DELETE USER
  async deleteUser(req, res){
    try {
      const {id} = req.params

      let user = await prisma.user.findUnique({where: { id: Number(id)}})
      if(!user) return res.json({error: "No existed user registered."})

      await prisma.user.delete({where: {id: Number(id)}})
      return res.json("User delete Success")
    } catch (error) {
      return res.json(`${error} No Delete User Errrouuuuuuuuuuuu`)
    }
  }

}